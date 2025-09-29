'use client';
import Navbar from "./components/public/Navbar";
import { motion } from "framer-motion";
import Services from "./services/page";
import VisionMission from "./visionpage/page";
import Projects from "./projects/page";
import AboutUs from "./about-us/page";
import ContactUs from "./contacts-us/page";
import Footer from "./footer/page";
import { useEffect, useState, useRef } from "react";

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const canvasRef = useRef(null);

  // Animated background with particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particles animation
    const particles = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `rgba(180, 220, 255, ${Math.random() * 0.4})`
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Soft white gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#f8fafc');
      gradient.addColorStop(0.5, '#f1f5f9');
      gradient.addColorStop(1, '#e2e8f0');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Typing animation
  useEffect(() => {
    const texts = ["Modern", "Scalable", "Interactive", "Responsive"];
    const current = currentTextIndex % texts.length;
    const fullText = texts[current];

    const handleTyping = () => {
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(typingSpeed / 1.5);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        setTypingSpeed(100);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, typingSpeed]);

  return (
    <>
      <Navbar />

      {/* Hero Section with Premium White Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans px-4 md:px-6 py-16 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Animated Canvas Background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
        
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 to-cyan-50/20"></div>

        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">
          {/* Left Content - Text and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-800">
              Build{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
              <br />
              Web & Mobile Apps
            </h1>
            
            <p className="text-slate-600 text-base md:text-lg max-w-md mx-auto lg:mx-0">
              We design, develop, and deliver digital solutions that help startups and enterprises scale.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 transition-all px-6 py-3 md:px-8 md:py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/30"
              >
                Get Started
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition-all px-6 py-3 md:px-8 md:py-3 rounded-xl font-semibold"
              >
                Explore →
              </motion.button>
            </div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 pt-8 border-t border-slate-200"
            >
              {[
                { number: "50+", label: "Happy Clients" },
                { number: "100+", label: "Projects" },
                { number: "99%", label: "On-time Delivery" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="text-center p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-600">{stat.number}</h3>
                  <p className="text-slate-600 text-xs md:text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Modern Illustration Replacement */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-md">
              {/* Modern SVG Illustration */}
              <svg viewBox="0 0 500 400" className="w-full h-auto">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                
                {/* Main Circle */}
                <circle cx="250" cy="180" r="120" fill="url(#grad1)" opacity="0.9" />
                
                {/* Abstract Shapes */}
                <rect x="150" y="80" width="60" height="60" rx="10" fill="white" opacity="0.8" />
                <circle cx="320" cy="120" r="30" fill="white" opacity="0.8" />
                <polygon points="220,280 260,320 180,320" fill="white" opacity="0.8" />
                
                {/* Connecting Lines */}
                <line x1="180" y1="110" x2="210" y2="140" stroke="white" strokeWidth="3" />
                <line x1="290" y1="150" x2="260" y2="180" stroke="white" strokeWidth="3" />
                <line x1="230" y1="250" x2="220" y2="280" stroke="white" strokeWidth="3" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="animate-bounce flex flex-col items-center">
            <span className="text-sm text-slate-500 mb-2">Scroll Down</span>
            <svg 
              width="30" 
              height="30" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-slate-400"
            >
              <path 
                d="M12 5V19M12 19L6 13M12 19L18 13" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Other Sections */}
      <VisionMission />
      <Services />
      <Projects />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
}