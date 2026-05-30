"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const DECORATIONS = ["🎀", "⭐", "✨", "🎈", "💕", "🌸", "🎊", "💗", "🥳", "🎉"];

function FloatingItem({ emoji, delay, x, duration, size }: {
  emoji: string; delay: number; x: number; duration: number; size: number;
}) {
  return (
    <motion.div
      className="fixed top-0 pointer-events-none z-0 select-none"
      style={{ left: `${x}%`, fontSize: `${size}px` }}
      initial={{ y: -50, opacity: 1, x: 0 }}
      animate={{
        y: "110vh",
        opacity: [1, 1, 0],
        x: [0, 30, -20, 15, 0],
        rotate: [0, 20, -20, 10, 0],
      }}
      transition={{ duration: duration, delay: delay, repeat: Infinity, ease: "easeIn" }}
    >
      {emoji}
    </motion.div>
  );
}

export default function FirstPageComponents() {
  const router = useRouter();
  const [isOpening, setIsOpening] = useState(false);
  const [showFlash, setShowFlash] = useState(false);

  const items = useMemo(() =>
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      emoji: DECORATIONS[Math.floor(Math.random() * DECORATIONS.length)],
      delay: Math.random() * 5,
      x: Math.random() * 100,
      duration: 8 + Math.random() * 7,
      size: 16 + Math.random() * 24,
    })), []
  );

  const handleOpen = async () => {
    if (isOpening) return;
    setIsOpening(true);
    await new Promise((r) => setTimeout(r, 900));
    setShowFlash(true);
    await new Promise((r) => setTimeout(r, 600));
    router.push("/surprise");
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen gap-12 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #fff0f6 0%, #fff5f9 50%, #ffe4ef 100%)" }}
    >
      <AnimatePresence>
        {showFlash && (
          <motion.div
            className="fixed inset-0 bg-white z-50 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
        )}
      </AnimatePresence>

      {items.map((item) => (
        <FloatingItem
          key={item.id}
          emoji={item.emoji}
          delay={item.delay}
          x={item.x}
          duration={item.duration}
          size={item.size}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center gap-12">
        <motion.button
          onClick={handleOpen}
          animate={isOpening ? {
            rotate: [-8, 8, -8, 8, -5, 5, 0, 0],
            scale:  [1,  1,  1,  1,  1,  1, 1.4, 3],
            opacity:[1,  1,  1,  1,  1,  1, 1,   0],
          } : {}}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          whileHover={!isOpening ? { scale: 1.08 } : {}}
          whileTap={!isOpening ? { scale: 0.95 } : {}}
          className="rounded-lg overflow-hidden drop-shadow-lg"
        >
          <Image src="/assets/box.png" alt="box" width={200} height={200} />
        </motion.button>

        <motion.div
          animate={isOpening ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-4xl text-pink-400 drop-shadow-sm">
            ลองกดไปที่กล่องของขวัญดูสิ 💗
          </h1>
        </motion.div>
      </div>
    </div>
  );
}