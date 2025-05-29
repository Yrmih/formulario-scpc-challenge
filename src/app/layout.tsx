
import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./(painel)/Layout/Header/page";

import SidebarPage from "./(painel)/Layout/Sidebar/page";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sistema SCPC",
  description: "Sistema para gestão de servidores",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        <div className="flex min-h-screen">
          <SidebarPage />
          <div className="flex flex-col w-full ml-64">
            <Header />
            <main className="flex-grow p-6">{children}</main>
            
          </div>
        </div>
      </body>
    </html>
  );
}
