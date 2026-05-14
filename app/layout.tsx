import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const siteUrl = "https://m2w-ai.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "M2W AI Solutions | Avatar de IA para TikTok Shop e Influencer Digital",
    template: "%s | M2W AI Solutions",
  },
  description:
    "Influencers digitais de IA para TikTok Shop, live commerce e conteúdo UGC. Troque cachês altos por uma operação de avatar de IA a partir de R$2.490/mês.",
  keywords: [
    "avatar de IA para TikTok Shop",
    "influencer digital de IA",
    "influencer virtual para marcas",
    "conteúdo com IA para TikTok Shop",
    "avatar IA para live commerce",
    "alternativa a influencer humano",
    "micro influencer custo por post",
    "marketing de influência com IA",
    "conteúdo UGC com IA",
    "automação de conteúdo para marcas",
  ],
  alternates: { canonical: siteUrl },
  authors: [{ name: "M2W AI Solutions", url: siteUrl }],
  creator: "M2W AI Solutions",
  publisher: "M2W AI Solutions",
  openGraph: {
    title: "M2W AI Solutions | Avatar de IA para TikTok Shop",
    description:
      "Conteúdo diário, live commerce e UGC com avatar de IA para marcas no Brasil. Diagnóstico gratuito e setup básico em 48h.",
    url: siteUrl,
    siteName: "M2W AI Solutions",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Logo M2W AI Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "M2W AI Solutions | Influencer Digital de IA",
    description:
      "Avatar de IA para TikTok Shop, conteúdo UGC e automação de conteúdo para marcas brasileiras.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "m2w-deploy-version": "landing-v3-2026-05-14",
  },
};

export const viewport: Viewport = {
  themeColor: "#050508",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
