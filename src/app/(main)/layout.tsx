import type { ReactNode } from "react";
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import "@/styles/global.css";

export default function RootLayout ({children}: {children: ReactNode}) {
    return (
        <html lang="en">
            <head>
                <title>Showcase Kuberna</title>
            </head>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}

