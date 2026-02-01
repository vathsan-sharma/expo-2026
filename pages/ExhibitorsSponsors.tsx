import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BadgeCheck, Users, Megaphone, Trophy, Star, Briefcase, ChevronRight, BarChart3, Presentation } from 'lucide-react';

const ExhibitorsSponsors: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'exhibitors' | 'sponsors'>('exhibitors');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab]);

  return (
    <div className="pb-32 bg-brand-obsidian">
      {/* Header */}
      <section className="bg-brand-obsidian pt-48 pb-24 text-center relative overflow-hidden bg-dots">
        <div className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in-up">
          <span className="text-brand-emerald font-black uppercase tracking-[0.5em] text-xs mb-8 block italic">Strategic Partnerships</span>
          <h1 className="text-5xl md:text-8xl font-black text-brand-platinum mb-14 uppercase tracking-tighter leading-none">Exhibitors & Sponsors</h1>
          
          <div className="flex justify-center">
            <div className="glass-card p-2 rounded-full flex border border-white/5 shadow-2xl">
              <button 
                onClick={() => setActiveTab('exhibitors')}
                className={`px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all ${activeTab === 'exhibitors' ? 'bg-brand-emerald text-brand-obsidian shadow-lg' : 'text-brand-platinum/40 hover:text-brand-platinum'}`}
              >
                Exhibitors
              </button>
              <button 
                onClick={() => setActiveTab('sponsors')}
                className={`px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all ${activeTab === 'sponsors' ? 'bg-brand-emerald text-brand-obsidian shadow-lg' : 'text-brand-platinum/40 hover:text-brand-platinum'}`}
              >
                Sponsors
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-32">
        {activeTab === 'exhibitors' ? (
          <div className="space-y-40 reveal animate-fade-in-up">
            <div className="grid lg:grid-cols-2 gap-24 items-start">
              <div className="space-y-16">
                <div>
                  <h2 className="text-4xl md:text-6xl font-black mb-10 uppercase tracking-tighter text-brand-platinum">Why Exhibit?</h2>
                  <p className="text-brand-platinum/60 text-lg font-medium italic mb-12">Showcase your organization at the heart of Asia–Canada trade.</p>
                </div>
                <div className="grid gap-12">
                  {[
                    { icon: <Briefcase />, title: 'Market Presence', text: 'Showcase products and services to Canadian investors and global buyers.' },
                    { icon: <Users />, title: 'Networking Lounges', text: 'Connect in industry-specific lounges for each target sector.' },
                    { icon: <Presentation />, title: 'Country Pavilions', text: 'Gain visibility through speaking slots and national branding.' },
                    { icon: <Star />, title: 'VIP Engagement', text: 'Engage at gala dinners, country presentations and project-focused discussions.' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-8 group">
                      <div className="w-16 h-16 rounded-2xl bg-brand-forest/30 border border-white/5 flex items-center justify-center text-brand-emerald flex-shrink-0 group-hover:scale-110 transition-all shadow-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-black text-2xl uppercase tracking-tighter text-brand-platinum mb-2">{item.title}</h4>
                        <p className="text-brand-platinum/40 text-sm italic leading-relaxed font-medium">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/registration" className="inline-block bg-brand-emerald text-brand-obsidian px-12 py-6 rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-platinum transition-all shadow-3xl shadow-brand-emerald/20">
                  Apply to Exhibit
                </Link>
              </div>
              <div className="glass-card p-12 md:p-20 rounded-[4rem] border border-white/5 relative overflow-hidden bg-dots">
                <h4 className="text-3xl font-black mb-12 uppercase tracking-tighter text-brand-emerald border-b border-white/5 pb-8">Who Should Exhibit?</h4>
                <ul className="space-y-8">
                  {[
                    'Exporters & Manufacturers',
                    'Startups & Global Innovators',
                    'Tourism Authorities',
                    'Education & Research Bodies',
                    'Logistics & Supply Chain Operators',
                    'Financial Institutions'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-5 text-brand-platinum font-bold uppercase tracking-widest text-xs group cursor-default">
                       <ChevronRight className="w-5 h-5 text-brand-emerald group-hover:translate-x-2 transition-transform" />
                       {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-40 reveal animate-fade-in-up">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="space-y-12">
                 <h2 className="text-4xl md:text-6xl font-black mb-10 uppercase tracking-tighter leading-none text-brand-platinum">Why Sponsor?</h2>
                 <p className="text-brand-platinum/60 text-xl mb-14 font-medium italic leading-relaxed max-w-xl">
                   Elevate your brand across a premium, international audience and align with themes of trade, investment, innovation and sustainability.
                 </p>
                 <div className="grid gap-10">
                    {[
                      { icon: <Megaphone />, title: 'Brand Visibility', text: 'Elite recognition across all digital and on-site event assets.' },
                      { icon: <BarChart3 />, title: 'Strategic Alignment', text: 'Align with core themes of global trade, innovation, and sustainability.' },
                      { icon: <Users />, title: 'Curated Networking', text: 'Access private sessions with government, investors and corporate leaders.' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-8 group">
                        <div className="w-16 h-16 rounded-2xl bg-brand-forest/30 border border-white/5 flex items-center justify-center text-brand-emerald flex-shrink-0 group-hover:bg-brand-emerald group-hover:text-brand-obsidian transition-all duration-500 shadow-lg">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-black uppercase tracking-tight text-brand-platinum mb-2 text-2xl">{item.title}</h4>
                          <p className="text-sm text-brand-platinum/40 italic font-medium leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    ))}
                 </div>
                 <Link to="/registration" className="inline-block bg-brand-emerald text-brand-obsidian px-12 py-6 rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-platinum transition-all shadow-3xl">
                   Inquire About Sponsorship
                 </Link>
               </div>
               <div>
                 <div className="glass-card rounded-[4rem] p-16 md:p-24 border border-white/5 shadow-2xl relative overflow-hidden bg-dots">
                   <div className="absolute top-0 right-0 p-12 text-brand-emerald/5 uppercase font-black text-9xl pointer-events-none">TIERS</div>
                   <h4 className="text-3xl font-black mb-16 text-center uppercase tracking-tighter text-brand-platinum relative z-10">Sponsorship Tiers</h4>
                   <div className="space-y-6 relative z-10">
                     {[
                       { name: 'Title / Diamond', status: 'Reserved', color: 'bg-brand-emerald text-brand-obsidian' },
                       { name: 'Platinum', status: '2 Slots Left', color: 'bg-white/5 text-brand-platinum border border-white/10' },
                       { name: 'Gold', status: 'Limited', color: 'bg-white/5 text-brand-platinum border border-white/10' },
                       { name: 'Silver', status: 'Available', color: 'bg-white/5 text-brand-platinum border border-white/10' }
                     ].map((tier, idx) => (
                       <div key={idx} className={`p-8 rounded-3xl flex justify-between items-center group cursor-pointer hover:border-brand-emerald transition-all ${tier.color}`}>
                         <span className="font-black text-2xl uppercase tracking-tighter">{tier.name}</span>
                         <span className="text-[10px] uppercase font-black px-4 py-1.5 bg-brand-obsidian border border-white/10 text-brand-platinum rounded-full tracking-widest group-hover:bg-brand-emerald group-hover:text-brand-obsidian transition-colors">{tier.status}</span>
                       </div>
                     ))}
                   </div>
                   <p className="mt-16 text-[10px] text-center text-brand-platinum/20 uppercase tracking-[0.4em] font-black italic">
                     Customized packages available for sector-specific support.
                   </p>
                 </div>
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExhibitorsSponsors;