import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Privamax Security | Best Security Company in Kenya",
  description:
    "Privamax Security provides professional security solutions across Kenya including CCTV, access control, guarding, cyber security, private investigations and more.",
  keywords: [
    "Privamax Security",
    "Security Company Kenya",
    "Security Company Nairobi",
    "Security Services Kenya",
    "CCTV Kenya",
    "Private Security Kenya",
    "Cyber Security Kenya",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
