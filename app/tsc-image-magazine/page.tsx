'use client';

export default function TscImageMagazine() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
      {/* Hero */}
      <section style={{ padding: '100px 0 48px', textAlign: 'center' }}>
        {/* Logos */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px',
          marginBottom: '32px',
          flexWrap: 'wrap',
        }}>
          <img
            src="https://www.tsc.go.ke/images/logo3---copy.jpg"
            alt="Teachers Service Commission"
            style={{ height: '60px', objectFit: 'contain' }}
          />
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            fontWeight: 500,
            color: '#999',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            in collaboration with
          </span>
          <img
            src="/GVP logo 2.png"
            alt="Global Village Publishers"
            style={{ height: '60px', objectFit: 'contain' }}
          />
        </div>
        <div style={{
          display: 'inline-block',
          fontFamily: "'Inter', sans-serif",
          fontSize: '11px',
          fontWeight: 600,
          color: '#EC5C23',
          background: 'rgba(236, 92, 35, 0.08)',
          padding: '6px 16px',
          borderRadius: '100px',
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
          marginBottom: '24px',
        }}>
          Advertising Opportunity
        </div>
        <h1 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(36px, 5vw, 56px)',
          fontWeight: 800,
          color: '#414142',
          lineHeight: 1.1,
          letterSpacing: '-1.5px',
          marginBottom: '16px',
        }}>
          Teachers&apos; Image<br />
          <span style={{ color: '#EC5C23' }}>Distribution Network</span>
        </h1>
        <p style={{
          fontSize: '18px',
          color: 'rgba(65, 65, 66, 0.6)',
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          Kenya&apos;s most trusted education publication, reaching over 400,000 educators across 35,000+ schools nationwide.
        </p>
        <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/Teachers-Image-Vol35.pdf" download style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#EC5C23',
            color: '#fff',
            padding: '14px 28px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '14px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}>
            <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, fill: 'currentColor' }}><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
            Download Latest Edition
          </a>
          <a href="mailto:smugo@globalvillagepublishers.co.ke" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'transparent',
            color: '#414142',
            padding: '14px 28px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '14px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            border: '1px solid rgba(65, 65, 66, 0.2)',
          }}>
            Book Your Space
          </a>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '48px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {[
            { num: '400,000+', label: 'Total Reach', featured: true },
            { num: '35,000+', label: 'Schools' },
            { num: '47', label: 'Counties' },
            { num: '314', label: 'Sub-Counties' },
          ].map((s) => (
            <div key={s.label} style={{
              background: s.featured ? '#EC5C23' : '#FAFAFA',
              padding: '32px 24px',
              borderRadius: '12px',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '42px',
                fontWeight: 800,
                color: s.featured ? '#fff' : '#414142',
                lineHeight: 1,
                marginBottom: '8px',
              }}>{s.num}</div>
              <div style={{
                fontSize: '13px',
                fontWeight: 500,
                color: s.featured ? 'rgba(255,255,255,0.8)' : 'rgba(65,65,66,0.6)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Distribution Flow */}
      <section style={{ padding: '48px 0' }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '11px', fontWeight: 600, color: '#EC5C23', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>Distribution Flow</div>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#414142' }}>How We Reach Every Corner of Kenya</h2>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#FAFAFA',
          borderRadius: '16px',
          padding: '40px 32px',
          position: 'relative',
          flexWrap: 'wrap',
          gap: '24px',
        }}>
          {[
            { icon: 'M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6 3-6 3-6-3 6-3z', count: 'HQ', name: 'TSC National' },
            { icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z', count: '47', name: 'County Offices' },
            { icon: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z', count: '314', name: 'Sub-Counties' },
            { icon: 'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z', count: '35,000', name: 'Schools' },
          ].map((node) => (
            <div key={node.name} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#EC5C23', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                <svg viewBox="0 0 24 24" style={{ width: 28, height: 28, fill: '#fff' }}><path d={node.icon}/></svg>
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '24px', fontWeight: 700, color: '#414142' }}>{node.count}</div>
              <div style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(65,65,66,0.6)', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '4px' }}>{node.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Subscriptions */}
      <section style={{ padding: '0 0 48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', background: 'rgba(236, 92, 35, 0.08)', border: '1px solid rgba(236, 92, 35, 0.15)', borderRadius: '12px', padding: '24px 32px' }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '36px', fontWeight: 800, color: '#EC5C23' }}>5,000+</div>
          <div style={{ fontSize: '15px', color: '#414142' }}><strong>Direct teacher subscriptions</strong> — additional reach through our mailing list of verified educators across Kenya.</div>
        </div>
      </section>

      {/* Distribution Table */}
      <section style={{ padding: '48px 0' }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '11px', fontWeight: 600, color: '#EC5C23', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>Detailed Breakdown</div>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#414142' }}>Distribution Per County</h2>
          <p style={{ color: 'rgba(65,65,66,0.6)', marginTop: '8px' }}>35th Edition — Verified county-by-county allocation</p>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: '#1a2744', color: '#fff' }}>
                <th style={{ padding: '12px 16px', textAlign: 'left' }}>#</th>
                <th style={{ padding: '12px 16px', textAlign: 'left' }}>County</th>
                <th style={{ padding: '12px 16px', textAlign: 'right' }}>Copies</th>
                <th style={{ padding: '12px 16px', textAlign: 'right' }}>Compliment</th>
                <th style={{ padding: '12px 16px', textAlign: 'right' }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {[
                [1,'Baringo',713,5,718],[2,'Bomet',840,6,846],[3,'Bungoma',1079,8,1087],[4,'Busia',717,5,722],[5,'Garissa',238,2,240],
                [6,'Elgeyo Marakwet',359,3,362],[7,'Embu',870,5,875],[8,'Homabay',840,6,846],[9,'Isiolo',238,2,240],[10,'Kajiado',479,4,483],
                [11,'Kakamega',1320,9,1329],[12,'Kericho',840,6,846],[13,'Kiambu',1320,9,1329],[14,'Kilifi',720,5,725],[15,'Kirinyaga',695,5,700],
                [16,'Kisii',1200,8,1208],[17,'Kisumu',960,6,966],[18,'Kitui',1490,10,1500],[19,'Kwale',479,4,483],[20,'Laikipia',720,5,725],
                [21,'Lamu',230,1,231],[22,'Machakos',1562,10,1572],[23,'Makueni',1320,9,1329],[24,'Mandera',238,2,240],[25,'Marsabit',238,2,240],
                [26,'Meru',840,6,846],[27,'Mombasa',479,4,483],[28,'Migori',495,5,500],[29,'Muranga',994,6,1000],[30,'Nairobi',700,5,705],
                [31,'Nakuru',1180,8,1188],[32,'Nandi',835,5,840],[33,'Narok',600,4,604],[34,'Nyamira',600,4,604],[35,'Nyandarua',1093,7,1100],
                [36,'Nyeri',1192,8,1200],[37,'Samburu',360,2,362],[38,'Siaya',994,6,1000],[39,'Taita Taveta',480,3,483],[40,'Tana River',238,2,240],
                [41,'Tharaka Nithi',600,4,604],[42,'Trans Nzoia',496,4,500],[43,'Turkana',238,2,240],[44,'Uasin Gishu',994,6,1000],
                [45,'Vihiga',600,4,604],[46,'Wajir',238,2,240],[47,'West Pokot',462,3,465],['','TSC HQS',335,15,350],
              ].map(([num, county, copies, comp, total], i) => (
                <tr key={i} style={{ borderBottom: '1px solid #eee', background: i % 2 === 1 ? '#fafafa' : undefined }}>
                  <td style={{ padding: '10px 16px' }}>{num}</td>
                  <td style={{ padding: '10px 16px' }}>{county}</td>
                  <td style={{ padding: '10px 16px', textAlign: 'right' }}>{copies.toLocaleString()}</td>
                  <td style={{ padding: '10px 16px', textAlign: 'right' }}>{comp}</td>
                  <td style={{ padding: '10px 16px', textAlign: 'right', fontWeight: 600 }}>{total.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr style={{ background: '#fff3e6', fontWeight: 700 }}>
                <td style={{ padding: '12px 16px' }}></td>
                <td style={{ padding: '12px 16px' }}>TOTAL</td>
                <td style={{ padding: '12px 16px', textAlign: 'right' }}>34,750</td>
                <td style={{ padding: '12px 16px', textAlign: 'right' }}>250</td>
                <td style={{ padding: '12px 16px', textAlign: 'right', color: '#EC5C23', fontSize: '16px' }}>35,000</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* Rates */}
      <section style={{ padding: '48px 0' }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '11px', fontWeight: 600, color: '#EC5C23', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>Advertising Rates</div>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#414142' }}>Investment Options</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          <div style={{ gridColumn: 'span 3', background: '#EC5C23', borderRadius: '12px', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Centre Spread</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '1px' }}>VAT-Exempt</div>
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '28px', fontWeight: 800, color: '#fff' }}><span style={{ fontSize: '14px', opacity: 0.7 }}>KES </span>500,000</div>
          </div>
          {[
            { pos: 'Cover Pages', price: '450,000' },
            { pos: 'Full Page', price: '300,000' },
            { pos: 'Half Page', price: '200,000' },
          ].map((r) => (
            <div key={r.pos} style={{ background: '#fff', border: '1px solid rgba(65,65,66,0.1)', borderRadius: '12px', padding: '24px' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(65,65,66,0.6)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>{r.pos}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '28px', fontWeight: 800, color: '#EC5C23' }}><span style={{ fontSize: '14px', opacity: 0.7 }}>KES </span>{r.price}</div>
              <div style={{ fontSize: '11px', color: 'rgba(65,65,66,0.6)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>VAT-Exempt</div>
            </div>
          ))}
        </div>
      </section>

      {/* Specs */}
      <section style={{ padding: '48px 0' }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '11px', fontWeight: 600, color: '#EC5C23', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>Creative Specifications</div>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#414142' }}>Ad & Content Guidelines</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {[
            { title: 'Centre Spread', icon: 'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z', details: ['Dimensions: 42.6 cm x 29.7 cm (two pages) + 0.3 cm bleed','Bleed: 43.2 cm x 30.3 cm total','Safe area: 1 cm from trim edge','Resolution: 300 DPI minimum','Format: PDF/X-1a, TIFF, or JPEG','Colour: CMYK'], note: 'Maximum visibility across two facing pages.' },
            { title: 'Cover Pages', icon: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z', details: ['Dimensions: 21 cm x 29.7 cm + 0.3 cm bleed','Bleed: 21.6 cm x 30.3 cm','Front: Full page, no text on masthead','Back: Full page with barcode area','Resolution: 300 DPI minimum','Format: PDF/X-1a or TIFF'], note: 'Premium placement for highest reader attention.' },
            { title: 'Full Page Ad', icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z', details: ['Dimensions: 21 cm x 29.7 cm + 0.3 cm bleed','Bleed: 21.6 cm x 30.3 cm','Safe area: 19.6 cm x 28.1 cm','Resolution: 300 DPI minimum','Format: PDF/X-1a, TIFF, or JPEG','Colour: CMYK'], note: 'Premium positions for maximum impact.' },
            { title: 'Half Page Ad', icon: 'M3 5v14h18V5H3zm4 2v4H5V7h2zm-2 6h2v4H5v-4zm14 4h-8v-4h8v4zm0-6h-2V7h2v4z', details: ['Horizontal: 21 cm x 14.5 cm','Vertical: 10.2 cm x 29.7 cm','Bleed: 0.3 cm on trimmed edges','Resolution: 300 DPI minimum','Format: PDF/X-1a, TIFF, or JPEG','Colour: CMYK'], note: 'Cost-effective consistent brand presence.' },
            { title: 'Article / Editorial', icon: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z', details: ['Word count: 600 - 700 words','Photos: 1 high-res (min 1 MB, 300 DPI)','Format: JPEG or TIFF','Caption: Include photo credit','Submit: .docx or Google Docs link','Tone: Professional, education-focused'], note: 'Thought leadership positioning.' },
          ].map((spec) => (
            <div key={spec.title} style={{ background: '#FAFAFA', border: '1px solid rgba(65,65,66,0.1)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: 36, height: 36, background: 'rgba(236,92,35,0.08)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: '#EC5C23' }}><path d={spec.icon}/></svg>
                </div>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: '#414142' }}>{spec.title}</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {spec.details.map((d) => (
                  <li key={d} style={{ display: 'flex', gap: '8px', marginBottom: '8px', fontSize: '13px', color: '#414142' }}>
                    <span style={{ background: '#EC5C23', color: '#fff', padding: '2px 6px', borderRadius: '3px', fontWeight: 600, fontSize: '13px', whiteSpace: 'nowrap' }}>{d.split(':')[0]}:</span>
                    {d.split(':').slice(1).join(':')}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '13px', color: 'rgba(65,65,66,0.6)', fontStyle: 'italic', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(65,65,66,0.1)' }}>{spec.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deadline */}
      <section style={{ padding: '0 0 48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#414142', borderRadius: '12px', padding: '24px 32px', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '2px' }}>Booking Deadline</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '20px', fontWeight: 700, color: '#fff' }}>15 July 2026</div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '48px 0', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: '24px', fontWeight: 700, color: '#414142', marginBottom: '16px' }}>Ready to Reach Kenya&apos;s Educators?</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', marginBottom: '24px', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 600, color: '#414142', marginBottom: '2px' }}>Simon Mugo</div>
            <div style={{ fontSize: '14px', color: 'rgba(65,65,66,0.6)' }}>0722 787345 / 0765 163 386</div>
            <div style={{ fontSize: '14px', color: '#EC5C23' }}>smugo@globalvillagepublishers.co.ke</div>
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 600, color: '#414142', marginBottom: '2px' }}>Matata Johnson</div>
            <div style={{ fontSize: '14px', color: 'rgba(65,65,66,0.6)' }}>0740 824474</div>
            <div style={{ fontSize: '14px', color: '#EC5C23' }}>matata@globalvillagepublishers.co.ke</div>
          </div>
        </div>
        <a href="mailto:smugo@globalvillagepublishers.co.ke" style={{
          display: 'inline-block',
          fontFamily: "'Inter', sans-serif",
          fontSize: '14px',
          fontWeight: 600,
          color: '#fff',
          background: '#EC5C23',
          padding: '14px 32px',
          borderRadius: '8px',
          textDecoration: 'none',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}>Get in Touch</a>
      </section>
    </div>
  );
}
