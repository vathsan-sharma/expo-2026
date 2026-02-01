import React, { useState, useEffect } from 'react';
import { ArrowRight, User, Building2, Mail, Phone, Globe, Briefcase, Star, MessageSquare } from 'lucide-react';

const Registration: React.FC = () => {
  const [type, setType] = useState<'visitor' | 'exhibitor' | 'sponsor'>('visitor');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [type]);

  const renderForm = () => {
    switch(type) {
      case 'visitor':
        return (
          <div className="space-y-12 animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-10">
              <InputGroup icon={<User />} label="Full Name" placeholder="First & Last Name" />
              <InputGroup icon={<Building2 />} label="Organization" placeholder="Company / Institution" />
              <InputGroup icon={<Mail />} label="Email Address" placeholder="business@example.com" type="email" />
              <InputGroup icon={<Phone />} label="Phone Number" placeholder="+1 (___) ___ ____" type="tel" />
              <InputGroup icon={<Globe />} label="Country" placeholder="Country of Residence" />
              <InputGroup icon={<Briefcase />} label="Interest Areas" placeholder="e.g., Tech, Energy, Tourism" />
            </div>
            <button className="w-full bg-brand-emerald text-brand-obsidian py-8 rounded-3xl font-black text-sm uppercase tracking-[0.3em] hover:bg-brand-platinum transition-all shadow-3xl shadow-brand-emerald/20 flex items-center justify-center gap-4 group">
              Register as Visitor <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        );
      case 'exhibitor':
        return (
          <div className="space-y-12 animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-10">
              <InputGroup icon={<Building2 />} label="Company Name" placeholder="Organization Legal Name" />
              <InputGroup icon={<Globe />} label="Primary Market" placeholder="Primary Region of Operation" />
              <InputGroup icon={<Star />} label="Industry Sector" placeholder="e.g., Manufacturing, AI" />
              <InputGroup icon={<Briefcase />} label="Booth Interest" placeholder="Corner, Island, Standard" />
              <InputGroup icon={<Mail />} label="Contact Person Email" placeholder="primary@company.com" type="email" />
              <InputGroup icon={<Phone />} label="Business Phone" placeholder="+1 (___) ___ ____" type="tel" />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-platinum/40 ml-4">Detailed Inquiry</label>
              <textarea rows={5} className="w-full bg-white/5 border border-white/5 rounded-3xl p-8 focus:border-brand-emerald outline-none font-medium text-brand-platinum transition-all shadow-inner" placeholder="Tell us about your organization and exhibition goals..."></textarea>
            </div>
            <button className="w-full bg-brand-emerald text-brand-obsidian py-8 rounded-3xl font-black text-sm uppercase tracking-[0.3em] hover:bg-brand-platinum transition-all shadow-3xl shadow-brand-emerald/20 flex items-center justify-center gap-4 group">
              Apply to Exhibit <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        );
      case 'sponsor':
        return (
          <div className="space-y-12 animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-10">
              <InputGroup icon={<Building2 />} label="Sponsoring Body" placeholder="Corporate Entity Name" />
              <InputGroup icon={<Star />} label="Level of Interest" placeholder="e.g., Diamond, Platinum, Gold" />
              <InputGroup icon={<Briefcase />} label="Estimated Budget Range" placeholder="Projected Support Amount" />
              <InputGroup icon={<Globe />} label="Primary Region" placeholder="Region of Origin" />
              <InputGroup icon={<Mail />} label="Executive Contact Email" placeholder="exec@company.com" type="email" />
              <InputGroup icon={<Phone />} label="Direct Office Line" placeholder="+1 (___) ___ ____" type="tel" />
            </div>
             <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-platinum/40 ml-4">Strategic Goals</label>
              <textarea rows={5} className="w-full bg-white/5 border border-white/5 rounded-3xl p-8 focus:border-brand-emerald outline-none font-medium text-brand-platinum transition-all shadow-inner" placeholder="Briefly describe your strategic sponsorship goals..."></textarea>
            </div>
            <button className="w-full bg-brand-emerald text-brand-obsidian py-8 rounded-3xl font-black text-sm uppercase tracking-[0.3em] hover:bg-brand-platinum transition-all shadow-3xl shadow-brand-emerald/20 flex items-center justify-center gap-4 group">
              Submit Sponsor Inquiry <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        );
    }
  };

  return (
    <div className="pb-32 bg-brand-obsidian">
      {/* Header */}
      <section className="bg-brand-obsidian pt-48 pb-24 text-center relative overflow-hidden bg-dots">
        <div className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in-up">
          <span className="text-brand-emerald font-black uppercase tracking-[0.5em] text-xs mb-8 block italic">Official Registry</span>
          <h1 className="text-5xl md:text-8xl font-black text-brand-platinum mb-14 uppercase tracking-tighter leading-none">Registration</h1>
          
          <div className="flex flex-wrap justify-center gap-4">
            {(['visitor', 'exhibitor', 'sponsor'] as const).map(t => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest transition-all border-2 ${
                  type === t 
                  ? 'bg-brand-emerald border-brand-emerald text-brand-obsidian shadow-2xl shadow-brand-emerald/20 scale-105' 
                  : 'bg-transparent border-white/10 text-brand-platinum/50 hover:border-brand-emerald hover:text-brand-platinum'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="glass-card p-12 md:p-24 rounded-[4rem] border border-white/5 shadow-2xl reveal">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter text-brand-emerald leading-none">{type} Accreditation Form</h2>
            <p className="text-brand-platinum/30 font-black uppercase tracking-[0.4em] text-[10px] italic">Strategic Portal Access: Toronto 2026</p>
          </div>

          {renderForm()}
          
          <div className="mt-20 pt-10 border-t border-white/5 text-[9px] text-center text-brand-platinum/20 font-black uppercase tracking-[0.4em] italic leading-relaxed">
            Data Transmission Protocol: AEEE Standard Secure-SSL <br/>Official verification will proceed via the CSB Convention Secretariat.
          </div>
        </div>
      </section>
    </div>
  );
};

const InputGroup = ({ icon, label, placeholder, type = "text" }: { icon: React.ReactNode, label: string, placeholder: string, type?: string }) => (
  <div className="space-y-4 group">
    <label className="text-[10px] font-black text-brand-platinum/30 uppercase tracking-[0.3em] italic ml-4 transition-colors group-focus-within:text-brand-emerald">{label}</label>
    <div className="relative">
      <div className="absolute left-8 top-1/2 -translate-y-1/2 w-6 h-6 text-brand-platinum/20 transition-colors group-focus-within:text-brand-emerald">{icon}</div>
      <input 
        type={type} 
        className="w-full pl-20 pr-10 py-6 rounded-3xl bg-white/5 border border-white/5 focus:border-brand-emerald outline-none font-medium text-brand-platinum transition-all shadow-inner" 
        placeholder={placeholder} 
      />
    </div>
  </div>
);

export default Registration;