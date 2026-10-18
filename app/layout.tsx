import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kiki Kiswanto — Senior Scrum Master & AI for Business",
  description:
    "Kiki Kiswanto — Senior Scrum Master di Bank SMBC Indonesia dan praktisi AI for Business, dengan 10+ tahun software development web & mobile.",
  applicationName: "Kiswanto.id",
  openGraph: {
    title: "Kiki Kiswanto — Senior Scrum Master & AI for Business",
    description: "Mengubah kebutuhan bisnis menjadi solusi digital yang tepat guna.",
    locale: "id_ID",
    type: "website",
    siteName: "Kiswanto.id",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={geistSans.variable}
    >
      <body>{children}</body>
    </html>
  );
}
