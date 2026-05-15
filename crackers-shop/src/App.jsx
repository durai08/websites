import React, { useState } from 'react'
import ShopHero from './components/ShopHero'
import ProductGrid from './components/ProductGrid'
import { motion, AnimatePresence } from 'framer-motion'
import { IMAGES } from './images'
import { Menu, X, ShoppingCart } from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-festive-dark min-h-screen selection:bg-festive-red selection:text-white overflow-hidden uppercase">
      {/* Navbar */}
      <nav className="fixed w-full z-50 px-4 md:px-10 py-4 flex justify-between items-center bg-black/80 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
        <motion.div 
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="text-2xl md:text-4xl font-black tracking-tighter italic text-white flex items-center gap-2"
        >
           <div className="w-1.5 md:w-2 h-6 md:h-10 bg-festive-red rounded-full shadow-[0_0_15px_rgba(255,51,51,0.5)]"></div>
           X-BLAST.
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-10 font-bold text-[10px] tracking-widest uppercase text-gray-400">
          <a href="#products" className="hover:text-festive-red transition-colors">Inventory</a>
          <a href="#academy" className="hover:text-festive-red transition-colors">The Academy</a>
          <a href="#wholesale" className="hover:text-festive-red transition-colors">Wholesale</a>
          <a href="#safety" className="hover:text-festive-red transition-colors">Safety Hub</a>
          <a href="#stores" className="hover:text-festive-red transition-colors">Arenas</a>
        </div>

        <div className="flex items-center gap-4">
          <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="relative w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all text-white border border-white/5"
          >
            <div className="w-1.5 h-1.5 bg-festive-red rounded-full absolute top-2 right-2 animate-pulse"></div>
            <ShoppingCart size={20} />
          </motion.button>
          
          <button 
            className="lg:hidden w-10 h-10 flex items-center justify-center text-festive-red"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[100] bg-festive-dark text-white flex flex-col items-center justify-center gap-10 p-8"
          >
            <button className="absolute top-8 right-8 text-festive-red" onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
            <div className="flex flex-col items-center gap-10 font-black text-5xl italic uppercase text-center">
              <a href="#products" onClick={() => setIsMenuOpen(false)}>Inventory</a>
              <a href="#academy" onClick={() => setIsMenuOpen(false)}>Academy</a>
              <a href="#wholesale" onClick={() => setIsMenuOpen(false)}>Wholesale</a>
              <a href="#safety" onClick={() => setIsMenuOpen(false)}>Safety</a>
              <a href="#stores" onClick={() => setIsMenuOpen(false)}>Arenas</a>
            </div>
            <div className="mt-12 text-festive-red font-black tracking-widest text-[10px]">ALWAYS FOLLOW LOCAL LAWS</div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="hero"><ShopHero /></section>

      {/* Pyrotechnic Academy */}
      <section id="academy" className="py-24 md:py-32 bg-festive-dark relative overflow-hidden px-4 md:px-8">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-20">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:w-1/2 text-center lg:text-left"
            >
               <h2 className="text-5xl md:text-7xl font-black italic text-white mb-8 leading-none uppercase">THE <span className="text-festive-gold">ACADEMY.</span></h2>
               <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-12 italic max-w-xl mx-auto lg:mx-0">Master the art of the explosion. Our licensed professionals offer 2-day certification courses on display choreography, electrical firing systems, and safety.</p>
               <button className="px-10 md:px-12 py-5 md:py-6 bg-festive-red text-white font-black rounded-2xl hover:bg-white hover:text-black transition-all shadow-[0_0_50px_rgba(255,51,51,0.2)] text-sm md:text-base tracking-widest">ENROLL NOW</button>
            </motion.div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full px-4 md:px-0">
               {[
                 { title: "Fuse Logic", students: "1.2k" },
                 { title: "Color Chem", students: "2.4k" },
                 { title: "Sky Design", students: "0.8k" },
                 { title: "Blast Ops", students: "3.1k" }
               ].map((c, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="p-8 md:p-10 bg-white/5 border border-white/5 rounded-[2.5rem] md:rounded-[3rem] text-center backdrop-blur-xl"
                  >
                     <div className="text-festive-gold font-black text-2xl md:text-3xl mb-2">{c.students}</div>
                     <div className="text-gray-600 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">{c.title}</div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Wholesale Inquiry */}
      <section id="wholesale" className="py-24 bg-white/2 rounded-[3.5rem] md:rounded-[5rem] mx-4 my-12 md:my-20 border border-white/5 relative overflow-hidden text-center px-4 md:px-8">
         <div className="absolute top-0 right-0 w-96 h-96 bg-festive-red/5 blur-[120px] rounded-full"></div>
         <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl font-black italic text-white mb-6 uppercase tracking-tight">Bulk Distribution</h2>
            <p className="text-gray-500 text-base md:text-lg mb-12 font-medium italic max-w-2xl mx-auto uppercase">Planning a city-scale show? We offer tiered pricing for distributors and municipal entities globally.</p>
            <form className="flex flex-col sm:flex-row gap-4 bg-white/5 p-3 rounded-[2.5rem] border border-white/10 uppercase">
               <input placeholder="ENTER QUANTITY..." className="bg-transparent px-6 py-4 rounded-xl flex-grow font-black text-white outline-none text-sm" />
               <button className="px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-festive-red hover:text-white transition-all text-xs tracking-widest">INQUIRE NOW</button>
            </form>
         </div>
      </section>
      
      {/* Event Planning Portal */}
      <section className="py-24 md:py-32 bg-black px-4 overflow-hidden">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="order-2 lg:order-1 relative px-4 md:px-0">
               <div className="absolute inset-0 bg-festive-gold opacity-10 blur-[100px] rounded-full"></div>
               <img src={IMAGES.crackersHero} className="relative z-10 rounded-[3rem] md:rounded-[4rem] shadow-2xl skew-y-0 lg:skew-y-3 grayscale hover:grayscale-0 transition-all duration-700 w-full" />
            </div>
            <div className="order-1 lg:order-2 text-center lg:text-left">
               <h2 className="text-4xl md:text-6xl font-black italic text-white mb-8 uppercase leading-tighter tracking-tight">Your Event, <br className="hidden md:block"/> Our <span className="text-festive-red">Fire.</span></h2>
               <p className="text-gray-400 text-lg md:text-xl font-medium mb-12 italic leading-relaxed max-w-xl mx-auto lg:mx-0">Our on-site crew can design, setup, and execute your entire pyrotechnic display. From reveals to 30-minute symphonies.</p>
               <div className="space-y-6">
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-festive-gold font-black uppercase text-[10px] tracking-widest border-b border-white/5 pb-6">
                     <span>✓ Licensed Pilots</span>
                     <span>✓ GPS-Synced Firing</span>
                     <span>✓ 0% Failure Rate</span>
                  </div>
                  <button className="w-full py-6 bg-festive-red text-white font-black rounded-2xl hover:scale-105 transition-all shadow-xl shadow-red-900/40 uppercase tracking-widest text-sm">CONSULT AN ARCHITECT</button>
               </div>
            </div>
         </div>
      </section>

      {/* Featured Packs */}
      <section id="packs" className="py-24 md:py-32 bg-white/2 relative overflow-hidden px-4">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-festive-red/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black italic bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-4">CELEBRATION PACKS</h2>
            <p className="text-gray-600 font-bold uppercase tracking-[0.3em] text-[10px]">Ultimate assortments for major events</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Nebula Arena Pack", items: "450pcs", price: "$299", color: "from-purple-900/20 to-black" },
              { name: "Solar Flare Box", items: "120pcs", price: "$149", color: "from-orange-900/20 to-black" }
            ].map((pack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`p-10 md:p-16 rounded-[3rem] md:rounded-[4rem] border border-white/5 bg-gradient-to-br ${pack.color} relative group overflow-hidden`}
              >
                <div className="relative z-10 text-center md:text-left">
                  <div className="text-festive-red font-black text-[10px] uppercase tracking-widest mb-4">PREMIUM EDITION</div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-2 italic uppercase tracking-tighter">{pack.name}</h3>
                  <div className="text-gray-500 font-medium text-base md:text-lg mb-10 italic">{pack.items} of adrenaline.</div>
                  <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
                    <span className="text-3xl md:text-4xl font-black text-white">{pack.price}</span>
                    <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-black rounded-2xl hover:bg-festive-red hover:text-white transition-all transform group-hover:scale-105 text-xs tracking-widest">CLAIM NOW</button>
                  </div>
                </div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="products"><ProductGrid /></section>

      {/* Countdown section */}
      <section className="py-24 md:py-32 border-y border-white/5 bg-black/40 relative px-4 overflow-hidden uppercase">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 md:gap-20 text-white">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative text-center md:text-left"
          >
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-festive-gold/10 blur-2xl animate-pulse"></div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 italic leading-none tracking-tighter uppercase whitespace-pre-line">THE SEASON {"\n"} ENDS IN</h2>
            <div className="flex justify-center md:justify-start gap-6 md:gap-10">
               {[ 'Days', 'Hours', 'Mins' ].map(label => (
                 <div key={label} className="text-left">
                    <div className="text-5xl md:text-7xl font-black text-festive-gold tracking-tighter">04</div>
                    <div className="text-[10px] font-bold text-gray-700 uppercase tracking-widest mt-1">{label}</div>
                 </div>
               ))}
            </div>
          </motion.div>
          <motion.div 
            id="bulk"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 md:p-16 rounded-[3rem] md:rounded-[4rem] border border-white/10 max-w-xl backdrop-blur-3xl shadow-2xl w-full"
          >
            <h3 className="text-2xl md:text-3xl font-black mb-6 flex items-center justify-center md:justify-start gap-4 italic uppercase">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              STAY NOTIFIED
            </h3>
            <p className="text-gray-500 mb-10 text-base md:text-lg leading-relaxed text-center md:text-left font-medium">Join 50k+ fans for exclusive restock alerts, safety workshops, and seasonal drops.</p>
            <div className="flex flex-col sm:flex-row gap-4 bg-white/2 p-3 rounded-[2rem] border border-white/5">
              <input type="email" placeholder="EMAIL ADDRESS..." className="bg-transparent px-6 py-4 rounded-xl flex-grow focus:outline-none placeholder:text-gray-600 font-black text-sm" />
              <button className="w-full sm:w-auto px-10 py-5 bg-festive-red text-white rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-all text-sm">JOIN SQUAD</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Safety Manual */}
      <section id="safety" className="py-24 md:py-32 px-4 bg-festive-dark scroll-mt-20">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16 md:mb-24 px-4">
               <motion.div 
                 initial={{ scale: 0 }}
                 whileInView={{ scale: 1 }}
                 viewport={{ once: true }}
                 className="w-16 h-16 md:w-20 md:h-20 bg-festive-red/10 rounded-full flex items-center justify-center text-festive-red mb-8 border border-festive-red/20 shadow-[0_0_30px_rgba(255,51,51,0.1)]"
               >
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="m3.34 19 8.66-15 8.66 15z"/><path d="m12 14-4-4"/></svg>
               </motion.div>
               <h2 className="text-4xl md:text-5xl font-black italic uppercase text-white mb-4 tracking-tighter leading-none">Safety First. No Exceptions.</h2>
               <p className="text-gray-600 font-bold uppercase tracking-widest text-[10px]">Essential guidelines for responsible pyrotechnics</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0">
               {[
                 { title: "Distance", desc: "Maintain 50ft buffer from any buildings." },
                 { title: "Surface", desc: "Launch only from flat, non-combustible surfaces." },
                 { title: "Ignition", desc: "Never re-ignite duds. Wait 20 mins." },
                 { title: "Disposal", desc: "Soak used fireworks in a bucket of water." }
               ].map((tip, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-10 bg-white/2 border border-white/5 rounded-[2rem] md:rounded-[2.5rem] hover:bg-white/5 transition-all text-center md:text-left"
                  >
                     <h3 className="text-xl md:text-2xl font-black text-white mb-4 uppercase italic tracking-tighter">{tip.title}</h3>
                     <p className="text-gray-600 text-[10px] md:text-sm leading-relaxed uppercase font-medium">{tip.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Arenas Section */}
      <section id="stores" className="py-24 md:py-32 bg-white/2 overflow-hidden scroll-mt-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
            <motion.h2 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="text-4xl md:text-6xl font-black text-white mb-16 italic uppercase tracking-tighter leading-none"
            >
              LOCATE AN <span className="text-festive-red">X-BLAST ARENA</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
               {['NEW YORK', 'LAS VEGAS', 'MUMBAI'].map((city, i) => (
                 <motion.div 
                    key={city} 
                    whileHover={{ scale: 1.05, borderColor: '#ff3333' }}
                    className="p-12 md:p-16 bg-[#0a0a0a] rounded-[3rem] md:rounded-[3.5rem] border border-white/5 transition-all cursor-pointer group shadow-2xl"
                 >
                    <div className="text-festive-red text-[10px] font-black mb-4 tracking-[0.3em] uppercase">EXPERIENCE HUB</div>
                    <div className="text-3xl font-black text-white mb-2 italic uppercase tracking-tighter">{city}</div>
                    <div className="text-gray-600 font-bold uppercase tracking-widest text-[8px] md:text-[10px] group-hover:text-gray-400 transition-colors">FLAGSHIP SECTOR</div>
                 </motion.div>
               ))}
            </div>
        </div>
      </section>

      <footer className="py-20 bg-[#050505] border-t border-white/5 text-white overflow-hidden px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20 text-center md:text-left mb-24">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-4xl font-black italic mb-8 tracking-tighter">X-BLAST.</div>
            <p className="text-gray-700 text-base leading-relaxed mb-8 max-w-sm italic uppercase font-medium">The world's premium pyrotechnic experience. Delivered with precision since 1998.</p>
            <div className="flex gap-4">
               <div className="w-12 h-12 bg-white/2 rounded-xl border border-white/5 flex items-center justify-center hover:bg-festive-red transition-all cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></div>
               <div className="w-12 h-12 bg-white/2 rounded-xl border border-white/5 flex items-center justify-center hover:bg-festive-red transition-all cursor-pointer font-black">X</div>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-gray-700">Inventory</h4>
            <div className="flex flex-col gap-5 text-sm font-bold text-gray-500 uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Sky Rockets</a>
              <a href="#" className="hover:text-white transition-colors">Ground Ops</a>
              <a href="#" className="hover:text-white transition-colors">Aerial Shells</a>
              <a href="#" className="hover:text-white transition-colors">Night Gear</a>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-gray-500">Corporate</h4>
            <div className="flex flex-col gap-5 text-sm font-bold text-gray-500 uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Wholesale Hub</a>
              <a href="#" className="hover:text-white transition-colors">Safety Board</a>
              <a href="#" className="hover:text-white transition-colors">Legal Briefs</a>
              <a href="#" className="hover:text-white transition-colors">Press Sector</a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-gray-700">Arena HQ</h4>
            <div className="text-gray-500 text-sm font-bold leading-relaxed space-y-4 uppercase tracking-wider">
               <div>007 Ignis Way, Volcano Valley, NV 89109</div>
               <div className="text-festive-red">ops@xblast.pyro</div>
               <div>+1 (800) BOOM-NOW</div>
            </div>
          </div>
        </div>
        <div className="text-center pt-20 border-t border-white/5 px-4">
          <p className="text-gray-800 text-[10px] font-black uppercase tracking-[0.5em] italic leading-tight">Always follow local safety guidelines. Fireworks are highly explosive. Handle with extreme caution.</p>
          <p className="mt-16 text-gray-950 font-black text-[6rem] md:text-[15rem] leading-none select-none tracking-tighter opacity-10">IGNITE</p>
        </div>
      </footer>
    </div>
  )
}

export default App
