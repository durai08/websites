import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Flower2, Heart, MapPin, Phone, Menu, X } from 'lucide-react';
import { IMAGES } from './images';

const InstagramIcon = ({ className }) => (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

function App() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <div className="min-h-screen selection:bg-flower-rose/20 bg-flower-cream">
         {/* Navbar */}
         <nav className="fixed w-full z-50 px-4 md:px-10 py-6 flex justify-between items-center bg-white/80 backdrop-blur-xl border-b border-pink-100/50 transition-all duration-300">
            <motion.div
               initial={{ x: -20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               className="flex items-center gap-2"
            >
               <Flower2 className="text-flower-rose" />
               <span className="text-xl md:text-2xl font-serif font-bold italic floral-gradient">Petals & Prose</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-8 font-bold text-[10px] uppercase tracking-widest text-flower-green">
               <a href="#collections" className="hover:text-flower-rose transition-colors">Collections</a>
               <a href="#subscriptions" className="hover:text-flower-rose transition-colors">Club</a>
               <a href="#workshops" className="hover:text-flower-rose transition-colors">Workshops</a>
               <a href="#weddings" className="hover:text-flower-rose transition-colors">Weddings</a>
               <a href="#care" className="hover:text-flower-rose transition-colors">Care</a>
            </div>

            <div className="flex items-center gap-4">
               <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative p-2"
               >
                  <ShoppingBag className="text-flower-green" />
                  <span className="absolute top-0 right-0 w-4 h-4 bg-flower-rose text-white text-[10px] rounded-full flex items-center justify-center">0</span>
               </motion.button>
               <button 
                  className="lg:hidden p-2 text-flower-green"
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
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="fixed inset-0 z-[100] bg-white text-flower-green flex flex-col items-center justify-center gap-10 p-8"
               >
                  <button className="absolute top-8 right-8" onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
                  <div className="flex flex-col items-center gap-8 font-serif text-4xl italic">
                     <a href="#collections" onClick={() => setIsMenuOpen(false)}>Collections</a>
                     <a href="#subscriptions" onClick={() => setIsMenuOpen(false)}>The Club</a>
                     <a href="#workshops" onClick={() => setIsMenuOpen(false)}>Workshops</a>
                     <a href="#weddings" onClick={() => setIsMenuOpen(false)}>Weddings</a>
                     <a href="#care" onClick={() => setIsMenuOpen(false)}>Care Tips</a>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>

         {/* Hero */}
         <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
            <div className="absolute inset-0">
               <img src={IMAGES.flowerHero} alt="Flowers" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-flower-cream via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 text-center max-w-4xl pt-20">
               <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
               >
                  <h1 className="text-5xl sm:text-7xl md:text-[9rem] font-serif font-bold mb-8 text-flower-green leading-tight md:leading-none">
                     Blooms for <br />
                     <span className="italic font-normal floral-gradient">Every Soul</span>
                  </h1>
                  <p className="text-base md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic">
                     Sourced from artisanal gardens around the globe. We bring the beauty of nature directly to your doorstep with curated elegance.
                  </p>
                  <motion.button
                     whileHover={{ y: -5 }}
                     className="px-10 md:px-12 py-4 md:py-5 bg-flower-green text-white rounded-full font-bold text-sm md:text-lg shadow-2xl shadow-flower-green/20 flex items-center gap-3 mx-auto transition-all"
                    >
                       EXPLORE BLOOMS <ShoppingBag size={20} />
                    </motion.button>
                 </motion.div>
              </div>
           </section>

           {/* Collections */}
           <section id="collections" className="py-24 md:py-32 max-w-7xl mx-auto px-4 md:px-8">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-16 gap-6 text-center sm:text-left"
            >
               <div>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-flower-green italic">Curated Collections</h2>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-xs mt-2">Designers choice for this season</p>
               </div>
               <button className="text-flower-rose font-black text-xs uppercase tracking-[0.3em] border-b-2 border-flower-rose pb-1">View All</button>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
               {[
                 { name: "Wild Romance", price: "$85", img: IMAGES.flowerWildRomance },
                 { name: "Urban Bloom", price: "$65", img: IMAGES.flowerUrbanBloom },
                 { name: "Pastel Dream", price: "$95", img: IMAGES.flowerPastelDream }
               ].map((item, i) => (
                 <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                 >
                    <div className="aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden mb-6 relative shadow-premium border border-pink-50">
                       <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                       <div className="absolute inset-0 bg-black/10 opacity-0 lg:group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button className="bg-white text-flower-green px-8 py-3 rounded-full font-bold shadow-xl">QUICK SHOP</button>
                       </div>
                    </div>
                    <div className="flex justify-between items-center px-4">
                       <h3 className="text-xl font-serif font-bold text-flower-green">{item.name}</h3>
                       <div className="text-flower-rose font-black">{item.price}</div>
                    </div>
                 </motion.div>
               ))}
            </div>
         </section>

         {/* Subscription Section */}
         <section id="subscriptions" className="py-24 md:py-32 px-4 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-20">
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="lg:w-1/2 text-center lg:text-left"
               >
                  <h2 className="text-5xl md:text-6xl font-serif font-bold text-flower-green mb-8 leading-tight">Monthly <br className="hidden md:block"/> <span className="floral-gradient italic">Happiness.</span></h2>
                  <p className="text-gray-500 text-lg mb-10 leading-relaxed italic max-w-xl mx-auto lg:mx-0">Never be without nature's beauty. Subscribe to our 'Soul Blooms' club and receive a curated arrangement every month, tailored to your style.</p>
                  <ul className="space-y-4 mb-10 font-bold text-flower-green/70 text-sm italic inline-block text-left">
                     <li>✓ Premium seasonal stems</li>
                     <li>✓ Free delivery everywhere in the city</li>
                     <li>✓ Cancel or skip anytime</li>
                  </ul>
                  <div>
                    <button className="px-10 md:px-12 py-4 md:py-5 bg-flower-green text-white rounded-full font-bold shadow-2xl hover:bg-flower-rose transition-all">JOIN THE CLUB — $45/mo</button>
                  </div>
               </motion.div>
               <div className="lg:w-1/2 relative px-4 md:px-0">
                  <div className="absolute inset-0 bg-flower-rose/10 blur-[100px] rounded-full"></div>
                  <img src={IMAGES.flowerAbout} className="relative z-10 rounded-[3rem] md:rounded-[4rem] shadow-2xl rotate-3 w-full" />
               </div>
            </div>
         </section>

         {/* Workshop Section */}
         <section id="workshops" className="py-24 md:py-32 bg-flower-rose text-white rounded-[3rem] md:rounded-[5rem] mx-4 my-12 md:my-20 px-4 md:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center">
               <motion.h2
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="text-4xl md:text-6xl font-serif font-bold italic mb-8"
               >
                 The Art of Arrangement
               </motion.h2>
               <p className="text-white/80 max-w-2xl mx-auto mb-16 text-base md:text-lg italic">Join our master florists for a weekend of creativity. Learn the secrets of color harmony and stem layering.</p>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {[
                    { title: "Wild Style", time: "Sat, 2pm" },
                    { title: "Minimal Zen", time: "Sun, 11am" },
                    { title: "Event Florals", time: "Tue, 6pm" }
                  ].map((w, i) => (
                     <motion.div
                       key={i}
                       whileHover={{ scale: 1.02 }}
                       className="p-10 border border-white/20 rounded-[2.5rem] md:rounded-[3rem] backdrop-blur-md"
                     >
                        <Flower2 className="mx-auto mb-6 opacity-30" size={48} />
                        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 lowercase">{w.title}</h3>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">{w.time}</div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Custom Wedding Portal */}
         <section id="weddings" className="py-24 md:py-32 bg-flower-cream scroll-mt-20 overflow-hidden px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
               <div className="relative aspect-square rounded-[3rem] md:rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl max-w-xl mx-auto w-full">
                  <img src={IMAGES.flowerHero} className="w-full h-full object-cover grayscale opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <Heart size={80} className="text-flower-rose animate-pulse" />
                  </div>
               </div>
               <div className="text-center lg:text-left uppercase">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-flower-green mb-8 italic">Your Fairytale, <br className="hidden md:block"/> Our Foliage.</h2>
                  <p className="text-gray-500 text-lg mb-10 italic leading-relaxed max-w-md mx-auto lg:mx-0">From intimate ceremonies to grand galas, our team transforms spaces into interactive dreams.</p>
                  <div className="space-y-6">
                     <button className="w-full py-5 bg-flower-green text-white font-bold rounded-2xl hover:bg-flower-rose transition-colors shadow-2xl uppercase tracking-widest text-sm">BOOK A CONSULTATION</button>
                     <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Limited slots for 2026 Season</p>
                  </div>
               </div>
            </div>
         </section>

         {/* Care Section */}
         <section id="care" className="py-24 md:py-32 bg-flower-green/5 px-4">
            <div className="max-w-7xl mx-auto">
               <div className="text-center mb-16 md:mb-24">
                  <motion.h2 className="text-4xl md:text-5xl font-serif font-bold text-flower-green italic mb-4">Flora Care Essentials</motion.h2>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Keep your blooms breathing</p>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {[
                     { title: "Hydration", desc: "Fresh lukewarm water every 2 days.", icon: "💧" },
                     { title: "Light", desc: "Keep away from direct heat sources.", icon: "☀️" },
                     { title: "Trimming", desc: "Cut stems at 45-degree angles.", icon: "✂️" },
                     { title: "Feeding", desc: "Use our special flower food booster.", icon: "🌱" }
                  ].map((item, i) => (
                     <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className="p-10 bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-pink-50 hover:shadow-xl transition-all text-center"
                     >
                        <div className="text-4xl mb-6">{item.icon}</div>
                        <h3 className="text-xl font-serif font-bold text-flower-green mb-3">{item.title}</h3>
                        <p className="text-gray-500 text-sm italic leading-relaxed">{item.desc}</p>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Reviews */}
         <section id="reviews" className="py-24 md:py-32 px-4 max-w-7xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
               {[
                  { text: "The bouquet stayed fresh for nearly two weeks! Incredible quality.", author: "Isabella G." },
                  { text: "Handled our wedding flowers with such grace. Every detail was perfect.", author: "Marcus T." },
                  { text: "Same-day delivery actually worked and the flowers were stunning.", author: "Sophia L." }
               ].map((review, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="p-10 md:p-12 bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-premium relative group border border-pink-50"
                  >
                     <Heart className="absolute top-8 right-8 text-flower-rose/10 group-hover:text-flower-rose transition-colors" />
                     <p className="text-gray-600 mb-8 italic text-lg leading-relaxed">"{review.text}"</p>
                     <div className="font-serif font-bold text-flower-green text-xl">{review.author}</div>
                     <div className="text-flower-rose text-[10px] font-bold uppercase tracking-widest mt-1">Verified Heart</div>
                  </motion.div>
               ))}
            </div>
         </section>

         {/* Contact Section */}
         <section id="contact" className="py-24 md:py-32 bg-white scroll-mt-20 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-flower-cream p-10 md:p-12 rounded-[3.5rem] md:rounded-[4rem] border border-pink-100 shadow-xl text-center md:text-left"
               >
                  <h2 className="text-4xl font-serif font-bold mb-8 text-flower-green italic">Say Hello!</h2>
                  <div className="space-y-8 font-medium italic text-gray-700">
                     <div className="flex items-center justify-center md:justify-start gap-4">
                        <MapPin className="text-flower-rose" /> 789 Blossom Lane, Garden City
                     </div>
                     <div className="flex items-center justify-center md:justify-start gap-4">
                        <Phone className="text-flower-rose" /> +1 (555) BLOOM-ME
                     </div>
                     <div className="flex items-center justify-center md:justify-start gap-4">
                        <InstagramIcon className="text-flower-rose" /> @petalsandprose
                     </div>
                  </div>
               </motion.div>
               <div className="flex flex-col justify-center">
                  <motion.form
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="space-y-6"
                  >
                     <input type="text" placeholder="Full Name" className="w-full bg-gray-50 border-none px-8 py-5 rounded-2xl focus:ring-2 focus:ring-flower-rose/20 outline-none transition-all shadow-inner" />
                     <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border-none px-8 py-5 rounded-2xl focus:ring-2 focus:ring-flower-rose/20 outline-none transition-all shadow-inner" />
                     <textarea rows="4" placeholder="Your Message" className="w-full bg-gray-50 border-none px-8 py-5 rounded-2xl focus:ring-2 focus:ring-flower-rose/20 outline-none transition-all shadow-inner"></textarea>
                     <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-5 bg-flower-rose text-white rounded-2xl font-bold shadow-xl shadow-rose-100 uppercase tracking-widest text-sm"
                     >
                        SUBMIT REQUEST
                     </motion.button>
                  </motion.form>
               </div>
            </div>
         </section>

         <footer className="py-20 text-center text-gray-400 text-[10px] md:text-sm font-medium uppercase tracking-[0.2em] border-t border-gray-100 bg-flower-cream px-4">
            <div className="flex justify-center gap-10 mb-8 opacity-50">
               <InstagramIcon className="w-5 h-5 hover:text-flower-rose cursor-pointer transition-colors" />
               <div className="w-5 h-5 bg-current rounded-sm cursor-pointer"></div>
               <div className="w-5 h-5 bg-current rounded-sm cursor-pointer"></div>
            </div>
            &copy; 2026 Petals & Prose // Curating Nature's Poetry // Established 1994
         </footer>
      </div>
   );
}

export default App;
