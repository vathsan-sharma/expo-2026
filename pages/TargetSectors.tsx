import React, { useEffect } from 'react';
import { SECTORS } from '../constants';
import { ArrowRight, ChevronRight } from 'lucide-react';

const TargetSectors: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pb-32 bg-white min-h-screen">
      {/* Header */}
      <section className="bg-white pt-48 pb-24 text-center relative overflow-hidden bg-dots">
        <div className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in-up">
          <span className="text-brand-emerald font-black uppercase tracking-[0.4em] text-xs mb-8 block italic">Economic Engines</span>
          <h1 className="text-5xl md:text-8xl font-black text-brand-obsidian mb-10 uppercase tracking-tighter leading-none">Target Sectors</h1>
          <p className="text-gray-400 text-lg md:text-2xl max-w-4xl mx-auto italic font-medium leading-relaxed">
            Focusing on the high-growth industries that define the future of the Asia-Canada trade corridor.
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SECTORS.map((sector, idx) => (
            <div 
              key={sector.id} 
              className="reveal glass-card rounded-[3.5rem] p-12 md:p-20 border border-gray-100 flex flex-col md:flex-row gap-12 group hover:border-brand-emerald/50 transition-all duration-700"
              style={{ transitionDelay: `${(idx % 2) * 150}ms` }}
            >
              <div className="w-24 h-24 bg-brand-platinum rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-emerald group-hover:text-white transition-all duration-700 shadow-sm">
                {React.cloneElement(sector.icon as React.ReactElement, { className: 'w-12 h-12' })}
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-brand-obsidian leading-none">{sector.title}</h3>
                </div>
                <p className="text-gray-500 text-xl font-medium mb-12 leading-relaxed italic border-l-4 border-brand-emerald/10 pl-8">{sector.description}</p>
                <div className="space-y-6">
                  <h4 className="text-[10px] font-black text-brand-emerald uppercase tracking-[0.4em] mb-4 italic">Core Sub-Sectors</h4>
                  <ul className="grid grid-cols-1 gap-4">
                    {sector.subsectors?.map((sub, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-brand-obsidian group-hover:translate-x-4 transition-all duration-500">
                        <ChevronRight className="w-4 h-4 text-brand-emerald" /> {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TargetSectors;