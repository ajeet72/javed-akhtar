"use client";
import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import { motion } from 'framer-motion';

import { useRef } from "react";
import { FileText, Film, Palette, Clapperboard, Maximize2 } from "lucide-react";

import {
  Gauge,
  RefreshCw,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Target,
  BarChart3,
} from "lucide-react";
import CenterButton from "./centerButton";
import { cardVariants } from "@/utils/motionConfig";

const codeSnippets = [
  `function safelyAccessUser(user?: { name: string }): string {
    if (!user) {
      return "🤷‍♂️ User left the universe (or you forgot a null check)";
    }
    const username = user.name;
    return username
      ? username
      : "🤷‍♂️ Mysterious entity detected — no name provided.";
  }`,

  `setTimeout(() => {
    console.log("⏳ Still waiting...");
  }, 1000 * 60 * 60 * 24 * 365); // 1 year

  function giveUp() {
    console.log("🥲 Maybe next year...");
  }

  giveUp();`,

  `function isBugAFeature(bug: boolean): string {
    if (bug) return "✅ It's a feature now!";
    return "🧐 Still a feature, but undocumented.";
  }

  console.log(isBugAFeature(true));`,

  `const crush = undefined;
  const backup = null;
  const reality = crush ?? backup ?? "💔 Stay single, stay productive";

  function love() {
    return reality;
  }

  console.log(love());`,

  `const day = ["☕", "💻", "😵", "☕", "💻", "🤯", "🛌"];

  for (let i = 0; i < day.length; i++) {
    console.log(\`Hour \${i + 1}: \${day[i]}\`);
  }

  console.log("🔁 Repeat tomorrow");`,

  `const isProd = true;

  function testFeature() {
    if (isProd) {
      throw new Error("🚨 You’re testing in production. Again.");
    }
    console.log("✅ Safe to test!");
  }

  testFeature();`,
];

const cardWrapper =
  "bg-gradient-to-br from-[#1A0E2A] via-[#1C112D] to-[#11071F] transition duration-300 text-white p-6 rounded-3xl shadow-lg flex flex-col justify-between min-h-[500px] border border-gray-800";

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
            A clear, creative, and professional approach — from concept to final delivery. I ensure every frame tells your story with impact.
          </p>
        </div>

        {/* Animated grid of process cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div custom="left" variants={cardVariants} initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
            <DiscoveryAnalysisProcess />
          </motion.div>
          <motion.div custom="bottom" variants={cardVariants} initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
            <DevelopmentTestProcess />
          </motion.div>
          <motion.div custom="right" variants={cardVariants} initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
            <LaunchMaintainProcess />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


export function CheckingCard() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to start
    }
  };

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-black 
                 text-white rounded-2xl p-6 border border-gray-800 shadow-lg 
                 hover:shadow-2xl transition-all flex flex-col justify-between 
                 min-h-[350px] md:min-h-[500px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Cinematic Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 via-transparent to-purple-800/20 blur-3xl"></div>
      {/* Video Preview */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative w-full h-40 md:h-56 rounded-xl overflow-hidden border border-gray-700 shadow-md"
      >
        <video
          ref={videoRef}
          src="/videoEditingService/PdfCard.mp4"
          muted
          playsInline
          className="w-full h-full object-cover absolute top-0 left-0"
        />
      </motion.div>

      {/* Bottom Content */}
      <div className="mt-6 relative z-10">
        <h3 className="text-xl font-semibold mb-2">Editing Like Johnny Harris</h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          We discuss your goals, target audience, and style. I analyze your references, script, or raw footage to shape a strong editing direction.
        </p>
      </div>
    </motion.div>
  );
}



function LaunchMaintainProcess() {
  const [selectedFeature, setSelectedFeature] = useState("Efficiency");

  const features = [
    { icon: ShieldCheck, label: "Security" },
    { icon: Gauge, label: "Efficiency" },
    { icon: Zap, label: "Speed" },
    { icon: CheckCircle2, label: "Accuracy" },
    { icon: Target, label: "Reliability" },
  ];

  const BUTTON_HEIGHT = 30; 
  const BUTTON_MARGIN = 10; 
  const getTop = (idx: number) => idx * (BUTTON_HEIGHT + BUTTON_MARGIN);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedFeature((prevFeature) => {
        const currentIndex = features.findIndex(
          (feature) => feature.label === prevFeature
        );
        const nextIndex = (currentIndex + 1) % features.length;
        return features[nextIndex].label;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [features]);

  const selectedIdx = features.findIndex(f => f.label === selectedFeature);

  return (
    <div className={cardWrapper}>
      <div className="bg-[#1a1a1a] rounded-2xl p-4 flex-1 flex flex-col space-y-4">
        {/* Window Controls */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-400 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>

        {/* Main Content */}
        <div className="flex flex-1 pt-2">
          <div className="w-1/2 relative" style={{ minHeight: `${features.length * (BUTTON_HEIGHT + BUTTON_MARGIN)}px` }}>
            {/* Animated background */}
            <div
              className="absolute left-0 w-full h-10 bg-[#333] rounded-lg z-0 transition-all duration-300"
              style={{
                top: `${getTop(selectedIdx)}px`,
                boxShadow: "0 4px 24px 0 rgba(0,0,0,0.15)",
              }}
            />
            {/* Buttons */}
            <div className="relative z-10 flex flex-col">
              {features.map(({ icon: Icon, label }, idx) => (
                <button
                  key={label}
                  onClick={() => setSelectedFeature(label)}
                  className={`flex items-center space-x-1 w-full text-left cursor-pointer h-10 px-2 py-0
                    transition-all duration-300 ease-in-out
                    ${selectedFeature === label ? "font-semibold text-white" : "text-gray-400 hover:text-white"}
                  `}
                  style={{
                    background: "transparent",
                    position: "relative",
                  }}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors duration-300 ${
                      selectedFeature === label ? "text-white" : "text-gray-400"
                    }`}
                  />
                  <span
                    className={`text-sm transition-colors duration-300 ${
                      selectedFeature === label ? "font-medium text-white" : "text-gray-400"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Status */}
          <div className="w-1/2 flex flex-col items-center justify-center text-center space-y-2">
            <span className="text-sm text-gray-300">Status:</span>
            {selectedFeature === "Efficiency" && (
              <>
                <RefreshCw className="animate-spin w-6 h-6 text-white" />
                <div className="w-40 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-gradient-to-r from-green-400 to-blue-500 animate-pulse" />
                </div>
                <p className="text-xs text-gray-400">Deploying updates...</p>
              </>
            )}
            {selectedFeature === "Security" && (
              <>
                <ShieldCheck className="w-6 h-6 text-green-400 drop-shadow-lg" />
                <p className="text-xs text-green-300">
                  Secure and fortified 🔒
                </p>
              </>
            )}
            {selectedFeature === "Speed" && (
              <>
                <Zap className="w-6 h-6 text-yellow-400 animate-ping" />
                <p className="text-xs text-yellow-300">Blazing fast ⚡</p>
              </>
            )}
            {selectedFeature === "Accuracy" && (
              <>
                <CheckCircle2 className="w-6 h-6 text-blue-400" />
                <p className="text-xs text-blue-300">100% Precision 📊</p>
              </>
            )}
            {selectedFeature === "Reliability" && (
              <>
                <Target className="w-6 h-6 text-indigo-400" />
                <p className="text-xs text-indigo-300">Always on target 🎯</p>
              </>
            )}
          </div>
        </div>

        {/* Deployment Info */}
        <div className="bg-black/40 rounded-lg p-2 text-xs text-gray-400">
          <p>
            Last Deployed: <span className="text-white">12 mins ago</span>
          </p>
          <p>
            Uptime: <span className="text-white">99.98%</span>
          </p>
        </div>
      </div>

      {/* Title & Description */}
      <div className="pt-4">
        <h3 className="text-xl font-semibold">Recreating Responsible Animation</h3>
        <p className="text-gray-400 text-sm mt-2">
          After feedback rounds, I refine the video for accuracy, pacing, and storytelling impact — delivering in the best formats for your platform.
        </p>
      </div>
    </div>
  );
}

export function DevelopmentTestProcess() {
  const [displayedText, setDisplayedText] = useState("");
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [highlightedHtml, setHighlightedHtml] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const highlighted = Prism.highlight(
      displayedText,
      Prism.languages.typescript,
      "typescript"
    );
    setHighlightedHtml(highlighted);
  }, [displayedText, isClient]);

  useEffect(() => {
    if (!isClient) return;

    const currentSnippet = codeSnippets[snippetIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentSnippet.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentSnippet.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 20);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setDisplayedText(currentSnippet.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 10);
    } else if (!isDeleting && charIndex === currentSnippet.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, snippetIndex, isClient]);

  return (
    <div className={cardWrapper}>
      <div className="bg-[#1a1a1a] rounded-2xl px-6 pt-3 pb-5 font-mono text-sm leading-6 flex-grow flex flex-col">
        <div className="flex space-x-2 mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        <div className="flex-1 overflow-auto">
          <pre className="text-left whitespace-pre-wrap break-all">
            {isClient ? (
              <code
                className="language-typescript"
                dangerouslySetInnerHTML={{ __html: highlightedHtml }}
                style={{
                  display: "inline-block",
                  wordBreak: "break-word",
                  whiteSpace: "pre-wrap",
                }}
              />
            ) : (
              <code>Loading...</code>
            )}
            {isClient && displayedText.length > 0 && (
              <span className="text-white animate-pulse">|</span>
            )}
          </pre>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Making 3D Map Thumbnail</h3>
        <p className="text-gray-400 text-sm mt-2">
          I study your video’s theme, target audience, and competitors to define the right style and emotional hook for your thumbnail.
        </p>
      </div>
    </div>
  );
}

function DiscoveryAnalysisProcess() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [player, setPlayer] = useState<any>(null);

  // Load YT API and initialize player once
  useEffect(() => {
    if ((window as any).YT && (window as any).YT.Player) {
      createPlayer();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);

      (window as any).onYouTubeIframeAPIReady = () => {
        createPlayer();
      };
    }
  }, []);

  const createPlayer = () => {
    if (iframeRef.current) {
      const ytPlayer = new (window as any).YT.Player(iframeRef.current, {
        events: {
          onReady: () => setPlayer(ytPlayer),
        },
      });
    }
  };

  const handleMouseEnter = () => {
    if (player) player.playVideo();
  };

  const handleMouseLeave = () => {
    if (player) player.pauseVideo();
  };

  const handleFullScreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      } else if ((iframeRef.current as any).webkitRequestFullscreen) {
        (iframeRef.current as any).webkitRequestFullscreen(); // Safari
      } else if ((iframeRef.current as any).msRequestFullscreen) {
        (iframeRef.current as any).msRequestFullscreen(); // IE11
      }
    }
  };

  return (
    <div
      className={cardWrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col relative overflow-hidden">
        {/* YouTube Video (no border) */}
        <div className="relative w-full md:h-56 overflow-hidden">
          <iframe
            ref={iframeRef}
            id="yt-player"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Cf_pCwgG36U?enablejsapi=1&controls=0"
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0"
          ></iframe>

          {/* Fullscreen Button */}
          <button
            onClick={handleFullScreen}
            className="absolute bottom-2 right-2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Title & Description */}
      <div className="pt-4">
        <h3 className="text-xl font-semibold">Editing Like Johnny Harris</h3>
        <p className="text-gray-400 text-sm mt-2">
          We discuss your goals, target audience, and style. I analyze your
          references, script, or raw footage to shape a strong editing direction.
        </p>
      </div>
    </div>
  );
}