import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="hours" className="bg-forest text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand & Location */}
          <div>
            <h3 className="logo-script text-4xl mb-6">Lerus</h3>
            <p className="text-white/70 mb-6 font-body leading-relaxed">
              Door A, Lim Building,<br />
              Corner Lacson & Cervantes Street,<br />
              Barrio Obrero, Davao City.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/leruscoffee/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/leruscoffee" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Hours */}
          <div>
            <h4 className="font-heading text-2xl mb-6">Hours</h4>
            <div className="space-y-3 text-white/70 font-body">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-semibold">Now Open</span>
              </div>
              <div className="space-y-2">
                <p>Daily: 10:00 AM – 7:00 PM</p>
                <p>GrabFood: 10:00 AM – 7:00 PM</p>
              </div>
              <div className="h-px bg-white/10 my-4"></div>
              <p className="text-sm text-white/50">Closes at 7:00 PM</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-2xl mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/70 font-body">
              <li>
                <a 
                  href="https://food.grab.com/ph/en/restaurant/lerus-coffee-barrio-obrero-delivery/2-C6CBLBBCL2CBEJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Order on GrabFood
                </a>
              </li>
              <li><a href="#matcha" className="hover:text-white transition-colors">Matcha Mastery</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
              <li><a href="#grab" className="hover:text-white transition-colors">How to Grab</a></li>
              <li>
                <a 
                  href="https://maps.google.com/?q=Door+A,+Lim+Building,+Corner+Lacson+&+Cervantes+Street,+Barrio+Obrero,+Davao+City"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center space-x-1"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+639123456789" 
                  className="hover:text-white transition-colors flex items-center space-x-1"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Order</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm font-body">
          <p>&copy; 2026 Lerus Coffee. Created for the Davao Coffee Community.</p>
        </div>
      </div>
    </footer>
  );
};
