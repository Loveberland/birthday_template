"use client";
import { useMemo } from "react";
import { motion } from "motion/react";

const DECORATIONS = [
  "🎀",
  "⭐",
  "✨",
  "🎈",
  "💕",
  "🌸",
  "🎊",
  "💗",
  "🥳",
  "🎉",
];

function FloatingItem({
  emoji,
  delay,
  x,
  duration,
  size,
}: {
  emoji: string;
  delay: number;
  x: number;
  duration: number;
  size: number;
}) {
  return (
    <motion.div
      className="fixed top-0 pointer-events-none z-[1] select-none"
      style={{ left: `${x}%`, fontSize: `${size}px` }}
      initial={{ y: -50, opacity: 1, x: 0 }}
      animate={{
        y: "110vh",
        opacity: [1, 1, 0],
        x: [0, 30, -20, 15, 0],
        rotate: [0, 20, -20, 10, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeIn",
      }}
    >
      {emoji}
    </motion.div>
  );
}

export default function FloatingDecorations() {
  const items = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        emoji: DECORATIONS[Math.floor(Math.random() * DECORATIONS.length)],
        delay: Math.random() * 5,
        x: Math.random() * 100,
        duration: 8 + Math.random() * 7,
        size: 16 + Math.random() * 24,
      })),
    [],
  );

  return (
    <>
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
    </>
  );
}
