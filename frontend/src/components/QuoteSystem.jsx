import React, { useState, useEffect, useRef } from 'react';
import { Text } from '@react-three/drei';
import { gsap } from 'gsap';
import { quotes } from '../data/mockData';

const QuoteSystem = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const quoteRef = useRef();
  const authorRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out current quote
      const fadeOut = gsap.timeline();
      fadeOut.to([quoteRef.current?.material, authorRef.current?.material], {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut"
      });
      
      fadeOut.call(() => {
        // Change quote
        const nextIndex = (currentIndex + 1) % quotes.length;
        setCurrentIndex(nextIndex);
        setCurrentQuote(quotes[nextIndex]);
      });
      
      // Fade in new quote
      fadeOut.to([quoteRef.current?.material, authorRef.current?.material], {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
      });
    }, 30000); // Change every 30 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <group position={[0, -6, 5]}>
      <Text
        ref={quoteRef}
        position={[0, 0, 0]}
        fontSize={0.28}
        color="#FFD700"
        anchorX="center"
        anchorY="middle"
        maxWidth={12}
        textAlign="center"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        "{currentQuote.text}"
      </Text>
      
      <Text
        ref={authorRef}
        position={[0, -0.8, 0]}
        fontSize={0.2}
        color="#CCCCCC"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.01}
        outlineColor="#000000"
      >
        — {currentQuote.author}
      </Text>
    </group>
  );
};

export default QuoteSystem;