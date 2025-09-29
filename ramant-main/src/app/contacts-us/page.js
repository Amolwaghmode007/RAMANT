'use client';
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    message: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Submitted:", formData);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "", phone: "" });
      alert("Thank you for your message! We'll get back to you soon.");
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone",
      content: "+91 7620341043",
      link: "tel:+917620341043",
      color: "bg-blue-500"
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: "WhatsApp",
      content: "Message us directly",
      link: "https://wa.me/917620341043?text=Hi%20there!%20I%20visited%20your%20website%20and%20want%20to%20connect.",
      color: "bg-green-500"
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      content: "info@ramanth.com",
      link: "mailto:info@ramanth.com",
      color: "bg-red-500"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Location",
      content: "Mumbai, India",
      link: "#",
      color: "bg-purple-500"
    }
  ];

  return (
    <section ref={ref} className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 px-4 md:px-6 overflow-hidden">
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Get In <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto">
            Ready to start your project? Let's discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Contact Information</h3>
            
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.title === "WhatsApp" ? "_blank" : "_self"}
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">{item.title}</h4>
                  <p className="text-slate-600">{item.content}</p>
                </div>
              </motion.a>
            ))}

            {/* Business Hours */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white">
              <h4 className="font-semibold text-lg mb-3">Business Hours</h4>
              <p className="text-blue-100">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-blue-100">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-blue-100">Sunday: Closed</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  <a
                    href="https://wa.me/917620341043?text=Hi%20there!%20I%20visited%20your%20website%20and%20want%20to%20connect."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
              </form>

              {/* Privacy Note */}
              <p className="text-sm text-slate-500 mt-6 text-center">
                We respect your privacy and will never share your information with third parties.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Our Location</h3>
            <div className="w-full h-64 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden">
              {/* Google Maps Iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.6433229747!2d72.7410978082031!3d19.08252200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1633087684457!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}