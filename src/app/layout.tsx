import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Praxis - Experto en Tanatopraxia y Tanatoestetica",
  description: "Inicia tu camino hacia la excelencia profesional con nuestro curso avanzado en tanatopraxia y tanatoestetica. Profundizaras en metodos de preservacion y restauracion, asi como tecnicas de enbellecimiento post morten.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
