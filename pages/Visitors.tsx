import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Users, Star, Clock, ShieldCheck } from 'lucide-react';

const Visitors: React.FC = () => {
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
      {/* Hero */}
      <section className="bg-brand-navy pt-32 md:pt-48 pb-16 md:pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <div className="container-custom relative z-10 animate-fade-in-up">
          <span className="text-brand-coral font-bold tracking-[0.3em] text-xs mb-8 block italic">Visitor Information</span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none">Visitors & Attendees</h1>
          <p className="text-white/60 text-lg md:text-2xl max-w-4xl mx-auto italic font-medium leading-relaxed">
            Join thousands of global leaders, investors, and innovators at Asia's premier powerful economies showcase in Toronto.
          </p>
        </div>
      </section>

      {/* Why Visit */}
      <section className="py-16 md:py-32 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center mb-24 md:mb-48">
          <div className="reveal">
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter text-brand-coral leading-none italic">Why Visit the Expo?</h2>
            <p className="text-white/60 text-xl leading-relaxed mb-12 font-medium italic">
              AEEE 2026 offers unparalleled access to high growth markets and strategic partnerships that define the future of international trade.
            </p>
            <div className="space-y-6">
              {[
                "Direct access to 300+ exhibiting businesses from 8 powerful economies.",
                "Exclusive insights into high impact sectors like Fintech, Energy, and AI.",
                "Strategic B2B matchmaking sessions with pre qualified partners.",
                "High level networking with government officials and trade commissioners."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <CheckCircle2 className="w-6 h-6 text-brand-coral flex-shrink-0 mt-1" />
                  <p className="text-white font-bold tracking-tight text-sm leading-relaxed italic">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal rounded-sm overflow-hidden border border-white/10 relative group">
            <img 
              src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=1000" 
              alt="Expo Hall" 
              className="group-hover:scale-105 transition-transform duration-1000 opacity-100" 
            />
          </div>
        </div>

        {/* Ideal Visitors */}
        <div className="mb-24 md:mb-48 reveal">
          <h2 className="text-4xl md:text-6xl font-black mb-12 md:mb-16 tracking-tighter text-white text-center italic">Ideal Visitors</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Investors", desc: "Venture capitalists and private equity firms seeking frontier market opportunities." },
              { title: "Trade Leaders", desc: "Import/Export executives looking for reliable supply chain partners in Asia." },
              { title: "Innovators", desc: "Tech founders and R&D leaders exploring cross border collaboration." }
            ].map((profile, i) => (
              <div key={i} className="glass-card p-12 border border-white/10 hover:border-brand-coral transition-all text-center">
                <Users className="w-12 h-12 text-brand-coral mx-auto mb-8" />
                <h4 className="text-2xl font-black text-white tracking-tighter mb-4 italic">{profile.title}</h4>
                <p className="text-white/40 text-sm italic font-medium leading-relaxed">{profile.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What to Expect */}
        <div className="bg-white/5 rounded-sm p-12 md:p-32 text-white reveal border border-white/10 relative overflow-hidden bg-dots mb-24 md:mb-48">
          <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter leading-none text-center italic">What to Expect</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-8">
              <h3 className="text-2xl font-black text-brand-coral tracking-tighter italic">The Experience</h3>
              <p className="text-white/60 text-lg font-medium italic leading-relaxed">
                Experience a dynamic exhibition floor divided into national pavilions, featuring live demonstrations, cultural showcases, and dedicated sector zones.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Exhibition", value: "3 Days" },
                { label: "Sessions", value: "40+" },
                { label: "Speakers", value: "100+" },
                { label: "Networking", value: "24/7" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-black text-white tracking-tighter mb-1">{item.value}</div>
                  <div className="text-[11px] font-bold tracking-tight text-brand-coral italic">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visitor Pass Options */}
        <div className="mb-24 md:mb-48 reveal">
          <h2 className="text-4xl md:text-6xl font-black mb-12 md:mb-16 tracking-tighter text-white text-center italic">Visitor Pass Options</h2>
          <div className="grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "One Day Pass", price: "CAD 150", features: ["Exhibition Access", "General Sessions", "Networking App"] },
              { name: "Full Event Pass", price: "CAD 350", features: ["3 Day Access", "All Conference Tracks", "Gala Dinner Invite"] },
              { name: "VIP Executive", price: "CAD 850", features: ["Priority Access", "VIP Lounge", "Private Matchmaking"] }
            ].map((pass, i) => (
              <div key={i} className={`p-12 rounded-sm border transition-all ${i === 1 ? 'bg-brand-coral border-brand-coral shadow-2xl scale-105' : 'bg-white/5 border-white/10 hover:border-brand-coral'}`}>
                <h4 className="text-2xl font-black text-white tracking-tighter mb-2 italic">{pass.name}</h4>
                <div className="text-4xl font-black text-white mb-8">{pass.price}</div>
                <ul className="space-y-4 mb-12">
                  {pass.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-[11px] font-bold tracking-tight text-white/60 italic">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/registration" className={`block text-center py-4 rounded-sm font-bold text-sm tracking-tight transition-all ${i === 1 ? 'bg-white text-brand-coral hover:bg-brand-navy hover:text-white' : 'bg-brand-coral text-white hover:bg-white hover:text-brand-coral'}`}>
                  Get Your Pass
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Info */}
        <div className="grid md:grid-cols-3 gap-12 reveal">
          <div className="space-y-6">
            <Clock className="w-10 h-10 text-brand-coral" />
            <h4 className="text-xl font-black text-white tracking-tighter italic">Opening Hours</h4>
            <p className="text-white/40 text-sm italic font-medium leading-relaxed">
              Oct 15 17, 2026<br/>
              09:00 AM   06:00 PM Daily
            </p>
          </div>
          <div className="space-y-6">
            <CheckCircle2 className="w-10 h-10 text-brand-coral" />
            <h4 className="text-xl font-black text-white tracking-tighter italic">Check-In</h4>
            <p className="text-white/40 text-sm italic font-medium leading-relaxed">
              Digital badge required for entry. On site printing available at Hall A.
            </p>
          </div>
          <div className="space-y-6">
            <ShieldCheck className="w-10 h-10 text-brand-coral" />
            <h4 className="text-xl font-black text-white tracking-tighter italic">On-Site Services</h4>
            <p className="text-white/40 text-sm italic font-medium leading-relaxed">
              Free Wi Fi, Business Center, Multi lingual Concierge, and Prayer Rooms.
            </p>
          </div>
        </div>

        <div className="mt-32 text-center reveal">
          <Link to="/registration" className="inline-flex items-center gap-4 bg-brand-coral text-white px-16 py-8 rounded-sm font-bold text-base tracking-tight hover:bg-white hover:text-brand-coral transition-all shadow-2xl group">
            Register as Visitor <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Visitors;
