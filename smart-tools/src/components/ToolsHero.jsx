import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Zap, Globe } from 'lucide-react';

const ToolsHero = () => {
  return (
    <section className="relative pt-40 pb-32 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-tools-cyan/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="px-4 py-1 border border-tools-cyan/20 rounded-full bg-tools-cyan/5 text-tools-cyan font-mono text-xs mb-8 glow-cyan"
        >
           v2.0.0-beta // NEW ARCHITECTURE
        </motion.div>

        <motion.h1
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-6xl md:text-8xl font-bold text-center mb-8 tracking-tight"
        >
          Automate the <br />
          <span className="text-tools-cyan">Impossible.</span>
        </motion.h1>

        <motion.p
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.4 }}
           className="text-gray-400 max-w-2xl text-center text-lg mb-12 leading-relaxed"
        >
          Deploy scalable developer tools with surgical precision. Built for high-performance teams who demand absolute control.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.6 }}
           className="flex gap-4 mb-20"
        >
           <button className="px-10 py-4 bg-tools-cyan text-tools-dark font-bold rounded-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all flex items-center gap-2">
              <Zap size={20} /> Deploy Now
           </button>
           <button className="px-10 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2">
              <Terminal size={20} /> Documentation
           </button>
        </motion.div>

        {/* Hero Dashboard UI */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8, duration: 1 }}
           className="w-full max-w-6xl relative"
        >
           <div className="bg-[#0A0F1F] rounded-[2rem] border border-white/10 p-2 shadow-2xl relative z-10 overflow-hidden">
              <img src="/images/tools-hero.png" alt="Dashboard" className="w-full rounded-[1.5rem] opacity-80" />
           </div>
           
           {/* Decorative elements */}
           <div className="absolute -top-10 -right-10 w-40 h-40 border border-tools-cyan/20 rounded-full"></div>
           <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-500/5 blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsHero;
