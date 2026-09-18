"use client";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function MemPage() {
  const router = useRouter();

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen gap-8 px-8 py-16"
      style={{
        background:
          "linear-gradient(135deg, #fff0f6 0%, #fff5f9 50%, #ffe4ef 100%)",
      }}
    >
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <h1 className="text-4xl font-bold text-pink-400">
          ขอบคุณที่เราเกิดมาได้เจอกันนะ{" "}
          <span className="text-pink-600">รักนะ 💗</span>
        </h1>
      </motion.div>
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <button
          onClick={() => router.back()}
          className="px-6 py-3 rounded-full border-2 border-pink-300 text-pink-400 font-semibold hover:bg-pink-50 transition-colors cursor-pointer"
        >
          ย้อนกลับ
        </button>
      </motion.div>
    </div>
  );
}
