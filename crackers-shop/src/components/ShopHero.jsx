import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Zap } from 'lucide-react';
import { IMAGES } from '../images';

const ShopHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-60">
        <img 
          src={IMAGES.crackersHero} 
          alt="Fireworks Shop"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/80"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="inline-block mb-6 px-4 py-1 rounded-full border border-festive-red/30 bg-festive-red/10 text-festive-red font-bold text-sm tracking-widest uppercase"
        >
          Grand Festive Sale is Live!
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter"
        >
          LIGHT UP <br />
          <span className="fire-text">YOUR NIGHT</span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10"
        >
          Premium quality fireworks, sparklers, and crackers for the most unforgettable celebrations. Safe, high-intensity, and spectacular.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 30, 30, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-festive-red text-white flex items-center gap-3 rounded-2xl font-black text-xl hover:bg-red-600 transition-all"
          >
            <ShoppingBag size={24} /> SHOP NOW
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: "white" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 border-2 border-white/20 text-white rounded-2xl font-black text-xl hover:bg-white/5 transition-all"
          >
            <Zap size={24} className="text-festive-gold" /> EXPLORE FLASH
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Particles/Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 left-10 hidden lg:block"
      >
        <div className="w-20 h-20 rounded-full bg-festive-red/20 blur-2xl"></div>
      </motion.div>
    </section>
  );
};

export default ShopHero;
