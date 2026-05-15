import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../images'

const menuItems = [
  {
    name: "Classic Espresso",
    price: "$4.50",
    description: "Rich and smooth Italian roasted beans.",
    tag: "Coffee",
    img: IMAGES.cafeFood1
  },
  {
    name: "Avocado Toast",
    price: "$12.00",
    description: "Sourdough bread with mashed avocado and poached egg.",
    tag: "Breakfast",
    img: IMAGES.cafeFood2
  },
  {
    name: "Grilled Truffle Steak",
    price: "$32.00",
    description: "Premium beef served with truffle butter and roasted vegetables.",
    tag: "Main",
    img: IMAGES.cafeFood3
  },
  {
    name: "Berry Cheesecake",
    price: "$8.50",
    description: "Creamy vanilla cheesecake topped with fresh berries.",
    tag: "Dessert",
    img: IMAGES.cafeFood1
  }
];

const Menu = () => {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Curated Menu
          </motion.h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-3xl bg-[#FAFAFA] border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 rounded-[2rem] overflow-hidden mb-6">
                 <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-700 transition-colors uppercase tracking-tight">
                {item.name}
              </h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                {item.description}
              </p>
              <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                <span className="text-lg font-bold text-accent-dark">{item.price}</span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-accent-dark text-white flex items-center justify-center hover:bg-primary-700 transition-colors"
                >
                  +
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
