import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calendars",
  description: "The web service for Calendars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
