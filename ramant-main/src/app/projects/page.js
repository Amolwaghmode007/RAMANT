'use client';
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Ramanth School Management System",
      description: "A complete digital solution for school operations – from admissions to stock management with real-time analytics and parent-teacher communication.",
      image: "/images/project1.png",
      demoUrl: "https://demo-url.com",
      features: ["Student Management", "Attendance Tracking", "Fee Management", "Inventory System", "Report Generation", "Mobile App"],
      techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "AWS"],
      category: "Web Application"
    },
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with advanced features like AI recommendations, secure payments, and inventory management.",
      image: "/images/project2.png",
      demoUrl: "https://demo-url.com",
      features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Tracking", "Admin Dashboard", "AI Recommendations"],
      techStack: ["Next.js", "Express", "PostgreSQL", "Stripe", "Redis"],
      category: "E-Commerce"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 px-4 md:px-6 overflow-hidden">
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Premium Projects</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto">
            Discover our innovative solutions that transform ideas into exceptional digital experiences
          </p>
        </motion.div>

        {/* Project Navigation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-slate-200 flex">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeProject === index
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                {project.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main Project Display */}
        <motion.div
          key={activeProject}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden group"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {projects[activeProject].category}
                </span>
              </div>
              
              <div className="w-full h-64 md:h-96 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-8">
                <div className="relative w-full h-full bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden group-hover:shadow-xl transition-all duration-500">
                  <img
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    className="w-full h-full object-contain p-4 transform group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Mock Browser Bar */}
                  <div className="absolute top-0 left-0 right-0 bg-slate-100 px-4 py-2 flex items-center border-b border-slate-200">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">
                {projects[activeProject].title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {projects[activeProject].description}
              </p>

              {/* Features Grid */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Key Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {projects[activeProject].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={projects[activeProject].demoUrl}
                  target="_blank"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-center group/button"
                >
                  View Live Demo
                  <span className="inline-block group-hover/button:translate-x-1 transition-transform duration-300">→</span>
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 text-center"
                >
                  Contact For Subscription
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center mt-8 space-x-2"
        >
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeProject === index
                  ? "bg-blue-600 w-8"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to start your project?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's create something amazing together. Get in touch with us to discuss your project requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Start Your Project
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}