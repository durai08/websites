import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';
import { IMAGES } from '../images';

const products = [
  { id: 1, name: "Minimalist Chrono", price: "$299", category: "Watches", img: IMAGES.ecomWatch },
  { id: 2, name: "Leather Tote", price: "$180", category: "Bags", img: IMAGES.ecomBag },
  { id: 3, name: "Acoustic Aura", price: "$350", category: "Audio", img: IMAGES.ecomHeadphones },
  { id: 4, name: "Modern Frame", price: "$120", category: "Eyewear", img: IMAGES.ecomGlasses },
];

const ProductList = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-16">
         <h2 className="text-3xl font-bold italic">Latest Arrivals</h2>
         <div className="flex gap-4">
            {['All', 'Accessories', 'Lifestyle'].map(cat => (
              <button key={cat} className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-shop-purple transition-colors">
                {cat}
              </button>
            ))}
         </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
         {products.map((p, i) => (
           <motion.div
             key={p.id}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: i * 0.1 }}
             className="product-card group"
           >
              <div className="aspect-[4/5] bg-gray-100 rounded-[1.5rem] overflow-hidden relative mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                 <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:text-red-500 transition-colors">
                       <Heart size={18} />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:text-shop-purple transition-colors">
                       <ShoppingCart size={18} />
                    </button>
                 </div>
              </div>
              
              <div>
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">{p.category}</p>
                 <h3 className="text-xl font-bold text-shop-slate mb-1">{p.name}</h3>
                 <p className="text-lg font-medium text-gray-900">{p.price}</p>
              </div>
           </motion.div>
         ))}
      </div>
    </section>
  );
};

export default ProductList;
