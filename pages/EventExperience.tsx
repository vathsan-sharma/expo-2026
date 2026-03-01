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
    <div className="pb-32 bg-brand-navy min-h-screen">
      {/* Header */}
      <section className="bg-brand-navy pt-48 pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in-up">
          <span className="text-brand-coral font-bold tracking-[0.3em] text-xs mb-8 block italic">Operational Excellence</span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none italic">Event Experience</h1>
          <p className="text-white/60 text-lg md:text-2xl max-w-4xl mx-auto italic font-medium leading-relaxed">
            An immersive three day ecosystem designed to catalyze trade, innovation, and cross border partnerships at Toronto’s most iconic hub.
          </p>
        </div>
      </section>

      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="mb-40 max-w-4xl mx-auto text-center reveal">
          <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter text-brand-coral italic">What to Expect</h2>
          <p className="text-white/60 text-xl leading-relaxed italic font-medium">
            Toronto’s 100 Princess Blvd will be transformed into an international trade bridge. Expect a high octane program featuring curated matchmaking, policy deep dives, and industrial showcases representing 8 nations and hundreds of market leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-40">
          {EXPERIENCE_FEATURES.map((feat, idx) => (
            <div key={idx} className="reveal glass-card p-12 rounded-sm border border-white/10 flex flex-col md:flex-row items-start gap-10 hover:border-brand-coral transition-all group shadow-sm">
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-brand-coral flex-shrink-0 group-hover:bg-brand-coral group-hover:text-white transition-all shadow-sm">
                {React.cloneElement(feat.icon as React.ReactElement, { className: 'w-10 h-10' })}
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tighter text-white leading-none italic">{feat.title}</h3>
                <p className="text-white/40 text-sm font-medium leading-relaxed italic">{feat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Highlights Montage */}
        <div className="bg-white/5 rounded-sm p-16 md:p-32 text-center border border-white/10 shadow-xl bg-dots relative overflow-hidden reveal">
          <div className="absolute top-0 left-0 p-12 text-white/5 font-black text-[15rem] leading-none pointer-events-none tracking-tighter italic">Vibe</div>
          <h3 className="text-4xl md:text-[5rem] font-black text-white mb-12 tracking-tighter relative z-10 leading-none italic">Visual <br/><span className="text-brand-coral italic">Highlights</span></h3>
          <p className="text-white/40 mb-20 italic font-medium relative z-10 tracking-tight text-xs">The energy of global trade hubs captured in essence.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(id => (
              <div key={id} className="relative overflow-hidden rounded-sm group shadow-lg border border-white/10 aspect-square">
                <img 
                  src={`https://images.unsplash.com/photo-1540575861501-7ad05823c951?auto=format&fit=crop&q=80&w=600&h=600&sig=${id}`} 
                  className="w-full h-full object-cover group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" 
                  alt={`Gallery Highlight ${id}`} 
                />
                <div className="absolute inset-0 bg-brand-coral/5 group-hover:bg-transparent transition-all"></div>
                <div className="absolute bottom-6 left-6 text-brand-coral opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <Zap className="w-6 h-6 fill-current" />
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