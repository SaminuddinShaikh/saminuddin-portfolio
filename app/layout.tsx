import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Saminuddin Shaikh — Full Stack Engineer",
  description:
    "Saminuddin Shaikh is a frontend-focused full stack engineer based in Mumbai, building real products end to end.",
  metadataBase: new URL("https://saminuddinshaikh.dev"),
  openGraph: {
    title: "Saminuddin Shaikh — Full Stack Engineer",
    description:
      "Frontend-focused full stack engineer based in Mumbai, building real products end to end.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-ink text-paper font-body antialiased">
        <div className="bg-grid fixed inset-0 z-0" aria-hidden="true" />
        <div className="bg-noise" aria-hidden="true" />
        <div className="vignette" aria-hidden="true" />
        <CustomCursor />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
