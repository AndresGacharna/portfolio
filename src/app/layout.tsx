import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import BackgroundGradient from "@/components/BackgroundGradient";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Andrés Gacharná | Full Stack Developer",
  description:
    "Portafolio de desarrollador Full Stack. Creando experiencias digitales únicas con código, creatividad y pasión.",
  keywords: [
    "developer",
    "portfolio",
    "full stack",
    "react",
    "next.js",
    "typescript",
  ],
  authors: [{ name: "Andrés Gacharná" }],
  openGraph: {
    title: "Andrés Gacharná | Full Stack Developer",
    description:
      "Portafolio de desarrollador Full Stack. Creando experiencias digitales únicas.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrés Gacharná | Full Stack Developer",
    description:
      "Portafolio de desarrollador Full Stack. Creando experiencias digitales únicas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <BackgroundGradient />
        <div style={{ position: "relative", zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
