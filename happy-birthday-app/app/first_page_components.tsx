"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FirstPageComponents() {
  const router = useRouter();
  const [isOpening, setIsOpening] = useState(false);
  const [showFlash, setShowFlash] = useState(false);

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
      className="relative flex flex-col items-center justify-center min-h-screen gap-12"
      style={{
        background:
          "linear-gradient(135deg, #fff0f6 0%, #fff5f9 50%, #ffe4ef 100%)",
      }}
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

      <div className="relative z-10 flex flex-col items-center gap-12">
        <motion.button
          onClick={handleOpen}
          animate={
            isOpening
              ? {
                  rotate: [-8, 8, -8, 8, -5, 5, 0, 0],
                  scale: [1, 1, 1, 1, 1, 1, 1.4, 3],
                  opacity: [1, 1, 1, 1, 1, 1, 1, 0],
                }
              : {}
          }
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
