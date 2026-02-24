import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram, Youtube, Facebook, ArrowRight } from 'lucide-react';
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
    <div className="pb-32 bg-brand-navy min-h-screen">
      {/* Hero */}
      <section className="bg-brand-navy pt-48 pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in-up">
          <span className="text-brand-coral font-bold tracking-[0.3em] text-xs mb-8 block italic">Get In Touch</span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none italic">Contact Us</h1>
          <p className="text-white/60 text-lg md:text-2xl max-w-4xl mx-auto italic font-medium leading-relaxed">
            Have questions about AEEE 2026? Our team is here to assist you with registration, exhibiting, or partnership inquiries.
          </p>
        </div>
      </section>

      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Contact Form */}
          <div className="reveal bg-white/5 p-10 md:p-16 rounded-sm border border-white/10 shadow-2xl relative overflow-hidden bg-dots">
            <h3 className="text-3xl font-black mb-12 tracking-tighter text-white border-b border-white/5 pb-8 italic">Send an Enquiry</h3>
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <InputGroup label="Full Name" placeholder="Your Name" required />
                <InputGroup label="Email Address" placeholder="email@example.com" type="email" required />
                <InputGroup label="Phone Number" placeholder="+1 (___) ___ ____" type="tel" />
                <InputGroup label="Organization" placeholder="Company / Institution" />
                <InputGroup label="Country" placeholder="Your Country" />
                <div className="space-y-3 group">
                  <label className="text-[11px] font-bold text-white/40 tracking-tight italic ml-4 group-focus-within:text-brand-coral transition-colors">Topic</label>
                  <select className="w-full px-6 py-5 rounded-sm bg-brand-navy border border-white/10 focus:border-brand-coral outline-none font-medium text-white transition-all appearance-none italic">
                    <option>General Inquiry</option>
                    <option>Registration & Tickets</option>
                    <option>Exhibitor Opportunities</option>
                    <option>Sponsorship & Partners</option>
                    <option>Media & Press</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-3 group">
                <label className="text-[11px] font-bold text-white/40 tracking-tight italic ml-4 group-focus-within:text-brand-coral transition-colors">Message</label>
                <textarea 
                  rows={6} 
                  className="w-full px-6 py-5 rounded-sm bg-brand-navy border border-white/10 focus:border-brand-coral outline-none font-medium text-white transition-all resize-none italic" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button className="w-full bg-brand-coral text-white py-6 rounded-sm font-bold text-sm tracking-tight hover:bg-white hover:text-brand-coral transition-all shadow-xl flex items-center justify-center gap-4 group italic">
                Submit Enquiry <Send className="w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
            </form>
          </div>

          {/* Direct Contacts & Social */}
          <div className="space-y-16">
            <div className="reveal">
              <h3 className="text-3xl font-black mb-12 tracking-tighter text-brand-coral italic">Direct Contacts</h3>
              <div className="grid gap-8">
                {[
                  { label: "General Enquiries", value: CONTACT_INFO.email, icon: <Mail /> },
                  { label: "Exhibitor Enquiries", value: "exhibitors@aeee2026.com", icon: <ArrowRight /> },
                  { label: "Sponsorship Enquiries", value: "partners@aeee2026.com", icon: <ArrowRight /> },
                  { label: "Media Enquiries", value: "press@aeee2026.com", icon: <ArrowRight /> }
                ].map((contact, i) => (
                  <div key={i} className="glass-card p-8 border border-white/10 flex items-center gap-8 group hover:border-brand-coral transition-all">
                    <div className="w-14 h-14 bg-white/5 text-brand-coral rounded-sm flex items-center justify-center group-hover:bg-brand-coral group-hover:text-white transition-all">
                      {React.cloneElement(contact.icon as React.ReactElement, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-white/40 tracking-tight italic mb-1">{contact.label}</h4>
                      <p className="text-lg font-black text-white tracking-tighter italic">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal">
              <h3 className="text-3xl font-black mb-12 tracking-tighter text-brand-coral italic">Social Media</h3>
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: <Linkedin />, label: "LinkedIn" },
                  { icon: <Twitter />, label: "Twitter" },
                  { icon: <Instagram />, label: "Instagram" },
                  { icon: <Youtube />, label: "YouTube" },
                  { icon: <Facebook />, label: "Facebook" }
                ].map((social, i) => (
                  <a key={i} href="#" className="glass-card p-6 border border-white/10 flex items-center gap-4 group hover:border-brand-coral transition-all">
                    <div className="text-white/40 group-hover:text-brand-coral transition-colors">{React.cloneElement(social.icon as React.ReactElement, { className: 'w-5 h-5' })}</div>
                    <span className="text-[11px] font-bold text-white/40 tracking-tight group-hover:text-white transition-colors">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="reveal pt-12 border-t border-white/5">
              <div className="flex items-start gap-8">
                <MapPin className="w-10 h-10 text-brand-coral flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-black text-white tracking-tighter mb-2 italic">Head Office</h4>
                  <p className="text-white/40 text-sm italic font-medium leading-relaxed">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const InputGroup = ({ label, placeholder, type = "text", required = false }: { label: string, placeholder: string, type?: string, required?: boolean }) => (
  <div className="space-y-3 group">
    <label className="text-[11px] font-bold text-white/40 tracking-tight italic ml-4 group-focus-within:text-brand-coral transition-colors">
      {label} {required && <span className="text-brand-coral">*</span>}
    </label>
    <input 
      type={type} 
      required={required}
      className="w-full px-6 py-5 rounded-sm bg-brand-navy border border-white/10 focus:border-brand-coral outline-none font-medium text-white transition-all" 
      placeholder={placeholder} 
    />
  </div>
);

export default Contact;
