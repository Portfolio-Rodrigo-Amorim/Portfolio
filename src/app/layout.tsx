import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rodrigo Amorim | 3D Generalist & Technical Artist",
  description: "Portfolio of Rodrigo Amorim - 3D Generalist and Technical Artist specializing in architectural visualization, game development, and cinematic productions.",
  keywords: ["3D Artist", "Technical Artist", "3D Generalist", "Blender", "Unreal Engine", "Houdini", "Portfolio"],
  authors: [{ name: "Rodrigo Amorim" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Rodrigo Amorim | 3D Generalist & Technical Artist",
    description: "Portfolio showcasing 3D art, technical visualization, and creative projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodrigo Amorim | 3D Generalist & Technical Artist",
    description: "Portfolio showcasing 3D art, technical visualization, and creative projects",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
