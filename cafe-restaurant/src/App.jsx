import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { IMAGES } from './images'

function App() {
  return (
    <div className="min-h-screen selection:bg-primary-600/20 bg-white">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-[#FAFAFA] overflow-hidden px-4 md:px-8 uppercase">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
             <motion.div
               initial={{ opacity: 0, x: -100 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="relative order-2 lg:order-1"
             >
                <div className="aspect-[4/5] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl">
                   <img src={IMAGES.cafeFood2} alt="Cafe ambiance" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                </div>
                <motion.div 
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-48 md:w-64 p-6 md:p-10 bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border border-gray-50 flex flex-col items-center text-center"
                >
                   <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary-600 mb-2 leading-none">15+</h3>
                   <p className="text-gray-400 text-[10px] md:text-sm font-bold uppercase tracking-widest">Years of Excellence</p>
                </motion.div>
             </motion.div>
             
             <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-center lg:text-left order-1 lg:order-2"
             >
                <span className="text-primary-600 font-bold uppercase tracking-widest text-[10px] py-2 px-4 bg-primary-50 rounded-full inline-block">
                  Our Heritage
                </span>
                <h2 className="text-4xl md:text-6xl font-bold mt-8 mb-8 leading-tight tracking-tight">Crafting Memories <br /> <span className="text-gray-400 font-serif italic font-normal">One Cup at a Time</span></h2>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 italic">
                  Founded in 2008, Luxe Cafe started as a small roastery with a mission to bring the world's finest beans to our community. Today, we are a destination for gourmets.
                </p>
                <p className="text-gray-500 mb-12 text-base md:text-lg">
                  Every dish and drink we serve is a testament to our commitment to quality, sourcing locally whenever possible and treating every guest like family.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-accent-dark text-white rounded-full font-bold shadow-xl shadow-accent-dark/20 transition-all uppercase tracking-widest text-xs"
                >
                  Discover More
                </motion.button>
             </motion.div>
          </div>
        </div>
      </section>

      <Menu />

      {/* Coffee Subscription */}
      <section id="subscription" className="py-24 md:py-32 bg-white overflow-hidden relative px-4 md:px-8">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-20">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:w-1/2 text-center lg:text-left uppercase"
            >
               <span className="text-primary-600 font-bold uppercase tracking-widest text-[10px] py-2 px-4 bg-primary-50 rounded-full inline-block mb-6">Subscription</span>
               <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight italic font-serif">Freshly Roasted <br /> <span className="text-primary-600 not-italic uppercase font-bold tracking-tighter">On Repeat.</span></h2>
               <p className="text-gray-500 text-lg mb-10 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">Join our 'Brew Core' club. Get the month's rarest roasts delivered to your door within 48 hours of roasting.</p>
               <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start">
                  <div className="text-4xl font-bold text-accent-dark">$24.00/mo</div>
                  <button className="w-full sm:w-auto px-10 py-5 bg-accent-dark text-white rounded-full font-black text-xs uppercase tracking-widest shadow-xl">SUBSCRIBE NOW</button>
               </div>
            </motion.div>
            <div className="lg:w-1/2 relative px-4 md:px-0">
               <div className="absolute inset-0 bg-primary-600 opacity-10 blur-[100px] rounded-full"></div>
               <img src={IMAGES.cafeHero} className="relative z-10 rounded-[3rem] md:rounded-[4rem] shadow-2xl rotate-2 grayscale w-full" />
            </div>
         </div>
      </section>

      {/* Roastery Workshops */}
      <section id="workshops" className="py-24 md:py-32 bg-accent-dark text-white rounded-[3rem] md:rounded-[5rem] mx-4 my-12 md:my-20 px-4 md:px-8 overflow-hidden uppercase">
         <div className="max-w-7xl mx-auto text-center">
            <motion.h2
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-4xl md:text-6xl font-bold mb-8 italic font-serif tracking-tight"
            >
               The Art of the Roast
            </motion.h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-base md:text-lg font-medium italic">Master the nuances of acidity, body, and sweetness. Our 4-hour immersive workshops take you from bean to cup with our head roaster.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
               {[
                  { name: "Cupping Basics", time: "Saturdays @ 10am" },
                  { name: "Espresso Mastery", time: "Sundays @ 2pm" },
                  { name: "Roasting Lab", time: "Wednesdays @ 6pm" }
               ].map((w, i) => (
                  <motion.div 
                     key={i}
                     whileHover={{ y: -10 }}
                     className="p-10 md:p-12 border border-white/10 rounded-[2.5rem] md:rounded-[3rem] backdrop-blur-md hover:bg-white/5 transition-all text-center md:text-left"
                  >
                     <div className="text-primary-400 text-4xl md:text-5xl font-serif italic mb-6">0{i+1}.</div>
                     <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">{w.name}</h3>
                     <div className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">{w.time}</div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Chef's Table */}
      <section id="private" className="py-24 md:py-32 bg-[#FAFAFA] scroll-mt-20 px-4">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="relative aspect-square rounded-[3rem] md:rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl order-2 lg:order-1 max-w-xl mx-auto w-full">
               <img src={IMAGES.cafeFood2} className="w-full h-full object-cover grayscale opacity-60" />
               <div className="absolute inset-0 bg-gradient-to-t from-accent-dark to-transparent"></div>
               <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                  <div className="font-serif italic text-white text-2xl md:text-3xl">Private Events</div>
                  <div className="bg-primary-600 px-6 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest text-white">RESERVE</div>
               </div>
            </div>
            <div className="order-1 lg:order-2 text-center lg:text-left uppercase">
               <h2 className="text-4xl md:text-6xl font-bold text-accent-dark mb-8 leading-tight tracking-tight">Elevate Your <br /> <span className="text-primary-600 font-serif italic">Special Evenings.</span></h2>
               <p className="text-gray-500 text-lg mb-12 italic leading-relaxed max-w-xl mx-auto lg:mx-0">Book our custom-designed private dining space for up to 12 guests. We offer a 7-course tasting menu curated by the head chef.</p>
               <div className="space-y-6">
                  <button className="w-full py-6 bg-accent-dark text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-xl uppercase tracking-widest text-sm">INQUIRE ABOUT HOSTING</button>
                  <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">Available for corporate & private bookings</p>
               </div>
            </div>
         </div>
      </section>

      {/* Chef's Specials */}
      <section className="py-24 md:py-32 bg-accent-dark text-white overflow-hidden relative px-4 md:px-8 uppercase">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-20 gap-8 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Chef's <span className="text-primary-400 font-serif italic font-normal">Specials</span></h2>
              <p className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">Limited time artisanal creations</p>
            </motion.div>
            <motion.div 
               className="flex gap-4"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">←</div>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">→</div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Smoked Salmon", price: "$24", img: IMAGES.cafeFood1 },
              { name: "Wagyu Burger", price: "$32", img: IMAGES.cafeFood2 },
              { name: "Truffle Asparagus", price: "$18", img: IMAGES.cafeFood1 }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group w-full"
              >
                <div className="aspect-[4/3] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden mb-8 shadow-2xl border border-white/10">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="flex justify-between items-center text-xl md:text-2xl font-bold tracking-tight">
                  <h3>{item.name}</h3>
                  <span className="text-primary-400">{item.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-white px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 md:mb-24 uppercase">
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter"
             >
               Guest <span className="text-primary-600 font-serif italic font-normal">Experiences</span>
             </motion.h2>
             <p className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">Why people love Luxe Cafe</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              { text: "The atmosphere is unmatched. It's the perfect spot for weekend brunches.", author: "James Wilson" },
              { text: "Best coffee in the city. You can tell they take roasting seriously.", author: "Elena R." },
              { text: "The Truffle Steak is life-changing. A must-visit for every food lover.", author: "Sarah J." }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 md:p-12 bg-[#FAFAFA] rounded-[2.5rem] md:rounded-[3rem] relative shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <p className="text-lg md:text-xl text-gray-600 italic mb-10 font-serif leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold uppercase text-xs">
                    {review.author[0]}
                  </div>
                  <div className="font-bold text-accent-dark tracking-tight">{review.author}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-[#FAFAFA] scroll-mt-20 px-4">
        <div className="max-w-7xl mx-auto">
           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-accent-dark rounded-[3.5rem] md:rounded-[5rem] p-8 md:p-24 text-white flex flex-col lg:flex-row gap-16 md:gap-20 overflow-hidden relative shadow-2xl"
           >
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl"></div>
              
              <div className="lg:w-1/2 text-center lg:text-left uppercase">
                 <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight tracking-tight">Let's connect over <br /><span className="text-primary-400">fresh flavors.</span></h2>
                 <p className="text-gray-400 mb-16 text-lg md:text-xl max-w-md mx-auto lg:mx-0 leading-relaxed italic">Book a private event or just say hello.</p>
                 
                 <div className="space-y-10">
                    <motion.div whileHover={{ x: 10 }} className="flex flex-col sm:flex-row gap-6 items-center lg:items-start text-center lg:text-left">
                       <div className="w-16 h-16 bg-white/5 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center text-primary-400 shrink-0 border border-white/10 shadow-xl">
                          <MapPin size={32} />
                       </div>
                       <div>
                          <div className="font-bold text-xl md:text-2xl mb-1 tracking-tight">Location</div>
                          <div className="text-gray-400 text-sm md:text-lg italic leading-tight">123 Culinary Ave, Food District, FL 34212</div>
                       </div>
                    </motion.div>
                    <motion.div whileHover={{ x: 10 }} className="flex flex-col sm:flex-row gap-6 items-center lg:items-start text-center lg:text-left">
                       <div className="w-16 h-16 bg-white/5 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center text-primary-400 shrink-0 border border-white/10 shadow-xl">
                          <Clock size={32} />
                       </div>
                       <div>
                          <div className="font-bold text-xl md:text-2xl mb-1 tracking-tight">Hours</div>
                          <div className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest leading-tight">Mon - Sun: 08 AM - 10 PM</div>
                       </div>
                    </motion.div>
                 </div>
              </div>
              
              <div className="lg:w-1/2 bg-white/5 p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] border border-white/10 backdrop-blur-xl w-full">
                 <form className="space-y-6 md:space-y-8 uppercase">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                       <div>
                          <label className="block text-[10px] font-black mb-3 uppercase tracking-[0.2em] text-gray-500">Name</label>
                          <input type="text" className="w-full bg-white/5 border border-white/10 px-6 py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl focus:outline-none focus:border-primary-400 focus:bg-white/10 transition-all font-bold placeholder-gray-700" placeholder="NAME" />
                       </div>
                       <div>
                          <label className="block text-[10px] font-black mb-3 uppercase tracking-[0.2em] text-gray-500">Email</label>
                          <input type="email" className="w-full bg-white/5 border border-white/10 px-6 py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl focus:outline-none focus:border-primary-400 focus:bg-white/10 transition-all font-bold placeholder-gray-700" placeholder="EMAIL" />
                       </div>
                    </div>
                    <div>
                       <label className="block text-[10px] font-black mb-3 uppercase tracking-[0.2em] text-gray-500">Message</label>
                       <textarea rows="4" className="w-full bg-white/5 border border-white/10 px-6 py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl focus:outline-none focus:border-primary-400 focus:bg-white/10 transition-all font-bold placeholder-gray-700 h-32" placeholder="SAY HELLO..."></textarea>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-5 md:py-6 bg-primary-600 rounded-2xl md:rounded-3xl font-bold hover:bg-primary-500 transition-all shadow-2xl shadow-primary-900 border-b-4 border-primary-800 uppercase tracking-widest text-sm"
                    >
                       SEND MESSAGE
                    </motion.button>
                 </form>
              </div>
           </motion.div>
        </div>
      </section>

      <footer className="bg-accent-dark text-white py-16 px-4 md:py-20 md:px-8 border-t border-white/5 uppercase">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12 text-center md:text-left">
          <div className="text-2xl md:text-3xl font-serif font-bold italic floral-gradient tracking-tight">Luxe Cafe</div>
          <div className="flex gap-8 md:gap-12 text-[10px] md:text-sm text-gray-400 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-primary-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Facebook</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Twitter</a>
          </div>
          <div className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">
            © 2026 Luxe Cafe // Crafted with Passion
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
