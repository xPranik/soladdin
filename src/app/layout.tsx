import type { Metadata } from "next";
import "src/styles/reset.css";
import "src/styles/global.scss";

export const metadata: Metadata = {
  title: "Soladdin",
  description: "Test task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
