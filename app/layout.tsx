import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    icon: siteConfig.logoPath,
  },
  openGraph: {
    title: siteConfig.openGraphTitle,
    description: siteConfig.openGraphDescription,
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteConfig.gaId}');
          `}
        </Script>
      </body>
    </html>
  )
}