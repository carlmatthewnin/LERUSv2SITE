import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-[#F5F0E8] px-4 py-2 rounded-full mb-8">
          <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
          <span className="text-sm font-semibold text-forest">Kape Diaries Favorite</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-heading text-forest mb-4">
          Voted as a Top Coffee Shop in Davao City for 2022 & 2023
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-[#F5F0E8] p-8 rounded-2xl">
            <Quote className="w-8 h-8 text-forest/20 mb-4" />
            <p className="text-forest/80 font-body italic text-lg leading-relaxed">
              "The most impressive matcha in Davao. Authentic taste that doesn't hide behind sugar."
            </p>
          </div>
          <div className="bg-[#F5F0E8] p-8 rounded-2xl">
            <Quote className="w-8 h-8 text-forest/20 mb-4" />
            <p className="text-forest/80 font-body italic text-lg leading-relaxed">
              "An underrated Obrero gem. The Chicken Floss Croffle is a game changer."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
