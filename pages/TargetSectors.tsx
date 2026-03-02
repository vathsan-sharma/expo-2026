import React from 'react';
import { SECTORS, SECTOR_IMAGES } from '../constants';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const TargetSectors: React.FC = () => {
  return (
    <div className="pb-32 bg-brand-navy min-h-screen">
      {/* Professional Header */}
      <section className="relative pt-32 md:pt-48 pb-16 md:pb-32 w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-navy"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(242,125,38,0.1),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-dots opacity-5"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 container-custom text-center"
        >
          <span className="text-brand-coral font-bold tracking-[0.5em] text-xs mb-8 block uppercase">Strategic Economic Engines</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-10 tracking-tighter leading-[0.9] uppercase">
            Industry <span className="text-brand-coral">Sectors</span>
          </h1>
          <p className="text-white/60 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
            Catalyzing growth across the most dynamic industries in the Asia-Canada trade corridor.
          </p>
        </motion.div>
      </section>

      {/* Modern Grid Layout - Website Friendly */}
      <section className="container-custom relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SECTORS.map((sector, idx) => (
            <motion.div 
              key={sector.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col h-full hover:border-brand-coral/50 transition-all duration-500"
            >
              {/* Image Header with Overlay */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={SECTOR_IMAGES[sector.id as keyof typeof SECTOR_IMAGES]} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt={sector.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent"></div>
                
                {/* Minimal Icon Overlay */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-brand-coral/90 backdrop-blur-xl rounded-xl flex items-center justify-center text-white shadow-2xl z-20">
                  {React.cloneElement(sector.icon as React.ReactElement, { className: 'w-6 h-6' })}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-px bg-brand-coral"></div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tighter leading-none uppercase">
                    {sector.title}
                  </h2>
                </div>

                <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed mb-8 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                  {sector.description}
                </p>

                <div className="space-y-4 flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {sector.subsectors?.map((sub, sIdx) => (
                      <span key={sIdx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-white/40 group-hover:text-white group-hover:border-brand-coral/30 transition-all">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-auto">
                  <Link to="/registration" className="inline-flex items-center gap-2 text-brand-coral font-black text-[10px] tracking-widest hover:text-white transition-all uppercase group/link">
                    Explore Opportunities <ArrowRight className="w-3 h-3 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action - Clean & Open */}
      <section className="py-24 md:py-48 container-custom max-w-5xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
           <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase">Ready to <span className="text-brand-coral">Expand?</span></h3>
           <p className="text-white/40 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
             Join 300+ exhibitors and 15,000+ attendees in the heart of Toronto to redefine your global strategy.
           </p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <Link to="/registration" className="bg-brand-coral text-white px-12 py-5 rounded-full font-black text-xs tracking-widest hover:bg-white hover:text-brand-coral transition-all shadow-2xl uppercase">
               Register Now
             </Link>
             <Link to="/exhibitors" className="bg-white/10 border border-white/20 text-white px-12 py-5 rounded-full font-black text-xs tracking-widest hover:bg-white hover:text-brand-navy transition-all uppercase">
               Exhibitor Info
             </Link>
           </div>
        </motion.div>
      </section>
    </div>
  );
};

export default TargetSectors;
