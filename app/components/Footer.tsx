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
    <footer className="relative mx-auto pb-24 md:pb-0 max-w-[1200px] bg-zinc-950 border-t-2 border-zinc-800 text-zinc-300 overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4 px-6 sm:px-20 pt-2 pb-4 sm:py-5">
        <Link
          href="/contact"
          className="order-1 sm:order-2 h-24 w-full max-w-[280px] sm:h-40 sm:w-[500px] sm:max-w-none cursor-pointer"
        >
          <TextHoverEffect text="Nicolas" />
        </Link>

        <div className="order-2 flex w-full max-w-[280px] items-center justify-between border-t border-zinc-800/70 pt-3 sm:contents">
          <Link href="/contact" className="text-sm sm:order-1 sm:text-lg cursor-pointer hover:text-zinc-50 transition-colors">
            Contato →
          </Link>

          <div className="text-sm tabular-nums text-zinc-400 sm:order-3 sm:text-lg sm:text-zinc-300">{timeNow}</div>
        </div>
      </div>
    </footer>
  );
}
