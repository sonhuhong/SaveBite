import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaveBite",
  description: "Reduce food waste with affordable mystery boxes.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}