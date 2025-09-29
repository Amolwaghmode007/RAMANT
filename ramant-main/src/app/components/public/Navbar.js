"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Poppins } from "next/font/google";

// ✅ Import Google Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = ["Home", "Services", "Projects", "AboutUs", "Contact"];

  return (
    <div className={poppins.className}>
      {/* Desktop pill navbar (centered at top) */}
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-7 bg-gradient-to-r from-white/80 via-white/60 to-white/80 backdrop-blur-xl border border-white/30 rounded-full px-6 py-3 shadow-lg">
          {/* Logo inside pill */}
          <div className="w-12 h-12 rounded-full bg-white/90 border border-gray-200 shadow grid place-items-center overflow-hidden">
            <Image
              src="/logo2.jpeg"
              alt="Logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>

          <ul className="flex items-center gap-4 text-lg font-medium">
            {menuItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => setActive(item)}
                  className={`px-5 py-2.5 rounded-full transition-all duration-300 tracking-wide relative overflow-hidden ${
                    active === item
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg scale-105"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile navbar (full width at very top) */}
      <nav
        className={`md:hidden fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-white/95 via-white/80 to-white/95 shadow-md"
            : "bg-white/70"
        } backdrop-blur-xl border-b border-white/30`}
      >
        <div className="flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <Image
            src="/logo2.jpeg"
            alt="Logo"
            width={100}
            height={36}
            className="h-9 w-auto object-contain"
          />

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="flex flex-col justify-center focus:outline-none"
          >
            <span
              className={`block w-7 h-0.5 rounded bg-gray-800 mb-1 transition-transform origin-center ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-7 h-0.5 rounded bg-gray-800 mb-1 transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-7 h-0.5 rounded bg-gray-800 transition-transform origin-center ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="px-5 pb-5 space-y-3 text-lg font-medium">
            {menuItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                    setActive(item);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-5 py-3 rounded-2xl transition-all duration-300 ${
                    active === item
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md scale-[1.02]"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
