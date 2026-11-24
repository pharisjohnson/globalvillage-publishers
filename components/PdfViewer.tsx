'use client';

import { useEffect, useRef, useState } from 'react';

interface PdfViewerProps {
  src: string;
  title?: string;
}

interface PdfDoc {
  numPages: number;
  getPage: (n: number) => Promise<unknown>;
  destroy: () => void;
}

function PdfPage({ doc, pageNumber }: { doc: PdfDoc; pageNumber: number }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [state, setState] = useState<'pending' | 'rendering' | 'done' | 'error'>('pending');
  const startedRef = useRef(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    let disposed = false;
    let observer: IntersectionObserver | null = null;

    const render = async () => {
      if (startedRef.current || disposed) return;
      startedRef.current = true;
      setState('rendering');
      try {
        const page = (await doc.getPage(pageNumber)) as {
          getViewport: (opts: { scale: number }) => { width: number; height: number };
          render: (opts: { canvasContext: CanvasRenderingContext2D; viewport: unknown }) => { promise: Promise<void> };
          cleanup?: () => void;
        };
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
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        await page.render({ canvasContext: ctx, viewport }).promise;
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
  }, [doc, pageNumber]);

  return (
    <div ref={wrapRef} className="pdf-page">
      <canvas ref={canvasRef} className="pdf-page-canvas" />
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

export default function PdfViewer({ src, title }: PdfViewerProps) {
  const [doc, setDoc] = useState<PdfDoc | null>(null);
  const [numPages, setNumPages] = useState(0);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [error, setError] = useState<string | null>(null);

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
          getDocument: (opts: { url: string }) => { promise: Promise<PdfDoc> };
        };
        pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
        pdfDoc = await pdfjs.getDocument({ url: src }).promise;
        if (cancelled) {
          pdfDoc.destroy();
          return;
        }
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
          <div className="pdf-viewer-pages" onDragStart={(e) => e.preventDefault()}>
            {Array.from({ length: numPages }, (_, i) => (
              <PdfPage key={i + 1} doc={doc} pageNumber={i + 1} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
