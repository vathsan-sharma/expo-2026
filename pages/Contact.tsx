import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, ExternalLink, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
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
    <div className="pb-32 bg-brand-obsidian min-h-screen">
      {/* Header */}
      <section className="bg-brand-obsidian pt-48 pb-24 text-center relative overflow-hidden bg-dots">
        <div className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in-up">
          <span className="text-brand-emerald font-black uppercase tracking-[0.5em] text-xs mb-8 block italic">Global Secretariat</span>
          <h1 className="text-5xl md:text-8xl font-black text-brand-platinum mb-10 uppercase tracking-tighter leading-none">Contact Us</h1>
          <p className="text-brand-platinum/60 text-lg md:text-2xl max-w-4xl mx-auto italic font-medium leading-relaxed">
            Our specialized team is available to handle high-level logistical, diplomatic, and partnership inquiries.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-20">
          <div className="lg:col-span-1 space-y-12 reveal">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-brand-emerald">Official HQ</h2>
            <div className="space-y-12">
              <ContactBlock icon={<MapPin />} title="Venue Address" content={CONTACT_INFO.address} />
              <ContactBlock icon={<Phone />} title="Regional Hotline" content={CONTACT_INFO.phone} />
              <ContactBlock icon={<Mail />} title="Diplomatic Registry" content={CONTACT_INFO.email} />
              <ContactBlock icon={<Clock />} title="Operating Hours" content="Mon - Fri: 09:00 - 18:00 EST" />
            </div>

            <div className="pt-12">
               <div className="relative h-72 bg-brand-forest/10 rounded-[3rem] overflow-hidden border border-white/5 flex flex-col items-center justify-center group">
                  <img 
                    src="https://images.unsplash.com/photo-1524850041227-6177e4f4f3cd?auto=format&fit=crop&q=80&w=800" 
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-opacity" 
                    alt="Toronto Map Context" 
                  />
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`} target="_blank" rel="noopener noreferrer" className="relative z-10 bg-brand-emerald text-brand-obsidian px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-brand-platinum transition-all shadow-2xl">
                    View on Map <ExternalLink className="w-3 h-3" />
                  </a>
               </div>
            </div>
          </div>

          <div className="lg:col-span-2 reveal" style={{ transitionDelay: '200ms' }}>
            <div className="glass-card p-12 md:p-20 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden bg-dots">
              <h3 className="text-4xl font-black mb-12 uppercase tracking-tighter text-brand-platinum leading-none">Dispatch Inquiry</h3>
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-10">
                  <InputGroup label="Identity" placeholder="Full Name" />
                  <InputGroup label="Corporate Body" placeholder="Organization" />
                  <InputGroup label="Direct Email" placeholder="business@example.com" type="email" />
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-brand-platinum/30 uppercase tracking-[0.3em] italic ml-4">Subject Domain</label>
                    <select className="w-full px-8 py-5 rounded-3xl bg-white/5 border border-white/5 focus:border-brand-emerald outline-none font-black uppercase text-[10px] tracking-widest text-brand-platinum cursor-pointer shadow-inner">
                      <option>General Support</option>
                      <option>Media Accreditation</option>
                      <option>Sponsorship Council</option>
                      <option>Exhibitor Logistics</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-4">
                    <label className="text-[10px] font-black text-brand-platinum/30 uppercase tracking-[0.3em] italic ml-4">Inquiry Body</label>
                    <textarea rows={8} placeholder="Describe your inquiry in high-level detail..." className="w-full px-8 py-6 rounded-[2rem] bg-white/5 border border-white/5 focus:border-brand-emerald outline-none font-medium text-brand-platinum transition-all shadow-inner"></textarea>
                </div>
                <button className="bg-brand-emerald text-brand-obsidian px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.4em] hover:bg-brand-platinum transition-all shadow-3xl shadow-brand-emerald/20 flex items-center justify-center gap-4 group">
                  Send Message <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactBlock = ({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) => (
  <div className="flex items-start gap-8 group">
    <div className="w-16 h-16 rounded-2xl bg-brand-forest/20 border border-white/5 flex items-center justify-center text-brand-emerald flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
      {React.cloneElement(icon as React.ReactElement, { className: 'w-7 h-7' })}
    </div>
    <div>
      <h4 className="font-black uppercase tracking-[0.2em] text-brand-emerald text-xs mb-2 italic">{title}</h4>
      <p className="text-brand-platinum text-lg font-medium leading-relaxed">{content}</p>
    </div>
  </div>
);

const InputGroup = ({ label, placeholder, type = "text" }: { label: string, placeholder: string, type?: string }) => (
  <div className="space-y-4 group">
    <label className="text-[10px] font-black text-brand-platinum/30 uppercase tracking-[0.3em] italic ml-4 group-focus-within:text-brand-emerald transition-colors">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder} 
      className="w-full px-8 py-5 rounded-3xl bg-white/5 border border-white/5 focus:border-brand-emerald outline-none font-medium text-brand-platinum transition-all shadow-inner" 
    />
  </div>
);

export default Contact;