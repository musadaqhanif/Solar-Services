import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import VideoPreloader from "./components/VideoPreloader";
import Footer from "../app/Footer/page";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Solar Service - Power Your Future with Solar Energy",
  description: "Transform your home with sustainable solar solutions. Save money while saving the planet with our expert solar installation services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <VideoPreloader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
