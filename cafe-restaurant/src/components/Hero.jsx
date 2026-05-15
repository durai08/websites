import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { IMAGES } from '../images'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.cafeHero} 
          alt="Cafe Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-accent-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-white/80 text-sm font-medium uppercase tracking-[0.2em]">The Ultimate Dining Experience</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-8">
              Where Flavors <br />
              <span className="text-primary-400">Meet Elegance</span>
            </h1>
            
            <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-2xl">
              Indulge in a culinary journey crafted with passion. From morning espressos to evening fine dining, we bring you the finest tastes in a sophisticated atmosphere.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary-600 text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary-500 transition-all"
              >
                View Our Menu <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all"
              >
                Our Story
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Float */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-20 right-0 hidden lg:block bg-white/5 backdrop-blur-xl p-8 rounded-l-3xl border-l border-y border-white/10"
      >
        <div className="flex gap-12">
          <div>
            <div className="text-3xl font-bold text-white">4.9/5</div>
            <div className="text-white/40 text-sm uppercase tracking-wider">Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">12k+</div>
            <div className="text-white/40 text-sm uppercase tracking-wider">Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">15+</div>
            <div className="text-white/40 text-sm uppercase tracking-wider">Awards</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
