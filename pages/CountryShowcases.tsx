import React, { useEffect } from 'react';
import { COUNTRIES, PARTNER_SKYLINES } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, MapPin, TrendingUp, Briefcase } from 'lucide-react';

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
    <div className="pb-32 bg-brand-navy min-h-screen">
      {/* Simple & Impactful Page Header */}
      <section className="bg-brand-navy pt-48 pb-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-5"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 animate-fade-in-up">
          <span className="text-brand-coral font-bold tracking-[0.4em] text-xs mb-8 block italic uppercase">Participating nations</span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none italic">
            Country showcases
          </h1>
          <p className="text-white/70 text-lg md:text-2xl max-w-3xl mx-auto italic font-medium leading-relaxed">
            A comprehensive look at Asia’s emerging economies and Canada, featuring priority sectors and high impact investment domains.
          </p>
        </div>
      </section>

      {/* Impactful Country Grid */}
      <section className="max-w-7xl mx-auto px-6 space-y-32">
        {COUNTRIES.map((country, idx) => (
          <div 
            key={country.id} 
            id={`country-${country.id}`}
            className={`reveal flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
          >
            {/* Large Impactful Image */}
            <div className="w-full lg:w-1/2 relative group overflow-hidden rounded-3xl border border-white/10 aspect-[4/3]">
              <img 
                src={PARTNER_SKYLINES[country.id as keyof typeof PARTNER_SKYLINES]} 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                alt={country.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent"></div>
              <div className="absolute top-8 right-8 text-6xl md:text-8xl drop-shadow-2xl z-20 group-hover:scale-110 transition-transform duration-700">
                {country.flag}
              </div>
            </div>

            {/* Country Details */}
            <div className="w-full lg:w-1/2 space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-brand-coral"></div>
                  <span className="text-brand-coral font-bold text-xs tracking-[0.3em] italic uppercase">Priority nation</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none italic">
                  {country.name}
                </h2>
              </div>

              <p className="text-white/80 text-xl md:text-2xl italic font-medium leading-relaxed border-l-4 border-brand-coral pl-8">
                "{country.summary}"
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-4">
                {/* Core Competencies */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-brand-coral" />
                    <h4 className="font-black text-white text-xs uppercase tracking-[0.2em] italic">Core competencies</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {country.strengths.map((s, i) => (
                      <span key={i} className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-[11px] font-bold text-white/60 italic">
                        {s}
                      </span>
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
                      <li key={i} className="text-sm font-medium text-white/50 italic flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-coral"></span> {area}
                      </li>
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
          </div>
        ))}
      </section>

      {/* Simple Impactful CTA */}
      <section className="py-48 max-w-7xl mx-auto px-6 text-center reveal">
        <div className="bg-white/5 p-16 md:p-32 rounded-[3rem] border border-white/10 relative overflow-hidden bg-dots">
           <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-10 italic">Interested in a country pavilion?</h3>
           <p className="text-white/60 text-xl mb-12 italic font-medium max-w-2xl mx-auto leading-relaxed">
             Secure exhibition space within your national pavilion to showcase your products to the Canadian market.
           </p>
           <Link to="/registration" className="inline-block bg-brand-coral text-white px-16 py-6 rounded-full font-black text-sm tracking-widest hover:bg-white hover:text-brand-coral transition-all shadow-2xl italic">
             Contact secretariat
           </Link>
        </div>
      </section>
    </div>
  );
};

export default CountryShowcases;