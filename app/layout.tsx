import type { Metadata } from "next";
import Nav from "@/components/nav/nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wikifolio",
  description: "Portfolio website for Justin Acosta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Nav/>
        </header>
          {children}
        <footer>
          <div>footer div</div>
        </footer>
      </body>
    </html>
  );
}
