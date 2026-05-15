import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Activity, Thermometer, UserCheck, Shield, Award, Users, Menu, X, Phone, Play } from 'lucide-react'
import { IMAGES } from './images'

const ClinicHero = () => (
  <section className="pt-24 md:pt-40 pb-16 md:pb-32 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-20 uppercase overflow-hidden">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center lg:text-left flex-1"
    >
      <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-clinic-blue font-bold text-[10px] mb-8 shadow-sm border border-blue-100 mx-auto lg:mx-0">
         <Shield size={14} /> TOP RATED CLINIC 2026
      </div>
      <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-clinic-dark leading-tight md:leading-[0.9] mb-8 tracking-tighter">
        Health Care <br />
        <span className="text-clinic-blue italic">Reimagined.</span>
      </h1>
      <p className="text-base md:text-xl text-gray-500 mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium">
        Providing world-class medical services with surgical precision and human compassion.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <button className="px-10 py-5 bg-clinic-blue text-white rounded-2xl font-bold text-sm hover:scale-105 transition-all shadow-xl shadow-blue-200 uppercase tracking-widest">
          Book Appointment
        </button>
        <button className="px-10 py-5 bg-white text-clinic-dark border border-gray-100 rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
          Take a Tour <Play size={16} fill="currentColor" />
        </button>
      </div>
    </motion.div>
    
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="relative flex-1 w-full max-w-xl mx-auto lg:max-w-none"
    >
      <div className="absolute -inset-4 bg-clinic-blue/10 blur-[100px] rounded-full"></div>
      <div className="relative z-10 rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-premium border-8 border-white group aspect-[4/5] sm:aspect-video lg:aspect-square">
        <img 
          src={IMAGES.clinicHero} 
          alt="Clinic" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
        />
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white p-6 rounded-3xl shadow-2xl border border-blue-50 max-w-[180px] md:max-w-[220px] animate-bounce-slow">
           <div className="flex items-center gap-2 mb-2">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
              <span className="text-[10px] font-bold text-gray-400">ACTIVE NOW</span>
           </div>
           <p className="font-bold text-clinic-dark text-xs md:text-sm tracking-tight">12+ ELITE EXPERTS ONLINE</p>
        </div>
      </div>
    </motion.div>
  </section>
)

function App() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const services = [
      { icon: <Heart className="text-red-500" />, title: "Cardiology", desc: "Advanced heart monitoring" },
      { icon: <Activity className="text-blue-500" />, title: "Diagnostics", desc: "Full body health checkups" },
      { icon: <Thermometer className="text-orange-500" />, title: "Emergency", desc: "24/7 critical medical care" },
      { icon: <UserCheck className="text-green-500" />, title: "Specialist", desc: "Expert advice from world leaders" }
   ]

   const stats = [
      { icon: <Users />, value: "25K+", label: "HEALED" },
      { icon: <Award />, value: "150+", label: "EXPERTS" },
      { icon: <Shield />, value: "24/7", label: "CARE" }
   ]

   return (
      <div className="bg-clinic-light min-h-screen selection:bg-clinic-blue selection:text-white overflow-hidden uppercase">
         <nav className="fixed w-full z-[100] bg-white/80 backdrop-blur-md px-4 md:px-10 py-6 border-b border-gray-100 flex justify-between items-center transition-all duration-500">
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="flex items-center gap-2 cursor-pointer"
            >
               <div className="w-8 h-8 md:w-10 md:h-10 bg-clinic-blue rounded-xl flex items-center justify-center text-white shadow-lg">
                  <Activity size={20} />
               </div>
               <span className="text-xl md:text-2xl font-black text-clinic-dark tracking-tighter italic">MEDICORE.</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-10 font-bold text-[10px] text-gray-400 tracking-widest leading-none">
               <a href="#services" className="hover:text-clinic-blue transition-colors">SERVICES</a>
               <a href="#telemedicine" className="hover:text-clinic-blue transition-colors">TELE-CARE</a>
               <a href="#analytics" className="hover:text-clinic-blue transition-colors">ANALYTICS</a>
               <a href="#doctors" className="hover:text-clinic-blue transition-colors">DOCTORS</a>
               <a href="#journey" className="hover:text-clinic-blue transition-colors">JOURNEY</a>
            </div>

            <div className="flex items-center gap-4">
               <button className="hidden sm:block px-6 py-2 bg-clinic-dark text-white rounded-xl font-bold text-[10px] tracking-widest hover:translate-y-[-2px] transition-all">
                  PORTAL
               </button>
               <button 
                  className="lg:hidden w-10 h-10 flex items-center justify-center text-clinic-blue"
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
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="fixed inset-0 z-[110] bg-white text-clinic-dark flex flex-col items-center justify-center gap-10 p-8"
               >
                  <button className="absolute top-8 right-8 text-clinic-blue" onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
                  <div className="flex flex-col items-center gap-10 font-black text-4xl italic uppercase text-center">
                     <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
                     <a href="#telemedicine" onClick={() => setIsMenuOpen(false)}>Telehealth</a>
                     <a href="#analytics" onClick={() => setIsMenuOpen(false)}>Analytics</a>
                     <a href="#doctors" onClick={() => setIsMenuOpen(false)}>Doctors</a>
                     <a href="#journey" onClick={() => setIsMenuOpen(false)}>Journey</a>
                  </div>
                  <div className="mt-8 flex gap-4">
                     <button className="bg-clinic-blue text-white px-8 py-4 rounded-2xl font-bold text-sm">BOOK APPOINTMENT</button>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>

         <ClinicHero />

         {/* Stats Section Overlay */}
         <section className="relative z-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto -mt-10 md:-mt-16">
               <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-premium flex flex-col sm:flex-row justify-around gap-12 border border-blue-50 text-center"
               >
                  {stats.map((s, i) => (
                     <div key={i} className="group">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-clinic-blue mx-auto mb-4 group-hover:bg-clinic-blue group-hover:text-white transition-all transform group-hover:rotate-12">
                           {s.icon}
                        </div>
                        <div className="text-3xl md:text-5xl font-black text-clinic-dark mb-1 tracking-tighter italic">{s.value}</div>
                        <div className="text-[10px] font-bold text-gray-400 tracking-[0.2em]">{s.label}</div>
                     </div>
                  ))}
               </motion.div>
            </div>
         </section>

         {/* Telemedicine Section */}
         <section id="telemedicine" className="py-24 md:py-32 bg-white relative overflow-hidden px-4 md:px-8 uppercase">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-20">
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2 text-center lg:text-left"
               >
                  <span className="text-clinic-blue font-black text-[10px] uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full inline-block mb-8 border border-blue-100 italic">Virtual Care Hub</span>
                  <h2 className="text-4xl md:text-6xl font-black text-clinic-dark mb-10 leading-none tracking-tight">Consult with <br /><span className="text-clinic-blue italic">Confidence.</span></h2>
                  <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed mb-12 italic max-w-xl mx-auto lg:mx-0 uppercase">Skip the waiting room. Access specialists via HD encrypted calls. Secure, private, and fully integrated with your health profile.</p>
                  <div>
                     <button className="px-12 py-5 bg-clinic-blue text-white rounded-2xl font-bold shadow-xl hover:scale-105 transition-all text-sm tracking-widest">START CONSULT</button>
                  </div>
               </motion.div>
               <div className="lg:w-1/2 relative bg-gray-50 rounded-[3rem] md:rounded-[4rem] p-4 border-8 border-white shadow-premium overflow-hidden w-full max-w-xl mx-auto">
                  <img src={IMAGES.clinicCare1} className="rounded-[2.5rem] md:rounded-[3.5rem] opacity-30 grayscale w-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-16 h-16 md:w-24 md:h-24 bg-clinic-blue rounded-full flex items-center justify-center text-white animate-pulse shadow-2xl">
                        <Activity size={40} />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Health Analytics */}
         <section id="analytics" className="py-24 md:py-32 bg-clinic-dark text-white rounded-[3rem] md:rounded-[5rem] mx-4 my-12 md:my-20 px-4 md:px-8 overflow-hidden relative">
            <div className="max-w-7xl mx-auto relative z-10">
               <div className="text-center mb-16 md:mb-24 px-4">
                  <h2 className="text-4xl md:text-6xl font-black mb-8 italic uppercase tracking-tighter leading-none">Predictive Wellness</h2>
                  <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-medium italic uppercase">We analyze patterns, not just symptoms. PulseAI analyzes vitals to predict potential risks before they manifest.</p>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                  {[
                     { label: "Data Points", value: "2.5M+" },
                     { label: "Accuracy", value: "98.4%" },
                     { label: "Retention", value: "99.2%" }
                  ].map((stat, i) => (
                     <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className="bg-white/5 p-10 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-white/10 text-center backdrop-blur-md"
                     >
                        <div className="text-4xl md:text-5xl font-black text-clinic-blue mb-4 leading-none italic">{stat.value}</div>
                        <div className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">{stat.label}</div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Journey Section */}
         <section id="journey" className="py-24 md:py-32 bg-white px-4 md:px-8 overflow-hidden uppercase">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
               <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="text-center lg:text-left order-2 lg:order-1"
               >
                  <h2 className="text-4xl md:text-6xl font-black mb-12 leading-none text-clinic-dark tracking-tighter">Your Path to <br /> <span className="text-clinic-blue italic">Recovery.</span></h2>
                  <div className="space-y-10">
                     {[
                        { step: "01", title: "Assessment", desc: "Complete our AI-driven initial screening." },
                        { step: "02", title: "Matchmaker", desc: "Get matched with the perfect elite team." },
                        { step: "03", title: "Treatment", desc: "Precision therapy with modern medical gear." },
                        { step: "04", title: "Monitoring", desc: "Continuous remote care via our smart gateway." }
                     ].map((item, i) => (
                        <div key={i} className="flex flex-col sm:flex-row gap-6 md:gap-8 group items-center lg:items-start text-center lg:text-left">
                           <div className="text-3xl md:text-4xl font-black text-clinic-blue opacity-20 group-hover:opacity-100 transition-all italic leading-none">
                              {item.step}.
                           </div>
                           <div className="max-w-sm">
                              <h4 className="text-xl md:text-2xl font-black mb-2 text-clinic-dark">{item.title}</h4>
                              <p className="text-gray-400 text-sm md:text-base font-bold leading-tight italic">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="relative aspect-square rounded-[3rem] md:rounded-[4rem] overflow-hidden border-8 border-gray-50 shadow-2xl order-1 lg:order-2 w-full max-w-xl mx-auto grayscale hover:grayscale-0 transition-all duration-1000"
               >
                  <img src={IMAGES.clinicHero} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-clinic-dark/40 via-transparent to-transparent"></div>
               </motion.div>
            </div>
         </section>

         {/* Services Grid */}
         <section id="services" className="py-24 md:py-32 bg-clinic-light px-4 md:px-8 uppercase">
            <div className="max-w-7xl mx-auto">
               <div className="text-center mb-16 md:mb-24">
                  <motion.h2 className="text-4xl md:text-5xl font-black text-clinic-dark mb-4 tracking-tighter">OUR SPECIALIZATIONS</motion.h2>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">World-class services for your well-being</p>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {services.map((s, i) => (
                     <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className="bg-white p-10 rounded-[2.5rem] md:rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-premium transition-all text-center md:text-left group"
                     >
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-50 transition-colors mx-auto md:mx-0">
                           {s.icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-clinic-dark mb-3 tracking-tight uppercase leading-none">{s.title}</h3>
                        <p className="text-gray-500 text-xs md:text-sm mb-10 leading-relaxed font-bold italic uppercase h-auto lg:h-12 overflow-hidden">{s.desc}</p>
                        <div className="text-clinic-blue font-black text-[10px] tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                           READ DEPT ARANAS ↗
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Doctors */}
         <section id="doctors" className="py-24 md:py-32 bg-white px-4">
            <div className="max-w-7xl mx-auto text-center uppercase px-4">
               <h2 className="text-4xl md:text-6xl font-black text-clinic-dark mb-16 tracking-tighter">ELITE <span className="text-clinic-blue">EXPERTS</span></h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                  {[
                     { name: "Dr. Mitchell", role: "Cardiology", img: IMAGES.doctorSarah },
                     { name: "Dr. Wilson", role: "Neurology", img: IMAGES.doctorJames },
                     { name: "Dr. Elena R.", role: "Pediatrics", img: IMAGES.doctorElena }
                  ].map((doc, i) => (
                     <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className="bg-white p-8 rounded-[3.5rem] shadow-premium border border-gray-100 group w-full"
                     >
                        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 relative border-4 border-gray-50">
                           <img src={doc.img} alt={doc.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-clinic-dark mb-2 italic tracking-tighter">{doc.name}</h3>
                        <div className="text-clinic-blue text-[10px] font-black uppercase tracking-widest bg-blue-50 px-6 py-2 rounded-full inline-block">{doc.role}</div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         <footer className="py-24 md:py-32 bg-clinic-dark text-white text-center px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-clinic-blue rounded-2xl flex items-center justify-center text-white shadow-2xl">
                     <Activity size={32} />
                  </div>
                  <span className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none">MEDICORE.</span>
               </div>
               <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-gray-700">
                  <a href="#" className="hover:text-white transition-colors">Telemedicine</a>
                  <a href="#" className="hover:text-white transition-colors">Specialists</a>
                  <a href="#" className="hover:text-white transition-colors">Emergency</a>
                  <a href="#" className="hover:text-white transition-colors">Patient Hub</a>
               </div>
               <div className="w-16 h-1 bg-white/5 rounded-full"></div>
               <div className="text-[10px] text-gray-800 font-black uppercase tracking-[0.5em] leading-relaxed max-w-sm">
                  © 2026 MEDICORE HEALTH SYSTEMS // ADVANCING HUMAN WELLNESS THROUGH PRECISION TECHNOLOGY
               </div>
            </div>
         </footer>
      </div>
   )
}

export default App;
