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
    <div className="pb-32 bg-white">
      {/* Hero */}
      <section className="bg-white pt-48 pb-24 text-center relative overflow-hidden bg-dots">
        <div className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in-up">
          <span className="text-brand-emerald font-black uppercase tracking-[0.5em] text-xs mb-8 block italic">Strategic Context</span>
          <h1 className="text-5xl md:text-8xl font-black text-brand-obsidian mb-10 uppercase tracking-tighter leading-none">About the Expo</h1>
          <p className="text-gray-400 text-lg md:text-2xl max-w-4xl mx-auto italic font-medium leading-relaxed">
            A powerful platform for international collaboration, establishing a permanent industrial bridge between Canada and Asia’s emerging growth engines.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
          <div className="reveal">
            <h2 className="text-4xl md:text-6xl font-black mb-10 uppercase tracking-tighter text-brand-emerald leading-[0.9]">Vision & Purpose</h2>
            <p className="text-gray-500 text-xl leading-relaxed mb-12 font-medium italic">
              Our mission is to highlight high-impact opportunities across key sectors. We aim to establish a definitive trade nexus facilitating the flow of capital and innovation between Toronto and the world's most dynamic frontiers.
            </p>
            <div className="space-y-8">
              <div className="flex items-start gap-8 glass-card p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-brand-platinum text-brand-emerald rounded-2xl flex-shrink-0 flex items-center justify-center">
                   <Target className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-tight text-brand-obsidian mb-1 text-xl">High-Impact Growth</h4>
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest italic">Targeting multi-generational potential.</p>
                </div>
              </div>
              <div className="flex items-start gap-8 glass-card p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-brand-platinum text-brand-emerald rounded-2xl flex-shrink-0 flex items-center justify-center">
                   <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-tight text-brand-obsidian mb-1 text-xl">Policy Integration</h4>
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest italic">Government-supported trade dialogues.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal rounded-[4rem] overflow-hidden shadow-2xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" 
              alt="Vision" 
              className="group-hover:scale-105 transition-transform duration-1000 grayscale opacity-40 hover:grayscale-0 hover:opacity-100" 
            />
          </div>
        </div>

        {/* Narrative */}
        <div className="bg-brand-platinum rounded-[4rem] p-16 md:p-32 text-brand-obsidian reveal text-center mb-48 border border-gray-100 relative bg-dots">
           <h2 className="text-4xl md:text-[5.5rem] font-black mb-10 uppercase tracking-tighter leading-none">Global Expansion</h2>
           <p className="text-gray-500 text-xl font-medium italic leading-relaxed max-w-4xl mx-auto mb-20">
             Toronto is Canada’s global financial hub, the ideal host for AEEE 2026. This expo acts as a specialized portal for investors and leaders to navigate the complexities of emerging markets.
           </p>
           <div className="grid md:grid-cols-3 gap-16">
              {[
                { t: 'Why Toronto', d: 'North America’s fastest-growing tech hub.' },
                { t: 'The Frontier', d: 'Sri Lanka, Vietnam, Indonesia — the new industrial hub.' },
                { t: 'Strategic Alliances', d: 'Lasting joint ventures for innovation.' }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <h4 className="text-xl font-black uppercase tracking-tighter text-brand-emerald italic">[{item.t}]</h4>
                  <p className="text-gray-400 text-[10px] font-black leading-relaxed tracking-widest uppercase italic">{item.d}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-brand-emerald rounded-[3rem] py-20 reveal shadow-xl shadow-brand-emerald/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
            {MILESTONES.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-6xl font-black tracking-tighter uppercase">{stat.value}</div>
                <div className="text-[10px] font-black uppercase tracking-widest opacity-60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;