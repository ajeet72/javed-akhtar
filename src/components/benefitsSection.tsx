"use client";

import React from "react";
import { Check, TrendingUp, Activity } from "lucide-react";
import CenterButton from "./centerButton";
import { motion } from "framer-motion";
import { cardVariants } from "@/utils/motionConfig";

const benefits = [
  {
    icon: <Activity className="w-6 h-6 text-white" />,
    title: "Cost reduction",
    description:
      "Build lightweight, scalable web apps with optimized backend logic to reduce infrastructure and maintenance costs.",
  },
  {
    icon: <Check className="w-6 h-6 text-white" />,
    title: "Improved outcomes",
    description:
      "Translate complex client requirements into custom full-stack solutions that directly improve user engagement and ROI.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    title: "Increased productivity",
    description:
      "Automate repetitive workflows and streamline business operations through well-integrated systems and APIs.",
  },
];

export default function BenefitsSection({ id }: { id: string }) {
  return (
    <section id="benefits" className="text-white px-6">
      <CenterButton name="Benefits" />
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Maximize efficiency and impact
        </h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Discover the key benefits of partnering with me as your freelance
          full-stack developer.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              className="relative p-6 rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden bg-gray-950"
              custom="bottom"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="absolute -right-[5px] -top-[5px] h-[120px] w-[120px] bg-[rgba(47,0,255,0.5)] rounded-[231px] blur-[40px] z-[1]" />

              <div className="relative z-[2]">
                <div className="mb-4 bg-gray-800 p-2 rounded-md inline-block">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
