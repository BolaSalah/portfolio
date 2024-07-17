import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bola Salah',
  description:
    "Portfolio with next.js and Tailwind Css,Explore Bola's dynamic portfolio featuring front-end development projects and achievements spanning over 1 year. Highlights include creating a clone of Amazon, movie websites, and jewellery, showcasing innovation in every detail. View portfolio now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
