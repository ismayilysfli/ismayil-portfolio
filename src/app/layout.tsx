import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ismayil Yusifli | AI/ML Engineer",
    template: "%s | Ismayil Yusifli",
  },
  description:
    "Portfolio of Ismayil Yusifli, a Computer Science student focused on AI/ML engineering, computer vision, applied AI, and LLM systems.",
  keywords: [
    "Ismayil Yusifli",
    "AI engineer",
    "machine learning",
    "computer vision",
    "applied AI",
    "UFAZ",
  ],
  authors: [{ name: "Ismayil Yusifli" }],
  creator: "Ismayil Yusifli",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ismayil Yusifli | AI/ML Engineer",
    description:
      "Computer Science student building machine-learning and applied-AI systems across computer vision, model evaluation, LLM workflows, and deployment.",
    siteName: "Ismayil Yusifli",
  },
  twitter: {
    card: "summary",
    title: "Ismayil Yusifli | AI/ML Engineer",
    description: "AI/ML engineering portfolio focused on practical systems, evaluation, and deployment.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a111b",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
