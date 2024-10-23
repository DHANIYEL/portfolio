import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BackgroundLayout from "./backgroundLayout"; // Import your BackgroundLayout component

const porscheBold = localFont({
  src: "./fonts/911porschav3bold.ttf",
  variable: "--font-porsche-bold",
  weight: "700", // Adjust weight if necessary
});

const calcioDemo = localFont({
  src: "./fonts/calcio-demo-400.ttf",
  variable: "--font-calcio-demo",
  weight: "400", // Adjust weight if necessary
});

const urbanShockBold = localFont({
  src: "./fonts/UrbanShock-Bold.otf",
  variable: "--font-urbanshock-bold",
  weight: "700", // Adjust weight if necessary
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${porscheBold.variable} ${calcioDemo.variable} ${urbanShockBold.variable} antialiased`}
      >
        <BackgroundLayout>{children}</BackgroundLayout>
      </body>
    </html>
  );
}
