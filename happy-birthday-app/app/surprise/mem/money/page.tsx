"use client";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function MoneyPage() {
  const router = useRouter();

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen gap-8 px-8 py-16"
      style={{
        background:
          "linear-gradient(135deg, #fff0f6 0%, #fff5f9 50%, #ffe4ef 100%)",
      }}
    >
      <div className="relative z-10 flex flex-col items-center gap-10 w-full max-w-md">
        {/* -- text box -- */}
        <motion.div
          className="w-full text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          style={{
            background: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(14px)",
            borderRadius: "28px",
            border: "2px solid rgba(255, 180, 215, 0.5)",
            boxShadow:
              "0 8px 32px rgba(255, 130, 180, 0.14), inset 0 1px 0 rgba(255,255,255,0.8)",
            padding: "32px 28px",
          }}
        >
          <motion.div
            className="text-3xl mb-3"
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            💸
          </motion.div>
          <motion.h2
            className="text-2xl font-bold text-pink-400 mb-3 leading-snug"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            ขอค่าขนมเพิ่มดะม้ายยยย
          </motion.h2>
        </motion.div>
        <motion.div
          className="relative shrink-0"
          initial={{ opacity: 0, y: 60, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "backOut" }}
          whileHover={{ rotate: 0, scale: 1.04, y: -8 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
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
              <div
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "10px 10px 36px 10px",
                }}
              >
                <div style={{ borderRadius: "12px", overflow: "hidden" }}>
                  <Image
                    src="/assets/image1.png"
                    alt="money"
                    width={300}
                    height={340}
                    style={{ objectFit: "cover", display: "block" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

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
            onClick={() => router.push("/surprise/mem/money/end")} // ← เปลี่ยน route หน้าต่อไป
            className="px-9 py-3 rounded-full bg-pink-400 text-white font-semibold hover:bg-pink-500 transition-colors shadow-md cursor-pointer"
          >
            ไปต่อ
          </button>
        </motion.div>
      </div>
    </div>
  );
}
