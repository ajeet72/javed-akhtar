"use client";
import { AnimatePresence, motion } from "framer-motion";
import CenterButton from "./centerButton";
import { Map, Film, Sparkles, Layers } from "lucide-react";


import {
  Bot,
  Users,
  Cpu,
  Wrench,
  Activity,
  MessageSquareText,
  LayoutDashboard,
  BadgeCheck,
  Cloud,
  CreditCard,
  TrendingUp,
  Globe,
  Search,
  ShieldCheck,
  Zap,
  Globe2,
} from "lucide-react";
import { cardVariants } from "@/utils/motionConfig";
import { useEffect, useState } from "react";

export default function ServiceSection({ id }: { id: string }) {
  return (
    <div id={id} className="overflow-x-hidden">
      <CenterButton name="Services" />
      <FeatureCards />
      <AIDashboard />
    </div>
  );
}

export function FeatureCards() {
  return (
    <div className="flex items-center justify-center px-6 pb-6">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <motion.div
          custom="left"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <BusinessChatbotCard />
        </motion.div>

        <motion.div
          custom="bottom"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <MvpWebAppCard />
        </motion.div>

        <motion.div
          custom="right"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <MaintenanceTrackerCard />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function BusinessChatbotCard() {
  const images = ["/mapImages/13.png", "/mapImages/1.png", "/mapImages/2.png"]; // Add your image paths
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-black text-white rounded-2xl p-6 border border-gray-800 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between min-h-[350px] md:min-h-[500px] overflow-hidden"
    >
      {/* Cinematic Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 via-transparent to-purple-800/20 blur-3xl"></div>

      {/* Top Tag */}
      <div className="mb-4 text-sm text-gray-400 flex items-center gap-2 relative z-10">
        <Map className="text-red-400" size={20} />
        Custom Map
      </div>

      {/* Preview / Thumbnail with Slideshow */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative w-full h-40 md:h-56 rounded-xl overflow-hidden border border-gray-700 shadow-md"
      >
        <AnimatePresence>
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt="Custom Map Preview"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full object-cover absolute top-0 left-0"
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
          <div className="flex items-center gap-2 text-xs text-gray-300">
            <Film size={14} className="text-red-400" />
            Cinematic Showcase
          </div>
        </div>
      </motion.div>

      {/* Bottom Content */}
      <div className="mt-6 relative z-10">
        <h3 className="text-xl font-semibold mb-2">
          Styled Maps for Your Projects
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          Perfect for data visualization, storytelling, and documentaries.
        </p>
        <p className="text-sm text-gray-300 mt-3">
          Create professional, custom-styled maps from <span className="text-white font-medium">Mapbox</span> and
          integrate them into <span className="text-white font-medium">GeoLayers 3</span>.
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 text-xs text-gray-400 pt-4 relative z-10">
        <span className="bg-[#1a1a1a] px-3 py-1 rounded-full flex items-center gap-1">
          <Layers size={12} className="text-purple-400" /> GeoLayers 3
        </span>
        <span className="bg-[#1a1a1a] px-3 py-1 rounded-full flex items-center gap-1">
          <Film size={12} className="text-red-400" /> Storytelling
        </span>
        <span className="bg-[#1a1a1a] px-3 py-1 rounded-full flex items-center gap-1">
          <Map size={12} className="text-green-400" /> Mapbox
        </span>
      </div>
    </motion.div>
  );
}


function MvpWebAppCard() {
  return (
    <div className="bg-gradient-to-br from-[#1A0E2A] via-[#1C112D] to-[#11071F] text-white rounded-2xl p-6 border border-gray-800 shadow-md hover:shadow-xl transition-all flex flex-col justify-between min-h-[350px] md:min-h-[500px]">
      <div>
        <div className="mb-3 text-sm text-gray-400 flex items-center gap-2">
          <LayoutDashboard className="text-cyan-400" size={20} />
          Build Engine + Dev Metrics
        </div>
        <div className="bg-[#1e1e1e] rounded-lg p-4 space-y-2 border border-gray-700 text-xs font-mono text-green-400">
          <p>&gt; npm run build</p>
          <p>✔ Optimizing images & fonts</p>
          <p>✔ Bundling 4 routes (SSG)</p>
          <p className="text-yellow-400">⚠ LCP: 1.9s - Optimization Needed</p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm mt-3 text-gray-300">
          <div className="bg-[#1a1a1a] p-3 rounded-lg flex flex-col text-center">
            <Users size={18} className="mx-auto text-purple-400" />
            <span>Client-Ready MVP</span>
            <span className="text-green-400 text-xs">~30 days</span>
          </div>
          <div className="bg-[#1a1a1a] p-3 rounded-lg flex flex-col text-center">
            <Cpu size={18} className="mx-auto text-orange-400" />
            <span>Scalable Backend</span>
            <span className="text-yellow-400 text-xs">Auto Scaling</span>
          </div>
        </div>
        <div className="text-xs text-gray-400 mt-3 border-t border-gray-700 pt-2 space-y-1">
          <div className="flex items-center gap-2">
            <BadgeCheck size={14} className="text-green-400" /> CI/CD Pipeline
            Setup
          </div>
          <div className="flex items-center gap-2">
            <BadgeCheck size={14} className="text-green-400" /> Auth + Role
            Access
          </div>
          <div className="flex items-center gap-2">
            <BadgeCheck size={14} className="text-green-400" /> REST & GraphQL
            APIs
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-1">
          MVP & Web App Development
        </h3>
        <p className="text-sm text-gray-400">
          From dev metrics to deploy — get a robust, scalable MVP or web app
          tailored to your startup’s goals, fast.
        </p>
      </div>
    </div>
  );
}

function MaintenanceTrackerCard() {
  return (
    <div className="bg-gradient-to-br from-[#1A0E2A] via-[#1C112D] to-[#11071F] text-white rounded-2xl p-6 border border-gray-800 shadow-md hover:shadow-xl transition-all flex flex-col justify-between min-h-[350px] md:min-h-[500px]">
      <div>
        <div className="mb-3 text-sm text-gray-400 flex items-center gap-2">
          <Wrench className="text-yellow-400" size={20} />
          Maintenance Tracker
        </div>
        <div className="bg-[#1e1e1e] p-4 rounded-lg space-y-3 border border-gray-700 text-sm text-gray-300">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#1a1a1a] p-2 rounded-lg flex items-center justify-between">
              <span>📁 DB Backups</span>
              <BadgeCheck className="text-green-400" size={16} />
            </div>
            <div className="bg-[#1a1a1a] p-2 rounded-lg flex items-center justify-between">
              <span>🔒 SSL Renewed</span>
              <BadgeCheck className="text-green-400" size={16} />
            </div>
          </div>
          <div className="bg-[#161616] p-2 rounded-md text-xs font-mono text-gray-400 space-y-1 border border-gray-700">
            <p className="text-green-400">[INFO] Deploy v3.4 → success ✅</p>
            <p className="text-yellow-400">[WARN] Memory usage 82%</p>
            <p className="text-red-400">[ERROR] API latency spike</p>
            <p className="text-blue-400">[PING] Health check OK</p>
          </div>
          <div className="bg-[#1a1a1a] p-2 rounded-md flex justify-between items-center text-sm">
            <span className="flex items-center gap-2">
              <Activity size={16} className="text-green-500" />
              Uptime
            </span>
            <span className="text-green-300">99.97%</span>
          </div>
          <div className="text-xs text-gray-400 pt-2 space-y-1 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">📅 Patch Update</span>
              <span>25 May, 2AM</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">🧼 Cache Cleanup</span>
              <span>Weekly</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-1">Maintenance & Support</h3>
        <p className="text-sm text-gray-400">
          From uptime monitoring to scheduled patches and deployment logs — we
          make sure your app runs smoothly 24/7.
        </p>
      </div>
    </div>
  );
}

export function AIDashboard() {
  return (
    <div className="flex flex-col items-center justify-center px-6 text-white overflow-x-hidden">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div custom="left" variants={cardVariants} initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          <IntegrationCard />
        </motion.div>
        <motion.div custom="right" variants={cardVariants} initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          <AnalyticsCard />
        </motion.div>
      </motion.div>
    </div>
  );
}

// IntegrationCard.tsx

export function IntegrationCard() {
  return (
    <div className="bg-gradient-to-br from-[#1A0E2A] via-[#1C112D] to-[#11071F] rounded-2xl p-6 border border-gray-800 shadow-md hover:shadow-xl transition-all flex flex-col justify-between min-h-[350px] md:min-h-[400px]">
      <div>
        <div className="mb-3 text-sm text-gray-400 flex items-center gap-2">
          <CreditCard className="text-purple-400" size={20} />
          Third-Party Integrations
        </div>
        <div className="bg-[#1e1e1e] rounded-lg p-4 space-y-2 border border-gray-700 text-sm text-gray-300">
          <div className="flex justify-between items-center">
            <span>🔑 API Key Valid</span>
            <BadgeCheck className="text-green-400" size={16} />
          </div>
          <div className="flex justify-between items-center">
            <span>💳 Razorpay Linked</span>
            <BadgeCheck className="text-green-400" size={16} />
          </div>
          <div className="flex justify-between items-center">
            <span>📦 Stripe Connected</span>
            <BadgeCheck className="text-green-400" size={16} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm mt-3 text-gray-300">
          <div className="bg-[#1a1a1a] p-3 rounded-lg flex flex-col text-center">
            <Cloud size={18} className="mx-auto text-blue-400" />
            <span>Cloud Sync</span>
            <span className="text-green-400 text-xs">Real-time</span>
          </div>
          <div className="bg-[#1a1a1a] p-3 rounded-lg flex flex-col text-center">
            <Zap size={18} className="mx-auto text-yellow-400" />
            <span>Fast Payments</span>
            <span className="text-yellow-400 text-xs">1s Avg Time</span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-1">API & Payment Gateway</h3>
        <p className="text-sm text-gray-400">
          Integrate industry-standard gateways like Stripe, Razorpay, and Amazon
          Pay to handle payments securely and seamlessly — fully managed,
          scalable, and developer-ready.
        </p>
      </div>
    </div>
  );
}

// AnalyticsCard.tsx

export function AnalyticsCard() {
  return (
    <div className="bg-gradient-to-br from-[#1A0E2A] via-[#1C112D] to-[#11071F] rounded-2xl p-6 border border-gray-800 shadow-md hover:shadow-xl transition-all flex flex-col justify-between min-h-[350px] md:min-h-[400px]">
      <div>
        <div className="mb-3 text-sm text-gray-400 flex items-center gap-2">
          <TrendingUp className="text-pink-400" size={20} />
          AI Insights Engine
        </div>
        <div className="bg-[#1e1e1e] p-4 rounded-lg space-y-3 border border-gray-700 text-sm text-gray-300">
          <div className="flex justify-between items-center">
            <span>📊 Conversion Rate</span>
            <span className="text-green-400">+18.3%</span>
          </div>
          <div className="flex justify-between items-center">
            <span>🔍 Top Keyword</span>
            <span className="text-yellow-400">"best deals"</span>
          </div>
          <div className="flex justify-between items-center">
            <span>🌍 Global Reach</span>
            <span className="text-blue-400">37 countries</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm mt-3 text-gray-300">
          <div className="bg-[#1a1a1a] p-3 rounded-lg flex flex-col text-center">
            <Search size={18} className="mx-auto text-teal-400" />
            <span>SEO Intelligence</span>
            <span className="text-green-400 text-xs">Auto Insights</span>
          </div>
          <div className="bg-[#1a1a1a] p-3 rounded-lg flex flex-col text-center">
            <Globe size={18} className="mx-auto text-orange-400" />
            <span>Geo Trends</span>
            <span className="text-yellow-400 text-xs">Live Feed</span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-1">AI Analytics Suite</h3>
        <p className="text-sm text-gray-400">
          Leverage real-time insights with GPT-powered analytics, SEO
          automation, global user behavior mapping, and performance forecasts.
        </p>
      </div>
    </div>
  );
}
