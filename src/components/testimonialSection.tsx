"use client";

import React from "react";
import { motion } from "framer-motion";
import CenterButton from "./centerButton";
import { cardVariants } from "@/utils/motionConfig";

const testimonials = [
  {
    name: "Samantha Lee",
    text: "The full-stack solution exceeded expectations—clean code, great performance, and smooth deployment!",
  },
  {
    name: "Rahul Mehta",
    text: "Seamless integration between frontend and backend. Highly reliable and scalable work.",
  },
  {
    name: "Jessica Brown",
    text: "Fantastic attention to detail and UI polish. Delivered on time with excellent communication.",
  },
  {
    name: "Mohammed Alvi",
    text: "The authentication system was rock-solid. Loved the responsiveness and clean structure.",
  },
  {
    name: "Natalie Zhang",
    text: "Use of Redis and PostgreSQL was spot on. Real-time features worked flawlessly.",
  },
  {
    name: "Carlos Rivera",
    text: "A truly full-stack experience—from sleek UI to powerful backend APIs. Highly recommend!",
  },
];

export default function TestimonialsSection({ id }: { id: string }) {
  return (
    <section id={id} className="text-white px-6 py-20">
      <CenterButton name="Testimonials" />
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">What Clients Say</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Hear from clients who’ve trusted me to deliver fast, scalable, and impactful full-stack solutions.
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
