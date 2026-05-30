"use client";
import { motion } from "motion/react";

export default function SurprisePage() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen gap-8"
      style={{ background: "linear-gradient(135deg, #fff0f6 0%, #fff5f9 50%, #ffe4ef 100%)" }}
    >
      <motion.h1
        className="text-5xl text-pink-400 font-bold"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "backOut" }}
      >
        🎉 Happy Birthday! 🎉
      </motion.h1>

      <motion.p
        className="text-2xl text-pink-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        to be continue... 💗
      </motion.p>
    </div>
  );
}