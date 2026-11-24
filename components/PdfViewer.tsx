'use client';

import { useEffect, useRef, useState } from 'react';

interface PdfViewerProps {
  src: string;
  title?: string;
  initialPage?: number;
  onPageChange?: (page: number) => void;
}

interface Viewport {
  width: number;
  height: number;
}

interface PdfPageProxy {
  getViewport: (o: { scale: number }) => Viewport;
  render: (o: { canvasContext: CanvasRenderingContext2D; viewport: Viewport }) => {
    promise: Promise<void>;
  };
  getTextContent: () => Promise<unknown>;
  cleanup?: () => void;
}

interface PdfDoc {
  numPages: number;
  getPage: (n: number) => Promise<PdfPageProxy>;
  destroy: () => void;
}

interface TextLayerClass {
  new (opts: { textContentSource: unknown; container: HTMLElement; viewport: unknown }): {
    render: () => Promise<void>;
  };
}

function PdfPage({
  doc,
  pageNumber,
  textLayerClass,
  aspect,
}: {
  doc: PdfDoc;
  pageNumber: number;
  textLayerClass: TextLayerClass | null;
  aspect: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const surfaceRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textLayerRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<'pending' | 'rendering' | 'done' | 'error'>('pending');
  const startedRef = useRef(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const surface = surfaceRef.current;
    const canvas = canvasRef.current;
    const textLayerDiv = textLayerRef.current;
    if (!wrap || !surface || !canvas || !textLayerDiv) return;

    let disposed = false;
    let observer: IntersectionObserver | null = null;

    const render = async () => {
      if (startedRef.current || disposed) return;
      startedRef.current = true;
      setState('rendering');
      try {
        const page = await doc.getPage(pageNumber);
        const base = page.getViewport({ scale: 1 });
        const containerWidth = wrap.clientWidth || 820;
        const scale = Math.min(containerWidth / base.width, 2.5);
        const viewport = page.getViewport({ scale });
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          setState('error');
          return;
        }
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.floor(viewport.width * dpr);
        canvas.height = Math.floor(viewport.height * dpr);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;
        surface.style.width = `${Math.floor(viewport.width)}px`;
        surface.style.height = `${Math.floor(viewport.height)}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        await page.render({ canvasContext: ctx, viewport }).promise;

        if (textLayerClass && !disposed) {
          try {
            textLayerDiv.style.setProperty('--total-scale-factor', String(scale));
            textLayerDiv.style.setProperty('--scale-factor', String(scale));
            textLayerDiv.style.setProperty('--scale-round-x', '1px');
            textLayerDiv.style.setProperty('--scale-round-y', '1px');
            const textContent = await page.getTextContent();
            const textLayer = new textLayerClass({
              textContentSource: textContent,
              container: textLayerDiv,
              viewport,
            });
            await textLayer.render();
          } catch {
            /* text layer is best-effort; the page still renders */
          }
        }

        if (page.cleanup) page.cleanup();
        if (!disposed) setState('done');
      } catch {
        if (!disposed) setState('error');
      }
    };

    if (typeof IntersectionObserver === 'undefined') {
      render();
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            render();
            observer?.disconnect();
          }
        },
        { rootMargin: '800px 0px' },
      );
      observer.observe(canvas);
    }

    return () => {
      disposed = true;
      observer?.disconnect();
    };
  }, [doc, pageNumber, textLayerClass]);

  return (
    <div
      ref={wrapRef}
      className="pdf-page"
      data-page-number={pageNumber}
      style={{ aspectRatio: String(aspect || 0.707) }}
    >
      <div ref={surfaceRef} className="pdf-page-surface">
        <canvas ref={canvasRef} className="pdf-page-canvas" />
        <div ref={textLayerRef} className="pdf-text-layer" />
      </div>
      {state !== 'done' && (
        <div className="pdf-page-status">
          <div className="pdf-spinner" />
          <span>
            {state === 'error' ? 'Failed to load page' : `Loading page ${pageNumber}…`}
          </span>
        </div>
      )}
    </div>
  );
}

export default function PdfViewer({ src, title, initialPage, onPageChange }: PdfViewerProps) {
  const [doc, setDoc] = useState<PdfDoc | null>(null);
  const [numPages, setNumPages] = useState(0);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [error, setError] = useState<string | null>(null);
  const [aspects, setAspects] = useState<number[]>([]);
  const textLayerClassRef = useRef<TextLayerClass | null>(null);
  const pagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let pdfDoc: PdfDoc | null = null;

    (async () => {
      setStatus('loading');
      setError(null);
      setDoc(null);
      setNumPages(0);
      try {
        const pdfjs = (await import('pdfjs-dist')) as unknown as {
          version: string;
          GlobalWorkerOptions: { workerSrc: string };
          TextLayer: TextLayerClass;
          getDocument: (opts: { url: string }) => { promise: Promise<PdfDoc> };
        };
        pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
        pdfDoc = await pdfjs.getDocument({ url: src }).promise;
        if (cancelled) {
          pdfDoc.destroy();
          return;
        }
        textLayerClassRef.current = pdfjs.TextLayer;
        // Each page can have its own size (portrait pages vs. landscape spreads),
        // so record a per-page aspect ratio to reserve the correct height. This
        // keeps the book flowing continuously with no empty gaps between pages.
        const pageAspects: number[] = [];
        for (let n = 1; n <= pdfDoc.numPages; n++) {
          try {
            const p = await pdfDoc.getPage(n);
            const vp = p.getViewport({ scale: 1 });
            pageAspects[n - 1] = vp.height > 0 ? vp.width / vp.height : 0.707;
          } catch {
            pageAspects[n - 1] = 0.707;
          }
        }
        setAspects(pageAspects);
        setDoc(pdfDoc);
        setNumPages(pdfDoc.numPages);
        setStatus('ready');
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : 'Failed to load document');
          setStatus('error');
        }
      }
    })();

    return () => {
      cancelled = true;
      if (pdfDoc) {
        try {
          pdfDoc.destroy();
        } catch {
          /* ignore */
        }
      }
    };
  }, [src]);

  // Scroll to the requested page once the document is ready.
  useEffect(() => {
    if (status !== 'ready' || !initialPage) return;
    const el = pagesRef.current?.querySelector(`[data-page-number="${initialPage}"]`);
    if (el) el.scrollIntoView({ block: 'start' });
  }, [status, initialPage]);

  // Track the current page as the reader scrolls.
  useEffect(() => {
    if (status !== 'ready') return;
    const compute = () => {
      const pages = pagesRef.current?.querySelectorAll('[data-page-number]');
      if (!pages || pages.length === 0) return;
      let current = 1;
      const threshold = 150;
      pages.forEach((p) => {
        const el = p as HTMLElement;
        if (el.getBoundingClientRect().top <= threshold) {
          current = Number(el.dataset.pageNumber || 1);
        }
      });
      onPageChange?.(current);
    };
    compute();
    window.addEventListener('scroll', compute, { passive: true });
    window.addEventListener('resize', compute, { passive: true });
    return () => {
      window.removeEventListener('scroll', compute);
      window.removeEventListener('resize', compute);
    };
  }, [status, onPageChange]);

  return (
    <div className="pdf-viewer" onContextMenu={(e) => e.preventDefault()}>
      {status === 'loading' && (
        <div className="pdf-state">
          <div className="pdf-spinner" />
          <span>Preparing publication…</span>
        </div>
      )}

      {status === 'error' && (
        <div className="pdf-state pdf-state-error">
          <span>We couldn&apos;t load this publication.</span>
          <span className="pdf-state-detail">{error}</span>
        </div>
      )}

      {status === 'ready' && doc && (
        <>
          <div className="pdf-viewer-toolbar">
            <span className="pdf-viewer-title">{title || 'Publication'}</span>
            <span className="pdf-viewer-count">{numPages} pages</span>
          </div>
          <div className="pdf-viewer-pages" ref={pagesRef} onDragStart={(e) => e.preventDefault()}>
            {Array.from({ length: numPages }, (_, i) => (
              <PdfPage
                key={i + 1}
                doc={doc}
                pageNumber={i + 1}
                textLayerClass={textLayerClassRef.current}
                aspect={aspects[i] || 0.707}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
