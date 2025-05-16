import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Lora:wght@400;500;600&display=swap" 
          rel="stylesheet"
        />
      </head>
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
