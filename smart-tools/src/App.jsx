import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, Globe, Lock, Code, Terminal, Zap, Shield, Box, Menu, X, ChevronRight } from 'lucide-react'
import { IMAGES } from './images'

const ToolsHero = () => (
   <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-4 max-w-7xl mx-auto flex flex-col items-center text-center relative overflow-hidden uppercase">
      <motion.div
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-tools-cyan/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"
      ></motion.div>

      <motion.div
         initial={{ y: 20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] font-mono text-tools-cyan mb-8"
      >
         v0.9.4 // EDGE PERFORMANCE ENABLED
      </motion.div>

      <motion.h1
         initial={{ y: 30, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.2 }}
         className="text-4xl sm:text-6xl md:text-9xl font-black italic tracking-tighter uppercase mb-8 leading-none"
      >
         Build <span className="text-tools-cyan">Faster</span> <br />
         Deploy <span className="text-gray-700">Better</span>
      </motion.h1>

      <motion.p
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.4 }}
         className="text-gray-500 text-base md:text-lg max-w-2xl mb-12 uppercase font-medium"
      >
         The operating system for modern developers. Instant deployment, global scale, and military-grade security out of the box.
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
         <button className="px-8 py-5 bg-tools-cyan text-tools-dark rounded-xl font-bold hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all uppercase tracking-widest text-sm">
            Initialize
         </button>
         <button className="px-8 py-5 border border-white/10 rounded-xl font-bold hover:bg-white/5 transition-all uppercase tracking-widest text-sm">
            Docs
         </button>
      </div>
   </section>
)

function App() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const features = [
      { icon: <Cpu />, title: "Edge Logic", desc: "Run logic closer to users with zero latency." },
      { icon: <Globe />, title: "Global CDN", desc: "Instantly distribute across 300+ nodes." },
      { icon: <Lock />, title: "Zero Trust", desc: "Military-grade encryption for every request." },
      { icon: <Code />, title: "API First", desc: "Seamlessly integrate into any tech stack." }
   ]

   const pricing = [
      { name: "Starter", price: "0", features: ["100k requests", "Global Edge", "Basic Auth"] },
      { name: "Pro", price: "49", features: ["Unlimited requests", "Advanced Security", "24/7 Support"] },
      { name: "Enterprise", price: "Custom", features: ["Dedicated Hardware", "SLA Support", "SSO"] }
   ]

   return (
      <div className="bg-tools-dark min-h-screen font-sans selection:bg-tools-cyan selection:text-tools-dark text-white overflow-hidden uppercase">
         <nav className="fixed w-full z-[100] bg-tools-dark/80 backdrop-blur-md px-4 md:px-10 py-6 border-b border-white/5 flex justify-between items-center transition-all">
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="flex items-center gap-2 cursor-pointer"
            >
               <div className="w-8 h-8 bg-tools-cyan rounded flex items-center justify-center text-tools-dark shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                  <Cpu size={18} />
               </div>
               <span className="text-xl font-bold tracking-tight">SMART.tools</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-8 font-bold text-[10px] text-gray-400 uppercase tracking-widest leading-none">
               <a href="#infra" className="hover:text-tools-cyan transition-colors">Infrastructure</a>
               <a href="#playground" className="hover:text-tools-cyan transition-colors">Playground</a>
               <a href="#pricing" className="hover:text-tools-cyan transition-colors">Pricing</a>
               <a href="#roadmap" className="hover:text-tools-cyan transition-colors">Roadmap</a>
            </div>

            <div className="flex items-center gap-4">
               <button className="hidden sm:block px-5 py-2 border border-white/10 rounded-lg text-[10px] font-bold hover:bg-white/5 transition-all text-gray-200">
                  DASHBOARD
               </button>
               <button 
                  className="lg:hidden w-10 h-10 flex items-center justify-center text-tools-cyan"
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
                  initial={{ opacity: 0, x: '100%' }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: '100%' }}
                  className="fixed inset-0 z-[110] bg-tools-dark flex flex-col items-center justify-center gap-10 p-8"
               >
                  <button className="absolute top-8 right-8 text-tools-cyan" onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
                  <div className="flex flex-col items-center gap-8 font-black text-4xl italic uppercase">
                     <a href="#infra" onClick={() => setIsMenuOpen(false)}>Infrastructure</a>
                     <a href="#playground" onClick={() => setIsMenuOpen(false)}>Playground</a>
                     <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a>
                     <a href="#roadmap" onClick={() => setIsMenuOpen(false)}>Roadmap</a>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>

         <ToolsHero />

         {/* Feature Grid */}
         <section className="py-24 md:py-32 max-w-7xl mx-auto px-4 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-tools-cyan/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {features.map((f, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     viewport={{ once: true }}
                     className="group border border-white/5 bg-white/2 p-8 rounded-2xl hover:border-tools-cyan/30 transition-all cursor-default"
                  >
                     <div className="text-tools-cyan mb-6 group-hover:scale-110 transition-transform duration-300">
                        {f.icon}
                     </div>
                     <h3 className="text-xl md:text-2xl font-black italic tracking-tight mb-3 uppercase">{f.title}</h3>
                     <p className="text-gray-500 text-sm leading-relaxed uppercase font-medium">{f.desc}</p>
                  </motion.div>
               ))}
            </div>
         </section>

         {/* AI Playground */}
         <section id="playground" className="py-24 md:py-32 bg-tools-cyan/5 rounded-[3rem] md:rounded-[4rem] mx-4 my-12 md:my-20 border border-tools-cyan/10 overflow-hidden relative px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
               <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="text-center lg:text-left"
               >
                  <h2 className="text-5xl md:text-7xl font-black italic mb-8 uppercase text-white leading-none">THE <span className="text-tools-cyan">PLAYGROUND.</span></h2>
                  <p className="text-gray-400 text-base md:text-xl font-mono mb-12 leading-relaxed uppercase">Experiment with AI-driven edge transformations. Type logic, see distribution in real-time. No staging, just pure scale.</p>
                  <div>
                     <button className="px-10 py-5 bg-tools-cyan text-tools-dark font-black rounded-xl hover:scale-105 transition-all shadow-[0_0_50px_rgba(0,255,255,0.3)] tracking-widest uppercase text-sm">OPEN WORKBENCH</button>
                  </div>
               </motion.div>
               <div className="relative aspect-video bg-black rounded-[2rem] md:rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl w-full max-w-2xl mx-auto">
                  <div className="bg-white/5 p-4 border-b border-white/5 flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-red-400"></div>
                     <div className="w-2 h-2 rounded-full bg-tools-cyan animate-pulse"></div>
                  </div>
                  <div className="p-8 md:p-10 font-mono text-tools-cyan/50 text-[10px] md:text-sm space-y-2 uppercase">
                     <div>&gt; initialize_stream()</div>
                     <div className="text-white">&gt; clusters: [US-1, EU-3, AS-1]</div>
                     <div className="text-tools-cyan">&gt; edge_node status: ACTIVE</div>
                     <div className="animate-pulse">_</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
               </div>
            </div>
         </section>

         {/* Roadmap */}
         <section id="roadmap" className="py-24 md:py-32 bg-white/2 px-4 md:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center md:text-left"
                  >
                     <h3 className="text-3xl md:text-4xl font-black mb-10 italic uppercase tracking-tighter text-tools-cyan">System Roadmap</h3>
                     <div className="space-y-10">
                        {[
                           { phase: "Q3 2026", goal: "Edge AI Integration", status: "In Dev" },
                           { phase: "Q4 2026", goal: "Quantum Encryption", status: "Planned" },
                           { phase: "Q1 2027", goal: "Global Mesh 2.0", status: "Research" }
                        ].map((r, i) => (
                           <div key={i} className="flex flex-col sm:flex-row gap-4 sm:gap-8 group text-center sm:text-left">
                              <div className="text-gray-700 font-black text-xl sm:w-24 uppercase">{r.phase}</div>
                              <div>
                                 <h4 className="text-white font-bold text-2xl group-hover:text-tools-cyan transition-colors tracking-tight uppercase">{r.goal}</h4>
                                 <div className="text-gray-500 text-[10px] font-mono mt-1 uppercase tracking-widest">{r.status}</div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </motion.div>
                  <div className="bg-white/5 p-10 md:p-16 rounded-[3rem] md:rounded-[4rem] border border-white/10 flex flex-col justify-center text-center lg:text-left">
                     <Shield size={64} className="text-tools-cyan mb-8 mx-auto lg:mx-0" />
                     <h3 className="text-3xl md:text-4xl font-black mb-6 italic uppercase tracking-tighter">Hardened Shell</h3>
                     <p className="text-gray-400 text-base md:text-lg leading-relaxed italic uppercase font-medium">Audited by third-party security firms every quarter. From DDoS mitigation to SOC2, we've got you shielded.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* Pricing */}
         <section id="pricing" className="py-24 md:py-32 bg-black/20 px-4">
            <div className="max-w-7xl mx-auto">
               <div className="text-center mb-16 uppercase">
                  <h2 className="text-3xl md:text-4xl font-black mb-4 italic uppercase tracking-tighter leading-none">Scalable Infrastructure</h2>
                  <p className="text-gray-500 text-[10px] tracking-widest font-bold">Simple pricing for complex systems</p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {pricing.map((p, i) => (
                     <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className={`p-10 rounded-3xl border ${i === 1 ? 'border-tools-cyan bg-tools-cyan/5' : 'border-white/5 bg-white/2'}`}
                     >
                        <div className="text-[10px] font-black text-tools-cyan uppercase mb-4 tracking-widest">{p.name}</div>
                        <div className="text-4xl md:text-5xl font-black mb-8 italic uppercase tracking-tighter">
                           {p.price === 'Custom' ? '' : '$'}{p.price}
                           <span className="text-lg font-normal text-gray-700 not-italic ml-2 leading-none">/MO</span>
                        </div>
                        <ul className="space-y-4 mb-10">
                           {p.features.map((feat, j) => (
                              <li key={j} className="flex items-center gap-3 text-xs text-gray-400 uppercase font-medium">
                                 <Zap size={14} className="text-tools-cyan" /> {feat}
                              </li>
                           ))}
                        </ul>
                        <button className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${i === 1 ? 'bg-tools-cyan text-tools-dark shadow-[20px] shadow-tools-cyan/10' : 'bg-white/5 hover:bg-white/10'}`}>
                           Get Started
                        </button>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Network */}
         <section className="py-24 md:py-32 relative overflow-hidden px-4 md:px-8">
            <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-tools-cyan/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-center lg:text-left"
               >
                  <h2 className="text-4xl md:text-5xl font-black italic mb-8 uppercase leading-tight tracking-tighter">Tools, distributed <br /> <span className="text-tools-cyan">globally.</span></h2>
                  <p className="text-gray-500 text-lg mb-10 max-w-lg mx-auto lg:mx-0 uppercase font-medium">Our edge network consists of over 300 points of presence in 90 countries. Exactly where your users are.</p>
                  <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-xl mx-auto lg:mx-0">
                     {[
                        { label: "Uptime", value: "99.9%" },
                        { label: "Latency", value: "<15MS" },
                        { label: "Nodes", value: "300+" },
                        { label: "Load", value: "40TBPS" }
                     ].map((stat, i) => (
                        <div key={i} className="border-l-2 border-tools-cyan pl-6 text-left">
                           <div className="text-2xl md:text-3xl font-black italic tracking-tighter">{stat.value}</div>
                           <div className="text-[10px] font-bold text-gray-700 uppercase tracking-widest mt-1">{stat.label}</div>
                        </div>
                     ))}
                  </div>
               </motion.div>
               <div className="relative w-full max-w-xl mx-auto">
                  <div className="absolute inset-0 bg-tools-cyan/10 blur-[80px] rounded-full px-4 md:px-0"></div>
                  <div className="relative bg-white/5 border border-white/10 p-1 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl overflow-hidden">
                     <img src={IMAGES.toolsGlobe} className="w-full grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
                  </div>
               </div>
            </div>
         </section>

         {/* Terminal Snippet */}
         <section id="infra" className="py-20 flex justify-center px-4 relative overflow-hidden uppercase">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-tools-cyan/10 blur-[150px] rounded-full"></div>
            <motion.div
               initial={{ scale: 0.9, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               className="w-full max-w-3xl terminal-bg border border-white/5 p-6 md:p-8 rounded-2xl relative z-10"
            >
               <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
               </div>
               <div className="font-mono text-[10px] md:text-sm space-y-3 leading-relaxed">
                  <div className="text-tools-cyan flex gap-3 italic font-bold"><span>$</span> NPM INSTALL @SMART/DEPLOY</div>
                  <div className="text-gray-700 flex gap-3 lowercase"><span>&gt;</span> initializing cluster nodes...</div>
                  <div className="text-green-500 flex gap-3 lowercase"><span>✓</span> cluster status [ACTIVE] -- US-EAST-1</div>
                  <div className="text-gray-600 flex gap-3 pl-8 mt-4 border-l border-tools-cyan italic lowercase animate-pulse">synchronizing global state...</div>
               </div>
            </motion.div>
         </section>

         <footer className="py-16 md:py-20 border-t border-white/5 bg-tools-dark px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
               <div className="text-gray-700 text-[10px] font-mono tracking-tighter font-bold">© 2026 SMART.CORE // SYSTEM STABLE [VER 0.9.4]</div>
               <div className="flex gap-8 md:gap-10 text-[10px] font-bold text-gray-700 uppercase tracking-widest">
                  <a href="#" className="hover:text-tools-cyan transition-colors">Github</a>
                  <a href="#" className="hover:text-tools-cyan transition-colors">Discord</a>
                  <a href="#" className="hover:text-tools-cyan transition-colors">Uptime</a>
                  <a href="#" className="hover:text-tools-cyan transition-colors">Legal</a>
               </div>
            </div>
         </footer>
      </div>
   )
}

export default App
