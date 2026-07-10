'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { siteConfig } from '@/config/site'

export default function PrivacyPage() {
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
        <h1 style={{ fontSize: 32, fontWeight: 700, color: '#111', margin: '0 0 8px', textAlign: 'center' }} className="sm:text-4xl">
          Privacy Policy
        </h1>

        <p style={{ fontSize: 14, color: '#888', textAlign: 'center', margin: '0 0 32px' }}>
          Last Updated: July 10, 2026
        </p>

        <div style={{ color: '#333', fontSize: 15, lineHeight: 1.8 }}>
          <p style={{ marginBottom: 24 }}>
            Welcome to {siteConfig.displayName}. Your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website or place an order with us.
          </p>

          <p style={{ marginBottom: 32 }}>
            By using our website, you agree to the practices described in this Privacy Policy.
          </p>

          {/* Section 1 */}
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', margin: '32px 0 16px' }}>1. Business Information</h2>
          <div style={{ background: '#f9f9f9', padding: 16, borderRadius: 8, marginBottom: 24 }}>
            <p style={{ margin: '0 0 8px' }}><strong>Business Name:</strong> {siteConfig.displayName}</p>
            <p style={{ margin: '0 0 8px' }}><strong>Website:</strong> {siteConfig.baseUrl}</p>
            <p style={{ margin: '0 0 8px' }}><strong>Email:</strong> {siteConfig.email}</p>
            <p style={{ margin: '0 0 8px' }}><strong>Customer Support:</strong> {siteConfig.phoneNumbers[0]}</p>
            <p style={{ margin: 0 }}><strong>Business Address:</strong> Hadapsar, Pune 411001, Maharashtra, India</p>
          </div>

          {/* Section 2 */}
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', margin: '32px 0 16px' }}>2. Information We Collect</h2>
          <p style={{ marginBottom: 12 }}>When you place an order or contact us, we may collect the following information:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>Full Name</li>
            <li style={{ marginBottom: 8 }}>Mobile Number</li>
            <li style={{ marginBottom: 8 }}>Shipping Address</li>
            <li style={{ marginBottom: 8 }}>PIN Code</li>
            <li style={{ marginBottom: 8 }}>Payment Information (UPI payment details required to verify your order)</li>
          </ul>
          <p style={{ marginBottom: 24 }}>We only collect information that is necessary to process and deliver your order.</p>

          {/* Section 3 */}
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', margin: '32px 0 16px' }}>3. How We Use Your Information</h2>
          <p style={{ marginBottom: 12 }}>Your information is used to:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>Process and confirm your orders</li>
            <li style={{ marginBottom: 8 }}>Deliver your products</li>
            <li style={{ marginBottom: 8 }}>Provide customer support</li>
            <li style={{ marginBottom: 8 }}>Respond to your queries</li>
            <li style={{ marginBottom: 8 }}>Communicate order updates through WhatsApp or other appropriate channels</li>
            <li style={{ marginBottom: 8 }}>Improve our services and customer experience</li>
            <li style={{ marginBottom: 8 }}>Comply with applicable legal obligations</li>
          </ul>
          <p style={{ marginBottom: 24 }}>We do not sell or rent your personal information to third parties.</p>

          {/* Section 4 */}
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', margin: '32px 0 16px' }}>4. Order Confirmation</h2>
          <p style={{ marginBottom: 24 }}>Orders are confirmed through WhatsApp after payment verification. Customers may cancel an order at any time before completing the payment.</p>

          {/* Section 5 */}
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', margin: '32px 0 16px' }}>5. Payments</h2>
          <p style={{ marginBottom: 12 }}>Currently, {siteConfig.displayName} accepts payments only through UPI.</p>
          <p style={{ marginBottom: 12 }}>Cash on Delivery (COD) is not available at this time but may be introduced in the future.</p>
          <p style={{ marginBottom: 24 }}>We do not store your complete payment credentials or confidential financial information on our website.</p>

          {/* Section 6 */}
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', margin: '32px 0 16px' }}>6. Shipping Information</h2>
          <p style={{ marginBottom: 12 }}>We currently ship only within India.</p>
          <p style={{ marginBottom: 12 }}>Our delivery partner is India Post.</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>Processing Time: Approximately 24 to 48 hours.</li>
            <li style={{ marginBottom: 8 }}>Estimated Delivery: Varies based on location</li>
          </ul>
          <p style={{ marginBottom: 24 }}>Many orders are delivered earlier than the estimated delivery period. Delivery timelines are estimates and may vary due to courier operations, weather conditions, public holidays, or other unforeseen circumstances. Shipping is free on all orders.</p>

          {/* Section 7 */}
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', margin: '32px 0 16px' }}>7. Product Images</h2>
          <p style={{ marginBottom: 12 }}>We strive to display actual product images whenever possible.</p>
          <p style={{ marginBottom: 24 }}>To comply with copyright guidelines, certain brand logos or trademarks may be hidden or blurred on the website images. The actual jersey delivered to the customer will include the appropriate logos and branding as applicable.</p>

          {/* Section 8 */}
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', margin: '32px 0 16px' }}>8. Size Information</h2>
          <p style={{ marginBottom: 12 }}>Customers are encouraged to review the Size Chart before placing an order.</p>
          <p style={{ marginBottom: 24 }}><strong>Fit Tip:</strong> For a more comfortable fit, we recommend choosing one size larger than your usual size.</p>

          {/* Section 9 */}
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', margin: '32px 0 16px' }}>9. Data Security</h2>
          <p style={{ marginBottom: 24 }}>We take reasonable measures to protect your personal information against unauthorized access, misuse, alteration, or disclosure. While we make every effort to safeguard your information, no method of electronic storage or internet transmission can be guaranteed to be completely secure.</p>

          {/* Section 10 */}
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', margin: '32px 0 16px' }}>10. Third-Party Services</h2>
          <p style={{ marginBottom: 12 }}>We may use trusted third-party service providers to operate our business, including:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>India Post for shipping and delivery.</li>
            <li style={{ marginBottom: 8 }}>UPI payment services for payment processing.</li>
          </ul>
          <p style={{ marginBottom: 24 }}>These service providers receive only the information necessary to perform their services.</p>

          {/* Section 11 */}
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', margin: '32px 0 16px' }}>11. Cookies</h2>
          <p style={{ marginBottom: 24 }}>Our website may use basic cookies or similar technologies to improve website functionality and enhance your browsing experience. You may disable cookies through your browser settings if you prefer.</p>

          {/* Section 12 */}
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', margin: '32px 0 16px' }}>12. Children's Privacy</h2>
          <p style={{ marginBottom: 24 }}>Our website is intended for general audiences. We do not knowingly collect personal information from children without appropriate parental or guardian involvement where required.</p>

          {/* Section 13 */}
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', margin: '32px 0 16px' }}>13. Changes to This Privacy Policy</h2>
          <p style={{ marginBottom: 24 }}>{siteConfig.displayName} reserves the right to modify or update this Privacy Policy at any time. Any changes will become effective immediately upon being published on this page. We encourage users to review this page periodically for updates.</p>

          {/* Section 14 */}
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', margin: '32px 0 16px' }}>14. Contact Us</h2>
          <p style={{ marginBottom: 16 }}>If you have any questions regarding this Privacy Policy or how your information is handled, you may contact us:</p>
          <div style={{ background: '#f9f9f9', padding: 16, borderRadius: 8 }}>
            <p style={{ margin: '0 0 8px' }}><strong>{siteConfig.displayName}</strong></p>
            <p style={{ margin: '0 0 8px' }}><strong>Email:</strong> {siteConfig.email}</p>
            <p style={{ margin: '0 0 8px' }}><strong>Phone:</strong> {siteConfig.phoneNumbers[0]}</p>
            <p style={{ margin: 0 }}><strong>Address:</strong> Hadapsar, Pune 411001, Maharashtra, India</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

