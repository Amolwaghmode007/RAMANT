// components/ScrollAnimationWrapper.jsx
"use client";
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const ScrollAnimationWrapper = ({ children, delay = 0, direction = 'up' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const getVariant = (direction) => {
    if (direction === 'up') {
      return {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
      };
    } else if (direction === 'down') {
      return {
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 }
      };
    } else if (direction === 'left') {
      return {
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 }
      };
    } else if (direction === 'right') {
      return {
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 }
      };
    }
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    };
  };

  return (
    <motion.div
      ref={ref}
      variants={getVariant(direction)}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;