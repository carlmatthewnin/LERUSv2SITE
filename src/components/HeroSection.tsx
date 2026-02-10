import React, { useState, useEffect } from 'react';

export const HeroSection: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 0.3) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Burnt orange background */}
      <div 
        className="absolute inset-0"
        style={{
          background: '#B84B30'
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="font-heading text-[clamp(2.5rem,8vw,5rem)] leading-[1.1] text-white">
                Obrero's<br />
                Original<br />
                Matcha &<br />
                Coffee.
              </h1>
            </div>
            
            <p className="text-lg text-white/80 max-w-md mx-auto lg:mx-0 font-body leading-relaxed">
              Experience the "underrated" gem of Davao. Authentic ceremonial-grade matcha and 
              handcrafted espresso in the heart of the Obrero.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
              <a 
                href="https://food.grab.com/ph/en/restaurant/lerus-coffee-barrio-obrero-delivery/2-C6CBLBBCL2CBEJ"
                target="_blank"
                rel="noopener noreferrer"
                className="mark-btn yellow-mark text-forest"
              >
                Order on GrabFood
              </a>
              <a 
                href="#grab"
                className="mark-btn green-mark text-forest"
              >
                Quick Grab Guide
              </a>
            </div>
          </div>
          
          {/* Right Content - Blob SVG */}
          <div className="relative flex items-center justify-center">
            <svg 
              viewBox="0 0 200 200" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-full max-w-[600px] h-auto cursor-pointer group"
            >
              <defs>
                {/* Clip path for the blob shape - static, no animation */}
                <clipPath id="blobClip">
                  <path 
                    d="M43.1,-68.5C56.2,-58.6,67.5,-47.3,72.3,-33.9C77.2,-20.5,75.5,-4.9,74.2,11.3C72.9,27.6,71.9,44.5,63.8,57.2C55.7,69.8,40.6,78.2,25.5,79.2C10.4,80.1,-4.7,73.6,-20.9,69.6C-37.1,65.5,-54.5,63.9,-66,54.8C-77.5,45.8,-83.2,29.3,-85.7,12.3C-88.3,-4.8,-87.7,-22.3,-79.6,-34.8C-71.5,-47.3,-55.8,-54.9,-41.3,-64.2C-26.7,-73.6,-13.4,-84.7,0.8,-86C15,-87.2,29.9,-78.5,43.1,-68.5Z"
                    transform="translate(100 100)"
                  />
                </clipPath>
                {/* Soft shadow filter for curved edge effect */}
                <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="blur"/>
                  <feOffset in="blur" dx="0" dy="4" result="offsetBlur"/>
                  <feFlood flood-color="#000000" flood-opacity="0.25" result="offsetColor"/>
                  <feComposite in="offsetColor" in2="offsetBlur" operator="in" result="offsetBlur"/>
                  <feMerge>
                    <feMergeNode in="offsetBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Background blob shape with soft shadow for curved edge */}
              <path 
                d="M43.1,-68.5C56.2,-58.6,67.5,-47.3,72.3,-33.9C77.2,-20.5,75.5,-4.9,74.2,11.3C72.9,27.6,71.9,44.5,63.8,57.2C55.7,69.8,40.6,78.2,25.5,79.2C10.4,80.1,-4.7,73.6,-20.9,69.6C-37.1,65.5,-54.5,63.9,-66,54.8C-77.5,45.8,-83.2,29.3,-85.7,12.3C-88.3,-4.8,-87.7,-22.3,-79.6,-34.8C-71.5,-47.3,-55.8,-54.9,-41.3,-64.2C-26.7,-73.6,-13.4,-84.7,0.8,-86C15,-87.2,29.9,-78.5,43.1,-68.5Z"
                transform="translate(100 100) scale(0.96)"
                fill="rgba(255,255,255,0.1)"
                filter="url(#softShadow)"
              />
              
              {/* Curved border around blob */}
              <path 
                d="M43.1,-68.5C56.2,-58.6,67.5,-47.3,72.3,-33.9C77.2,-20.5,75.5,-4.9,74.2,11.3C72.9,27.6,71.9,44.5,63.8,57.2C55.7,69.8,40.6,78.2,25.5,79.2C10.4,80.1,-4.7,73.6,-20.9,69.6C-37.1,65.5,-54.5,63.9,-66,54.8C-77.5,45.8,-83.2,29.3,-85.7,12.3C-88.3,-4.8,-87.7,-22.3,-79.6,-34.8C-71.5,-47.3,-55.8,-54.9,-41.3,-64.2C-26.7,-73.6,-13.4,-84.7,0.8,-86C15,-87.2,29.9,-78.5,43.1,-68.5Z"
                transform="translate(100 100)"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1.5"
                className="opacity-60"
              />
              
              {/* Image clipped to blob shape - scaled on hover with scroll reveal */}
              <g clipPath="url(#blobClip)">
                <image 
                  href="/images/matcha-mastery.jfif"
                  x="-10"
                  y="-10"
                  width="220" 
                  height="220"
                  preserveAspectRatio="xMidYMid slice"
                  className="origin-center transition-transform duration-500 ease-out group-hover:scale-110 hero-image-animate"
                />
              </g>
              

              {/* Text path definition */}
              <path 
                id="textPath"
                d="M43.1,-68.5C56.2,-58.6,67.5,-47.3,72.3,-33.9C77.2,-20.5,75.5,-4.9,74.2,11.3C72.9,27.6,71.9,44.5,63.8,57.2C55.7,69.8,40.6,78.2,25.5,79.2C10.4,80.1,-4.7,73.6,-20.9,69.6C-37.1,65.5,-54.5,63.9,-66,54.8C-77.5,45.8,-83.2,29.3,-85.7,12.3C-88.3,-4.8,-87.7,-22.3,-79.6,-34.8C-71.5,-47.3,-55.8,-54.9,-41.3,-64.2C-26.7,-73.6,-13.4,-84.7,0.8,-86C15,-87.2,29.9,-78.5,43.1,-68.5Z"
                transform="translate(100 100)"
                fill="none" 
                stroke="none"
                pathLength="100"
              />
              
              {/* Scrolling text around blob - seamless loop */}
              <text style={{ fontFamily: 'Bodoni Moda, serif', fontWeight: 900, fontSize: '16px' }} className="tracking-[0.4em] uppercase fill-white">
                <textPath href="#textPath" startOffset={`${offset}%`}>
                  COFFEE ♥ MATCHA ♥ CROFFLES ♥ 
                </textPath>
              </text>
              <text style={{ fontFamily: 'Bodoni Moda, serif', fontWeight: 900, fontSize: '16px' }} className="tracking-[0.4em] uppercase fill-white">
                <textPath href="#textPath" startOffset={`${offset - 100}%`}>
                  COFFEE ♥ MATCHA ♥ CROFFLES ♥ 
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
