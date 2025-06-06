"use client";

import { MailIcon, CheckCircle, MessageCircle } from "lucide-react";
import CenterButton from "./centerButton";
import { useState } from "react";
import { motion } from "framer-motion";
import { cardVariants } from "@/utils/motionConfig";


export default function ContactForm({ id }: { id: string }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://www.form-to-email.com/api/s/N7wLbX9xxD30",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, message, name }),
        }
      );

      if (response.ok) {
        setIsSuccess(true);
        console.log("Message sent successfully!");
      } else {
        console.error("Failed to send message:", response.statusText);
        alert("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
        delay: 0.8,
      },
    },
  };

  return (
    <div id={id}>
      <CenterButton name="Contact" />
      <div className="min-h-fit text-white flex items-center justify-center px-6 overflow-x-hidden">
        <div className="max-w-6xl w-full flex flex-col md:flex-row md:space-x-12 space-y-12 md:space-y-0">
          {/* Left: Info Section */}
          <motion.div
            className="w-full md:w-1/2 px-4 lg:px-0"
            custom="left"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ask whatever you have <br /> in your mind
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-8">
              Whether you have questions or are ready to discuss your business,
              we're here to help. Reach out today.
            </p>
            <motion.div
              className="space-y-4 text-sm text-gray-200"
              variants={itemVariants}
            >
              <motion.div
                className="flex items-center space-x-3"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MailIcon className="text-purple-400" />
                <a
                  href="mailto:ajeet62068bca@gmail.com"
                  className="hover:text-slate-400 transition-colors duration-300"
                >
                  ajeet62068bca@gmail.com
                </a>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MessageCircle className="text-purple-400" />
                <a
                  href="https://wa.me/916206859849"
                  target="_blank"
                  className="hover:text-slate-400 transition-colors duration-300"
                >
                  +91 62068 59849
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Form Section */}
          <motion.form
            className="w-full md:w-1/2 bg-[#111111] p-6 sm:p-8 rounded-xl shadow-md space-y-6"
            onSubmit={handleSubmit}
            custom="right"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <label className="block mb-1 text-sm text-gray-300">Name</label>
              <input
                required
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Jane Smith"
                className="w-full bg-black text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-300">Email</label>
              <input
                required
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="jane@example.com"
                className="w-full bg-black text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-300">
                Message
              </label>
              <textarea
                required
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi, I am reaching out for..."
                rows={3}
                className="w-full bg-black text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className={`cursor-pointer w-full py-3 rounded-md font-semibold transition-colors ${
                isSubmitting
                  ? "bg-gray-500 text-gray-300"
                  : isSuccess
                  ? "bg-[#6633FF] text-white"
                  : "bg-[#6633FF] hover:bg-[#4b25cc] text-white"
              }`}
              disabled={isSubmitting || isSuccess}
            >
              {isSubmitting ? (
                "Submitting..."
              ) : isSuccess ? (
                <>
                  <CheckCircle className="inline-block w-5 h-5 mr-2" />
                  Sent
                </>
              ) : (
                "Submit"
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
