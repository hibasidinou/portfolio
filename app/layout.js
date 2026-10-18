import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://hibasidinou.vercel.app"),
  title: "Hiba Sidinou – Cybersecurity Engineering Student",
  description:
    "Portfolio of Hiba Sidinou: SOC, SIEM, CIS hardening and compliance. Looking for a PFE internship from February 2027.",
  openGraph: {
    title: "Hiba Sidinou – Cybersecurity Engineering Student",
    description:
      "SOC, SIEM, CIS hardening and compliance. Looking for a PFE internship from February 2027.",
    url: "https://hibasidinou.vercel.app",
    siteName: "Hiba Sidinou",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiba Sidinou – Cybersecurity Engineering Student",
    description:
      "SOC, SIEM, CIS hardening and compliance. Looking for a PFE internship from February 2027.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}