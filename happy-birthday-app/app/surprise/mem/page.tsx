"use client";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function PhotoCard({
  src,
  alt,
  delay,
  tilt,
}: {
  src: string;
  alt: string;
  delay: number;
  tilt: number;
}) {
  return (
    <motion.div
      className="relative shrink-0"
      initial={{ opacity: 0, y: 60, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: tilt }}
      transition={{ duration: 0.9, delay, ease: "backOut" }}
      whileHover={{ rotate: 0, scale: 1.04, y: -8 }}
    >
      {/* Continuous float */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      >
        {/* Gradient border ring */}
        <div
          style={{
            padding: "5px",
            borderRadius: "24px",
            background:
              "linear-gradient(145deg, #ffb3d4, #ffd6ec, #ff85c1, #ffcce0, #ffb3d4)",
            boxShadow:
              "0 12px 40px rgba(255, 120, 180, 0.35), 0 4px 16px rgba(255, 100, 160, 0.2)",
          }}
        >
          {/* White polaroid mat */}
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "10px 10px 36px 10px",
            }}
          >
            <div style={{ borderRadius: "12px", overflow: "hidden" }}>
              <Image
                src={src}
                alt={alt}
                width={300}
                height={340}
                style={{ objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>

        {/* Animated corner decorations */}
        {[
          { pos: "-top-4 -left-4", emoji: "🌸", dur: 4.0 },
          { pos: "-top-4 -right-4", emoji: "💕", dur: 4.5 },
          { pos: "-bottom-9 -left-4", emoji: "✨", dur: 5.0 },
          { pos: "-bottom-9 -right-4", emoji: "🎀", dur: 3.5 },
        ].map(({ pos, emoji, dur }, i) => (
          <motion.span
            key={i}
            className={`absolute ${pos} text-2xl`}
            animate={{
              rotate: [0, 15, -10, 15, 0],
              scale: [1, 1.25, 1, 1.25, 1],
            }}
            transition={{
              duration: dur,
              repeat: Infinity,
              delay: delay + i * 0.3,
            }}
          >
            {emoji}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

function Sparkles() {
  return (
    <div className="flex items-center gap-2">
      {["✦", "✦", "✦"].map((s, i) => (
        <motion.span
          key={i}
          className="text-pink-300 text-lg"
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
        >
          {s}
        </motion.span>
      ))}
    </div>
  );
}

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
      <div className="relative z-10 flex flex-col items-center gap-14 w-full max-w-5xl">
        {/* Photos + Text layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full">
          {/* ── Left Photo ── */}
          <PhotoCard
            src="/assets/image1.png"
            alt="memory 1"
            delay={0.2}
            tilt={-4}
          />

          {/* ── Center Text ── */}
          <motion.div
            className="flex flex-col items-center gap-5 flex-1 max-w-xs text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Sparkles />

            {/* Glass card */}
            <motion.div
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(14px)",
                borderRadius: "28px",
                border: "2px solid rgba(255, 180, 215, 0.5)",
                boxShadow:
                  "0 8px 32px rgba(255, 130, 180, 0.14), inset 0 1px 0 rgba(255,255,255,0.8)",
                padding: "36px 28px",
              }}
            >
              <motion.div
                className="text-3xl mb-3"
                animate={{ rotate: [0, 10, -10, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                💌
              </motion.div>

              <motion.h2
                className="text-2xl font-bold text-pink-400 mb-4 leading-snug"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
              >
                เขียนหัวข้อตรงนี้
              </motion.h2>

              <motion.p
                className="text-base text-pink-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.95 }}
              >
                เขียนข้อความที่นี่ เพิ่มเรื่องราวความทรงจำ สวยงามที่อยากจะบอก
                ได้เลยนะ 💗
              </motion.p>

              {/* Divider */}
              <div className="flex items-center gap-2 mt-4 justify-center">
                <div className="h-px w-10 bg-pink-200 rounded" />
                <span className="text-pink-300 text-xs">✿</span>
                <div className="h-px w-10 bg-pink-200 rounded" />
              </div>
            </motion.div>

            <Sparkles />
          </motion.div>

          {/* ── Right Photo ── */}
          <PhotoCard
            src="/assets/image2.png"
            alt="memory 2"
            delay={0.4}
            tilt={4}
          />
        </div>

        {/* Navigation buttons */}
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
          <button
            onClick={() => router.push("/surprise/next")} // ← เปลี่ยน route หน้าต่อไป
            className="px-9 py-3 rounded-full bg-pink-400 text-white font-semibold hover:bg-pink-500 transition-colors shadow-md cursor-pointer"
          >
            ไปต่อ
          </button>
        </motion.div>
      </div>
    </div>
  );
}
