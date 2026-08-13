"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="mt-8 bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text py-4 text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl"
      >
        Build lamps
        <br />
        the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-zinc-950",
        className,
      )}
    >
      {/* Halo superior */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="
          absolute
          top-[-180px]
          left-1/2
          h-[600px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-white/15
          blur-[180px]
        "
      />

      {/* Luz central forte */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="
          absolute
          top-[-80px]
          left-1/2
          h-[350px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-white/50
          blur-[120px]
        "
      />

      {/* Linha de luz */}
      <motion.div
        initial={{ width: "12rem" }}
        whileInView={{ width: "58rem" }}
        transition={{ duration: 3 }}
        className="
           absolute
           top-[40px]
           left-1/2
           h-[3px]
           w-full
           -translate-x-1/2
          bg-white/90
          shadow-[0_0_20px_rgba(255,255,255,0.8)]
      "
      />

      {/* Reflexo vidro */}
      <div
        className="
          absolute
          top-0
          left-1/2
          h-[400px]
          w-[700px]
          -translate-x-1/2
          bg-gradient-to-b
          from-white/10
          via-transparent
          to-transparent
          blur-2xl
        "
      />

      {/* Fundo inferior */}
      <div className="absolute bottom-0 h-56 w-full bg-zinc-950" />

      <div className="relative z-20 flex flex-col items-center px-6">
        {children}
      </div>
    </div>
  );
};
