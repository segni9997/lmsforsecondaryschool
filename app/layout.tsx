import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bedele Secondary School",
  description: "Built By Borif IT Solution",
  icons: {
    icon: "/assets/images/logoMeti.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="synthwave">
      <body >{children}</body>
    </html>
  );
}
