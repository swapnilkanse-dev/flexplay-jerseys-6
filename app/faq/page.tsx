'use client'
import { useState } from 'react'
import { siteConfig } from '@/config/site'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FAQ_ITEMS } from '@/constants/faq'

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(null)

  const faqItems = FAQ_ITEMS.map(item => ({
    ...item,
    question: item.question.replace('{SITE_NAME}', siteConfig.displayName),
    answer: item.answer.replace(/{SITE_NAME}/g, siteConfig.displayName)
  }))

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
        <h1 style={{ fontSize: 32, fontWeight: 700, color: '#111', margin: '0 0 40px', textAlign: 'center' }} className="sm:text-4xl">
          FAQ
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {faqItems.map((item, index) => (
            <div key={item.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                style={{
                  width: '100%',
                  padding: '20px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: 16,
                  textAlign: 'left',
                  transition: 'background-color 0.15s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#fafafa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 600, color: '#111', flex: 1 }}>
                  {index + 1}. {item.question}
                </span>
                <span style={{ fontSize: 20, color: '#888', flexShrink: 0, marginTop: 2 }}>
                  {openId === item.id ? '−' : '+'}
                </span>
              </button>

              {openId === item.id && (
                <div style={{ padding: '0 20px 20px', color: '#555', fontSize: 15, lineHeight: 1.7 }}>
                  {item.answer.split('\n').map((line, i) => (
                    <p key={i} style={{ margin: line.trim() === '' ? '8px 0' : '0 0 12px' }}>
                      {line.trim() === '' ? '' : line}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
