import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Twitter, Globe, Mic2, Star, Briefcase } from 'lucide-react';

const Speakers: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const featuredSpeakers = [
    { name: "TBA", role: "To Be Announced", org: "Strategic Partner", image: "" },
    { name: "TBA", role: "To Be Announced", org: "Strategic Partner", image: "" },
    { name: "TBA", role: "To Be Announced", org: "Strategic Partner", image: "" },
    { name: "TBA", role: "To Be Announced", org: "Strategic Partner", image: "" }
  ];

  return (
    <div className="pb-32 bg-brand-navy min-h-screen">
      {/* Hero */}
      <section className="bg-brand-navy pt-24 md:pt-32 pb-12 md:pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in-up">
          <span className="text-brand-coral font-bold tracking-[0.3em] text-xs mb-8 block italic">Thought Leadership</span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none italic">Speakers</h1>
          <p className="text-white/60 text-lg md:text-2xl max-w-4xl mx-auto italic font-medium leading-relaxed">
            Meet the visionaries, policy makers, and industry leaders shaping the future of Asia Canada economic relations.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24 reveal">
          <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter text-white italic">Speakers & Thought Leaders</h2>
          <p className="text-white/40 text-xl font-medium italic max-w-3xl mx-auto leading-relaxed">
            Our speakers bring deep expertise in cross border trade, digital transformation, and sustainable development across the world's most dynamic markets.
          </p>
        </div>

        {/* Featured Speakers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 md:mb-32">
          {featuredSpeakers.map((speaker, i) => (
            <div key={i} className="reveal group" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden mb-8 border border-white/10 bg-white/5 flex items-center justify-center">
                {speaker.image ? (
                  <>
                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-60"></div>
                  </>
                ) : (
                  <div className="text-white/10 font-black text-4xl italic tracking-tighter">TBA</div>
                )}
                <div className="absolute bottom-6 left-6 flex gap-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                  <Linkedin className="w-5 h-5 text-white hover:text-brand-coral cursor-pointer" />
                  <Twitter className="w-5 h-5 text-white hover:text-brand-coral cursor-pointer" />
                </div>
              </div>
              <h4 className="text-2xl font-black text-white tracking-tighter mb-1 group-hover:text-brand-coral transition-colors italic">{speaker.name}</h4>
              <p className="text-brand-coral font-bold tracking-widest text-[11px] italic mb-2">{speaker.role}</p>
              <p className="text-white/20 font-bold tracking-[0.2em] text-[10px] italic">{speaker.org}</p>
            </div>
          ))}
        </div>

        {/* All Speakers Grid Description */}
        <div className="bg-white/5 rounded-sm p-12 md:p-16 text-center reveal border border-white/10 relative overflow-hidden bg-dots mb-24 md:mb-32">
          <Mic2 className="w-16 h-16 text-brand-coral mx-auto mb-12" />
          <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter text-white italic">100+ Global Speakers</h2>
          <p className="text-white/40 text-lg font-medium italic max-w-2xl mx-auto mb-16 leading-relaxed">
            Our full speaker lineup includes representatives from central banks, tech unicorns, and international trade organizations.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Government", count: "25+" },
              { label: "C Suite", count: "40+" },
              { label: "Innovators", count: "30+" },
              { label: "Economists", count: "15+" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl font-black text-white tracking-tighter italic">{stat.count}</div>
                <div className="text-[11px] font-bold tracking-tight text-brand-coral italic">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Speaking Opportunities */}
        <div className="grid lg:grid-cols-2 gap-24 items-center reveal">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter text-brand-coral leading-none italic">Speaking Opportunities</h2>
            <p className="text-white/60 text-xl leading-relaxed mb-12 font-medium italic">
              Are you a thought leader in the Asia Canada trade corridor? We are currently accepting proposals for technical tracks and panel discussions.
            </p>
            <div className="space-y-8">
              <div className="flex items-start gap-8 glass-card p-8 rounded-sm border border-white/10">
                <div className="w-14 h-14 bg-white/5 text-brand-coral rounded-sm flex-shrink-0 flex items-center justify-center">
                   <Star className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-black tracking-tight text-white mb-1 text-xl italic">Keynote Slots</h4>
                  <p className="text-[11px] text-white/40 font-bold tracking-tight italic">Reserved for high-level policy and industry visionaries.</p>
                </div>
              </div>
              <div className="flex items-start gap-8 glass-card p-8 rounded-sm border border-white/10">
                <div className="w-14 h-14 bg-white/5 text-brand-coral rounded-sm flex-shrink-0 flex items-center justify-center">
                   <Briefcase className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-black tracking-tight text-white mb-1 text-xl italic">Technical Tracks</h4>
                  <p className="text-[11px] text-white/40 font-bold tracking-tight italic">Deep dives into sector-specific innovation and trade logistics.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 p-16 rounded-sm border border-white/10 text-center">
            <h4 className="text-2xl font-black text-white tracking-tighter mb-8 italic">Submit Your Proposal</h4>
            <p className="text-white/40 text-sm mb-12 italic font-medium">Deadline for speaker applications: June 30, 2026</p>
            <Link to="/contact" className="inline-flex items-center gap-4 bg-brand-coral text-white px-12 py-6 rounded-sm font-bold text-sm tracking-tight hover:bg-white hover:text-brand-coral transition-all shadow-xl group italic">
              Apply to Speak <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Speakers;
