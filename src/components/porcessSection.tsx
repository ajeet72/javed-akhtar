"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import CenterButton from "./centerButton";
import { cardVariants } from "@/utils/motionConfig";

export default function ProcessSection({ id }: { id: string }) {
  return (
    <section id={id} className="px-6 sm:px-4 md:px-8 overflow-y-hidden">
      <CenterButton name="Process" />
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My Video Editing Process
          </h2>
          <p className="text-gray-400 mt-2 text-sm md:text-base max-w-2xl mx-auto">
            A clear, creative, and professional approach — from concept to final
            delivery. I ensure every frame tells your story with impact.
          </p>
        </div>

        {/* Animated grid of process cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div custom="left" variants={cardVariants}>
            <ProcessCard
              title="Editing Like Johnny Harris"
              description="We discuss your goals, target audience, and style. I analyze your references, script, or raw footage to shape a strong editing direction."
              videoUrl="https://www.youtube.com/embed/Cf_pCwgG36U?enablejsapi=1"
            />
          </motion.div>

          <motion.div custom="bottom" variants={cardVariants}>
            <ProcessCard
              title="Making 3D Map Thumbnail"
              description="I study your video’s theme, target audience, and competitors to define the right style and emotional hook for your thumbnail."
              videoUrl="https://www.youtube.com/embed/EPrY-_RZkv4?enablejsapi=1"
            />
          </motion.div>

          <motion.div custom="right" variants={cardVariants}>
            <ProcessCard
              title="Recreating Responsible Animation"
              description="After feedback rounds, I refine the video for accuracy, pacing, and storytelling impact — delivering in the best formats for your platform."
              videoUrl="https://www.youtube.com/embed/gZZtfNefHJ0?enablejsapi=1"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function ProcessCard({
  title,
  description,
  videoUrl,
}: {
  title?: string;
  description?: string;
  videoUrl?: string;
}) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<any>(null);

  // Load YouTube API script once
  useEffect(() => {
    if (!(window as any).YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    const checkAPI = setInterval(() => {
      if ((window as any).YT && (window as any).YT.Player && iframeRef.current && !playerRef.current) {
        playerRef.current = new (window as any).YT.Player(iframeRef.current, {
          events: {
            onReady: (event: any) => {
              playerRef.current = event.target; // assign immediately when ready
            },
          },
        });
        clearInterval(checkAPI);
      }
    }, 200);

    return () => clearInterval(checkAPI);
  }, []);

  const handleMouseEnter = () => {
    if (playerRef.current && playerRef.current.playVideo) {
      playerRef.current.playVideo();
    }
  };

  const handleMouseLeave = () => {
    if (playerRef.current && playerRef.current.pauseVideo) {
      playerRef.current.pauseVideo();
    }
  };

  const handleFullScreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      } else if ((iframeRef.current as any).webkitRequestFullscreen) {
        (iframeRef.current as any).webkitRequestFullscreen();
      } else if ((iframeRef.current as any).msRequestFullscreen) {
        (iframeRef.current as any).msRequestFullscreen();
      }
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative max-w-lg mx-auto rounded-2xl bg-gradient-to-br from-[#1A0E2A] via-[#1C112D] to-[#11071F] p-[2px] shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-800"
    >
      <div className="rounded-2xl overflow-hidden">
        {/* YouTube Video */}
        <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
          <iframe
            ref={iframeRef}
            width="100%"
            height="100%"
            src={videoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0"
          ></iframe>
        </div>

        {/* Title & Description */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition">
            {title}
          </h3>
          <p className="text-gray-300 text-sm mt-3 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
