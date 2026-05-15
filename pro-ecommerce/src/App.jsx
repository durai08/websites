import React, { useState } from 'react'
import EcomHero from './components/EcomHero'
import ProductList from './components/ProductList'
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react'
import { IMAGES } from './images'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-shop-purple/20 bg-white">
      <nav className="px-4 md:px-8 py-6 flex justify-between items-center fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="hidden lg:flex gap-8 font-bold text-[10px] uppercase tracking-widest text-gray-400">
           <a href="#arrivals" className="text-shop-slate hover:text-shop-purple transition-colors">Arrivals</a>
           <a href="#categories" className="hover:text-shop-purple transition-colors">Categories</a>
           <a href="#concierge" className="hover:text-shop-purple transition-colors">Concierge</a>
           <a href="#ethics" className="hover:text-shop-purple transition-colors">Ethics</a>
        </div>

        <button 
          className="lg:hidden p-2 text-shop-slate"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
        
        <div className="text-2xl md:text-3xl font-black italic tracking-tighter absolute left-1/2 -translate-x-1/2 cursor-pointer text-shop-slate">
           LUXE.
        </div>

        <div className="flex gap-4 md:gap-6 items-center">
           <button className="hidden sm:block hover:text-shop-purple transition-colors text-shop-slate"><Search size={20} /></button>
           <button className="hidden sm:block hover:text-shop-purple transition-colors text-shop-slate"><User size={20} /></button>
           <button className="relative hover:text-shop-purple transition-colors text-shop-slate">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-shop-purple text-white text-[10px] rounded-full flex items-center justify-center font-bold">2</span>
           </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="fixed inset-0 z-[100] bg-white text-shop-slate flex flex-col items-center justify-center gap-10 p-8"
          >
            <button className="absolute top-8 right-8" onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
            <div className="flex flex-col items-center gap-8 font-black text-4xl italic uppercase">
              <a href="#arrivals" onClick={() => setIsMenuOpen(false)}>Arrivals</a>
              <a href="#categories" onClick={() => setIsMenuOpen(false)}>Categories</a>
              <a href="#concierge" onClick={() => setIsMenuOpen(false)}>Concierge</a>
              <a href="#ethics" onClick={() => setIsMenuOpen(false)}>Ethics</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pt-20">
        <EcomHero />
        
        {/* Categories Section */}
        <section id="categories" className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto uppercase">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-16 gap-6 text-center sm:text-left"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black italic mb-4">The Essentials</h2>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">Curated by our top designers</p>
            </div>
            <button className="text-shop-purple font-black text-xs uppercase tracking-widest border-b-2 border-shop-purple pb-1">Explore All Items</button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              { title: "Timepieces", img: IMAGES.ecomWatch, color: "bg-slate-50" },
              { title: "Accessories", img: IMAGES.ecomGlasses, color: "bg-purple-50" },
              { title: "Travel Wear", img: IMAGES.ecomBag, color: "bg-stone-50" }
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className={`${cat.color} rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-12 flex flex-col justify-between aspect-square md:aspect-auto md:h-[500px] overflow-hidden group cursor-pointer border border-gray-100/50`}
              >
                <h3 className="text-3xl md:text-4xl font-black italic leading-tight group-hover:text-shop-purple transition-colors uppercase">{cat.title}</h3>
                <div className="flex-grow flex items-center justify-center p-4">
                  <img src={cat.img} alt={cat.title} className="max-h-[200px] md:max-h-[300px] object-contain group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] flex items-center gap-2">
                  Shop Category <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Membership Section */}
        <section className="py-24 bg-shop-slate text-white mx-4 rounded-[3rem] md:rounded-[4rem] relative overflow-hidden px-4 md:px-8 uppercase">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-shop-purple/10 blur-[150px] rounded-full"></div>
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 text-center lg:text-left">
              <div className="lg:w-1/2">
                 <h2 className="text-5xl md:text-6xl font-black italic mb-8">Luxe <span className="text-shop-purple">Insider.</span></h2>
                 <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md mx-auto lg:mx-0 uppercase font-medium">Access exclusive prototype drops, personalized styling, and 24/7 concierge services. Luxury is a relationship.</p>
                 <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="px-10 py-5 bg-shop-purple rounded-2xl font-black uppercase shadow-2xl hover:scale-105 transition-all tracking-widest text-sm">JOIN THE CLUB</button>
                    <button className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-black uppercase tracking-widest text-sm">LEARN MORE</button>
                 </div>
              </div>
              <div className="lg:w-1/2 relative w-full px-4 md:px-0">
                 <img src={IMAGES.ecomHero} className="rounded-[2.5rem] md:rounded-[3rem] shadow-2xl skew-y-0 lg:skew-y-3 w-full" />
              </div>
           </div>
        </section>

        <section id="arrivals" className="py-16 md:py-20"><ProductList /></section>

        {/* Style Concierge */}
        <section id="concierge" className="py-24 md:py-32 bg-[#F9F9F9] px-4">
           <div className="max-w-4xl mx-auto text-center uppercase">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                 <div className="w-16 h-16 md:w-20 md:h-20 bg-shop-purple/10 text-shop-purple rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                    <User size={32} />
                 </div>
                 <h2 className="text-5xl md:text-6xl font-black italic mb-6">Concierge.</h2>
                 <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed mb-12 italic">Unsure of your next addition? Book a sessions with our lead curators to build your essential toolkit.</p>
                 <button className="px-12 py-5 md:py-6 bg-shop-slate text-white rounded-2xl md:rounded-3xl font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-all text-sm md:text-base">BOOK A SESSION</button>
              </motion.div>
           </div>
        </section>

        {/* Ethics Section */}
        <section id="ethics" className="py-24 md:py-32 px-4 md:px-8 bg-white border-y border-gray-100 overflow-hidden uppercase">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 md:gap-20 items-center">
              <div className="lg:w-1/2 order-2 lg:order-1 relative px-8 md:px-0">
                 <img src={IMAGES.ecomWatch} className="rounded-[3rem] md:rounded-[4rem] grayscale opacity-40 rotate-6 w-full" />
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
                 <h2 className="text-4xl md:text-6xl font-black italic mb-8">Radically <br /><span className="text-shop-purple">Transparent.</span></h2>
                 <p className="text-gray-400 text-lg mb-10 leading-relaxed italic uppercase font-medium">We believe you deserve to know the journey of your product. Carbon-neutral shipping, ethical supply chain, zero secrets.</p>
                 <div className="grid grid-cols-2 gap-8 font-black uppercase text-[10px] md:text-xs tracking-widest text-shop-slate">
                    <div className="flex flex-col gap-2"><span className="text-shop-purple text-2xl md:text-3xl">0%</span> Plastic Packaging</div>
                    <div className="flex flex-col gap-2"><span className="text-shop-purple text-2xl md:text-3xl">100%</span> Fair Wages</div>
                 </div>
              </div>
           </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 md:py-32 bg-gray-50 overflow-hidden uppercase px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative text-center lg:text-left"
            >
              <div className="text-[12rem] font-black italic text-black/5 absolute -top-40 -left-10 pointer-events-none hidden lg:block">"</div>
              <h2 className="text-4xl md:text-6xl font-black italic leading-none mb-10">What they <br /> <span className="text-shop-purple">Say</span> about us.</h2>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <div className="text-indigo-600 font-bold border-b-2 border-indigo-600 pb-1 text-sm tracking-widest uppercase">4.9/5 Trustpilot</div>
                <div className="text-gray-400 font-bold text-[10px] tracking-widest uppercase">15k+ Verified Reviews</div>
              </div>
            </motion.div>

            <div className="space-y-6 md:space-y-8">
              {[
                { text: "The quality of the Luxe watch is unparalleled. I've worn it every day and it still looks brand new.", author: "Alexander K." },
                { text: "Fast shipping and the packaging was absolutely premium. Truly a luxury experience.", author: "Marie L." }
              ].map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="p-10 md:p-12 bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-premium border border-gray-100 italic"
                >
                  <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">"{review.text}"</p>
                  <div className="font-black italic text-shop-slate text-xl leading-none">{review.author}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 md:py-32 px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto bg-shop-slate rounded-[3.5rem] md:rounded-[5rem] text-white text-center p-12 md:p-24 shadow-2xl relative overflow-hidden uppercase"
          >
             <div className="absolute top-0 right-0 w-96 h-96 bg-shop-purple/20 blur-[150px] rounded-full"></div>
             <h2 className="text-4xl md:text-6xl font-black italic mb-8">Stay in the Loop</h2>
             <p className="text-gray-400 mb-12 max-w-xl mx-auto text-base md:text-lg leading-relaxed uppercase font-medium">Sign up for early access to collections and our monthly style digest.</p>
             <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto bg-white/5 p-3 rounded-2xl md:rounded-3xl border border-white/10 uppercase">
                <input type="email" placeholder="EMAIL ADDRESS..." className="bg-transparent px-6 py-4 rounded-xl flex-grow focus:outline-none placeholder:text-gray-600 font-bold text-sm" />
                <button className="px-10 py-5 bg-shop-purple rounded-xl md:rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all text-sm">JOIN NOW</button>
             </div>
          </motion.div>
        </section>
      </div>

      <footer className="py-20 border-t border-gray-100 px-4 md:px-8 bg-white uppercase">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
            <div className="lg:col-span-1 flex flex-col items-center md:items-start">
               <div className="text-3xl font-black italic tracking-tighter mb-6 text-shop-slate">LUXE.</div>
               <p className="text-gray-400 text-[10px] leading-relaxed max-w-xs font-bold tracking-widest">DEFINING THE MODERN PIONEER. QUALITY IS NOT AN ACT, BUT A HABIT WE REPEAT EVERY DAY.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:col-span-3 gap-8 text-sm">
               <div className="space-y-4">
                  <div className="font-black uppercase tracking-widest text-shop-slate text-[10px]">Shop</div>
                  <div className="flex flex-col gap-3 text-gray-400 font-bold text-xs">
                     <a href="#" className="hover:text-shop-purple">All Collections</a>
                     <a href="#" className="hover:text-shop-purple">New Arrivals</a>
                     <a href="#" className="hover:text-shop-purple">Limited Drops</a>
                  </div>
               </div>
               <div className="space-y-4">
                  <div className="font-black uppercase tracking-widest text-shop-slate text-[10px]">Company</div>
                  <div className="flex flex-col gap-3 text-gray-400 font-bold text-xs">
                     <a href="#" className="hover:text-shop-purple">Our Story</a>
                     <a href="#" className="hover:text-shop-purple">Ethos</a>
                     <a href="#" className="hover:text-shop-purple">Careers</a>
                  </div>
               </div>
               <div className="space-y-4">
                  <div className="font-black uppercase tracking-widest text-shop-slate text-[10px]">Social</div>
                  <div className="flex flex-col gap-3 text-gray-400 font-bold text-xs">
                     <a href="#" className="hover:text-shop-purple">Instagram</a>
                     <a href="#" className="hover:text-shop-purple">Twitter</a>
                     <a href="#" className="hover:text-shop-purple">TikTok</a>
                  </div>
               </div>
            </div>
         </div>
         <div className="max-w-7xl mx-auto pt-16 border-t border-gray-50 mt-16 flex flex-col md:flex-row justify-between items-center gap-6 text-center">
            <div className="text-[8px] md:text-[10px] text-gray-300 font-black uppercase tracking-[0.3em]">© 2026 Luxe Ecommerce // Defining the Standards</div>
            <div className="flex gap-6 md:gap-10 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
               <a href="#" className="hover:text-shop-purple transition-colors">Privacy</a>
               <a href="#" className="hover:text-shop-purple transition-colors">Terms</a>
               <a href="#" className="hover:text-shop-purple transition-colors">Shipping</a>
            </div>
         </div>
      </footer>
    </div>
  )
}

export default App
