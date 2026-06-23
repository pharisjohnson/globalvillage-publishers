import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Global Village Publishers E.A Ltd | Books Worth Keeping. Stories Worth Telling.",
  description: "Kenya's premier commemorative book publishers since 2008. We research, write, design and publish premium books for institutions, companies and individuals.",
  keywords: "book publishing Kenya, commemorative books, Best of Kenya, Diplomat East Africa, Teachers Image, publishing services Nairobi",
  openGraph: {
    title: "Global Village Publishers E.A Ltd | Books Worth Keeping. Stories Worth Telling.",
    description: "Kenya's premier commemorative book publishers since 2008.",
    url: "https://globalvillagepublishers.co.ke",
    siteName: "Global Village Publishers",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://globalvillagepublishers.co.ke"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={interTight.className}>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}