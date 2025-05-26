import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="font-bold text-lg">Trainix</span>
          <span className="block text-green-200 text-sm mt-1">
            &copy; {new Date().getFullYear()} All rights reserved.
          </span>
        </div>
        <div className="flex space-x-6 justify-center">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
            aria-label="Instagram"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="Twitter"
          >
            <FaTwitter size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}