import type { ReactNode } from "react";
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import { Nunito } from "next/font/google";
import "@/styles/global.css";


const nunito = Nunito({
    subsets: ["latin", "latin-ext"],
    variable: "--font-nunito",
    display: "swap",
});

export default function RootLayout ({children}: {children: ReactNode}) {
    return (
        <html lang="en">
            <head>
                <title>Showcase Kuberna</title>
            </head>
            <body className={nunito.variable}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}

