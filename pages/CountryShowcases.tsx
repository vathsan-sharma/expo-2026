import React, { useEffect } from 'react';
import { COUNTRIES } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe } from 'lucide-react';

const CountryShowcases: React.FC = () => {
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
      {/* Page Header */}
      <section className="bg-white pt-48 pb-24 text-center relative overflow-hidden bg-dots">
        <div className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in-up">
          <span className="text-brand-emerald font-black uppercase tracking-[0.4em] text-xs mb-8 block italic">Participating Nations</span>
          <h1 className="text-5xl md:text-8xl font-black text-brand-obsidian mb-10 uppercase tracking-tighter leading-none">Country Showcases</h1>
          <p className="text-gray-400 text-lg md:text-2xl max-w-4xl mx-auto italic font-medium leading-relaxed">
            A comprehensive look at Asia’s emerging economies and Canada, featuring priority sectors and high-impact investment domains.
          </p>
        </div>
      </section>

      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {COUNTRIES.map((country, idx) => (
            <div 
              key={country.id} 
              className="reveal glass-card rounded-[3rem] overflow-hidden group border border-gray-100 hover:border-brand-emerald transition-all"
              style={{ transitionDelay: `${(idx % 2) * 200}ms` }}
            >
              <div className="h-64 bg-brand-platinum relative flex items-center justify-center overflow-hidden">
                <span className="text-[10rem] drop-shadow-xl z-20 group-hover:scale-110 transition-transform duration-700">{country.flag}</span>
                <div className="absolute inset-0 bg-brand-emerald/5 z-10"></div>
                <Globe className="absolute top-10 right-10 w-32 h-32 text-brand-emerald/5 z-0" />
              </div>
              <div className="p-12">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-4xl font-black uppercase tracking-tighter text-brand-obsidian leading-none">{country.name}</h2>
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-emerald border border-brand-emerald/20 px-4 py-1.5 rounded-full italic">Priority Nation</span>
                </div>
                <p className="text-gray-500 text-xl italic font-medium mb-10 leading-relaxed">"{country.summary}"</p>
                <div className="space-y-6 mb-12">
                  <h4 className="font-black text-brand-obsidian uppercase text-[10px] tracking-widest border-l-2 border-brand-emerald pl-4 italic">Core Competencies</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {country.strengths.map((s, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-brand-platinum rounded-2xl border border-gray-50 font-bold uppercase tracking-widest text-[10px] text-gray-500 group-hover:border-brand-emerald transition-all shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald"></div>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
                <Link to="/registration" className="inline-flex items-center gap-3 bg-brand-emerald text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-obsidian transition-all group shadow-xl shadow-brand-emerald/10">
                  Discover {country.name} Opportunities <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center reveal">
        <div className="bg-brand-platinum p-16 md:p-32 rounded-[4rem] border border-gray-100 relative overflow-hidden bg-dots">
           <h3 className="text-3xl md:text-5xl font-black text-brand-obsidian uppercase tracking-tighter mb-10">Interested in a Country Pavilion?</h3>
           <p className="text-gray-400 text-lg mb-12 italic font-medium max-w-2xl mx-auto leading-relaxed">
             Secure exhibition space within your national pavilion to showcase your products to the Canadian market.
           </p>
           <Link to="/registration" className="inline-block bg-brand-emerald text-white px-12 py-6 rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-obsidian transition-all shadow-lg">
             Contact Secretariat
           </Link>
        </div>
      </section>
    </div>
  );
};

export default CountryShowcases;