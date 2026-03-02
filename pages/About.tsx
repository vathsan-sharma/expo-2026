import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Users, LayoutGrid, ShieldCheck, Globe, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
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
      <section className="bg-brand-navy pt-24 md:pt-32 pb-12 md:pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="container-custom relative z-10"
        >
          <span className="text-brand-coral font-bold tracking-[0.3em] text-xs mb-8 block italic uppercase">Our Vision</span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none uppercase italic">About the <span className="text-brand-coral">Expo</span></h1>
          <p className="text-white/60 text-lg md:text-2xl max-w-4xl mx-auto italic font-medium leading-relaxed">
            AEEE 2026 is the definitive platform for cross border trade, innovation, and strategic investment between Canada and Asia's emerging economies.
          </p>
        </motion.div>
      </section>

      {/* About AEEE 2026 */}
      <section className="py-12 md:py-16 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="reveal"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter text-brand-coral leading-none italic uppercase">AEEE 2026</h2>
            <p className="text-white/60 text-xl leading-relaxed mb-8 font-medium italic">
              Asia's Emerging Economies Expo (AEEE) 2026 is more than just a trade show; it is a catalyst for global economic integration.
            </p>
            <p className="text-white/40 text-lg leading-relaxed mb-12 italic font-medium">
              Hosted in Toronto, Canada's fastest growing tech and financial hub, the expo serves as a strategic bridge for businesses looking to navigate the complexities of international expansion and tap into the world's most dynamic growth engines.
            </p>
            <div className="flex gap-6">
              <Link to="/registration" className="btn-primary">
                Join the Expo
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="reveal relative aspect-video rounded-3xl overflow-hidden border border-white/10 group shadow-2xl"
          >
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" alt="About" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent"></div>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24 reveal">
          <div className="glass-card p-8 md:p-20 border border-white/10 space-y-8 group hover:border-brand-coral transition-all">
            <Target className="w-16 h-16 text-brand-coral" />
            <h3 className="text-4xl font-black text-white tracking-tighter italic">Our Mission</h3>
            <p className="text-white/40 text-lg italic font-medium leading-relaxed">
              To facilitate high impact partnerships and knowledge exchange that drive sustainable economic growth across the Asia Canada corridor.
            </p>
          </div>
          <div className="glass-card p-12 md:p-20 border border-white/10 space-y-8 group hover:border-brand-coral transition-all">
            <Eye className="w-16 h-16 text-brand-coral" />
            <h3 className="text-4xl font-black text-white tracking-tighter italic">Our Vision</h3>
            <p className="text-white/40 text-lg italic font-medium leading-relaxed">
              To be the world's leading platform for emerging market intelligence and cross continental business collaboration.
            </p>
          </div>
        </div>

        {/* Who You Will Meet */}
        <div className="mb-16 md:mb-24 reveal">
          <h2 className="text-4xl md:text-6xl font-black mb-12 md:mb-16 tracking-tighter text-white text-center italic uppercase">Who You Will Meet</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Policy Makers", desc: "Government ministers and trade commissioners from 8+ nations." },
              { title: "Investors", desc: "Venture capitalists and institutional investors seeking frontier opportunities." },
              { title: "Industry Leaders", desc: "C suite executives from high growth sectors like Fintech and Energy." }
            ].map((profile, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-6 p-12 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all hover:border-brand-coral group"
              >
                <Users className="w-12 h-12 text-brand-coral mx-auto transition-transform group-hover:scale-110" />
                <h4 className="text-2xl font-black text-white tracking-tighter italic uppercase">{profile.title}</h4>
                <p className="text-white/40 text-sm italic font-medium leading-relaxed">{profile.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How the Expo Is Structured */}
        <div className="bg-white/5 rounded-sm p-12 md:p-24 text-white reveal border border-white/10 relative overflow-hidden bg-dots mb-16 md:mb-24">
          <h2 className="text-4xl md:text-7xl font-black mb-12 md:mb-16 tracking-tighter leading-none text-center italic">Expo Structure</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <LayoutGrid />, title: "Exhibition Zones", text: "National pavilions and sector specific clusters showcasing innovation." },
              { icon: <Star />, title: "Conference Tracks", text: "High level keynotes and technical sessions on market trends." },
              { icon: <Globe />, title: "B2B Matchmaking", text: "Curated networking sessions for pre qualified trade partners." }
            ].map((item, i) => (
              <div key={i} className="space-y-6 text-center">
                <div className="text-brand-coral">{React.cloneElement(item.icon as React.ReactElement, { className: 'w-12 h-12 mx-auto' })}</div>
                <h4 className="text-xl font-black tracking-tighter italic">{item.title}</h4>
                <p className="text-white/40 text-[11px] font-bold tracking-tight italic leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Organizers and Partners */}
        <div className="mb-16 md:mb-24 reveal">
          <h2 className="text-4xl md:text-6xl font-black mb-12 md:mb-16 tracking-tighter text-white text-center italic">Organizers & Partners</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="w-40 h-20 bg-white/10 rounded-sm flex items-center justify-center font-bold text-xs">Partner {i}</div>
            ))}
          </div>
          <p className="text-center text-white/40 text-sm italic font-medium mt-16 max-w-2xl mx-auto">
            Organized by the CSB Convention Secretariat in collaboration with international trade councils and government agencies.
          </p>
        </div>

        {/* Previous Editions / Impact */}
        <div className="reveal text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter text-white leading-none italic uppercase">Our Impact</h2>
          <p className="text-white/40 text-xl font-medium italic max-w-3xl mx-auto mb-20 leading-relaxed">
            Building on the success of previous editions, AEEE has facilitated over $500M in cross border investment and connected 1,000+ businesses across continents.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { value: "$500M+", label: "Investment Facilitated" },
              { value: "1,000+", label: "Business Connections" },
              { value: "15+", label: "Nations Impacted" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  delay: i * 0.1 
                }}
                className="space-y-2"
              >
                <div className="text-6xl font-black text-brand-coral tracking-tighter italic">{stat.value}</div>
                <div className="text-[11px] font-bold tracking-tight text-white/40 italic uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
