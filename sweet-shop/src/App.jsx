import { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Sparkles, ShoppingCart, Heart, Cake, Star, Gift, Utensils, Zap, Menu, X } from 'lucide-react';
import { IMAGES } from './images';

function App() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-sweet-purple selection:bg-sweet-brand selection:text-white pb-20">
      <nav className="px-4 md:px-8 py-6 flex justify-between items-center fixed w-full z-50 bg-white/90 backdrop-blur-xl border-b border-white/10 shadow-sm transition-all text-gray-800">
         <motion.div 
           initial={{ x: -20, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           className="flex items-center gap-2"
         >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-sweet-brand rounded-full flex items-center justify-center text-white rotate-12 shadow-lg">
               <Cake size={20} />
            </div>
            <span className="text-xl md:text-3xl font-kids text-sweet-brand tracking-widest uppercase">Sugar Rush</span>
         </motion.div>

         <div className="hidden md:flex gap-6 lg:gap-10 font-bold text-xs uppercase tracking-[0.2em] text-gray-600">
            <a href="#trending" className="hover:text-sweet-brand transition-colors">Trending</a>
            <a href="#process" className="hover:text-sweet-brand transition-colors">Process</a>
            <a href="#workshops" className="hover:text-sweet-brand transition-colors">Workshops</a>
            <a href="#about" className="hover:text-sweet-brand transition-colors">Our Story</a>
            <a href="#visit" className="hover:text-sweet-brand transition-colors">Visit</a>
         </div>

         <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center sweet-shadow text-sweet-brand border border-gray-100"
            >
               <ShoppingCart size={18} />
            </motion.button>
            <button 
              className="md:hidden w-10 h-10 flex items-center justify-center text-sweet-brand"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
         </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[100] bg-sweet-brand text-white flex flex-col items-center justify-center gap-10 p-8"
          >
            <button 
              className="absolute top-8 right-8"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8 font-kids text-4xl">
              <a href="#trending" onClick={() => setIsMenuOpen(false)}>Trending</a>
              <a href="#process" onClick={() => setIsMenuOpen(false)}>Process</a>
              <a href="#workshops" onClick={() => setIsMenuOpen(false)}>Workshops</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>Our Story</a>
              <a href="#visit" onClick={() => setIsMenuOpen(false)}>Visit</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pt-24 md:pt-32">
        <Hero />
        <TrendingSection />
        <section id="process"><ProcessSection /></section>
        <section id="ingredients"><IngredientsSection /></section>
        <section id="workshops"><WorkshopSection /></section>
        <SubscriptionSection />
        <section id="about"><ShopAbout /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="visit"><Contact /></section>
      </div>

      <footer className="py-20 px-4 bg-white/20 text-center rounded-t-[3rem] md:rounded-t-[5rem] mt-20">
         <div className="text-3xl md:text-5xl font-kids candy-gradient mb-8 leading-tight">Sweet Dreams are made of these</div>
         <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.2em] md:tracking-[0.4em]">© 2026 Sugar Rush Confectionery // Handcrafted with Joy</div>
      </footer>
    </div>
  );
}

const IngredientsSection = () => (
  <section className="py-24 px-4 md:px-8 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-sweet-brand font-black text-xs uppercase tracking-widest mb-4 inline-block">The Foundation of Taste</span>
        <h2 className="text-4xl md:text-6xl font-kids text-gray-800 mb-8 leading-tight">Pure, Ethical & <br /> <span className="text-sweet-gold">Organic.</span></h2>
        <div className="space-y-8">
          {[
            { title: "Madagascar Vanilla", desc: "Sourced directly from sustainable family-owned plantations." },
            { title: "Organic Cane Sugar", desc: "Never bleached, retaining all its natural mineral richness." },
            { title: "Natural Pigments", desc: "Colors extracted from beets, turmeric, and vibrant spirulina." }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 md:gap-6 items-start text-left">
              <div className="w-10 h-10 bg-sweet-mint/30 rounded-full flex items-center justify-center text-green-700 flex-shrink-0">
                <Star size={18} />
              </div>
              <div>
                <h4 className="font-kids text-xl text-gray-800">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute inset-0 bg-sweet-brand opacity-10 blur-[100px] rounded-full"></div>
        <img src={IMAGES.sweetTruffle} alt="Quality" className="relative z-10 rounded-[3rem] md:rounded-[4rem] shadow-2xl rotate-3 w-full" />
      </motion.div>
    </div>
  </section>
);

const WorkshopSection = () => (
  <section className="py-24 md:py-32 px-4 md:px-8 bg-sweet-brand text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/5 blur-[120px] rounded-full"></div>
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="text-center lg:text-left">
           <h2 className="text-5xl md:text-7xl font-kids mb-8">Candy Crafting <br /> Masterclass</h2>
           <p className="text-white/70 text-lg mb-12 font-medium max-w-xl mx-auto lg:mx-0">Join our award-winning confectioners for a 3-hour immersive experience. Learn to sculpt sugar, temper chocolate, and blend your own gummy flavors.</p>
           <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="px-10 py-5 bg-white text-sweet-brand font-black rounded-[2rem] hover:scale-105 transition-all shadow-xl">BOOK NOW</button>
              <button className="px-10 py-5 border-2 border-white/30 text-white font-black rounded-[2rem] hover:bg-white/10 transition-all">GIFT A SESSION</button>
           </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
           {[
             { name: "Sugar Art", level: "Beginner", time: "Every Tue" },
             { name: "Choco Lab", level: "Intermediate", time: "Every Thu" }
           ].map((c, i) => (
             <motion.div
               key={i}
               whileHover={{ y: -10 }}
               className="p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] md:rounded-[3rem] text-center"
             >
                <div className="text-sweet-gold mb-4 flex justify-center"><Star fill="currentColor" /></div>
                <h3 className="text-3xl font-kids mb-2">{c.name}</h3>
                <div className="text-white/60 text-xs font-bold uppercase tracking-widest">{c.time}</div>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  </section>
);

const SubscriptionSection = () => (
   <section className="py-24 px-4 bg-sweet-gold/5 border-y border-sweet-gold/10">
      <div className="max-w-4xl mx-auto text-center">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
         >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-sweet-gold rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-xl">
               <Gift size={32} />
            </div>
            <h2 className="text-4xl md:text-6xl font-kids text-gray-800 mb-6 uppercase tracking-tighter">The Candy Club</h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed font-medium">Get a curated box of seasonal sweets, exclusive prototype flavors, and classic favorites delivered to your door every month.</p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white p-6 md:p-4 rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-gray-100 w-full sm:w-auto">
               <div className="px-6 text-center sm:text-left">
                  <div className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">Starting from</div>
                  <div className="text-2xl md:text-3xl font-black text-sweet-brand">$29.99/mo</div>
               </div>
               <button className="w-full sm:w-auto px-10 py-5 bg-sweet-brand text-white font-black rounded-[2rem] hover:scale-105 transition-all shadow-lg">JOIN NOW</button>
            </div>
         </motion.div>
      </div>
   </section>
);

const Hero = () => (
  <section className="py-12 md:py-20 px-4 md:px-8 flex flex-col items-center text-center relative overflow-hidden">
    <div className="absolute top-0 left-0 w-64 h-64 bg-sweet-brand/10 blur-[100px] rounded-full pointer-events-none"></div>
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-sweet-gold/10 blur-[120px] rounded-full pointer-events-none"></div>

    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="inline-flex items-center gap-2 bg-sweet-mint px-4 md:px-6 py-2 rounded-full text-green-700 font-bold text-xs md:text-sm mb-6 md:mb-10 shadow-sm"
    >
      <Sparkles size={14} /> NEW: UNICORN DUST MACARONS
    </motion.div>
    
    <motion.h1 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-5xl sm:text-7xl lg:text-[10rem] font-kids candy-gradient leading-[1.1] md:leading-none mb-8"
    >
      Happiness <br />
      in every bite
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="max-w-xl text-gray-500 text-base md:text-lg mb-12 font-medium"
    >
      The ultimate artisanal candy experience. From vintage sweets to modern molecular treats, we bring the magic back to confectionery.
    </motion.p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl mt-4">
       {[
         { title: "Gummy Galaxy", color: "bg-sweet-mint/50", icon: <Star />, img: IMAGES.sweetGummy },
         { title: "Chocolate Cloud", color: "bg-sweet-pink/50", icon: <Heart />, img: IMAGES.sweetChoco },
         { title: "Cookie Kingdom", color: "bg-sweet-gold/50", icon: <Gift />, img: IMAGES.sweetCookie }
       ].map((box, i) => (
         <motion.div
           key={i}
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: i * 0.2 }}
           whileHover={{ y: -10 }}
           className={`${box.color} p-0 rounded-[2.5rem] md:rounded-[3rem] text-left relative overflow-hidden group cursor-pointer shadow-xl border border-white/20`}
         >
            <div className="p-8 md:p-10 relative z-10">
                <div className="text-gray-800/20 absolute -right-4 -top-4 scale-150 group-hover:rotate-45 transition-transform duration-500">
                    {box.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-kids mb-1 md:mb-2 leading-tight">{box.title}</h3>
                <div className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-[0.2em] text-gray-500">
                    Explore Shop <ShoppingCart size={12} />
                </div>
            </div>
            <div className="h-40 md:h-48 mt-2 overflow-hidden">
                <img src={box.img} alt={box.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
         </motion.div>
       ))}
    </div>
  </section>
);

const TrendingSection = () => (
  <section id="trending" className="py-24 md:py-32 px-4 md:px-8 overflow-hidden">
    <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-12 sm:mb-16 gap-6"
        >
            <div className="text-center sm:text-left">
                <h2 className="text-4xl md:text-5xl font-kids text-sweet-brand mb-4">Trending Now</h2>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">Our most beloved creations this week</p>
            </div>
            <button className="text-sweet-brand font-black text-xs uppercase tracking-widest border-b-2 border-sweet-brand pb-1">See All</button>
        </motion.div>
        <div className="flex gap-6 md:gap-8 overflow-x-auto pb-10 hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {[
                { name: "Neon Lollipops", price: "$5", img: IMAGES.sweetLollipop },
                { name: "Galaxy Macarons", price: "$12", img: IMAGES.sweetMacaron },
                { name: "Cloud Truffles", price: "$18", img: IMAGES.sweetTruffle },
                { name: "Rainbow Fudge", price: "$9", img: IMAGES.sweetCookie }
            ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="min-w-[280px] md:min-w-[300px] bg-white rounded-[2.5rem] p-6 sweet-shadow group cursor-pointer"
                >
                    <div className="h-56 md:h-64 rounded-[2rem] overflow-hidden mb-6">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="font-kids text-2xl">{item.name}</div>
                        <div className="font-bold text-sweet-brand">{item.price}</div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  </section>
);

const ProcessSection = () => (
  <section className="py-24 md:py-32 px-4 md:px-8 bg-sweet-brand/5 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16 md:mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-kids text-sweet-brand mb-4"
        >
          How it's Made
        </motion.h2>
        <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">Magic happens in our kitchen</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {[
          { step: "01", title: "Hand Picking", desc: "Only the finest organic fruits and sugars.", icon: <Sparkles /> },
          { step: "02", title: "Slow Boiling", desc: "Tradition meets modern molecular science.", icon: <Zap /> },
          { step: "03", title: "Infusing Joy", desc: "Our secret ingredient is pure happiness.", icon: <Heart /> },
          { step: "04", title: "Gift Packing", desc: "Every box is a work of art.", icon: <Gift /> }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative p-8 md:p-10 bg-white rounded-[2.5rem] md:rounded-[3rem] sweet-shadow"
          >
            <div className="text-6xl md:text-7xl font-kids text-sweet-brand/10 absolute top-4 right-8">{item.step}</div>
            <div className="w-12 h-12 bg-sweet-mint rounded-2xl flex items-center justify-center text-green-700 mb-6 font-bold">
              {item.icon}
            </div>
            <h3 className="text-2xl font-kids mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ShopAbout = () => (
  <section className="bg-white py-20 px-4 md:py-32 rounded-[3.5rem] md:rounded-[5rem] mx-4 my-12 md:my-20 shadow-2xl relative overflow-hidden">
     <div className="absolute top-0 right-0 w-96 h-96 bg-sweet-pink/5 blur-3xl rounded-full"></div>
     <div className="max-w-7xl mx-auto md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, rotate: -5 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          className="relative px-6 md:px-0"
        >
           <motion.img 
             whileHover={{ scale: 1.02, rotate: -1 }}
             src={IMAGES.sweetAbout} 
             alt="Sweets" 
             className="rounded-[3rem] md:rounded-[4rem] sweet-shadow w-full" 
           />
           <div className="absolute -top-6 -right-2 md:top-10 md:-right-10 bg-sweet-gold p-6 md:p-8 rounded-[2rem] md:rounded-3xl rotate-12 shadow-2xl font-kids text-xl md:text-2xl text-white">
              Est. Since <br className="hidden md:block"/> 2008 🍭
           </div>
        </motion.div>
        <div className="text-center lg:text-left">
           <motion.h2 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-6xl font-kids text-sweet-brand mb-8"
           >
              Our Sweet Story
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-gray-500 leading-relaxed text-base md:text-lg mb-10"
           >
              What started as a secret family recipe table in Grandma's kitchen has turned into the most beloved sweet destination in the city. We believe that sugar isn't just an ingredient—it's a celebration. Every treat is handcrafted with passion and a dash of magic.
           </motion.p>
           <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start">
              <div className="flex -space-x-4">
                 {[1,2,3,4].map(i => <div key={i} className="w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-white bg-gray-200 shadow-sm overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                 </div>)}
              </div>
              <div className="font-bold text-[10px] md:text-xs text-gray-400 max-w-[150px] uppercase tracking-wider">Trusted by 100k+ Shoppers!</div>
           </div>
        </div>
     </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 px-4 md:px-8 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl font-kids text-sweet-brand mb-6 leading-tight">Sweet Words <br className="hidden md:block"/> from our <br className="hidden md:block"/> <span className="candy-gradient">Family</span></h2>
          <div className="flex gap-2 text-sweet-gold justify-center lg:justify-start">
            {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={20} />)}
          </div>
          <p className="mt-4 font-bold text-gray-400 uppercase tracking-widest text-[10px]">4.9/5 Based on 20k+ Reviews</p>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {[
            { text: "Literally the best gummy bears I have ever tasted in my entire life. Period.", author: "Sarah J." },
            { text: "The chocolate truffles feel like they are made of actual clouds. Pure magic!", author: "Mike R." },
            { text: "Our wedding cake was a Sugar Rush masterpiece. Everyone was talking about it.", author: "Elena W." },
            { text: "Kids love it, I love it, the whole neighborhood loves it. Simply the best.", author: "David K." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 md:p-10 bg-white rounded-[2.5rem] md:rounded-[3rem] sweet-shadow relative"
            >
              <div className="absolute top-6 left-6 md:top-8 md:left-8 text-5xl md:text-6xl text-sweet-pink opacity-20 font-serif">"</div>
              <p className="relative z-10 text-gray-600 mb-6 italic text-sm md:text-base leading-relaxed">{item.text}</p>
              <div className="font-kids text-xl md:text-2xl text-sweet-brand">{item.author}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
   <section className="py-24 max-w-5xl mx-auto px-4 sm:px-8 text-center scroll-mt-20 overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-kids candy-gradient mb-12"
      >
        Visit Candy Land
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.01 }}
        className="bg-sweet-mint/40 p-10 md:p-16 rounded-[3rem] md:rounded-[4rem] border-4 border-dashed border-sweet-mint relative"
      >
         <div className="absolute -top-10 -left-10 w-40 h-40 bg-sweet-pink/10 rounded-full blur-3xl animate-pulse"></div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 text-left relative z-10">
            <div>
               <h3 className="font-kids text-3xl mb-4 md:mb-6 flex items-center gap-3"><Utensils className="text-sweet-brand" /> Location</h3>
               <p className="text-gray-500 text-lg">42 Marshmallow Road, <br />Sweetwater Park, CA 90210</p>
               <h3 className="font-kids text-3xl mt-12 mb-4 md:mb-6 flex items-center gap-3"><Star className="text-sweet-gold" /> Hours</h3>
               <p className="text-gray-500 text-lg">Mon-Fri: 10am - 8pm<br />Sat-Sun: 9am - 10pm</p>
            </div>
            <div className="space-y-6">
               <h3 className="font-kids text-3xl mb-4 leading-tight">Send a Letter</h3>
               <input placeholder="Your Name" className="w-full px-6 py-4 md:py-6 bg-white/50 rounded-[1.5rem] md:rounded-[2rem] border-2 border-transparent outline-none focus:border-sweet-pink transition-all border-white" />
               <textarea placeholder="Tell us your favorite candy..." className="w-full px-6 py-4 md:py-6 bg-white/50 rounded-[1.5rem] md:rounded-[2rem] border-2 border-transparent outline-none focus:border-sweet-pink transition-all h-32 border-white" />
               <button className="w-full p-6 bg-sweet-brand text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-xl shadow-xl hover:shadow-sweet-brand/30 transition-all active:scale-95">SEND LOVE</button>
            </div>
         </div>
      </motion.div>
   </section>
);

export default App;
