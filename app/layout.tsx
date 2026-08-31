import type { Metadata, Viewport } from "next"
import { Outfit, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { profile } from "@/lib/content"

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.intro,
  keywords: [
    "Drupal Developer",
    "WordPress Developer",
    "Shopify Developer",
    "Full Stack Developer",
    "Laravel",
    "PHP",
    "AI Integration",
  ],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.intro,
    type: "website",
  },
}

/* Without this, mobile browsers lay the page out at desktop width. */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a1410",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
