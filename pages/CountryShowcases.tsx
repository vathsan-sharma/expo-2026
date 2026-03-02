import React, { useEffect } from 'react';
import { COUNTRIES, PARTNER_SKYLINES } from '../constants';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, MapPin, TrendingUp, Briefcase } from 'lucide-react';

const CountryShowcases: React.FC = () => {
  return (
    <div className="pb-32 bg-brand-navy min-h-screen">
      {/* Simple & Impactful Page Header */}
      <section className="bg-brand-navy pt-24 md:pt-32 pb-12 md:pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-5"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="container-custom relative z-10"
        >
          <span className="text-brand-coral font-bold tracking-[0.4em] text-xs mb-8 block italic uppercase reveal">Participating nations</span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none italic uppercase">
            Country <span className="text-brand-coral">showcases</span>
          </h1>
          <p className="text-white/70 text-lg md:text-2xl max-w-3xl mx-auto italic font-medium leading-relaxed">
            A comprehensive look at Asia’s powerful economies and Canada, featuring key sectors and high impact investment domains.
          </p>
        </motion.div>
      </section>

      {/* Impactful Country Grid */}
      <section className="container-custom space-y-16 md:space-y-24">
        {COUNTRIES.map((country, idx) => (
          <motion.div 
            key={country.id} 
            id={`country-${country.id}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
          >
            {/* Large Impactful Image */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2 relative group overflow-hidden rounded-3xl border border-white/10 aspect-[4/3] shadow-2xl shimmer-card"
            >
              <img 
                src={PARTNER_SKYLINES[country.id as keyof typeof PARTNER_SKYLINES]} 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                alt={country.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent"></div>
            </motion.div>

            {/* Country Details */}
            <div className="w-full lg:w-1/2 space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    viewport={{ once: true }}
                    className="h-[1px] bg-brand-coral"
                  ></motion.div>
                </div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none italic">
                  {country.name}
                </h2>
              </div>

              <motion.p 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-white/80 text-xl md:text-2xl italic font-medium leading-relaxed border-l-4 border-brand-coral pl-8"
              >
                "{country.summary}"
              </motion.p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-4">
                {/* Core Competencies */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-brand-coral" />
                    <h4 className="font-black text-white text-xs uppercase tracking-[0.2em] italic">Core competencies</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {country.strengths.map((s, i) => (
                      <motion.span 
                        key={i} 
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                        className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-[11px] font-bold text-white/60 italic cursor-default transition-colors"
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Investment Areas */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-brand-coral" />
                    <h4 className="font-black text-white text-xs uppercase tracking-[0.2em] italic">Investment areas</h4>
                  </div>
                  <ul className="space-y-2">
                    {country.investmentAreas?.map((area, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="text-sm font-medium text-white/50 italic flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-coral"></span> {area}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <Link to="/registration" className="inline-flex items-center gap-4 bg-brand-coral text-white px-12 py-5 rounded-full font-black text-sm tracking-widest hover:bg-white hover:text-brand-coral transition-all group shadow-2xl italic">
                  Discover {country.name} opportunities <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Simple Impactful CTA */}
      <section className="py-16 md:py-24 container-custom text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
           <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-10 italic uppercase">Interested in a country pavilion?</h3>
           <p className="text-white/40 text-xl mb-16 italic font-medium max-w-2xl mx-auto leading-relaxed">
             Secure exhibition space within your national pavilion to showcase your products to the Canadian market.
           </p>
           <Link to="/registration" className="inline-block bg-brand-coral text-white px-16 py-8 rounded-full font-black text-sm tracking-widest hover:bg-white hover:text-brand-coral transition-all shadow-2xl italic uppercase">
             Contact secretariat
           </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default CountryShowcases;