"use client";
import { FC } from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  image,
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center${
        reverse ? "md:flex-row-reverse" : ""
      } py-12`}
    >
      {/* Text Section */}
      <div className="space-y-4 text-left">
        <p className="text-sm text-purple-400">Featured Project</p>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="bg-gradient-to-r from-white/10 to-white/5 p-4 rounded-lg text-sm text-gray-300 backdrop-blur-md shadow-md max-w-lg">
          {description}
        </p>
        <div className="flex gap-4 text-white text-xl">
          <span>🌸</span>
          <span>❄️</span>
        </div>
      </div>

      <div className="bg-amber-300 pt-5 pl-5 rounded-2xl">
        <img
          src={image}
          alt={`${title} preview`}
          className="w-32 h-24 grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
