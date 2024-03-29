import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const font = Inter({ subsets: ["latin"] });

import ConvexProvider from "@/providers/convex-provider";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Stream Widget"
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ConvexProvider>
          {children}
          <Analytics />
        </ConvexProvider>
      </body>
    </html>
  );
}

export default Layout;
