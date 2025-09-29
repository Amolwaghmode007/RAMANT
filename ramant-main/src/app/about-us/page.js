// app/about/page.jsx
"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaArrowRight, FaArrowLeft, FaQuoteLeft, FaAward, FaUsers, FaRocket } from "react-icons/fa";
import Image from "next/image";

const profiles = [
  {
    name: "Suraj Bhandare",
    role: "CEO & Founder",
    image: "/images/ceo.jpg",
    bio: "Visionary leader with over 10 years of experience in building impactful digital products that transform businesses.",
    links: {
      linkedin: "https://linkedin.com/in/suraj",
      github: "https://github.com/suraj",
      twitter: "https://twitter.com/suraj",
    },
    quote: "We don't just build products; we build experiences that matter."
  },
  {
    name: "Rahul Mehta",
    role: "CFO & Strategy Head",
    image: "/images/cfo.jpg",
    bio: "Financial strategist with expertise in scaling startups and ensuring sustainable business growth.",
    links: {
      linkedin: "https://linkedin.com/in/rahul",
      github: "https://github.com/rahul",
      twitter: "https://twitter.com/rahul",
    },
    quote: "Numbers tell stories, and we help write the success stories."
  },
  {
    name: "Sneha Patil",
    role: "Lead Developer",
    image: "/images/dev.jpg",
    bio: "Full-stack engineer passionate about turning innovative ideas into seamless digital experiences.",
    links: {
      linkedin: "https://linkedin.com/in/sneha",
      github: "https://github.com/sneha",
      twitter: "https://twitter.com/sneha",
    },
    quote: "Code is poetry when it solves real problems beautifully."
  },
  {
    name: "Amit Sharma",
    role: "UI/UX Designer",
    image: "/images/designer.jpg",
    bio: "Creative designer focused on creating intuitive and visually stunning user interfaces.",
    links: {
      linkedin: "https://linkedin.com/in/amit",
      github: "https://github.com/amit",
      twitter: "https://twitter.com/amit",
    },
    quote: "Design is not just how it looks; it's how it works and feels."
  }
];

export default function AboutUs() {
  const [index, setIndex] = useState(0);
  const profile = profiles[index];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextProfile = () => setIndex((index + 1) % profiles.length);
  const prevProfile = () => setIndex((index - 1 + profiles.length) % profiles.length);

  return (
    <section ref={ref} className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 px-4 md:px-6 overflow-hidden">
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Meet Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Dream Team</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto">
            We're a passionate team of innovators, creators, and problem-solvers dedicated to crafting exceptional digital experiences.
          </p>
        </motion.div>


        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Team Member Profile */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={profile.name}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 relative overflow-hidden group"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 rounded-bl-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-tr-3xl"></div>

                {/* Profile Content */}
                <div className="relative z-10">
                  {/* Image and Basic Info */}
                  <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                        <Image 
                          src={profile.image} 
                          alt={profile.name} 
                          width={128} 
                          height={128} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {profile.role}
                      </div>
                    </div>
                    
                    <div className="text-center sm:text-left">
                      <h2 className="text-2xl font-bold text-slate-800 mb-1">{profile.name}</h2>
                      <p className="text-blue-600 font-semibold">{profile.role}</p>
                      <div className="flex justify-center sm:justify-start gap-3 mt-3">
                        <a href={profile.links.linkedin} target="_blank" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                          <FaLinkedin className="w-5 h-5" />
                        </a>
                        <a href={profile.links.github} target="_blank" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-800 hover:bg-slate-800 hover:text-white transition-all duration-300">
                          <FaGithub className="w-5 h-5" />
                        </a>
                        <a href={profile.links.twitter} target="_blank" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300">
                          <FaTwitter className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mb-6 border border-blue-100">
                    <FaQuoteLeft className="text-blue-400 text-xl mb-2" />
                    <p className="text-slate-700 italic">"{profile.quote}"</p>
                  </div>

                  {/* Bio */}
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {profile.bio}
                  </p>

                  {/* Navigation Arrows */}
                  <div className="flex justify-between items-center">
                    <button 
                      onClick={prevProfile}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all duration-300 group/arrow"
                    >
                      <FaArrowLeft className="group-hover/arrow:-translate-x-1 transition-transform duration-300" />
                      Previous
                    </button>
                    
                    <div className="flex gap-1">
                      {profiles.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setIndex(i)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i === index ? 'bg-blue-600 w-6' : 'bg-slate-300 hover:bg-slate-400'
                          }`}
                        />
                      ))}
                    </div>

                    <button 
                      onClick={nextProfile}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all duration-300 group/arrow"
                    >
                      Next
                      <FaArrowRight className="group-hover/arrow:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Mission */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower businesses with cutting-edge digital solutions that drive growth, 
                enhance user experiences, and create lasting impact in the digital landscape.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Values</h3>
              <div className="space-y-3">
                {[
                  "Innovation and Creativity",
                  "Excellence in Execution",
                  "Client Success First",
                  "Continuous Learning",
                  "Transparency and Trust"
                ].map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-slate-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Join Our Journey</h3>
              <p className="text-blue-100 mb-6">
                Ready to work with a team that's passionate about your success?
              </p>
              <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Start Your Project Today
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}