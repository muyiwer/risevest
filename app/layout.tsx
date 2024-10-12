import type { Metadata } from "next";
import "./globals.css";
import { Schibsted_Grotesk } from "next/font/google";

const grotesk = Schibsted_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rise - Dollar investments that help you grow",
  description:
    "Rise is the easiest way to make automated and secure dollar denominated investments in Nigeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${grotesk.className} max-w-[80rem] mx-auto my-auto md:p-[2rem] max-md:h-[100vh] max-md:overflow-y-scroll max-md:overflow-x-hidden relative`}
      >
        {children}
      </body>
    </html>
  );
}
