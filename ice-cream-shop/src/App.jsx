import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star, Zap, MapPin, Phone, Info, Menu, X } from 'lucide-react';
import { IMAGES } from './images';

const InstagramIcon = ({ className }) => (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

function App() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <div className="min-h-screen selection:bg-ice-blue selection:text-white bg-white">
         <nav className="fixed w-full z-50 px-4 md:px-8 py-6 flex justify-between items-center bg-white/80 backdrop-blur-xl border-b border-slate-100 transition-all">
            <div className="flex items-center gap-2">
               <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="w-10 h-10 bg-ice-blue rounded-full flex items-center justify-center text-white font-black text-xl italic shadow-lg shadow-blue-200"
               >
                  f
               </motion.div>
               <span className="text-xl md:text-2xl font-black tracking-tighter text-slate-900 uppercase">Frosty Bites</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-8 font-bold text-[10px] uppercase tracking-widest text-slate-600">
               <a href="#about" className="hover:text-ice-blue transition-colors">Culture</a>
               <a href="#process" className="hover:text-ice-blue transition-colors">Process</a>
               <a href="#flavors" className="hover:text-ice-blue transition-colors">Flavors</a>
               <a href="#lab" className="hover:text-ice-blue transition-colors">Flavor Lab</a>
               <a href="#sustainability" className="hover:text-ice-blue transition-colors">Eco</a>
               <a href="#team" className="hover:text-ice-blue transition-colors">Squad</a>
            </div>

            <div className="flex items-center gap-4">
               <button className="hidden sm:flex px-6 py-2 bg-slate-900 text-white rounded-full font-bold text-[10px] uppercase tracking-widest items-center gap-2 hover:scale-105 transition-transform">
                  Order <div className="w-2 h-2 bg-ice-orange rounded-full animate-ping"></div>
               </button>
               <button 
                  className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-900"
                  onClick={() => setIsMenuOpen(true)}
               >
                  <Menu size={24} />
               </button>
            </div>
         </nav>

         {/* Mobile Menu */}
         <AnimatePresence>
            {isMenuOpen && (
               <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="fixed inset-0 z-[100] bg-white text-slate-900 flex flex-col items-center justify-center gap-8 p-8"
               >
                  <button className="absolute top-8 right-8" onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
                  <div className="flex flex-col items-center gap-6 font-black text-3xl uppercase tracking-tighter">
                     <a href="#about" onClick={() => setIsMenuOpen(false)}>Culture</a>
                     <a href="#process" onClick={() => setIsMenuOpen(false)}>Process</a>
                     <a href="#flavors" onClick={() => setIsMenuOpen(false)}>Flavors</a>
                     <a href="#lab" onClick={() => setIsMenuOpen(false)}>Flavor Lab</a>
                     <a href="#sustainability" onClick={() => setIsMenuOpen(false)}>Eco</a>
                     <a href="#team" onClick={() => setIsMenuOpen(false)}>Squad</a>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>

         {/* Hero */}
         <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white px-4 md:px-8">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-ice-blue clip-path-ice hidden lg:block"></div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 text-center lg:text-left">
               <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="flex flex-col items-center lg:items-start"
               >
                  <h1 className="text-6xl sm:text-7xl md:text-9xl font-black text-slate-900 leading-[0.9] mb-10 tracking-tighter">
                     CHILL <br />
                     <span className="ice-gradient">DIFFERENT.</span>
                  </h1>
                  <p className="max-w-md text-slate-400 text-base md:text-lg mb-12 font-medium">
                     Sustainably sourced, small-batch dairy and vegan treats. We're rewriting the rules of the ice cream truck.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                     <motion.button
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="px-10 py-5 bg-ice-blue text-white rounded-[2rem] font-black text-lg hover:shadow-2xl hover:shadow-blue-200 transition-all"
                     >
                        TRY A SCOOP
                     </motion.button>
                     <button className="px-10 py-5 bg-ice-cyan text-ice-blue rounded-[2rem] font-black text-lg">OUR STORY</button>
                  </div>
               </motion.div>

               <motion.div
                  initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                  whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="relative flex items-center justify-center pointer-events-none"
               >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-ice-blue/20 blur-[120px] rounded-full"></div>
                  <motion.div className="relative z-10 w-full max-w-[500px]">
                     <motion.img
                        animate={{ y: [0, -30, 0], rotate: [0, 5, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                        src={IMAGES.icecreamHero}
                        alt="Ice cream"
                        className="w-full h-auto aspect-[5/7] object-cover rounded-[3rem] md:rounded-[5rem] shadow-[0_50px_100px_-20px_rgba(37,99,235,0.3)]"
                     />
                  </motion.div>
 
                  <motion.div 
                    animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 5 }}
                    className="absolute top-0 md:top-10 left-0 md:-left-10 bg-ice-orange px-4 py-2 md:p-8 rounded-2xl md:rounded-3xl text-white font-black text-xs md:text-3xl rotate-[-15deg] shadow-2xl z-20"
                  >
                     100% ORGANIC
                  </motion.div>
               </motion.div>
            </div>
         </section>

         {/* Flavors Section */}
         <section id="flavors" className="py-24 md:py-32 max-w-7xl mx-auto px-4 md:px-8 overflow-hidden">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-16 gap-8 text-center sm:text-left"
            >
               <div>
                  <h2 className="text-4xl md:text-5xl font-black font-serif italic text-slate-900 leading-none">The Flavor <br /> <span className="text-ice-orange tracking-tighter not-italic uppercase">Hotlist.</span></h2>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] md:text-xs mt-4">Small batches dropping every Tuesday</p>
               </div>
               <button className="text-ice-blue font-black text-xs uppercase tracking-[0.3em] border-b-2 border-ice-blue pb-1">See All 50+</button>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { name: "Blue Velvet", price: "$6.50", img: IMAGES.icecreamBluevelvet },
                 { name: "Matcha Cloud", price: "$7.00", img: IMAGES.icecreamChoco },
                 { name: "Choco Lava", price: "$6.00", img: IMAGES.icecreamChoco },
                 { name: "Neon Mango", price: "$7.50", img: IMAGES.icecreamMango }
               ].map((item, i) => (
                 <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                 >
                    <div className="aspect-square rounded-[2.5rem] md:rounded-[3rem] overflow-hidden mb-6 relative shadow-premium border border-slate-100">
                       <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-all duration-700" />
                       <div className="absolute inset-0 bg-ice-blue/20 opacity-0 lg:group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-ice-blue shadow-xl">
                             <ShoppingBag size={20} />
                          </div>
                       </div>
                    </div>
                    <div className="flex justify-between items-center px-2">
                       <h3 className="text-xl font-black text-slate-900 italic lowercase">{item.name}</h3>
                       <div className="text-ice-orange font-black text-sm">{item.price}</div>
                    </div>
                 </motion.div>
               ))}
            </div>
         </section>

         {/* Flavor Lab Section */}
         <section id="lab" className="py-24 md:py-32 bg-slate-900 text-white rounded-[3rem] md:rounded-[5rem] mx-4 my-12 md:my-20 overflow-hidden relative px-4 md:px-8">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-ice-blue/10 blur-[150px] rounded-full"></div>
            <div className="max-w-7xl mx-auto relative z-10">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-center lg:text-left"
                  >
                     <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">ENTER THE <br /> <span className="text-ice-orange">FLAVOR LAB.</span></h2>
                     <p className="text-slate-400 text-lg md:text-xl font-medium mb-12 italic leading-relaxed">Every month we select one customer recipe to go into production. Winner gets free ice cream for a year.</p>
                     <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
                        <input placeholder="GIVE IT A NAME..." className="w-full bg-white/5 p-5 md:p-6 rounded-2xl border border-white/10 text-lg md:text-xl font-black uppercase outline-none focus:border-ice-orange" />
                        <textarea placeholder="DESCRIBE YOUR TASTE..." className="w-full bg-white/5 p-5 md:p-6 rounded-2xl border border-white/10 text-lg md:text-xl font-medium outline-none h-32 focus:border-ice-orange" />
                        <button className="w-full bg-ice-blue p-5 md:p-6 rounded-2xl text-white font-black text-xl hover:bg-white hover:text-ice-blue transition-all">SUBMIT RECIPE</button>
                     </div>
                  </motion.div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {[
                        { title: "Lavender Lemon", votes: "2.4k" },
                        { title: "Bacon Brudle", votes: "1.2k" },
                        { title: "Chili Choco", votes: "0.8k" },
                        { title: "Miso Maple", votes: "3.1k" }
                     ].map((l, i) => (
                        <motion.div 
                           key={i}
                           whileHover={{ scale: 1.05 }}
                           className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] md:rounded-[2.5rem] text-center"
                        >
                           <div className="text-ice-orange font-black text-2xl mb-2">{l.votes}</div>
                           <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{l.title}</div>
                        </motion.div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* Process Section */}
         <section id="process" className="py-24 md:py-32 bg-slate-50 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
                  <motion.div
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="text-center lg:text-left"
                  >
                     <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight uppercase font-kids tracking-tighter">THE CRAFT <br /> BEHIND THE <span className="text-ice-blue">CREAM.</span></h2>
                     <div className="space-y-10">
                        {[
                           { title: "Pure Base", desc: "100% grass-fed dairy from local valley farms.", icon: <Zap size={24} /> },
                           { title: "Cold Swirl", desc: "Churned at ultra-low temps for max density.", icon: <Star size={24} /> },
                           { title: "Flash Freeze", desc: "Locked in flavor with liquid nitrogen tech.", icon: <ShoppingBag size={24} /> }
                        ].map((item, i) => (
                           <motion.div 
                              key={i} 
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.2 }}
                              className="flex flex-col sm:flex-row gap-6 items-center lg:items-start"
                           >
                              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-ice-blue shadow-lg flex-shrink-0">
                                 {item.icon}
                              </div>
                              <div className="text-center sm:text-left">
                                 <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">{item.title}</h3>
                                 <p className="text-slate-500 font-medium italic text-sm">{item.desc}</p>
                              </div>
                           </motion.div>
                        ))}
                     </div>
                  </motion.div>
                  <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="relative px-4"
                  >
                     <div className="absolute inset-0 bg-ice-blue rounded-[3rem] md:rounded-[5rem] rotate-3 scale-95 opacity-20 md:opacity-100"></div>
                     <img src={IMAGES.icecreamHero} alt="Process" className="relative z-10 rounded-[3rem] md:rounded-[5rem] shadow-2xl object-cover h-[400px] md:h-[600px] w-full" />
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Sustainability */}
         <section id="sustainability" className="py-24 md:py-32 bg-white flex items-center justify-center px-4 md:px-8">
            <div className="max-w-4xl text-center">
               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
               >
                  <div className="text-5xl md:text-7xl mb-10 animate-bounce">🌍</div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter font-kids">ZERO-WASTE FROST.</h2>
                  <p className="text-slate-400 text-lg md:text-xl font-bold italic mb-12 leading-relaxed">Our cups are compostable, our trucks are electric, and our waste is non-existent. Carbon neutral treats for a cooler planet.</p>
                  <div className="flex flex-wrap justify-center gap-8 md:gap-12 font-black uppercase text-[10px] md:text-xs tracking-widest text-slate-900">
                     <div className="flex items-center gap-2 decoration-ice-blue underline decoration-4 underline-offset-8">Plastic Free</div>
                     <div className="flex items-center gap-2 decoration-ice-orange underline decoration-4 underline-offset-8">Refillable Pints</div>
                     <div className="flex items-center gap-2 decoration-ice-blue underline decoration-4 underline-offset-8">EV Logistics</div>
                  </div>
               </motion.div>
            </div>
         </section>

         {/* Subscription Section */}
         <section className="py-24 md:py-32 bg-ice-orange/5 relative overflow-hidden px-4">
            <div className="max-w-7xl mx-auto relative z-10">
               <div className="bg-white p-10 md:p-20 rounded-[3rem] md:rounded-[4rem] shadow-premium flex flex-col lg:flex-row items-center gap-12 md:gap-16 border border-ice-orange/10 text-center lg:text-left uppercase">
                  <div className="lg:w-1/2">
                     <h2 className="text-4xl md:text-5xl font-black mb-6">THE SCOOP <span className="text-ice-orange italic font-kids">CLUB.</span></h2>
                     <p className="text-slate-400 text-lg font-medium italic mb-10 max-w-md mx-auto lg:mx-0">Fresh pints of our newest experimental drops delivered to your porch every Friday. Skip the line, join the core.</p>
                     <div className="text-4xl font-black text-slate-900 mb-2 mt-4">$39/mo</div>
                     <div className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Cancel anytime // No stress</div>
                  </div>
                  <div className="lg:w-1/2 w-full">
                     <button className="w-full bg-ice-orange p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] text-white font-black text-xl md:text-2xl hover:scale-105 transition-all shadow-2xl shadow-orange-100 uppercase">JOIN THE FAM</button>
                  </div>
               </div>
            </div>
         </section>

         {/* About */}
         <section id="about" className="py-24 md:py-32 bg-slate-900 text-white rounded-[3rem] md:rounded-[5rem] mx-4 relative z-20 overflow-hidden px-4 md:px-8">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ice-blue/10 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="max-w-7xl mx-auto relative z-10">
               <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10 mb-16 md:mb-20 border-b border-white/5 pb-16 md:pb-20 text-center lg:text-left">
                  <motion.h2
                     initial={{ y: 50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter max-w-2xl leading-[0.85] font-kids"
                  >
                     WE SCOOP <br /> <span className="text-ice-blue italic">DIFFERENT.</span>
                  </motion.h2>
                  <p className="text-slate-500 max-w-sm text-lg font-medium italic">We started with one secret flavor in our founder's kitchen. Today, we're the city's cult favorite for experimental frost.</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {[
                     { title: "Sourcing", desc: "Direct from family-owned organic farms." },
                     { title: "Ethics", desc: "No plastic, zero waste, all love." },
                     { title: "Taste", desc: "Blind-tested by our custom tasting squad." }
                  ].map((item, i) => (
                     <motion.div
                        key={i}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white/5 p-10 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/10 hover:border-ice-blue transition-colors group text-center md:text-left"
                     >
                        <div className="w-12 h-12 bg-ice-blue rounded-2xl mb-8 flex items-center justify-center font-bold text-slate-900 mx-auto md:mx-0">0{i + 1}</div>
                        <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Squad */}
         <section id="team" className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto uppercase">
            <div className="text-center mb-16 md:mb-20">
               <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter"
               >
                  SCOOP SQUAD
               </motion.h2>
               <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">Meet the makers of the magic</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center items-center">
               {[
                  { name: "Chef Leo", role: "Flavor Architect", img: "https://i.pravatar.cc/300?img=11" },
                  { name: "Mia Frost", role: "Chief Churner", img: "https://i.pravatar.cc/300?img=20" },
                  { name: "Sam Chill", role: "Quality Ninja", img: "https://i.pravatar.cc/300?img=12" }
               ].map((member, i) => (
                  <motion.div 
                     key={i} 
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="space-y-6 flex flex-col items-center"
                  >
                     <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-8 border-ice-cyan shadow-xl translate-y-0 hover:-translate-y-2 transition-transform">
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                     </div>
                     <div>
                        <h3 className="text-2xl font-black italic text-slate-900 lowercase font-serif">{member.name}</h3>
                        <p className="text-ice-blue font-bold uppercase tracking-widest text-[10px] mt-1">{member.role}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </section>

         {/* Contact / Visit */}
         <section id="visit" className="py-24 md:py-32 bg-white px-4 md:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
               <div className="text-center lg:text-left">
                  <motion.h2 
                     initial={{ opacity: 0, x: -30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="text-4xl md:text-6xl font-black mb-12 tracking-tighter font-kids"
                  >
                     MELT WITH US.
                  </motion.h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                     <div className="space-y-4">
                        <div className="flex items-center justify-center lg:justify-start gap-3 text-ice-blue font-bold tracking-widest text-xs uppercase"><MapPin size={16} /> Location</div>
                        <p className="text-slate-500 font-medium italic text-lg leading-tight uppercase">Cool District, Block 4, <br/> Suite 101, Frost City</p>
                     </div>
                     <div className="space-y-4">
                        <div className="flex items-center justify-center lg:justify-start gap-3 text-ice-blue font-bold tracking-widest text-xs uppercase"><Phone size={16} /> Hotline</div>
                        <p className="text-slate-500 font-medium italic text-lg uppercase">+1 (800) CHILL-OUT</p>
                     </div>
                  </div>

                  <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="mt-16 bg-ice-cyan p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] flex flex-col sm:flex-row items-center gap-6"
                  >
                     <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-ice-blue shadow-lg flex-shrink-0">
                        <Info size={32} />
                     </div>
                     <p className="text-slate-600 font-bold uppercase tracking-widest text-xs md:text-sm text-center sm:text-left">Now Hiring Scoopers! Join the Frosty Team.</p>
                  </motion.div>
               </div>

               <motion.div
                  initial={{ rotate: 10, scale: 0.9, opacity: 0 }}
                  whileInView={{ rotate: 3, scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="relative group w-full max-w-xl mx-auto"
               >
                  <div className="absolute inset-0 bg-ice-orange rounded-[3rem] md:rounded-[4rem] rotate-3 scale-95 group-hover:rotate-0 transition-transform duration-500"></div>
                  <div className="relative z-10 bg-slate-900 p-8 md:p-12 rounded-[3.5rem] md:rounded-[4rem] text-white shadow-2xl text-center md:text-left">
                     <h3 className="text-4xl font-black mb-8 italic font-kids lowercase tracking-tight">Free Scoops!</h3>
                     <p className="text-slate-500 mb-10 text-lg uppercase leading-tight font-medium">Join our 'Frosty Fam' for monthly free flavor drops and secret event invites.</p>
                     <div className="space-y-4 font-black">
                        <input type="email" placeholder="YOUR EMAIL..." className="w-full bg-white/5 p-6 rounded-2xl border border-white/10 outline-none focus:border-ice-orange text-center md:text-left uppercase font-bold" />
                        <button className="w-full bg-ice-orange p-6 rounded-2xl text-white hover:scale-105 transition-all active:scale-95 uppercase tracking-widest">JOIN THE FAM</button>
                     </div>
                  </div>
               </motion.div>
            </div>
         </section>

         <footer className="py-20 bg-slate-50 text-center border-t border-slate-100 px-4">
            <div className="flex justify-center gap-10 mb-8 grayscale opacity-50 hover:grayscale-0 transition-all">
               <InstagramIcon className="w-6 h-6 text-ice-blue cursor-pointer" />
               <div className="w-6 h-6 bg-slate-400 rounded-lg cursor-pointer"></div>
               <div className="w-6 h-6 bg-slate-400 rounded-lg cursor-pointer"></div>
            </div>
            <div className="text-[10px] md:text-sm font-black text-slate-300 uppercase tracking-[0.3em] md:tracking-[0.5em]">Frozen with Joy // &copy; 2026 Frosty Bites // Small Batch Tech</div>
         </footer>
      </div>
   );
}

export default App;
