import type { Metadata } from "next";
import "./globals.css";
import PageTransition from "./components/PageTransition";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kanishk Soni — Full Stack Developer",
  description: "Portfolio of Kanishk Soni — AI-powered SaaS systems, full-stack development, and real-time applications.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <nav>
          <div className="nav-brand">Obsidian</div>

          <div className="nav-links">
            <Link href="/projects">Archive</Link>
            <Link href="/tenure">Tenure</Link>
            <Link href="/about">About</Link>
            <a href="mailto:kanishk21soni@gmail.com">Inquiry</a>
          </div>
        </nav>

        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
