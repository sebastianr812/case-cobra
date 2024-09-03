import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Case Cobra",
    description: "E-commerce application for custom iPhone cases",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
                    <div className="flex-1 flex flex-col h-full">
                        {children}
                    </div>
                    <Footer />
                </main>
            </body>
        </html>
    );
}
