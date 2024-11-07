import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Image from "next/image";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "PK Photography-Best in photography and videography.",
    template: "%s - Best photography and videography service in mumbai"
  },
  description: "We offer Portrait, Event, Commercial, lifestyle, Corporate Headshots, Real Estate shoots and Wedding and Events Photography.",
  twitter:{
    card: "summary_large_image"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <meta name="google-site-verification" content="xkkbCA30-55oudh-aQAwydfWkzUga0omPDIZ6lN9RB4" />
      <body className={clsx(dmSans.className, "antialiased ")}>
       
        
        {children}
        <h2></h2>
        <h3></h3>
        <h4></h4>
        <h5></h5>
        <h6></h6>
        
      </body>
    </html>
  );
}
