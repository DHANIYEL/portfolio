import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BackgroundLayout from "./backgroundLayout"; // Import directly

const porscheBold = localFont({
  src: "./fonts/911porschav3bold.ttf",
  variable: "--font-porsche-bold",
  weight: "700",
});
const Vonique = localFont({
  src: "./fonts/Vonique 64 Bold.ttf",
  variable: "--font-vonique-bold",
  weight: "700",
});
const calcioDemo = localFont({
  src: "./fonts/calcio-demo-400.ttf",
  variable: "--font-calcio-demo",
  weight: "400",
});
const urbanShockBold = localFont({
  src: "./fonts/UrbanShock-Bold.otf",
  variable: "--font-urbanshock-bold",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Dhaniyel",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${porscheBold.variable} ${calcioDemo.variable} ${Vonique.variable} ${urbanShockBold.variable} antialiased`}
      >
        <BackgroundLayout>{children}</BackgroundLayout>
      </body>
    </html>
  );
}
