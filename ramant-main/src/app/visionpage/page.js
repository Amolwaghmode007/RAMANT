'use client';
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function VisionMission() {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section ref={ref} className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4 py-16 md:py-24 overflow-hidden">
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Purpose</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Driving innovation and excellence in every solution we deliver
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Vision Card - Left Side */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            {/* Premium Card */}
            <div className="relative bg-white rounded-2xl p-8 md:p-10 shadow-2xl shadow-blue-500/10 border border-slate-100 group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500">
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-24 h-24 -mt-6 -mr-6">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl rotate-12 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                  Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Vision</span>
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Empowering businesses through smart, scalable, and innovative digital solutions.
                  We envision a future where every business, regardless of size, leverages modern
                  technology to grow, connect, and create meaningful impact in the digital world.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                {[
                  { number: "100+", label: "Clients" },
                  { number: "5+", label: "Years" },
                  { number: "99%", label: "Success" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -z-10 -inset-4 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          </motion.div>

          {/* Mission Card - Right Side */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
            className="relative group"
          >
            {/* Premium Card */}
            <div className="relative bg-white rounded-2xl p-8 md:p-10 shadow-2xl shadow-cyan-500/10 border border-slate-100 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 transition-all duration-500">
              {/* Decorative Element */}
              <div className="absolute top-0 left-0 w-24 h-24 -mt-6 -ml-6">
                <div className="w-full h-full bg-gradient-to-br from-cyan-600 to-emerald-600 rounded-xl -rotate-12 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                  Our <span className="bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">Mission</span>
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  At Ramanth, our mission is to deliver high-quality, customized web and mobile applications
                  that solve real-world problems. We aim to partner with startups and enterprises, providing them
                  with cutting-edge design, reliable development, and end-to-end support — from concept to launch.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                {[
                  { number: "24/7", label: "Support" },
                  { number: "100%", label: "Quality" },
                  { number: "1Y", label: "Warranty" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl font-bold text-cyan-600">{stat.number}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -z-10 -inset-4 bg-gradient-to-br from-cyan-600/5 to-emerald-600/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          </motion.div>
        </div>

        {/* Connecting Line - Desktop Only */}
        {!isMobile && (
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-48 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full"
          />
        )}

        {/* Bottom Decorative Element */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-lg border border-slate-200">
            <span className="text-slate-700 mr-3">🚀</span>
            <span className="text-slate-800 font-semibold">Ready to transform your vision into reality?</span>
            <button className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
              Start Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}