import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import BootstrapClient from '@/app/BootstrapClient.js';
import Header from './Header';
import Footer from './Footer';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Keeper App</title>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}
