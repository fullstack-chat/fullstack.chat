import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import Navbar from "./lib/components/Navbar";
import Footer from "./lib/components/Footer";
import { Toaster } from "react-hot-toast";
import PHProvider from "./lib/PHProvider";
import PostHogPageView from "./lib/PostHogPageView";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "fullstack.chat",
  description:
    "A weekly interview-style podcast featuring builders from around the community discussing their projects, process, and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <PHProvider>
          <body
            className={`${inter.className} px-4 py-8 max-w-screen-lg xl:px-0 mx-auto`}
          >
            <Toaster />
            <PostHogPageView />
            {/* <Navbar /> */}
            <main>{children}</main>
            <Footer />
          </body>
        </PHProvider>
      </html>
    </ClerkProvider>
  );
}
