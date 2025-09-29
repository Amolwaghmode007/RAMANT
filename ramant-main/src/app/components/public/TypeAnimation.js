// components/TypeAnimation.jsx
"use client";
import { useEffect, useState } from 'react';

const TypeAnimation = ({ texts, speed = 100, delay = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    const handleTyping = () => {
      const current = currentTextIndex % texts.length;
      const fullText = texts[current];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(typingSpeed / 1.5);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTypingSpeed(delay);
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        setTypingSpeed(speed);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed, delay, speed]);

  return (
    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypeAnimation;