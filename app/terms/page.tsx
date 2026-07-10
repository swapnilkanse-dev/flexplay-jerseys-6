'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { siteConfig } from '@/config/site'

export default function TermsPage() {
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
        <h1 style={{ fontSize: 32, fontWeight: 700, color: '#111', margin: '0 0 24px', textAlign: 'center' }} className="sm:text-4xl">
          Terms of service
        </h1>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#111', margin: '0 0 24px', textAlign: 'center', fontStyle: 'italic' }}>
          Terms & Conditions
        </h2>

        <div style={{ color: '#333', fontSize: 15, lineHeight: 1.8, borderBottom: '1px solid #ddd', paddingBottom: 24, marginBottom: 32 }}>
          <p style={{ marginBottom: 0 }}>
            Welcome to <strong>{siteConfig.displayName}</strong>. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our services.
          </p>
        </div>

        <div style={{ color: '#333', fontSize: 15, lineHeight: 1.8 }}>
          {/* Section 1 */}
          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111', margin: '0 0 16px', fontStyle: 'italic' }}>
            1. General
          </h3>
          <p style={{ marginBottom: 32, borderBottom: '1px solid #eee', paddingBottom: 24 }}>
            These Terms and Conditions govern your use of our website, purchase of products, and any related services provided by <strong>{siteConfig.displayName}</strong>.
          </p>

          {/* Section 2 */}
          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111', margin: '0 0 16px', fontStyle: 'italic' }}>
            2. Products & Services
          </h3>
          <ul style={{ marginBottom: 32, paddingLeft: 20, borderBottom: '1px solid #eee', paddingBottom: 24 }}>
            <li style={{ marginBottom: 12 }}>All products displayed on our website are subject to availability.</li>
            <li style={{ marginBottom: 0 }}>We reserve the right to modify, discontinue, or update product details and prices without prior notice.</li>
          </ul>

          {/* Section 3 */}
          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111', margin: '0 0 16px', fontStyle: 'italic' }}>
            3. Orders & Payments
          </h3>
          <ul style={{ marginBottom: 32, paddingLeft: 20, borderBottom: '1px solid #eee', paddingBottom: 24 }}>
            <li style={{ marginBottom: 12 }}>By placing an order, you confirm that all details provided by you are accurate and complete.</li>
            <li style={{ marginBottom: 0 }}>We reserve the right to cancel any order if the payment is not received or if there is any issue with the transaction.</li>
          </ul>

          {/* Section 4 */}
          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111', margin: '0 0 16px', fontStyle: 'italic' }}>
            4. Shipping & Delivery
          </h3>
          <ul style={{ marginBottom: 32, paddingLeft: 20, borderBottom: '1px solid #eee', paddingBottom: 24 }}>
            <li style={{ marginBottom: 12 }}>Orders will be shipped to the address provided during checkout.</li>
            <li style={{ marginBottom: 0 }}>Delivery times may vary depending on location, courier partner, and unforeseen circumstances.</li>
          </ul>

          {/* Section 5 */}
          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111', margin: '0 0 16px', fontStyle: 'italic' }}>
            5. Limitation of Liability
          </h3>
          <p style={{ marginBottom: 32, borderBottom: '1px solid #eee', paddingBottom: 24 }}>
            <strong>{siteConfig.displayName}</strong> will not be liable for any indirect, incidental, or consequential damages arising out of the use of our website or products.
          </p>

          {/* Section 6 */}
          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111', margin: '0 0 16px', fontStyle: 'italic' }}>
            6. Contact Us
          </h3>
          <p style={{ marginBottom: 16 }}>If you have any queries regarding these Terms & Conditions, please reach out to us at:</p>
          
          <div style={{ background: '#f9f9f9', padding: 16, borderRadius: 8 }}>
            <p style={{ margin: '0 0 12px', fontWeight: 700 }}>{siteConfig.displayName}</p>
            <p style={{ margin: '0 0 8px' }}>📞 Call us on: {siteConfig.phoneNumbers[0]} ({siteConfig.hours})</p>
            <p style={{ margin: 0 }}>📧 Email us at: {siteConfig.email}</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

