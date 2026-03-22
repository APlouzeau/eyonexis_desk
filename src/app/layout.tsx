import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Aside from "@/components/layout/Aside";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Eyonexis",
    description: "Application bureau de gestion de la base de connaissances Eyonexis",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${jetBrainsMono.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col" suppressHydrationWarning>
                <Header />
                <div className="flex">
                    <Aside />
                    <main className="min-h-screen m-auto w-full bg-amber-50">{children}</main>
                </div>
            </body>
        </html>
    );
}
