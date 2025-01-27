import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans, Mingzat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import Thumb from "@/components/Thumb";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Juliano Machado - Medico Ortopedista",
  description: "Ortopedista e Traumatologista | Recife - PE",
  openGraph: {
    images: [
      {
        url: "https://drjulianomachado.com.br/wp-content/uploads/2022/03/logoJu-300x131.png"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakarta.variable} antialiased p-0`}
      >
        <Navbar />
        <Image width={1920} height={1000} src="/bg1.jpg" alt="" className="lg:block w-[100%] border-b-8 border-[#009688]" />
        {/* <Thumb /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
