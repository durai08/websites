import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../images';

const EcomHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-shop-purple font-bold tracking-[0.3em] uppercase text-xs mb-6"
        >
          Premium Collection 2026
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-extrabold text-shop-slate mb-8 tracking-tighter"
        >
          Define Your <br />
          <span className="text-gray-300 italic">Signature Style</span>
        </motion.h1>

        <motion.p
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.4 }}
           className="text-gray-500 max-w-xl mb-12 text-lg"
        >
           Curated lifestyle essentials designed for the modern individual. Quality craftsmanship meets contemporary design.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.6 }}
        >
           <button className="btn-primary flex items-center gap-2 text-xl py-5 px-12">
              Explore Now <ArrowUpRight size={20} />
           </button>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8, duration: 1 }}
           style={{ perspective: 1200 }}
           className="mt-20 w-full max-w-5xl relative group"
        >
           <motion.div
             whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
             className="rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] bg-gray-100"
           >
              <img 
                src={IMAGES.ecomHero} 
                alt="Featured" 
                className="w-full object-cover transform transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
           </motion.div>
           
           <div className="absolute -bottom-10 -right-10 bg-shop-purple p-8 rounded-3xl text-white font-black text-3xl shadow-2xl z-20 animate-bounce-slow">
              FALL '26 DROP
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcomHero;
