import React, { useEffect } from 'react';
import { SECTORS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

const TargetSectors: React.FC = () => {
  return (
    <div className="pb-32 bg-brand-navy min-h-screen">
      {/* Header */}
      <section className="bg-brand-navy pt-48 pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 relative z-10"
        >
          <span className="text-brand-coral font-bold tracking-[0.3em] text-xs mb-8 block italic">Economic Engines</span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none italic">Target Sectors</h1>
          <p className="text-white/60 text-lg md:text-2xl max-w-4xl mx-auto italic font-medium leading-relaxed">
            Focusing on the high growth industries that define the future of the Asia Canada trade corridor.
          </p>
        </motion.div>
      </section>

      {/* Sectors Grid - Editorial Layout */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-sm">
          {SECTORS.map((sector, idx) => (
            <motion.div 
              key={sector.id} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 2) * 0.1 }}
            >
              <div className="bg-brand-navy p-12 md:p-20 flex flex-col md:flex-row items-center gap-16 group hover:bg-white/5 transition-all duration-700">
                <div className="text-white/10 font-black text-7xl md:text-9xl italic tracking-tighter group-hover:text-brand-coral/20 transition-colors">
                  0{idx + 1}
                </div>
                <div className="w-24 h-24 bg-white/5 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-brand-coral group-hover:text-white transition-all duration-700 shadow-sm">
                  {React.cloneElement(sector.icon as React.ReactElement, { className: 'w-12 h-12' })}
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-none italic mb-8 group-hover:translate-x-4 transition-transform duration-700">{sector.title}</h3>
                  <motion.p 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-white/40 text-xl font-medium mb-12 leading-relaxed italic border-l-4 border-brand-coral/20 pl-8"
                  >
                    {sector.description}
                  </motion.p>
                  <div className="space-y-6">
                    <h4 className="text-[11px] font-bold text-brand-coral tracking-tight mb-4 italic uppercase">Core Sub-Sectors</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {sector.subsectors?.map((sub, sIdx) => (
                        <motion.li 
                          key={sIdx} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: sIdx * 0.1 }}
                          className="flex items-center gap-4 text-xs font-bold tracking-tight text-white/40 group-hover:text-white group-hover:translate-x-4 transition-all duration-500 italic"
                        >
                          <ChevronRight className="w-4 h-4 text-brand-coral" /> {sub}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TargetSectors;