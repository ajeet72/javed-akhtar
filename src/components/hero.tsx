"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection({ id }: { id: string }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 2000); // Toggle every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id={id}
      className="min-h-fit mclaren-font text-white flex flex-col items-center justify-center pt-44 text-center px-4 sm:px-6 lg:px-8"
    >
      {/* Avatar + Tagline */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-center">
        <div className="relative mb-8 avatar-glow">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <img
              src="/Arrow.png"
              alt="arrow"
              className="hidden lg:block absolute -top-20 left-48 transform -translate-x-1/2"
            />
          </motion.div>
          <div className="flex justify-center relative w-70 h-70">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <img
                src="/backgroundajeet.png"
                alt="Background"
                className="w-full h-full rounded-full"
                style={{ zIndex: 1 }}
              />
              <motion.img
                src="/ajeet.png"
                alt="Ajeet Sharma"
                className="rounded-full absolute inset-0 w-full h-full mt-3"
                initial={{ y: 80, scale: 0.9 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 80, damping: 25 }}
                style={{ zIndex: 2 }}
              />
            </div>
            <div
              className="absolute inset-0 w-full h-full rounded-full border-4 pointer-events-none"
              style={{ zIndex: 3 }}
            />
          </div>
          <motion.div
            className="absolute -top-14 lg:left-90 left-1/2 transform -translate-x-1/2 text-base sm:text-lg md:text-xl font-bold text-gray-300 whitespace-nowrap"
            animate={{
              y: [0, -10, 0], // smooth vertical bounce
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            Hello! I am <span className="text-purple-400">Ajeet Sharma</span>
          </motion.div>
        </div>

        {/* Slogan */}
        <motion.div
          className="text-2xl sm:text-3xl text-center lg:text-left font-semibold leading-snug mb-2 pt-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          A Developer who <br />
          <span className="text-4xl sm:text-5xl font-bold">
            Judges a book <br /> by its{" "}
            <span className="relative inline-block">
              <span className="text-purple-400 z-10 relative">cover</span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-purple-400 opacity-50 rounded-full blur-sm"
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>
            ...
          </span>
          <motion.p
            className="text-sm mb-8 pt-5 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            Because if the cover does not impress you, what else can?
          </motion.p>
        </motion.div>
      </div>

      {/* Title */}
      <motion.div
        className="text-center lg:text-left w-full max-w-4xl px-10 pt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          I'm a{" "}
          <motion.span
            className="text-purple-400"
            animate={{
              textShadow: [
                "0 0 8px rgba(168, 85, 247, 0)",
                "0 0 8px rgba(168, 85, 247, 0.5)",
                "0 0 8px rgba(168, 85, 247, 0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            Software Engineer.
          </motion.span>
        </h1>
        <p className="text-sm text-gray-300 mb-8">
          Currently, I'm a Software Engineer at{" "}
          <motion.a
            href="https://facebook.com"
            className="text-blue-400 hover:underline inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.99H8v-2.88h2.5V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.88h-2.32v6.99A10 10 0 0 0 22 12z" />
            </svg>
            Facebook
          </motion.a>
        </p>

        <motion.p
          className="max-w-2xl text-lg sm:text-xl text-gray-300 py-4 mx-auto lg:mx-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        >
          A self-taught UI/UX designer, functioning in the industry for 1+ years
          now. I make meaningful and delightful digital products that create an
          equilibrium between user needs and business goals.
        </motion.p>
      </motion.div>
    </div>
  );
}
