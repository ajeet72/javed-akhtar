"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  projectUrl: string;
  scrollImage: boolean;
  reverse?: boolean;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  image,
  projectUrl,
  scrollImage,
  reverse = false,
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: reverse ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "backOut" },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.6 },
    },
  };

  const emojiVariants = {
    rest: { scale: 1 },
    hover: {
      scale: [1, 1.2, 1],
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className={`cursor-pointer flex flex-col md:flex-row items-center justify-center px-6 sm:px-12 md:px-14 lg:px-20 xl:px-28 2xl:max-w-[1400px] 2xl:mx-auto py-12 gap-8 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Text Section */}
      <motion.div
        className={`space-y-4 w-full md:w-8xl ${
          reverse ? "text-right" : "text-left"
        }`}
        variants={containerVariants}
      >
        <motion.p className="text-sm text-purple-400" variants={itemVariants}>
          Featured Project
        </motion.p>
        <motion.h3
          className="text-2xl font-bold text-white"
          variants={itemVariants}
        >
          {title}
        </motion.h3>
        <motion.div variants={itemVariants}>
          <motion.p
            className={`${
              reverse ? "text-left" : ""
            } relative w-full min-w-[280px] backdrop-blur-lg bg-gradient-to-r from-white/10 to-white/5 p-4 rounded-lg text-sm text-gray-300 shadow-md`}
            whileHover={{
              scale: 1.01,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
            }}
          >
            {description}
          </motion.p>
        </motion.div>
        <motion.div
          className={`flex gap-4 text-white text-xl ${
            reverse ? "justify-end" : "justify-start"
          }`}
          variants={itemVariants}
        >
          <motion.span
            variants={emojiVariants}
            initial="rest"
            whileHover="hover"
          >
            🌸
          </motion.span>
          <motion.span
            variants={emojiVariants}
            initial="rest"
            whileHover="hover"
          >
            ❄️
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <Link
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`Visit ${title} project`}
      >
        <motion.div
          className={`bg-[#1A0B2E] rounded-3xl shadow-lg overflow-hidden ${
            reverse ? "pt-10 pr-6" : "pt-10 pl-6"
          }`}
          variants={imageVariants}
          whileHover="hover"
          style={{ height: scrollImage ? "300px" : "auto" }} // fixed height
        >
          <motion.div
            className="w-full"
            animate={
              scrollImage
                ? { y: ["0%", "-85%", "0%"] } // scroll full up and back
                : undefined
            }
            transition={
              scrollImage
                ? {
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                  }
                : undefined
            }
            variants={{
              hover: {
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(168, 85, 247, 0.2)",
              },
            }}
          >
            <motion.img
              src={image}
              alt={`${title} preview`}
              className="lg:w-4xl w-6xl h-auto rounded-tl-lg transition-all duration-300"
            />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
