'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { siteConfig } from '@/config/site'

export default function ShippingPage() {
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
          Shipping policy
        </h1>

        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111', margin: '0 0 24px', textAlign: 'center' }}>
          Shipping Policy
        </h2>

        <div style={{ color: '#333', fontSize: 15, lineHeight: 1.8 }}>
          {/* Shipping Policy Section */}
          <div style={{ marginBottom: 32 }}>
            <p style={{ marginBottom: 0 }}>
              Orders are dispatched within 24–48 hours of order confirmation. Once shipped, the tracking ID will be shared via email or WhatsApp.
            </p>
          </div>

          {/* Delivery Timeline Section */}
          <div style={{ marginBottom: 32 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111', margin: '0 0 16px' }}>
              Delivery Timeline
            </h3>

            {/* Within Kerala */}
            <div style={{ marginBottom: 20 }}>
              <p style={{ margin: '0 0 12px', fontWeight: 600, color: '#111' }}>• Within Kerala</p>
              <ul style={{ marginLeft: 20, marginBottom: 0, paddingLeft: 10 }}>
                <li style={{ marginBottom: 8 }}>DTDC: 3–4 working days</li>
                <li style={{ marginBottom: 0 }}>India Post: 5–7 working days</li>
              </ul>
            </div>

            {/* Outside Kerala */}
            <div style={{ marginBottom: 20 }}>
              <p style={{ margin: '0 0 12px', fontWeight: 600, color: '#111' }}>• Outside Kerala</p>
              <ul style={{ marginLeft: 20, marginBottom: 0, paddingLeft: 10 }}>
                <li style={{ marginBottom: 0 }}>India Post: 7–14 working days</li>
              </ul>
            </div>

            {/* Additional Info */}
            <p style={{ margin: '20px 0 0', color: '#555' }}>
              Orders are not shipped or delivered on weekends or public holidays. During high order volumes, delivery may take slightly longer.
            </p>
            <p style={{ margin: '12px 0 0', color: '#555' }}>
              Delivery timelines are estimates and may vary due to courier or external factors.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
