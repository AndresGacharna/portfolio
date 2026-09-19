import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Big_Shoulders_Stencil } from "next/font/google";
import "./globals.css";

const stencil = Big_Shoulders_Stencil({
  subsets: ["latin"],
  variable: "--font-stencil",
  display: "swap",
  axes: ["opsz"],
});

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-cond",
  display: "swap",
  weight: ["500", "600", "700"],
});

const description =
  "Andrés Gacharná, Software Engineer (Backend & Distributed Systems). NestJS, .NET, microservices, Clean Architecture and self-hosted infrastructure.";

export const metadata: Metadata = {
  title: "Andrés Gacharná | Backend & Distributed Systems",
  description,
  keywords: [
    "backend engineer",
    "distributed systems",
    "NestJS",
    ".NET",
    "microservices",
    "portfolio",
  ],
  authors: [{ name: "Andrés Gacharná" }],
  openGraph: {
    title: "Andrés Gacharná | Backend & Distributed Systems",
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrés Gacharná | Backend & Distributed Systems",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${stencil.variable} ${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
