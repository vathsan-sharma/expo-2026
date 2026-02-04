import React, { useState, useEffect } from 'react';
import { ArrowRight, User, Building2, Mail, Phone, Globe, Briefcase, Star } from 'lucide-react';

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
          <div className="space-y-10 animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-8">
              <InputGroup icon={<User />} label="Full Name" placeholder="First & Last Name" />
              <InputGroup icon={<Building2 />} label="Organization" placeholder="Company / Institution" />
              <InputGroup icon={<Mail />} label="Email Address" placeholder="business@example.com" type="email" />
              <InputGroup icon={<Phone />} label="Phone Number" placeholder="+1 (___) ___ ____" type="tel" />
              <InputGroup icon={<Globe />} label="Country" placeholder="Country of Residence" />
              <InputGroup icon={<Briefcase />} label="Interest Areas" placeholder="e.g., Tech, Energy" />
            </div>
            <button className="w-full bg-brand-emerald text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-brand-obsidian transition-all shadow-xl shadow-brand-emerald/10 flex items-center justify-center gap-4 group">
              Register as Visitor <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        );
      case 'exhibitor':
        return (
          <div className="space-y-10 animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-8">
              <InputGroup icon={<Building2 />} label="Company Name" placeholder="Organization Name" />
              <InputGroup icon={<Globe />} label="Primary Market" placeholder="Region of Operation" />
              <InputGroup icon={<Star />} label="Industry Sector" placeholder="e.g., AI, Lifestyle" />
              <InputGroup icon={<Briefcase />} label="Booth Type" placeholder="Island, Corner, etc." />
              <InputGroup icon={<Mail />} label="Contact Email" placeholder="primary@company.com" type="email" />
              <InputGroup icon={<Phone />} label="Business Phone" placeholder="+1 (___) ___ ____" type="tel" />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-4">Detailed Inquiry</label>
              <textarea rows={4} className="w-full bg-brand-platinum border border-gray-100 rounded-2xl p-6 focus:border-brand-emerald outline-none font-medium text-brand-obsidian transition-all" placeholder="Tell us about your organization goals..."></textarea>
            </div>
            <button className="w-full bg-brand-emerald text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-brand-obsidian transition-all shadow-xl shadow-brand-emerald/10 flex items-center justify-center gap-4 group">
              Apply to Exhibit <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        );
      case 'sponsor':
        return (
          <div className="space-y-10 animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-8">
              <InputGroup icon={<Building2 />} label="Sponsoring Body" placeholder="Corporate Name" />
              <InputGroup icon={<Star />} label="Tier Level" placeholder="Diamond, Platinum, Gold" />
              <InputGroup icon={<Briefcase />} label="Budget Range" placeholder="Projected Support Amount" />
              <InputGroup icon={<Mail />} label="Executive Email" placeholder="exec@company.com" type="email" />
            </div>
            <button className="w-full bg-brand-emerald text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-brand-obsidian transition-all shadow-xl shadow-brand-emerald/10 flex items-center justify-center gap-4 group">
              Submit Inquiry <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        );
    }
  };

  return (
    <div className="pb-32 bg-white">
      {/* Header */}
      <section className="bg-white pt-48 pb-24 text-center relative overflow-hidden bg-dots">
        <div className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in-up">
          <span className="text-brand-emerald font-black uppercase tracking-[0.5em] text-xs mb-8 block italic">Official Registry</span>
          <h1 className="text-5xl md:text-8xl font-black text-brand-obsidian mb-14 uppercase tracking-tighter leading-none">Registration</h1>
          
          <div className="flex flex-wrap justify-center gap-4">
            {(['visitor', 'exhibitor', 'sponsor'] as const).map(t => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-widest transition-all border ${
                  type === t 
                  ? 'bg-brand-emerald border-brand-emerald text-white shadow-xl scale-105' 
                  : 'bg-white border-gray-100 text-gray-400 hover:border-brand-emerald hover:text-brand-emerald'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-6">
        <div className="bg-white p-10 md:p-20 rounded-[3rem] border border-gray-100 shadow-2xl reveal relative overflow-hidden bg-dots">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter text-brand-emerald">{type} Accreditation</h2>
            <p className="text-gray-300 font-black uppercase tracking-[0.4em] text-[8px] italic">Toronto Hub 2026: Official Channel</p>
          </div>

          {renderForm()}
          
          <div className="mt-16 pt-8 border-t border-gray-50 text-[8px] text-center text-gray-300 font-black uppercase tracking-[0.4em] italic leading-relaxed">
            Data Transmission Protocol: AEEE SECURE-SSL Standard <br/>CSB Convention Secretariat Verification Pending.
          </div>
        </div>
      </section>
    </div>
  );
};

const InputGroup = ({ icon, label, placeholder, type = "text" }: { icon: React.ReactNode, label: string, placeholder: string, type?: string }) => (
  <div className="space-y-3 group">
    <label className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] italic ml-4 group-focus-within:text-brand-emerald transition-colors">{label}</label>
    <div className="relative">
      <div className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-200 group-focus-within:text-brand-emerald transition-colors">{icon}</div>
      <input 
        type={type} 
        className="w-full pl-16 pr-6 py-5 rounded-2xl bg-brand-platinum border border-gray-100 focus:bg-white focus:border-brand-emerald outline-none font-medium text-brand-obsidian transition-all" 
        placeholder={placeholder} 
      />
    </div>
  </div>
);

export default Registration;