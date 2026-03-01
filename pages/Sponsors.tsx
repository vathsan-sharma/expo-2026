import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Megaphone, BarChart3, Users, Download, Star, ShieldCheck, Globe } from 'lucide-react';

const Sponsors: React.FC = () => {
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
      <section className="bg-brand-navy pt-48 pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in-up">
          <span className="text-brand-coral font-bold tracking-[0.3em] text-xs mb-8 block italic">Strategic Partnership</span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none">Sponsors & Partners</h1>
          <p className="text-white/60 text-lg md:text-2xl max-w-4xl mx-auto italic font-medium leading-relaxed">
            Elevate your brand across a premium, international audience and align with the future of global trade and innovation.
          </p>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
          <div className="reveal">
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter text-brand-coral leading-none italic">Why Partner as a Sponsor?</h2>
            <p className="text-white/60 text-xl leading-relaxed mb-12 font-medium italic">
              Sponsorship at AEEE 2026 provides a unique opportunity to demonstrate leadership and gain elite recognition within the Asia Canada corridor.
            </p>
            <div className="grid gap-10">
              {[
                { icon: <Megaphone />, title: 'Brand Visibility', text: 'Elite recognition across all digital and on site event assets.' },
                { icon: <BarChart3 />, title: 'Strategic Alignment', text: 'Align with core themes of global trade, innovation, and sustainability.' },
                { icon: <Users />, title: 'Curated Networking', text: 'Access private sessions with government, investors and corporate leaders.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-brand-coral flex-shrink-0 group-hover:bg-brand-coral group-hover:text-white transition-all duration-500 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black tracking-tight text-white mb-2 text-2xl italic">{item.title}</h4>
                    <p className="text-sm text-white/40 italic font-medium leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal bg-white/5 p-16 md:p-24 rounded-sm border border-white/10 shadow-xl relative overflow-hidden bg-dots">
            <div className="absolute top-0 right-0 p-12 text-white/5 font-black text-9xl pointer-events-none italic">TIERS</div>
            <h4 className="text-3xl font-black mb-16 text-center tracking-tighter text-white relative z-10 italic">Sponsorship Tiers</h4>
            <div className="space-y-6 relative z-10">
              {[
                { name: 'Title / Diamond', status: 'Reserved', color: 'bg-brand-coral text-white' },
                { name: 'Platinum', status: '2 Slots Left', color: 'bg-white/5 text-white border border-white/10' },
                { name: 'Gold', status: 'Limited', color: 'bg-white/5 text-white border border-white/10' },
                { name: 'Silver', status: 'Available', color: 'bg-white/5 text-white border border-white/10' }
              ].map((tier, idx) => (
                <div key={idx} className={`p-8 rounded-sm flex justify-between items-center group cursor-pointer hover:border-brand-coral transition-all shadow-sm ${tier.color}`}>
                  <span className="font-black text-2xl tracking-tighter italic">{tier.name}</span>
                  <span className="text-[11px] font-bold px-4 py-1.5 bg-brand-navy text-white rounded-sm tracking-tight group-hover:bg-brand-coral transition-colors italic">{tier.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Strip */}
        <div className="mb-48 reveal">
          <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter text-white text-center italic">Key Sponsorship Benefits</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Globe />, title: "Global Reach", text: "Exposure to 50,000+ attendees and millions via media." },
              { icon: <Star />, title: "VIP Access", text: "Exclusive entry to the Ministerial Gala Dinner." },
              { icon: <ShieldCheck />, title: "Thought Leadership", text: "Keynote speaking slots on the main stage." },
              { icon: <Users />, title: "B2B Priority", text: "Priority access to the matchmaking platform." }
            ].map((b, i) => (
              <div key={i} className="text-center space-y-6">
                <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-brand-coral mx-auto group hover:bg-brand-coral hover:text-white transition-all">
                  {React.cloneElement(b.icon as React.ReactElement, { className: 'w-10 h-10' })}
                </div>
                <h4 className="text-xl font-black text-white tracking-tighter italic">{b.title}</h4>
                <p className="text-white/40 text-[11px] font-bold tracking-tight italic leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Placeholder Logos */}
        <div className="bg-white/5 rounded-sm p-16 md:p-24 text-center reveal border border-white/10 mb-48">
          <h3 className="text-2xl font-black text-white tracking-tighter mb-16 italic">Our Sponsors and Partners</h3>
          <div className="flex flex-wrap justify-center gap-12">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="w-32 h-16 bg-white/10 rounded-sm flex items-center justify-center font-black text-xs">LOGO {i}</div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="grid md:grid-cols-2 gap-12 reveal">
          <div className="glass-card p-12 border border-white/10 flex items-center justify-between group cursor-pointer hover:border-brand-coral transition-all">
            <div className="flex items-center gap-8">
              <Download className="w-10 h-10 text-brand-coral" />
              <div>
                <h4 className="text-xl font-black text-white tracking-tighter italic">Sponsorship Kit</h4>
                <p className="text-white/40 text-[11px] font-bold tracking-tight italic">Full details and ROI metrics</p>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-white/20 group-hover:text-brand-coral group-hover:translate-x-2 transition-all" />
          </div>
          <div className="glass-card p-12 border border-white/10 flex items-center justify-between group cursor-pointer hover:border-brand-coral transition-all">
            <div className="flex items-center gap-8">
              <Users className="w-10 h-10 text-brand-coral" />
              <div>
                <h4 className="text-xl font-black text-white tracking-tighter italic">Contact Team</h4>
                <p className="text-white/40 text-[11px] font-bold tracking-tight italic">Custom package discussion</p>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-white/20 group-hover:text-brand-coral group-hover:translate-x-2 transition-all" />
          </div>
        </div>

        <div className="mt-32 text-center reveal">
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/registration" className="bg-brand-coral text-white px-12 py-6 rounded-sm font-bold text-sm tracking-tight hover:bg-white hover:text-brand-coral transition-all shadow-xl">
              Download Sponsorship Kit
            </Link>
            <Link to="/contact" className="bg-white/5 border border-white/10 text-white px-12 py-6 rounded-sm font-bold text-sm tracking-tight hover:bg-white hover:text-brand-navy transition-all">
              Contact Sponsorship Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
