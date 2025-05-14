"use client";

import { Mail, MailIcon, Phone, CheckCircle } from "lucide-react";
import CenterButton from "./centerButton";
import { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate inputs
    if (!name || !email || !message) {
      console.error("All fields are required.");
      return;
    }

    setIsSubmitting(true); // Set submitting state

    try {
      const response = await fetch("https://www.form-to-email.com/api/s/N7wLbX9xxD30", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          message: message,
          name: name,
        }),
      });

      if (response.ok) {
        setIsSuccess(true); // Set success state
        console.log("Message sent successfully!");
      } else {
        console.error("Failed to send message:", response.statusText);
        alert("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <>
      <div className="min-h-fit text-white flex items-center justify-center px-8 py-16">
        <div className="max-w-6xl w-full flex flex-col md:flex-row md:space-x-12 space-y-12 md:space-y-0">
          {/* Left: Info Section */}
          <div className="w-full md:w-1/2 px-4 lg:px-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight ">
              Ask whatever you have <br /> in your mind
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-8">
              Whether you have questions or are ready to discuss your business,
              we’re here to help. Reach out today.
            </p>
            <div className="space-y-4 text-sm text-gray-200">
              <div className="flex items-center space-x-3">
                <MailIcon />
                <a
                  href="mailto:ajeet62068bca@gmail.com"
                  className="hover:text-slate-400 transition-colors duration-300 transform hover:scale-105"
                >
                  ajeet62068bca@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone />
                <a
                  href="https://wa.me/916206859849"
                  target="_blank"
                  className="hover:text-slate-400 transition-colors duration-300 transform hover:scale-105"
                >
                  +91 62068 59849
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form Section */}
          <form
            className="w-full md:w-1/2 bg-[#111111] p-6 sm:p-8 rounded-xl shadow-md space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block mb-1 text-sm text-gray-300">Name</label>
              <input
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Jane Smith"
                className="w-full bg-black text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-300">Email</label>
              <input
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="jane@framer.com"
                className="w-full bg-black text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-300">Message</label>
              <textarea
                required
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="Hi, I am reaching out for..."
                rows={4}
                className="w-full bg-black text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
              {isSubmitting ? "Submitting..." : isSuccess ? <CheckCircle className="inline-block w-5 h-5 mr-2" /> : "Submit"}
              {isSuccess ? "Sent" : ""}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}