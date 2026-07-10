'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { siteConfig } from '@/config/site'

export default function RefundPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'white' }}>
      <Navbar />

      <div style={{ paddingTop: 56, background: '#fafafa', borderBottom: '1px solid #f0f0f0' }}>
        <div className="px-4 sm:px-6 md:px-8" style={{ maxWidth: 1200, margin: '0 auto', padding: '12px 0', display: 'flex', alignItems: 'center' }}>
          <a href="/" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#111', fontSize: 14, padding: 0, display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <span style={{ fontSize: 18 }}>←</span>
            <span style={{ fontWeight: 700 }}>Back</span>
          </a>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10" style={{ maxWidth: 900, margin: '0 auto' }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, color: '#111', margin: '0 0 24px', textAlign: 'center', fontStyle: 'italic' }} className="sm:text-4xl">
          Refund policy
        </h1>

        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111', margin: '0 0 24px', textAlign: 'center' }}>
          Return & Refund Policy
        </h2>

        <div style={{ color: '#333', fontSize: 15, lineHeight: 1.8 }}>
          {/* Return Policy Section */}
          <div style={{ marginBottom: 32 }}>
            <p style={{ marginBottom: 16, fontWeight: 600 }}>
              We offer a 5-day return policy from the date of delivery.
            </p>
            <ul style={{ marginLeft: 0, paddingLeft: 20, marginBottom: 0 }}>
              <li style={{ marginBottom: 12 }}>Sale or offer products are not eligible for return or refund.</li>
              <li style={{ marginBottom: 12 }}>Returns are accepted only for damaged or defective products.</li>
              <li style={{ marginBottom: 12 }}>A 360-degree unboxing video is mandatory to request a return.</li>
              <li style={{ marginBottom: 12 }}>Items must be unused, with original tags and packaging, and proof of purchase.</li>
              <li style={{ marginBottom: 0 }}>Returns for change of size is not approved.</li>
            </ul>
          </div>

          {/* Refunds Section */}
          <div style={{ marginBottom: 32 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111', margin: '0 0 16px' }}>
              Refunds
            </h3>

            <p style={{ margin: '0 0 12px' }}>
              Refunds are processed only after the product is returned and inspected.
            </p>
            <p style={{ margin: '0 0 12px' }}>
              Once approved, refunds will be issued to the original payment method within 10 business days.
            </p>
            <p style={{ margin: 0 }}>
              For refund-related queries, contact <a href={`mailto:${siteConfig.email}`} style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 600 }}>{siteConfig.email}</a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
