import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Multi Step Form",
  description: "Generate a multi step form in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"font-ubuntu-regular"}>{children}</body>
    </html>
  );
}
