import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Space_Mono, Syne } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import { CanvasClient } from "./canvas-client";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "M2W — Marketing to Win | Influenciadora Digital IA",
  description:
    "Plataforma de influência digital e avatares gerados por IA. Persona Mia Park para TikTok Shop, Fanvue e automação comercial B2B. Resultados reais, 24/7.",
  keywords: [
    "influencer digital",
    "avatar IA",
    "TikTok Shop",
    "Fanvue",
    "marketing digital",
    "Mia Park",
    "M2W",
    "Marketing to Win",
  ],
  authors: [{ name: "M2W — Marketing to Win", url: "https://m2w-ai.com" }],
  openGraph: {
    title: "M2W — Influência Digital. Resultados Reais.",
    description:
      "Avatar digital de IA que converte 24/7. TikTok Shop, Fanvue e automação B2B.",
    url: "https://m2w-ai.com",
    siteName: "M2W Platform",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0A08",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${spaceMono.variable} ${syne.variable} dark`}
      suppressHydrationWarning
    >
      <body className="bg-ink text-cream font-sans antialiased">
        {/* WebGL background — client-only, skips SSR */}
        <CanvasClient />

        <Providers>
          <Navbar />
          {children}

          <footer className="border-t border-cream-border py-10 px-8">
            <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs tracking-[0.3em] text-cream">M2W</span>
                <span className="w-8 h-px bg-cream-border" />
                <span className="font-mono text-xs tracking-[0.2em] text-cream-muted uppercase">
                  Marketing to Win
                </span>
              </div>
              <p className="font-mono text-xs text-cream-muted tracking-[0.15em]">
                © {new Date().getFullYear()} M2W Platform. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-cream-muted">Gerado com</span>
                <span className="font-mono text-xs text-lime">ComfyUI</span>
                <span className="font-mono text-xs text-cream-muted">×</span>
                <span className="font-mono text-xs text-lime">RTX 4070Ti</span>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
