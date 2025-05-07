import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieConsentProvider } from "@/contexts/cookie-consent-context"
import { GDPRBanner } from "@/components/gdpr-banner"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="lt" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Schema.org structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "A+ Langai",
              url: "https://www.apliuslangai.eu",
              logo: "https://www.apliuslangai.eu/logo.png",
              description:
                "A+ Langai siūlo aukščiausios kokybės langus ir duris, atitinkančius A++ energinio efektyvumo klasę.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Butrimonių g. 9",
                addressLocality: "Kaunas",
                postalCode: "50218",
                addressCountry: "LT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "54.898521",
                longitude: "23.889520",
              },
              telephone: "+37065562966",
              email: "info@apliuslangai.lt",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "10:00",
                  closes: "15:00",
                },
              ],
              priceRange: "€€",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <CookieConsentProvider>
            {children}
            <GDPRBanner />
          </CookieConsentProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

import "./globals.css"

export const metadata = {
  generator: "v0.dev",
}

