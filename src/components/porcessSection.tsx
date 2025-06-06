"use client";
import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import { motion } from 'framer-motion';

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
            Our Development Process
          </h2>
          <p className="text-gray-400 mt-2 text-sm md:text-base max-w-2xl mx-auto">
            A clear, tested, and professional path from discovery to deployment.
            We deliver robust software every step of the way.
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
        <h3 className="text-xl font-semibold">Launch & Maintain</h3>
        <p className="text-gray-400 text-sm mt-2">
          We deploy your solution seamlessly and ensure continuous performance
          with proactive monitoring.
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
        <h3 className="text-xl font-semibold">Development & Test</h3>
        <p className="text-gray-400 text-sm mt-2">
          We craft tailored solutions for your goals and rigorously test them —
          with just the right amount of memes.
        </p>
      </div>
    </div>
  );
}

function DiscoveryAnalysisProcess() {
  return (
    <div className={cardWrapper}>
      <div className="bg-[#1a1a1a] rounded-2xl p-4 flex flex-col h-full">
        {/* Window Controls */}
        <div className="flex space-x-2 mb-3">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          {/* Left Side */}
          <div className="flex flex-col gap-11">
            {/* Animated Bars */}
            <div className="flex items-end justify-between h-28">
              <div className="w-2 bg-gray-600 h-6 rounded-sm" />
              <div className="w-2 bg-gray-600 h-8 rounded-sm" />
              <div className="w-2 bg-gray-600 h-4 rounded-sm" />
              <div className="w-2 bg-gray-600 h-4 rounded-sm" />
              <div className="w-2 bg-gray-600 h-12 rounded-sm" />
              <div className="w-2 bg-gray-600 h-6 rounded-sm" />
              <div className="w-2 bg-indigo-500 h-18 rounded-sm animate-pulse" />
            </div>

            <div className="bg-gray-800 rounded-lg p-2 animate-pulse">
              {/* Skeleton Text Lines */}
              <div className="space-y-2">
                <div className="h-2 bg-gray-700 rounded w-3/4"></div>
                <div className="h-3 bg-gray-700 rounded w-5/6"></div>
                <div className="h-2 bg-gray-700 rounded w-2/3"></div>
                <div className="h-2 bg-gray-700 rounded w-5/6"></div>
                <div className="h-2 bg-gray-700 rounded w-3/6"></div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-11 justify-center">
            {/* Animated Bars */}
            <div className="relative ml-5">
              <Target className="w-26 h-26 text-gray-400" />
              <div className="absolute top-11 left-12 w-3 h-3 bg-indigo-500 rounded-full animate-ping" />
            </div>

            <div className="bg-gray-800 rounded-lg p-2 animate-pulse">
              <div className="space-y-2">
                <div className="h-2 bg-gray-700 rounded w-5/6"></div>
                <div className="h-2 bg-gray-700 rounded w-2/3"></div>
                <div className="h-2 bg-gray-700 rounded w-3/4"></div>
                <div className="h-2 bg-gray-700 rounded w-3/6"></div>
                <div className="h-3 bg-gray-700 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Focus / Insight Tags */}
        <div className="flex justify-between gap-2 mt-3">
          <div className="bg-indigo-600/20 text-indigo-300 rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1">
            <BarChart3 className="w-3 h-3" /> Churn ↑
          </div>
          <div className="bg-green-600/20 text-green-300 rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1">
            🎯 PM-Fit Focus
          </div>
        </div>
      </div>

      {/* Title & Description */}
      <div className="pt-4">
        <h3 className="text-xl font-semibold">Discovery & Analysis</h3>
        <p className="text-gray-400 text-sm mt-2">
          We explore your product landscape and uncover actionable strategies to
          guide long-term direction.
        </p>
      </div>
    </div>
  );
}