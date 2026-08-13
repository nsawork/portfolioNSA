"use client";

import React, { useEffect, useState } from "react";
import { TextHoverEffect } from "../components/ui/text-hover-effect";
import Link from "next/link";

const formatTime = () => new Date().toLocaleTimeString();

export default function Footer(): React.ReactElement {
  const [timeNow, setTimeNow] = useState<string>("");

  useEffect(() => {
    const initialId = window.setTimeout(() => setTimeNow(formatTime()), 0);
    const intervalId = window.setInterval(() => setTimeNow(formatTime()), 1000);
    return () => {
      window.clearTimeout(initialId);
      window.clearInterval(intervalId);
    };
  }, []);
  return (
    <footer className="relative mx-auto pb-12 md:pb-0 lg:pb-0 xl:pb-0 max-w-[1200px] bg-zinc-950 border-t-2 border-zinc-800 text-zinc-300 overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-20 py-5">
        <div className="text-lg cursor-pointer">Contato →</div>

        <Link href="/contact" className="h-40 w-[500px] cursor-pointer">
          <TextHoverEffect text="Nicolas" />
        </Link>

        <div className="text-lg">{timeNow}</div>
      </div>
    </footer>
  );
}
