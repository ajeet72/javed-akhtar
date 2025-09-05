"use client";

import React from "react";
import { motion } from "framer-motion";
import CenterButton from "./centerButton";
import { cardVariants } from "@/utils/motionConfig";

const testimonials = [
  {
    name: "Samantha Lee",
    text: "The custom map design was stunning—professional, accurate, and visually engaging. Perfectly captured the storytelling we needed!",
  },
  {
    name: "Rahul Mehta",
    text: "Brilliant motion graphics and smooth animations. The transitions felt cinematic, and the final delivery was flawless.",
  },
  {
    name: "Jessica Brown",
    text: "Amazing attention to visual style and detail. The documentary-style edits were impactful and delivered right on time.",
  },
  {
    name: "Mohammed Alvi",
    text: "The map animations were rock-solid and beautifully synced with the narrative. Truly enhanced the overall storytelling.",
  },
  {
    name: "Natalie Zhang",
    text: "The After Effects templates saved us so much time. Responsive, flexible, and they worked seamlessly in Premier Pro too.",
  },
  {
    name: "Carlos Rivera",
    text: "Outstanding creative work—professional thumbnails, engaging edits, and polished renders. Highly recommend!",
  },
];

export default function TestimonialsSection({ id }: { id: string }) {
  return (
    <section id={id} className="text-white px-6 py-20">
      <CenterButton name="Testimonials" />
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">What Clients Say</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Hear from clients who’ve trusted me to deliver professional map designs, engaging animations, and creative video solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="relative p-6 rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden bg-gray-950"
              custom="bottom"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Blur Accent */}
              <div className="absolute -right-[5px] -top-[5px] h-[120px] w-[120px] bg-[rgba(0,128,255,0.4)] rounded-[231px] blur-[40px] z-[1]" />

              <div className="relative z-[2]">
                <p className="text-sm italic mb-4 text-gray-200">
                  "{testimonial.text}"
                </p>
                <h4 className="text-lg font-semibold text-indigo-300">
                  — {testimonial.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
