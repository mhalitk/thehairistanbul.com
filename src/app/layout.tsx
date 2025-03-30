import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleTagManager from "@/components/GoogleTagManager";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Hair Istanbul | Professional Hair Transplant Clinic",
  description: "Professional hair transplant clinic in Istanbul, Turkey. Specializing in FUE and DHI methods with international patient care.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleTagManager />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <div className="h-16" />
          <Footer />
        </div>
      </body>
    </html>
  );
}
