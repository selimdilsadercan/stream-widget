import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stream Widget",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}

export default Layout;
