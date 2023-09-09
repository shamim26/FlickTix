"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 z-10 border-b border-[#FFFFFF26] flex items-center justify-between px-10 py-7 transition-all ease-in-out duration-300 
      ${isScrolling ? "bg-black" : "bg-transparent"}`}
    >
      <Image src="/logo-flicktix.png" alt="logo" width={170} height={100} />
      <div className="flex items-center justify-center gap-[4rem] font-medium text-white">
        <Link href="/">Home</Link>
        <Link href="/">Movies</Link>
        <Link href="/">Events</Link>
        <Link href="/">News</Link>
        <Link href="/">Contact</Link>
      </div>
      <div>
        <Link href="/">user</Link>
      </div>
    </nav>
  );
}
