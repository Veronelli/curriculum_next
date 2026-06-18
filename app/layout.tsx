import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

const siteUrl = process.env.SITE_URL || "https://fv.pumacore.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Facundo Veronelli | Full Stack Developer",
  description:
    "Portfolio profesional de Facundo Veronelli. Full Stack Developer con experiencia en Django, FastAPI, React, Next.js y más.",
  openGraph: {
    title: "Facundo Veronelli | Full Stack Developer",
    description:
      "Portfolio profesional de Facundo Veronelli. Full Stack Developer con experiencia en Django, FastAPI, React, Next.js y más.",
    url: "/",
    siteName: "Facundo Veronelli",
      images: [
        {
          url: "/preview-image.png",
          width: 1280,
          height: 424,
          alt: "Facundo Veronelli",
        },
      ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facundo Veronelli | Full Stack Developer",
    description:
      "Portfolio profesional de Facundo Veronelli. Full Stack Developer con experiencia en Django, FastAPI, React, Next.js y más.",
    images: ["/preview-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${jetbrainsMono.variable}`}>
      <body className="bg-bg text-white">{children}</body>
    </html>
  )
}
