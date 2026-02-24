import React, { useEffect } from 'react';
import { MapPin, Plane, Car, Hotel, ShieldCheck, Wifi, Coffee, Utensils, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Venue: React.FC = () => {
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
          <span className="text-brand-coral font-bold tracking-[0.3em] text-xs mb-8 block italic">Plan Your Visit</span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none">Venue & Travel</h1>
          <p className="text-white/60 text-lg md:text-2xl max-w-4xl mx-auto italic font-medium leading-relaxed">
            Everything you need to know about the event location, travel logistics, and your stay in Toronto.
          </p>
        </div>
      </section>

      {/* Venue Description */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48 reveal">
          <div className="relative aspect-video rounded-sm overflow-hidden border border-white/10 group">
            <img 
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200" 
              alt="Venue" 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <div className="flex items-center gap-3 bg-brand-coral text-white px-6 py-3 rounded-sm font-bold text-[11px] tracking-tight shadow-2xl italic">
                <MapPin className="w-4 h-4" /> Enercare Centre, Toronto
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter text-brand-coral leading-none italic">Event Venue</h2>
            <p className="text-white/60 text-xl leading-relaxed mb-8 font-medium italic">
              AEEE 2026 will be hosted at the prestigious Enercare Centre, one of North America's largest and most advanced exhibition facilities.
            </p>
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-coral flex-shrink-0" />
                <div>
                  <h4 className="text-white font-black tracking-tighter text-lg italic">Address</h4>
                  <p className="text-white/40 text-sm italic font-medium">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white px-10 py-5 rounded-sm font-bold text-xs tracking-tight hover:bg-brand-coral hover:border-brand-coral transition-all group italic">
              Get Directions <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* About Toronto */}
        <div className="bg-white/5 rounded-sm p-16 md:p-32 text-white reveal border border-white/10 relative overflow-hidden bg-dots mb-48">
          <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter leading-none text-center italic">About Toronto, Canada</h2>
          <p className="text-white/60 text-xl font-medium italic leading-relaxed max-w-4xl mx-auto text-center mb-20">
            Toronto is Canada’s global financial hub and the ideal host for AEEE 2026. As North America’s fastest-growing tech hub, it offers a vibrant backdrop for international trade and innovation.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Plane />, title: "Travel to Toronto", text: "Pearson International Airport (YYZ) is just 25 minutes from the venue." },
              { icon: <Car />, title: "Local Transport", text: "Efficient public transit (TTC) and ride-sharing services are widely available." },
              { icon: <ShieldCheck />, title: "Visa Information", text: "Check the official IRCC website for visa requirements for your country." }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-6">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-brand-coral mx-auto">
                  {React.cloneElement(item.icon as React.ReactElement, { className: 'w-8 h-8' })}
                </div>
                <h4 className="text-xl font-black tracking-tighter italic">{item.title}</h4>
                <p className="text-white/40 text-[11px] font-bold tracking-tight italic leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Accommodation */}
        <div className="mb-48 reveal">
          <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter text-white text-center italic">Accommodation</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card p-12 border border-white/10 space-y-8">
              <Hotel className="w-12 h-12 text-brand-coral" />
              <h4 className="text-3xl font-black text-white tracking-tighter italic">Official Event Hotel</h4>
              <p className="text-white/60 text-lg font-medium italic leading-relaxed">
                We have partnered with leading hotels near the Enercare Centre to offer exclusive rates for AEEE 2026 delegates.
              </p>
              <ul className="space-y-4">
                {["Hotel X Toronto (Adjacent to Venue)", "The Westin Harbour Castle", "Fairmont Royal York"].map((h, i) => (
                  <li key={i} className="flex items-center gap-3 text-[11px] font-bold tracking-tight text-white/40 italic">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-coral"></div>
                    {h}
                  </li>
                ))}
              </ul>
              <button className="bg-brand-coral text-white px-10 py-5 rounded-sm font-bold text-xs tracking-tight hover:bg-white hover:text-brand-coral transition-all shadow-xl italic">
                Book with Delegate Rate
              </button>
            </div>
            <div className="relative rounded-sm overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale opacity-40" alt="Hotel" />
            </div>
          </div>
        </div>

        {/* On-Site Facilities */}
        <div className="reveal">
          <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter text-white text-center italic">On-Site Facilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Wifi />, label: "High-Speed Wi-Fi" },
              { icon: <Coffee />, label: "Networking Cafes" },
              { icon: <Utensils />, label: "Food Courts" },
              { icon: <ShieldCheck />, label: "24/7 Security" }
            ].map((f, i) => (
              <div key={i} className="glass-card p-10 border border-white/10 text-center space-y-6 group hover:border-brand-coral transition-all">
                <div className="text-brand-coral group-hover:scale-110 transition-transform">{React.cloneElement(f.icon as React.ReactElement, { className: 'w-10 h-10 mx-auto' })}</div>
                <div className="text-[11px] font-bold tracking-tight text-white/40 italic">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Venue;
