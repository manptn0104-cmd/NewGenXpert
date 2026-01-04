import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import './styles/Ngxstyle.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden body-top-space mob-body-top-space"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1644325349124-d1756b79dd42?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjQyMTd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb258ZW58MHx8fHwxNzY2NDgyODM5fDA&ixlib=rb-4.1.0&q=85)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'       
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
          
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Empowering Businesses Through
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text">
            Innovative Technology
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
          Delivering world-class IT services and solutions leveraging cutting-edge technologies
          to drive efficiency, scalability, and digital transformation.
        </p>
    
         <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-sm text-white font-medium">Microsoft Partnership & Innovation</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection('services')}
            size="lg"
            className="bg-white text-slate-900 hover:bg-slate-100 transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
          >
            Explore Our Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-slate-900 transition-all duration-300"
          >
            Get In Touch
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-slate-200">Projects Delivered</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2">200+</div>
            <div className="text-slate-200">Happy Clients</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2">15+</div>
            <div className="text-slate-200">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;