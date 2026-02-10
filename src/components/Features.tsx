import React from 'react';
import { Coffee, Leaf, Croissant } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Ceremonial Grade Matcha',
      description: 'Rich, vibrant green, and traditionally whisked for a deep umami profile.',
    },
    {
      icon: Coffee,
      title: 'Signature Heart Latte',
      description: 'Hand-poured heart art with our rich, chocolatey espresso blend.',
    },
    {
      icon: Croissant,
      title: 'Chicken Floss Croffle',
      description: 'A crispy croissant-waffle hybrid topped with savory chicken floss.',
    },
  ];

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-forest/60 uppercase mb-4">
            Curated Favorites
          </p>
          <h2 className="text-4xl md:text-5xl font-heading text-forest mb-6">
            <span className="mark-btn yellow-mark text-2xl md:text-3xl" style={{display: 'inline-block'}}>The Signature Menu</span>
          </h2>
          <p className="text-forest/70 max-w-2xl mx-auto font-body text-lg">
            From our famous whisked matcha to our savory-sweet croffles, every item is a product of artisanal care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-cream-dark rounded-full flex items-center justify-center group-hover:bg-forest group-hover:text-white transition-all duration-300">
                <feature.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-heading text-forest mb-4">
                {feature.title}
              </h3>
              <p className="text-forest/70 font-body leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
