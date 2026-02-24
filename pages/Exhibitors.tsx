import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Briefcase, Users, Star, Download, ChevronRight, LayoutGrid } from 'lucide-react';

const Exhibitors: React.FC = () => {
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
          <span className="text-brand-coral font-bold tracking-[0.3em] text-xs mb-8 block italic">Global Showcase</span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none">Exhibitors</h1>
          <p className="text-white/60 text-lg md:text-2xl max-w-4xl mx-auto italic font-medium leading-relaxed">
            Position your organization at the heart of Asia–Canada trade and connect with thousands of potential partners.
          </p>
        </div>
      </section>

      {/* Why Exhibit */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
          <div className="reveal">
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter text-brand-coral leading-none italic">Why Exhibit?</h2>
            <p className="text-white/60 text-xl leading-relaxed mb-12 font-medium italic">
              AEEE 2026 is the definitive platform for businesses looking to scale their operations across the Asia-Pacific corridor.
            </p>
            <div className="grid gap-8">
              {[
                { icon: <Briefcase />, title: 'Market Presence', text: 'Showcase products and services to Canadian investors and global buyers.' },
                { icon: <Users />, title: 'Networking Lounges', text: 'Connect in industry-specific lounges for each target sector.' },
                { icon: <Star />, title: 'VIP Engagement', text: 'Engage at gala dinners, country presentations and project-focused discussions.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-brand-coral flex-shrink-0 group-hover:bg-brand-coral group-hover:text-white transition-all shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-2xl tracking-tighter text-white mb-2 italic">{item.title}</h4>
                    <p className="text-white/40 text-sm italic leading-relaxed font-medium">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal bg-white/5 p-12 md:p-20 rounded-sm border border-white/10 relative overflow-hidden bg-dots">
            <h4 className="text-3xl font-black mb-12 tracking-tighter text-brand-coral border-b border-white/5 pb-8 italic">Who Will You Meet?</h4>
            <p className="text-white/60 text-sm italic mb-10 font-medium">Our visitor profile includes high-level decision makers from:</p>
            <ul className="space-y-6">
              {[
                'Venture Capital & Private Equity',
                'Government Trade Commissioners',
                'Supply Chain & Logistics Leaders',
                'Tech R&D Directors',
                'Import/Export Executives',
                'Strategic Policy Advisors'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-5 text-white font-bold tracking-tight text-xs group cursor-default italic">
                   <ChevronRight className="w-5 h-5 text-brand-coral group-hover:translate-x-2 transition-transform" />
                   {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Exhibitor Packages */}
        <div className="mb-48 reveal">
          <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter text-white text-center italic">Exhibitor Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Standard Booth", size: "9sqm", features: ["Shell Scheme", "Basic Lighting", "1 Power Socket", "Company Name Board"] },
              { name: "Premium Booth", size: "18sqm", features: ["Corner Location", "Upgraded Furniture", "2 Power Sockets", "Digital Directory Listing"] },
              { name: "Pavilion Participation", size: "Custom", features: ["National Branding", "Shared Meeting Space", "VIP Lounge Access", "Speaking Slot"] }
            ].map((pkg, i) => (
              <div key={i} className="glass-card p-12 border border-white/10 hover:border-brand-coral transition-all">
                <LayoutGrid className="w-10 h-10 text-brand-coral mb-8" />
                <h4 className="text-2xl font-black text-white tracking-tighter mb-2 italic">{pkg.name}</h4>
                <div className="text-brand-coral font-bold tracking-tight text-xs mb-8 italic">Size: {pkg.size}</div>
                <ul className="space-y-4 mb-12">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-[11px] font-bold tracking-tight text-white/40 italic">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-coral"></div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/registration" className="block text-center py-4 bg-white/5 border border-white/10 text-white rounded-sm font-bold text-xs tracking-tight hover:bg-brand-coral hover:border-brand-coral transition-all">
                  Enquire Now
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* How to Exhibit */}
        <div className="bg-white/5 rounded-sm p-16 md:p-32 text-white reveal border border-white/10 relative overflow-hidden bg-dots mb-48">
          <h2 className="text-4xl md:text-7xl font-black mb-16 tracking-tighter leading-none text-center italic">How to Exhibit</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Enquiry", desc: "Submit your interest via our online form." },
              { step: "02", title: "Consultation", desc: "Our team will discuss your booth requirements." },
              { step: "03", title: "Booking", desc: "Confirm your space and sign the agreement." },
              { step: "04", title: "Setup", desc: "Arrive in Toronto for booth installation." }
            ].map((s, i) => (
              <div key={i} className="space-y-4">
                <div className="text-5xl font-black text-brand-coral/20">{s.step}</div>
                <h4 className="text-xl font-black tracking-tighter italic">{s.title}</h4>
                <p className="text-white/40 text-[11px] font-bold tracking-tight italic leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="grid md:grid-cols-2 gap-12 reveal">
          <div className="glass-card p-12 border border-white/10 flex items-center justify-between group cursor-pointer hover:border-brand-coral transition-all">
            <div className="flex items-center gap-8">
              <Download className="w-10 h-10 text-brand-coral" />
              <div>
                <h4 className="text-xl font-black text-white tracking-tighter italic">Exhibitor Brochure</h4>
                <p className="text-white/40 text-[11px] font-bold tracking-tight italic">Full specs and pricing</p>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-white/20 group-hover:text-brand-coral group-hover:translate-x-2 transition-all" />
          </div>
          <div className="glass-card p-12 border border-white/10 flex items-center justify-between group cursor-pointer hover:border-brand-coral transition-all">
            <div className="flex items-center gap-8">
              <LayoutGrid className="w-10 h-10 text-brand-coral" />
              <div>
                <h4 className="text-xl font-black text-white tracking-tighter italic">Floor Plan</h4>
                <p className="text-white/40 text-[11px] font-bold tracking-tight italic">View available spaces</p>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-white/20 group-hover:text-brand-coral group-hover:translate-x-2 transition-all" />
          </div>
        </div>

        <div className="mt-32 text-center reveal">
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/registration" className="bg-brand-coral text-white px-12 py-6 rounded-sm font-bold text-sm tracking-tight hover:bg-white hover:text-brand-coral transition-all shadow-xl">
              Enquire About a Booth
            </Link>
            <button className="bg-white/5 border border-white/10 text-white px-12 py-6 rounded-sm font-bold text-sm tracking-tight hover:bg-white hover:text-brand-navy transition-all">
              Download Exhibitor Manual
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exhibitors;
