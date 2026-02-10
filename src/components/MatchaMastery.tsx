import React from 'react';
import { Leaf } from 'lucide-react';

export const MatchaMastery: React.FC = () => {
  return (
    <section id="matcha" className="py-24 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center">
              <Leaf className="w-32 h-32 text-forest" />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-forest/60 uppercase">
              The Matcha Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl font-heading text-forest leading-tight">
              <span className="mark-btn green-mark text-2xl md:text-3xl" style={{display: 'inline-block'}}>Matcha Mastery</span>
            </h2>
            <p className="text-lg text-forest/70 font-body leading-relaxed">
              In a world of dessert powders, we choose authenticity. Our ceremonial matcha is 
              bold, earthy, and whisked to perfection. We don't hide the tea; we celebrate it.
            </p>
            <ul className="space-y-3 font-body text-forest/80">
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
        </div>
      </div>
    </section>
  );
};
