// components/public/Footer.jsx
'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebookF className="w-4 h-4" />, href: "#", color: "hover:bg-blue-600" },
    { icon: <FaTwitter className="w-4 h-4" />, href: "#", color: "hover:bg-blue-400" },
    { icon: <FaInstagram className="w-4 h-4" />, href: "#", color: "hover:bg-pink-600" },
    { icon: <FaLinkedinIn className="w-4 h-4" />, href: "#", color: "hover:bg-blue-700" },
    { icon: <FaGithub className="w-4 h-4" />, href: "#", color: "hover:bg-gray-800" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  const services = [
    { name: "Web Development", href: "/services#web" },
    { name: "Mobile Apps", href: "/services#mobile" },
    { name: "UI/UX Design", href: "/services#design" },
    { name: "E-Commerce", href: "/services#ecommerce" },
    { name: "Cloud Solutions", href: "/services#cloud" },
    { name: "Maintenance", href: "/services#maintenance" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white pt-20 pb-8 px-4 md:px-6 overflow-hidden">
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-black font-bold text-lg">R</span>
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ramanth
              </h2>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              We create digital experiences that transform businesses and drive innovation. 
              Let's build something amazing together.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:text-white hover:shadow-lg`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="flex items-center text-gray-400 hover:text-cyan-400 transition-all duration-300 group"
                  >
                    <FaArrowRight className="w-3 h-3 mr-3 text-cyan-500 group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href}
                    className="flex items-center text-gray-400 hover:text-cyan-400 transition-all duration-300 group"
                  >
                    <FaArrowRight className="w-3 h-3 mr-3 text-cyan-500 group-hover:translate-x-1 transition-transform duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Get In Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaMapMarkerAlt className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400">📍 Mumbai, India</p>
                  <p className="text-gray-500 text-sm">Headquarters</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400">📧 contact@ramanth.com</p>
                  <p className="text-gray-500 text-sm">Email us</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaPhone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400">📞 +91 76203 41043</p>
                  <p className="text-gray-500 text-sm">Call us</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaWhatsapp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400">💬 WhatsApp</p>
                  <p className="text-gray-500 text-sm">Instant chat</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-400">Subscribe to our newsletter for the latest updates and insights.</p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Ramanth Technologies. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-cyan-400 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/917620341043?text=Hi%20there!%20I%20visited%20your%20website%20and%20want%20to%20connect."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-green-500/30 z-50 hover:shadow-green-500/50 transition-all duration-300"
      >
        <FaWhatsapp className="w-6 h-6" />
      </motion.a>
    </footer>
  );
}