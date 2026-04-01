import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Orbitron, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { cn } from "@/lib/utils";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
});

const orbitron = Orbitron({
    variable: "--font-orbitron",
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
        <html
            lang="en"
            className={cn(
                "h-full",
                "antialiased",
                inter.variable,
                jetBrainsMono.variable,
                orbitron.variable,
                "font-sans",
                geist.variable,
            )}
        >
            <body className="min-h-full flex flex-col" suppressHydrationWarning>
                <Header />
                <div className="flex grow bg-amber-50">
                    <SidebarProvider>
                        <AppSidebar />
                        <SidebarTrigger />
                        <main className="flex grow items-center justify-center w-full ">{children}</main>
                    </SidebarProvider>
                </div>
            </body>
        </html>
    );
}
