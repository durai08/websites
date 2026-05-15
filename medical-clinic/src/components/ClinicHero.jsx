import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Phone, ArrowRight } from 'lucide-react';

const ClinicHero = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex items-center">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 clip-path-slant hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-clinic-blue font-bold text-sm mb-6">
              <ShieldCheck size={16} /> Highly Trusted Medical Care
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-clinic-dark leading-tight mb-6">
              Your Health <br /> 
              <span className="text-clinic-blue">Our Priority</span>
            </h1>
            
            <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed">
              Experience the next generation of healthcare with world-class doctors and state-of-the-art technology. We provide personalized care for your entire family.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-8 py-4 bg-clinic-blue text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
                Book Appointment <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-100 text-clinic-dark rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
                <Phone size={20} /> Emergency Call
              </button>
            </div>

            <div className="flex items-center gap-6">
               <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                       <img src={`https://i.pravatar.cc/150?u=${i}`} alt="doc" />
                    </div>
                  ))}
               </div>
               <div>
                  <div className="text-sm font-bold text-clinic-dark">Joined by 10k+ Residents</div>
                  <div className="text-xs text-gray-400">Trusted by local families for over 15 years</div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/images/clinic-hero.png" 
                alt="Clinic"
                className="w-full aspect-square object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-premium border border-blue-50 z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                   <svg size={24} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                   <div className="text-lg font-bold text-clinic-dark">99.9% Success</div>
                   <div className="text-xs text-gray-400">Patient Satisfaction Rate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClinicHero;
