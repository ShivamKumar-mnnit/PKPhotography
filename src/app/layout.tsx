import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "PK Photography - Best photography and videography service in mumbai",
    template: "%s - Best photography and videography service in mumbai"
  },
  description: "We offer Portrait, Event, Commercial, lifestyle, Corporate Headshots, Real Estate shoots and Wedding and Events Photography.",
  twitter:{
    card: "summary_large_image"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, "antialiased ")}>
        {children}
      </body>
    </html>
  );
}
