import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { MatchaMastery } from './components/MatchaMastery';
import { Features } from './components/Features';
import { HowToGrab } from './components/HowToGrab';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#B84B30' }}>
      <Navigation />
      <main>
        <HeroSection />
        <MatchaMastery />
        <Features />
        <HowToGrab />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
