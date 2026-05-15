import React from 'react';
import { motion } from 'framer-motion';
import { Star, Eye, Zap } from 'lucide-react';
import { IMAGES } from '../images';

const products = [
  { id: 1, name: "Sky Rocket X-100", price: "$45.99", category: "Rockets", rating: 4.9, img: IMAGES.crackersRocket },
  { id: 2, name: "Golden Rain Sparklers", price: "$12.50", category: "Sparklers", rating: 4.5, img: IMAGES.crackersSparkler },
  { id: 3, name: "Midnight Thunder Box", price: "$89.99", category: "Cakes", rating: 5.0, img: IMAGES.crackersThunder },
  { id: 4, name: "Multi-Color Fountain", price: "$24.99", category: "Fountains", rating: 4.8, img: IMAGES.crackersFountain },
];

const ProductGrid = () => {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-5xl font-black mb-2 tracking-tighter italic uppercase text-white">The Explosive <br /> <span className="text-red-500">Selection.</span></h2>
            <div className="w-20 h-1.5 bg-red-500 rounded-full"></div>
          </motion.div>
          <button className="text-yellow-500 font-bold uppercase tracking-widest hover:underline text-xs">
            View All Series
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-[#0A0A0A] border border-white/5 p-4 rounded-[2.5rem] relative overflow-hidden"
            >
              <div className="aspect-square bg-white/5 rounded-[2rem] mb-6 relative overflow-hidden">
                 <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                 <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 border border-white/10">
                    <Star size={10} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-bold text-white">{product.rating}</span>
                 </div>
              </div>

              <div className="px-2 pb-2">
                <span className="text-[10px] font-bold text-red-500 uppercase tracking-[0.3em] mb-1 block">
                  {product.category}
                </span>
                <h3 className="text-xl font-black text-white mb-6 group-hover:text-red-500 transition-colors uppercase italic tracking-tighter">
                  {product.name}
                </h3>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-black text-white">{product.price}</span>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                      <Eye size={18} />
                    </button>
                    <button className="px-6 py-2 rounded-xl bg-red-600 text-white font-black text-xs hover:bg-red-700 hover:scale-105 transition-all uppercase tracking-widest">
                      BUY
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
