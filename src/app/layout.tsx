import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Cormorant_Garamond, Inter, Lora } from 'next/font/google'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Syrota.Production",
  description: "Film and TV Student Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${inter.variable} ${lora.variable}`}>
      <body className="min-h-screen bg-white text-theme-text">
        <Navigation />
        <main className="flex min-h-screen flex-col pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
