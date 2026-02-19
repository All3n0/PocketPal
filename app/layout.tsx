import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PocketPal",
  description: "Your smart companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}