import React from 'react';
import { MapPin, Phone, Clock, AlertCircle } from 'lucide-react';

export const HowToGrab: React.FC = () => {
  return (
    <section id="grab" className="py-24 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-yellow-100 px-4 py-2 rounded-full">
              <AlertCircle className="w-4 h-4 text-yellow-700" />
              <span className="text-sm font-semibold text-yellow-700">The Parking Paradox</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading text-forest leading-tight">
              No Parking?<br />No Problem.
            </h2>
            <p className="text-lg text-forest/70 font-body leading-relaxed">
              We know Obrero is tight. Our location at the corner of 
              Lacson & Cervantes is built for the "Hazard Light Economy."
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <a 
                href="https://maps.google.com/?q=Door+A,+Lim+Building,+Corner+Lacson+&+Cervantes+Street,+Barrio+Obrero,+Davao+City"
                target="_blank"
                rel="noopener noreferrer"
                className="mark-btn pink-mark inline-flex items-center justify-center space-x-2 text-forest"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
              <a 
                href="tel:+639123456789"
                className="mark-btn green-mark inline-flex items-center justify-center space-x-2 text-forest"
              >
                <Phone className="w-4 h-4" />
                <span>Call to Order</span>
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl">
              <h3 className="font-heading text-2xl text-forest mb-4 flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Hazard Quick-Grab</span>
              </h3>
              <p className="text-forest/70 font-body mb-6 leading-relaxed">
                Hit your hazards, hop off for 30 seconds, and your drink will be waiting at the door. 
                (Order ahead recommended!)
              </p>
              <div className="h-px bg-gray-200 my-6"></div>
              <h3 className="font-heading text-2xl text-forest mb-4">The Nook Experience</h3>
              <p className="text-forest/70 font-body leading-relaxed">
                Walking from USEP? We are the intimate "third space" perfect for a solo study session 
                or a quiet reading hour.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
