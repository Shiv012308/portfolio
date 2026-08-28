import { Syne, Manrope, Caveat } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["500", "600", "700"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: "Shiv  — Graphic Designer",
  description:
    "I create visual identities, posters, social media designs, branding and creative visuals built to make ideas impossible to ignore.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable} ${caveat.variable} overflow-x-hidden max-w-full`}>
      <body className="bg-black text-off font-body antialiased selection:bg-red selection:text-off overflow-x-hidden w-full max-w-full min-h-screen">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
