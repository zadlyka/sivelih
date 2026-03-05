import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Menggunakan font lokal dari package 'geist' agar bisa bekerja offline (Electron)
const geistSans = localFont({
  src: "../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: "../node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sivelih - Support SIDALIH",
  description:
    "Sistem pendukung keputusan dan alat bantu validasi data pemilih",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} selection:bg-red-100 selection:text-red-900`}
      >
        {children}
      </body>
    </html>
  );
}
