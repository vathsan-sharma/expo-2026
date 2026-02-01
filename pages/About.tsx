import React, { useEffect } from 'react';
import { Target, Globe, Users, Briefcase, TrendingUp, ShieldCheck } from 'lucide-react';
import { MILESTONES } from '../constants';

const About: React.FC = () => {
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
    <div className="pb-32 bg-brand-obsidian">
      {/* Hero */}
      <section className="bg-brand-obsidian pt-48 pb-24 text-center relative overflow-hidden bg-dots">
        <div className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in-up">
          <span className="text-brand-emerald font-black uppercase tracking-[0.5em] text-xs mb-8 block italic">Visionary Context</span>
          <h1 className="text-5xl md:text-8xl font-black text-brand-platinum mb-10 uppercase tracking-tighter leading-none">About the Expo</h1>
          <p className="text-brand-platinum/60 text-lg md:text-2xl max-w-4xl mx-auto italic font-medium leading-relaxed">
            A powerful platform for meaningful international collaboration, creating a bridge between Canada’s industrial excellence and Asia’s emerging growth engines.
          </p>
        </div>
      </section>

      {/* Vision & Purpose */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
          <div className="reveal">
            <h2 className="text-4xl md:text-6xl font-black mb-10 uppercase tracking-tighter text-brand-emerald leading-[0.9]">Vision & Purpose</h2>
            <p className="text-brand-platinum/70 text-xl leading-relaxed mb-12 font-medium italic">
              Our mission is to highlight high-impact opportunities across key industry sectors. We aim to establish a definitive trade nexus that facilitates the flow of innovation, capital, and expertise between Toronto and the world's most dynamic emerging economies.
            </p>
            <div className="space-y-10">
              <div className="flex items-start gap-8 glass-card p-8 rounded-3xl group">
                <div className="w-16 h-16 bg-brand-emerald text-brand-obsidian rounded-2xl flex-shrink-0 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                   <Target className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-tight text-brand-platinum mb-2 text-xl">High-Impact Growth</h4>
                  <p className="text-xs text-brand-platinum/40 font-bold uppercase tracking-widest italic">Directing strategic focus to sectors with multi-generational potential.</p>
                </div>
              </div>
              <div className="flex items-start gap-8 glass-card p-8 rounded-3xl group">
                <div className="w-16 h-16 bg-brand-forest/40 text-brand-emerald rounded-2xl flex-shrink-0 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                   <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-tight text-brand-platinum mb-2 text-xl">Policy-Backed Trade</h4>
                  <p className="text-xs text-brand-platinum/40 font-bold uppercase tracking-widest italic">Ensuring transparent and government-supported trade dialogues.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative reveal shadow-2xl rounded-[4rem] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" 
              alt="Strategic Vision" 
              className="grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 opacity-60" 
            />
            <div className="absolute inset-0 bg-brand-emerald/5"></div>
          </div>
        </div>

        {/* Gateway Narrative */}
        <div className="bg-brand-forest/20 rounded-[4rem] p-16 md:p-32 text-brand-platinum reveal text-center mb-48 border border-white/5 relative bg-dots">
           <h2 className="text-4xl md:text-[5rem] font-black mb-12 uppercase tracking-tighter leading-none">Gateway to Asia’s Expansion</h2>
           <p className="text-brand-platinum/60 text-xl font-medium italic leading-relaxed max-w-4xl mx-auto mb-20">
             Toronto is Canada’s global financial hub, making it the ideal host for AEEE 2026. This expo acts as a specialized portal for investors and business leaders to navigate the complexities of emerging markets with confidence and clarity.
           </p>
           <div className="grid md:grid-cols-3 gap-16">
              {[
                { t: 'Why Toronto', d: 'North America’s fastest-growing tech hub and a multicultural bridge to the world.' },
                { t: 'Emerging Economies', d: 'Sri Lanka, Vietnam, Indonesia — the new frontier of industrial manufacturing.' },
                { t: 'Strategic Alliances', d: 'Creating lasting joint ventures between Canadian firms and Asian innovators.' }
              ].map((item, i) => (
                <div key={i} className="space-y-6">
                  <h4 className="text-2xl font-black uppercase tracking-tighter text-brand-emerald italic">[{item.t}]</h4>
                  <p className="text-brand-platinum/30 text-[10px] font-black leading-relaxed tracking-widest uppercase italic">{item.d}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Who Should Attend */}
        <div className="mb-48 reveal">
           <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black text-brand-platinum uppercase tracking-tighter mb-6">Who Should Attend</h2>
              <p className="text-brand-platinum/50 italic font-medium">A diverse spectrum of global stakeholders.</p>
           </div>
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { t: 'Government Delegations', d: 'Policymakers and trade commissions.', i: <Globe /> },
                { t: 'Investors', d: 'Institutional capital and VCs.', i: <Briefcase /> },
                { t: 'Business Leaders', d: 'CEOs and trade organizations.', i: <Users /> },
                { t: 'Exporters & Manufacturers', d: 'Global supply chain partners.', i: <TrendingUp /> },
                { t: 'Tourism Authorities', d: 'Regional growth bodies.', i: <Globe /> },
                { t: 'Media Partners', d: 'International trade press.', i: <Users /> }
              ].map((item, i) => (
                <div key={i} className="glass-card p-10 rounded-3xl group hover:border-brand-emerald transition-all">
                  <div className="w-12 h-12 text-brand-emerald mb-6 group-hover:scale-110 transition-transform">{item.i}</div>
                  <h4 className="text-xl font-black text-brand-platinum uppercase mb-2 tracking-tighter">{item.t}</h4>
                  <p className="text-xs text-brand-platinum/40 italic font-medium">{item.d}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Repeat Quick Stats */}
        <div className="bg-brand-emerald rounded-[3rem] py-20 reveal">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-brand-obsidian">
            {MILESTONES.map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-6xl font-black tracking-tighter uppercase">{stat.value}</div>
                <div className="text-xs font-black uppercase tracking-widest opacity-60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;