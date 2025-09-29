'use client';
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ServiceCard from '../components/public/ServiceCard';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Web Development",
      animationPath: "/animations/web.json",
      description: "Responsive, high-performance websites with modern technologies like React, Next.js, and Tailwind CSS.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern Tech Stack"],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      color: "blue"
    },
    {
      title: "Mobile App Development",
      animationPath: "/animations/app.json",
      description: "Cross-platform mobile apps for Android and iOS using React Native and Flutter.",
      features: ["Cross-Platform", "Native Performance", "User-Friendly", "App Store Ready"],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: "cyan"
    },
    {
      title: "UI/UX Design",
      animationPath: "/animations/design.json",
      description: "Beautiful and intuitive designs to enhance user experience and engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      color: "purple"
    },
    {
      title: "E-Commerce Solutions",
      animationPath: "/animations/ecommerce.json",
      description: "Complete online store solutions with secure payment gateways and inventory management.",
      features: ["Payment Integration", "Inventory Management", "Order Tracking", "Admin Dashboard"],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      color: "emerald"
    },
    {
      title: "Cloud Services",
      animationPath: "/animations/cloud.json",
      description: "Scalable cloud infrastructure and deployment solutions for your applications.",
      features: ["AWS/Azure/GCP", "Auto Scaling", "Database Management", "CI/CD Pipeline"],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      color: "orange"
    },
    {
      title: "Maintenance & Support",
      animationPath: "/animations/support.json",
      description: "24/7 technical support and maintenance services for your digital products.",
      features: ["24/7 Support", "Regular Updates", "Security Patches", "Performance Monitoring"],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: "red"
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
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
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
            Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Premium Services</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto">
            We offer end-to-end digital solutions that transform your ideas into exceptional digital experiences
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-xl border border-slate-100 group-hover:shadow-2xl transition-all duration-500 overflow-hidden">
                
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}-600/5 to-${service.color}-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className={`relative z-10 w-20 h-20 bg-gradient-to-br from-${service.color}-600 to-${service.color}-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-500 mb-3">KEY FEATURES</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-slate-700">
                          <span className={`w-2 h-2 bg-${service.color}-500 rounded-full mr-3`}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-3 bg-gradient-to-r from-${service.color}-600 to-${service.color}-700 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-${service.color}-500/30 transition-all duration-300 group-hover:translate-y-[-2px]`}>
                    Learn More
                  </button>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-16 h-16 overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-${service.color}-500 rotate-45 origin-bottom-left translate-x-8 -translate-y-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col md:flex-row items-center justify-center p-6 bg-white rounded-2xl shadow-xl border border-slate-200 space-y-4 md:space-y-0 md:space-x-6">
            <div className="text-left">
              <h3 className="text-xl font-bold text-slate-800">Ready to start your project?</h3>
              <p className="text-slate-600">Let's discuss how we can help you achieve your goals</p>
            </div>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center">
              Get Free Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}