import "./globals.css";
import ClientProvider from "./ClientProvider";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CodeHub",
  description: "A platform where students can learn various CS domain-specific tools such as programming languages, web development, AI, machine learning, mobile app development, software engineering etc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-between min-h-screen`}
      >
        <header>
          <Navbar />
        </header>

        <main>
        <ClientProvider>
          {children}
        </ClientProvider>
        </main>

        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
