import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/components/providers";

export const metadata: Metadata = {
  title: "Shubham's Portfolio",
  description: "A showcase of my work and skills",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black text-neutral-900 dark:text-neutral-100">
        <Provider>
          {children}
        </Provider>
          
          
      </body>
    </html>
  );
}