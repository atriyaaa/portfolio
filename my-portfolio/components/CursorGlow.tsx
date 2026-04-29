"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-0 hidden h-72 w-72 rounded-full bg-accent-main/10 blur-3xl md:block"
      animate={{
        x: position.x - 144,
        y: position.y - 144,
      }}
      transition={{
        type: "spring",
        damping: 35,
        stiffness: 120,
        mass: 0.5,
      }}
    />
  );
}