import React, { useEffect } from 'react';
import { EXPERIENCE_FEATURES } from '../constants';
import { Zap } from 'lucide-react';

const EventExperience: React.FC = () => {
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
      {/* Header */}
      <section className="bg-brand-obsidian pt-48 pb-24 text-center relative overflow-hidden bg-dots">
        <div className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in-up">
          <span className="text-brand-emerald font-black uppercase tracking-[0.5em] text-xs mb-8 block italic">Operational Excellence</span>
          <h1 className="text-5xl md:text-8xl font-black text-brand-platinum mb-10 uppercase tracking-tighter leading-none">Event Experience</h1>
          <p className="text-brand-platinum/60 text-lg md:text-2xl max-w-4xl mx-auto italic font-medium leading-relaxed">
            An immersive three-day ecosystem designed to catalyze trade, innovation, and cross-border partnerships at Toronto’s most iconic hub.
          </p>
        </div>
      </section>

      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="mb-40 max-w-4xl mx-auto text-center reveal">
          <h2 className="text-4xl md:text-6xl font-black mb-10 uppercase tracking-tighter text-brand-platinum">What to Expect</h2>
          <p className="text-brand-platinum/60 text-xl leading-relaxed italic font-medium">
            Toronto’s 100 Princess Blvd will be transformed into an international trade bridge. Expect a high-octane program featuring curated matchmaking, policy deep-dives, and industrial showcases representing 8 nations and hundreds of market leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-40">
          {EXPERIENCE_FEATURES.map((feat, idx) => (
            <div key={idx} className="reveal glass-card p-12 rounded-[3rem] border border-white/5 flex flex-col md:flex-row items-start gap-10 hover:border-brand-emerald/30 transition-all group shadow-sm">
              <div className="w-20 h-20 bg-brand-forest/20 border border-white/5 rounded-2xl flex items-center justify-center text-brand-emerald flex-shrink-0 group-hover:scale-110 transition-all shadow-lg">
                {React.cloneElement(feat.icon as React.ReactElement, { className: 'w-10 h-10' })}
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tighter text-brand-platinum leading-none">{feat.title}</h3>
                <p className="text-brand-platinum/40 text-sm font-medium leading-relaxed italic">{feat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Highlights Montage */}
        <div className="bg-brand-obsidian rounded-[4rem] p-16 md:p-32 text-center border border-white/5 shadow-2xl bg-dots relative overflow-hidden reveal">
          <div className="absolute top-0 left-0 p-12 text-white/5 font-black text-[15rem] leading-none pointer-events-none uppercase tracking-tighter">VIBE</div>
          <h3 className="text-4xl md:text-[5rem] font-black text-brand-platinum mb-12 uppercase tracking-tighter relative z-10 leading-none">Visual <br/><span className="text-brand-emerald italic">Highlights</span></h3>
          <p className="text-brand-platinum/30 mb-20 italic font-medium relative z-10 uppercase tracking-widest text-xs">The energy of global trade hubs captured in essence.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(id => (
              <div key={id} className="relative overflow-hidden rounded-[2rem] group shadow-2xl border border-white/5 aspect-square">
                <img 
                  src={`https://images.unsplash.com/photo-1540575861501-7ad05823c951?auto=format&fit=crop&q=80&w=600&h=600&sig=${id}`} 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" 
                  alt={`Gallery Highlight ${id}`} 
                />
                <div className="absolute inset-0 bg-brand-emerald/5 group-hover:bg-transparent transition-all"></div>
                <div className="absolute bottom-6 left-6 text-white/0 group-hover:text-white transition-all duration-500">
                   <Zap className="w-6 h-6 text-brand-emerald" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventExperience;