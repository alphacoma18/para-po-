import NextAuthProvider from "@/components/NextAuthProvider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ttNorms = localFont({
  src: [
    {
      path: "./fonts/TT-Norms-Fonts/TTNorms-Thin.otf",
      weight: "100",
    },
    {
      path: "./fonts/TT-Norms-Fonts/TTNorms-ExtraLight.otf",
      weight: "200",
    },
    {
      path: "./fonts/TT-Norms-Fonts/TTNorms-Light.otf",
      weight: "300",
    },
    {
      path: "./fonts/TT-Norms-Fonts/TTNorms-Medium.otf",
      weight: "500",
    },
    {
      path: "./fonts/TT-Norms-Fonts/TTNorms-Bold.otf",
      weight: "700",
    },
    {
      path: "./fonts/TT-Norms-Fonts/TTNorms-ExtraBold.otf",
      weight: "800",
    },
    {
      path: "./fonts/TT-Norms-Fonts/TTNorms-Black.otf",
      weight: "900",
    },
  ],
  preload: true,
  variable: "--font-tt-norms",
});
import NavBar from "@/components/Navbar";
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
      <NextAuthProvider>
      <body
          className={`${ttNorms.variable} antialiased bg-white`}
        >
          <NavBar />
        {children}
        </body>
      </NextAuthProvider>
    </html>
  );
}
