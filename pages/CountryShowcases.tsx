import React, { useEffect, useState } from 'react';
import { COUNTRIES, PARTNER_SKYLINES } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, MapPin, TrendingUp, Briefcase } from 'lucide-react';

const InteractiveMap: React.FC = () => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  // Simplified coordinates for the map
  const countryDots = [
    { id: 'canada', x: '20%', y: '30%', name: 'Canada' },
    { id: 'pakistan', x: '65%', y: '45%', name: 'Pakistan' },
    { id: 'srilanka', x: '68%', y: '58%', name: 'Sri Lanka' },
    { id: 'thailand', x: '75%', y: '55%', name: 'Thailand' },
    { id: 'malaysia', x: '76%', y: '62%', name: 'Malaysia' },
    { id: 'indonesia', x: '78%', y: '68%', name: 'Indonesia' },
    { id: 'vietnam', x: '78%', y: '53%', name: 'Vietnam' },
    { id: 'philippines', x: '82%', y: '58%', name: 'Philippines' },
  ];

  return (
    <div className="relative w-full aspect-[2/1] bg-white/5 rounded-3xl border border-white/10 overflow-hidden bg-dots group">
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <Globe className="w-full h-full text-white" />
      </div>
      
      {/* Stylized Map Background */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 400">
        <path d="M50,150 Q100,100 200,120 T350,150 T500,130 T650,160 T750,140" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M100,250 Q200,300 350,280 T550,260 T700,290" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
      </svg>

      {countryDots.map((dot) => (
        <div
          key={dot.id}
          className="absolute cursor-pointer transition-all duration-300 z-20"
          style={{ left: dot.x, top: dot.y }}
          onMouseEnter={() => setHoveredCountry(dot.id)}
          onMouseLeave={() => setHoveredCountry(null)}
          onClick={() => {
            const element = document.getElementById(`country-${dot.id}`);
            element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }}
        >
          <div className={`relative flex items-center justify-center`}>
            <div className={`absolute w-8 h-8 rounded-full bg-brand-coral/20 animate-ping ${hoveredCountry === dot.id ? 'opacity-100' : 'opacity-0'}`}></div>
            <div className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${hoveredCountry === dot.id ? 'bg-brand-coral scale-150' : 'bg-white/40'}`}></div>
            
            {/* Tooltip */}
            <div className={`absolute bottom-full mb-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-brand-coral text-white text-[10px] font-black uppercase tracking-widest rounded-full whitespace-nowrap transition-all duration-300 shadow-2xl ${hoveredCountry === dot.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
              {dot.name}
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-8 text-left">
        <h4 className="text-[10px] font-black text-brand-coral uppercase tracking-[0.4em] italic mb-2">Interactive Map</h4>
        <p className="text-white/40 text-[9px] font-bold italic">Click a node to explore national opportunities</p>
      </div>
    </div>
  );
};

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
      {/* Page Header */}
      <section className="bg-brand-navy pt-48 pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in-up">
          <span className="text-brand-coral font-bold tracking-[0.3em] text-xs mb-8 block italic">Participating Nations</span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none italic">Country Showcases</h1>
          <p className="text-white/60 text-lg md:text-2xl max-w-4xl mx-auto italic font-medium leading-relaxed">
            A comprehensive look at Asia’s emerging economies and Canada, featuring priority sectors and high-impact investment domains.
          </p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-12 max-w-7xl mx-auto px-6 reveal">
        <InteractiveMap />
      </section>

      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {COUNTRIES.map((country, idx) => (
            <div 
              key={country.id} 
              id={`country-${country.id}`}
              className="reveal glass-card rounded-3xl overflow-hidden group border border-white/10 hover:border-brand-coral transition-all"
              style={{ transitionDelay: `${(idx % 2) * 200}ms` }}
            >
              <div className="h-80 bg-brand-navy relative flex items-center justify-center overflow-hidden">
                <img 
                  src={PARTNER_SKYLINES[country.id as keyof typeof PARTNER_SKYLINES]} 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                  alt={country.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent"></div>
                <span className="text-[10rem] drop-shadow-2xl z-20 group-hover:scale-110 transition-transform duration-700 relative">{country.flag}</span>
                <Globe className="absolute top-10 right-10 w-32 h-32 text-white/5 z-0" />
              </div>
              <div className="p-12">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-4xl font-black tracking-tighter text-white leading-none italic">{country.name}</h2>
                  <span className="text-[11px] font-black tracking-widest text-brand-coral border border-brand-coral/20 px-4 py-1.5 rounded-full uppercase italic">Priority Nation</span>
                </div>
                <p className="text-white/60 text-xl italic font-medium mb-12 leading-relaxed">"{country.summary}"</p>
                
                <div className="space-y-12 mb-16">
                  {/* Core Competencies */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <MapPin className="w-4 h-4 text-brand-coral" />
                      <h4 className="font-black text-white text-[10px] uppercase tracking-[0.3em] italic">Core Competencies</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {country.strengths.map((s, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 font-bold tracking-tight text-[11px] text-white/40 group-hover:border-brand-coral transition-all shadow-sm italic">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-coral"></div>
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Investment & Trade */}
                  <div className="grid sm:grid-cols-2 gap-12">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <TrendingUp className="w-4 h-4 text-brand-coral" />
                        <h4 className="font-black text-white text-[10px] uppercase tracking-[0.3em] italic">Investment Areas</h4>
                      </div>
                      <ul className="space-y-3">
                        {country.investmentAreas?.map((area, i) => (
                          <li key={i} className="text-[11px] font-bold text-white/40 italic flex items-center gap-2">
                            <span className="text-brand-coral">•</span> {area}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <Briefcase className="w-4 h-4 text-brand-coral" />
                        <h4 className="font-black text-white text-[10px] uppercase tracking-[0.3em] italic">Trade Opportunities</h4>
                      </div>
                      <ul className="space-y-3">
                        {country.tradeOpportunities?.map((opp, i) => (
                          <li key={i} className="text-[11px] font-bold text-white/40 italic flex items-center gap-2">
                            <span className="text-brand-coral">•</span> {opp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <Link to="/registration" className="inline-flex items-center gap-3 bg-brand-coral text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-brand-coral transition-all group shadow-xl italic">
                  Discover {country.name} Opportunities <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center reveal">
        <div className="bg-white/5 p-16 md:p-32 rounded-3xl border border-white/10 relative overflow-hidden bg-dots">
           <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-10 italic">Interested in a Country Pavilion?</h3>
           <p className="text-white/40 text-lg mb-12 italic font-medium max-w-2xl mx-auto leading-relaxed">
             Secure exhibition space within your national pavilion to showcase your products to the Canadian market.
           </p>
           <Link to="/registration" className="inline-block bg-brand-coral text-white px-12 py-6 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-brand-coral transition-all shadow-lg italic">
             Contact Secretariat
           </Link>
        </div>
      </section>
    </div>
  );
};

export default CountryShowcases;