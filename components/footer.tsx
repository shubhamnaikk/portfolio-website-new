"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaRegCopy,
  FaCheck,
} from "react-icons/fa";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Footer = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (value: string, type: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const email = "shubhammansha.naik@sjsu.edu";
  const phone = "+1 408-639-5672";

  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-black text-neutral-800 dark:text-white">
      {/* 🎆 Background Beams */}
     

      {/* 🌟 Footer Content (positioned above beams) */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full px-4 py-12 border-t border-neutral-200 dark:border-neutral-800"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-neutral-800 dark:bg-white text-white dark:text-black px-6 py-2 rounded-full font-semibold hover:opacity-90 transition"
          >
            Get in touch
          </motion.button>

          <p className="text-sm md:text-base max-w-xl">
          What&rsquo;s next? Feel free to reach out if you&rsquo;re looking for a developer,
          have a query, or simply want to connect.
          </p>

          {/* Email */}
          <div className="flex items-center justify-center gap-2 text-sm md:text-lg">
            <FaEnvelope />
            <span className="font-semibold">{email}</span>
            <button
              onClick={() => handleCopy(email, "email")}
              className="hover:text-gray-600 transition"
              title="Copy email"
            >
              {copied === "email" ? (
                <FaCheck className="text-green-500" />
              ) : (
                <FaRegCopy />
              )}
            </button>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center gap-2 text-sm md:text-lg">
            <FaPhoneAlt />
            <span className="font-semibold">{phone}</span>
            <button
              onClick={() => handleCopy(phone, "phone")}
              className="hover:text-gray-600 transition"
              title="Copy phone"
            >
              {copied === "phone" ? (
                <FaCheck className="text-green-500" />
              ) : (
                <FaRegCopy />
              )}
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-4 text-xl">
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/shubhamnaikk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/shubhammnaik/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition"
            >
              <FaLinkedin />
            </motion.a>
          </div>

          {/* Footer note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="border-t border-neutral-200 dark:border-neutral-800 w-full pt-6 text-sm text-neutral-500 dark:text-neutral-400"
          >
            © {new Date().getFullYear()} |{" "}
            <span className="underline underline-offset-2">Designed</span> and{" "}
            <span className="underline underline-offset-2">coded</span> with{" "}
            <span className="text-red-500">❤️</span> by Shubham Naik
          </motion.div>
        </div>
      </motion.footer>
       <BackgroundBeams className="z-0 " />
    </div>
  );
};

export default Footer;
