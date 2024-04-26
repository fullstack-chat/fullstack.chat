import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, UserButton } from '@clerk/nextjs'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "fullstack.chat",
  description: "A safe space for developers of all backgrounds to learn, grow, and build friendships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex justify-center text-white md:mx-0 m-2">
            <div className="flex flex-col w-full max-w-[960px] px-2">
              <Navbar />
              { children }
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
