import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wedding Invitation | Gawali Family",
  description: "You are warmly invited to the wedding celebration of Aarti & Akshay. Join the Gawali family on 9th July 2026 in Pimpri Kolandar, Shrigonda, Ahilyanagar for the wedding ceremony and haldi.",
  openGraph: {
    title: "Aarti & Akshay — Wedding Invitation",
    description: "A luxury digital wedding invitation from the Gawali family. 9th July 2026, Pimpri Kolandar, Shrigonda, Ahilyanagar.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Great+Vibes&family=Jost:wght@300;400;500;600&family=Tiro+Devanagari+Marathi:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
