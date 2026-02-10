import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const MatchaMastery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Smooth spring animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="matcha" className="py-24 bg-[#F5F0E8]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column - Made larger to fill space */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
              {/* Container with the image */}
              <div className="w-full h-full relative">
                <img 
                  src="/images/matcha-mastery.jfif" 
                  alt="Matcha Mastery" 
                  className="w-full h-full object-cover"
                />
                {/* Animated overlay that reveals from right to left - FASTER */}
                <motion.div 
                  className="absolute inset-0 bg-[#F5F0E8]"
                  style={{
                    originX: 1,
                    scaleX: useTransform(smoothProgress, [0, 0.3], [1, 0])
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* Text Column - With bottom to top reveal animation */}
          <div className="order-1 lg:order-2 relative">
            <div className="space-y-6 relative">
              {/* Text content */}
              <div className="relative">
                <p className="text-xs font-semibold tracking-[0.2em] text-forest/60 uppercase">
                  The Matcha Philosophy
                </p>
                <h2 className="text-4xl md:text-5xl font-heading text-forest leading-tight mt-2">
                  <span className="mark-btn green-mark text-2xl md:text-3xl" style={{display: 'inline-block'}}>Matcha Mastery</span>
                </h2>
                <p className="text-lg text-forest/70 font-body leading-relaxed mt-4">
                  In a world of dessert powders, we choose authenticity. Our ceremonial matcha is 
                  bold, earthy, and whisked to perfection. We don't hide the tea; we celebrate it.
                </p>
                <ul className="space-y-3 font-body text-forest/80 mt-6">
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-forest rounded-full"></span>
                    <span>Ceremonial Grade Umami</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-forest rounded-full"></span>
                    <span>L-Theanine Clean Energy</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-forest rounded-full"></span>
                    <span>No Artificial Sweeteners</span>
                  </li>
                </ul>
              </div>
              
              {/* Animated overlay for text - reveals from bottom to top */}
              <motion.div 
                className="absolute inset-0 bg-[#F5F0E8]"
                style={{
                  originY: 0,
                  scaleY: useTransform(smoothProgress, [0.15, 0.35], [1, 0])
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
