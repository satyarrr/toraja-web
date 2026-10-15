import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display-next" });
const body = Figtree({ subsets: ["latin"], variable: "--font-body-next" });

export const metadata: Metadata = {
  title: "Guest Directory",
  description: "Informasi villa, sarapan, spa, dan rekomendasi sekitar.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
