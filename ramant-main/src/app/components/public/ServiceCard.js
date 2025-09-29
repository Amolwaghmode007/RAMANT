'use client';
import { useLottie } from 'lottie-react';
import { motion } from 'framer-motion';

export default function ServiceCard({ title, animationPath, description }) {
  const options = {
    path: animationPath,
    loop: true,
    autoplay: true,
    style: {
      height: 180,
      width: 180,
    },
  };

  const { View } = useLottie(options);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 backdrop-blur-lg rounded-xl shadow-md p-6 w-full max-w-xs hover:shadow-cyan-500/40 hover:scale-105 transition-transform"
    >
      <div className="flex justify-center mb-4">
        {View}
      </div>
      <h3 className="text-xl font-bold text-cyan-400 text-center mb-2">{title}</h3>
      <p className="text-sm text-black text-center">{description}</p>
    </motion.div>
  );
}
