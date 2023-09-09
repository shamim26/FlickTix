import Navbar from "@/components/Home/Navbar";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "FlickTix - Film & Movie",
  description: "Online movie tick booking app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={space.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
