import React, { useState } from 'react';
import { Share2, Instagram, Facebook, AtSign } from 'lucide-react';

export const ShareButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/leruscoffee/?hl=en',
      icon: <Instagram className="w-5 h-5" />,
      color: 'hover:text-pink-500 hover:border-pink-500',
      delay: 'delay-100',
    },
    {
      name: 'Facebook',
      url: 'https://web.facebook.com/leruscoffee',
      icon: <Facebook className="w-5 h-5" />,
      color: 'hover:text-blue-600 hover:border-blue-600',
      delay: 'delay-200',
    },
    {
      name: 'Threads',
      url: 'https://www.threads.com/@leruscoffee/',
      icon: <AtSign className="w-5 h-5" />,
      color: 'hover:text-gray-900 hover:border-gray-900',
      delay: 'delay-300',
    },
  ];

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Share Toggle Button */}
      <button
        className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full shadow-xl hover:bg-white/20 transition-all duration-300 z-20"
        aria-label="Let's Connect"
      >
        <Share2 className="w-5 h-5 text-white/90" />
        <span className="logo-script text-2xl lowercase text-white">Let's Connect</span>
      </button>

      {/* Social Media Icons */}
      <div className={`flex items-center gap-3 ml-3 transition-all duration-500 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8 pointer-events-none'
        }`}>
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-11 h-11 bg-white border border-gray-200 rounded-full shadow-md transition-all duration-300 text-gray-600 ${link.color} hover:-translate-y-1 hover:shadow-lg ${isOpen ? `translate-x-0 opacity-100 ${link.delay}` : '-translate-x-4 opacity-0'
              }`}
            aria-label={link.name}
            title={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
