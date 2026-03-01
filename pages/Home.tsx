import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Users, BarChart3, Mic2, Star, 
  Calendar, MapPin, Globe, Briefcase, LayoutGrid, 
  Zap, Presentation, MessageSquare, ChevronRight,
  Target, Eye, TrendingUp
} from 'lucide-react';
import { COUNTRIES, SECTORS, EXPERIENCE_FEATURES, PARTNER_SKYLINES, SECTOR_IMAGES, IMPACT_STATS, SPEAKERS } from '../constants';

const CountUp: React.FC<{ end: string, duration?: number }> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const numericValue = parseInt(end.replace(/[^0-9]/g, ''));
  const suffix = end.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!hasStarted) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * numericValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [numericValue, duration, hasStarted]);

  return (
    <motion.span 
      onViewportEnter={() => setHasStarted(true)}
      viewport={{ once: true }}
    >
      {count.toLocaleString()}{suffix}
    </motion.span>
  );
};

const Home: React.FC = () => {
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
    <div className="overflow-hidden bg-brand-navy">
      {/* 1. Simple & Impactful Hero Section */}
      <section className="relative h-screen w-full bg-brand-navy overflow-hidden">
        {/* Background Visual - Full Screen Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-100"
          >
            <source src="https://raw.githubusercontent.com/vathsan-sharma/imagess/main/Philippines%20(6).mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content Overlay - Top Left Aligned with more space */}
        <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-start pt-32 pb-32">
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-5xl"
            >
              {/* Impactful Headline - Scaled for better visibility */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-[0.9] tracking-tighter drop-shadow-2xl uppercase"
              >
                Asia's <br/>
                Emerging <br/>
                Economies <br/>
                <span className="text-brand-coral">Expo 2026</span>
              </motion.h1>
            </motion.div>

            {/* Primary Actions - Bottom Left */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/registration" className="bg-brand-coral text-white px-8 py-4 rounded-full font-black text-xs md:text-sm tracking-widest hover:bg-white hover:text-brand-coral transition-all shadow-2xl flex items-center justify-center gap-3 group uppercase">
                Secure Your Pass <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/exhibitors" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-black text-xs md:text-sm tracking-widest hover:bg-white hover:text-brand-navy transition-all flex items-center justify-center uppercase">
                Become an Exhibitor
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 right-12 z-30 animate-bounce opacity-30 hidden md:block">
          <div className="flex flex-col items-center gap-2">
            <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center p-1.5">
              <div className="w-1 h-1.5 bg-brand-coral rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Event Quick Info Bar - Moved Up */}
      <section className="py-20 bg-brand-navy relative z-30 -mt-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-sm shadow-2xl p-10 md:p-16 overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-coral/10 blur-[150px] rounded-full -z-10"></div>
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-sm bg-brand-coral flex items-center justify-center text-white shadow-xl">
                  <Calendar className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 font-black uppercase tracking-[0.3em] mb-1">Event Date</div>
                  <div className="text-xl font-black text-white tracking-tight">October 15 - 17, 2026</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-sm bg-white/10 border border-white/20 flex items-center justify-center text-brand-coral shadow-xl">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 font-black uppercase tracking-[0.3em] mb-1">Venue</div>
                  <div className="text-xl font-black text-white tracking-tight">Enercare Centre, Toronto</div>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <div className="text-right">
                  <div className="text-[10px] text-white/40 font-black uppercase tracking-[0.3em] mb-3">Registration Status</div>
                  <div className="inline-flex items-center gap-3 px-5 py-2 bg-brand-coral/20 border border-brand-coral/30 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-brand-coral animate-pulse"></span>
                    <span className="text-xs font-black text-brand-coral uppercase">Now Open</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Section (Integrated from About.tsx) */}
      <section className="py-32 bg-brand-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-coral font-bold tracking-[0.3em] text-xs mb-6 block uppercase">The Vision</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none mb-10">About <span className="text-brand-coral">AEEE 2026</span></h2>
              <p className="text-white/80 text-xl md:text-2xl leading-relaxed mb-12 font-medium">
                Asia's Emerging Economies Expo (AEEE) 2026 is Canada's premier platform for connecting global investors with the high growth markets of Asia.
              </p>
              <p className="text-white/40 text-lg leading-relaxed mb-12 font-medium">
                Hosted in Toronto, Canada's fastest growing tech and financial hub, the expo serves as a strategic bridge for businesses looking to navigate the complexities of international expansion and tap into the world's most dynamic growth engines.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="space-y-4 p-8 bg-white/5 border border-white/10 rounded-2xl group hover:border-brand-coral transition-all"
                >
                  <Target className="w-10 h-10 text-brand-coral" />
                  <h4 className="text-xl font-black text-white tracking-tight">Our Mission</h4>
                  <p className="text-white/40 text-sm font-medium leading-relaxed">facilitating high impact partnerships across the Asia Canada corridor.</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="space-y-4 p-8 bg-white/5 border border-white/10 rounded-2xl group hover:border-brand-coral transition-all"
                >
                  <Eye className="w-10 h-10 text-brand-coral" />
                  <h4 className="text-xl font-black text-white tracking-tight">Our Vision</h4>
                  <p className="text-white/40 text-sm font-medium leading-relaxed">Leading platform for emerging market intelligence and collaboration.</p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="https://raw.githubusercontent.com/vathsan-sharma/imagess/main/pexels-henri-mathieu-8349430.jpg" className="w-full h-full object-cover" alt="Expo Experience" />
              </div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-coral/20 blur-[120px] rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Animated Numbers Section - Minimalist Redesign */}
      <section className="py-40 bg-brand-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 md:gap-0">
            {IMPACT_STATS.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`text-center space-y-4 md:px-8 ${i !== IMPACT_STATS.length - 1 ? 'md:border-r border-white/10' : ''}`}
              >
                <div className="text-brand-coral/40 mb-4">{React.cloneElement(stat.icon as React.ReactElement, { className: 'w-8 h-8 mx-auto' })}</div>
                <div className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">
                  <CountUp end={stat.value} />
                </div>
                <div className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Participating Nations - Full Color & Transitions */}
      <section className="py-32 bg-brand-navy border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none mb-8">Participating <br/><span className="text-brand-coral">Nations</span></h2>
              <p className="text-white/40 text-xl font-medium max-w-2xl">
                A global showcase of Asia's most dynamic emerging economies alongside Canada's industrial strength.
              </p>
            </motion.div>
            <Link to="/countries" className="inline-flex items-center gap-4 text-brand-coral font-bold text-sm tracking-tight hover:text-white transition-colors">
              View All Countries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {COUNTRIES.slice(0, 8).map((country, i) => (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link 
                  to="/countries" 
                  className={`group relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 hover:border-brand-coral transition-all duration-700 shadow-2xl block`}
                >
                  <img 
                    src={PARTNER_SKYLINES[country.id as keyof typeof PARTNER_SKYLINES]} 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                    alt={country.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity"></div>
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl drop-shadow-2xl">{country.flag}</span>
                      <h4 className="text-3xl font-black text-white tracking-tighter drop-shadow-2xl">{country.name}</h4>
                    </div>
                    <p className="text-white/70 text-sm font-medium line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {country.summary}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Target Sectors - Modern Grid Design */}
      <section className="py-40 bg-brand-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <span className="text-brand-coral font-bold tracking-[0.3em] text-xs mb-6 block uppercase">Strategic Focus</span>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8 uppercase">Industry <span className="text-brand-coral">Sectors</span></h2>
            <p className="text-white/40 text-xl font-medium max-w-3xl mx-auto">
              Focusing on the high growth industries that define the future of the Asia Canada trade corridor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECTORS.map((sector, i) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10 hover:border-brand-coral transition-all duration-500"
              >
                <img 
                  src={SECTOR_IMAGES[sector.id as keyof typeof SECTOR_IMAGES]} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                  alt={sector.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-12 h-12 bg-brand-coral/20 backdrop-blur-md border border-brand-coral/30 rounded-sm flex items-center justify-center text-brand-coral mb-6 group-hover:bg-brand-coral group-hover:text-white transition-all">
                    {React.cloneElement(sector.icon as React.ReactElement, { className: 'w-6 h-6' })}
                  </div>
                  <h4 className="text-2xl font-black text-white tracking-tighter mb-4 uppercase leading-none">{sector.title}</h4>
                  <p className="text-white/60 text-xs font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {sector.description}
                  </p>
                  <Link to="/sectors" className="mt-6 flex items-center gap-2 text-brand-coral font-bold text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Who is this for? - Minimalist Redesign */}
      <section className="py-40 bg-brand-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-32"
          >
            <span className="text-brand-coral font-bold tracking-[0.3em] text-xs mb-6 block uppercase">Engagement</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">Who is this for?</h2>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-16">
            {[
              {
                title: "Visitors",
                benefits: ["Market Insights", "Networking", "Product Discovery", "Investment Opportunities"],
                cta: "Learn More for Visitors",
                link: "/visitors"
              },
              {
                title: "Exhibitors",
                benefits: ["Brand Visibility", "Lead Generation", "Market Entry", "Direct Sales"],
                cta: "Learn More for Exhibitors",
                link: "/exhibitors"
              },
              {
                title: "Sponsors & Partners",
                benefits: ["Elite Recognition", "VIP Access", "Thought Leadership", "Strategic Alignment"],
                cta: "Learn More for Sponsors",
                link: "/sponsors"
              }
            ].map((block, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col h-full group"
              >
                <div className="mb-10 flex items-center gap-6">
                  <div className="w-12 h-px bg-brand-coral"></div>
                  <h3 className="text-3xl font-black text-white tracking-tighter group-hover:text-brand-coral transition-colors">{block.title}</h3>
                </div>
                <ul className="space-y-6 mb-16 flex-grow border-l border-white/10 pl-8 ml-6">
                  {block.benefits.map((b, j) => (
                    <li key={j} className="text-sm md:text-base font-bold tracking-tight text-white/60 hover:text-white transition-colors cursor-default">
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to={block.link} className="inline-flex items-center gap-4 text-brand-coral font-black text-xs tracking-widest hover:text-white transition-all group/btn uppercase">
                  {block.cta} <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Experience Teaser */}
      <section className="py-32 bg-brand-navy border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-sm overflow-hidden border border-white/10 group hidden lg:block shadow-2xl"
            >
              <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Experience" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none mb-12">The Event <br/><span className="text-brand-coral">Experience</span></h2>
              <p className="text-white/60 text-xl leading-relaxed mb-12 font-medium">
                Beyond the exhibition floor, AEEE 2026 offers an immersive three day ecosystem designed to catalyze trade and innovation.
              </p>
              <div className="grid grid-cols-1 gap-8 mb-16">
                {EXPERIENCE_FEATURES.map((feat, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand-coral flex-shrink-0 group-hover:bg-brand-coral group-hover:text-white transition-all shadow-xl">
                      {React.cloneElement(feat.icon as React.ReactElement, { className: 'w-7 h-7' })}
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-white tracking-tighter mb-2">{feat.title}</h4>
                      <p className="text-white/40 text-[11px] font-bold tracking-tight leading-relaxed">{feat.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Link to="/experience" className="inline-flex items-center gap-4 bg-brand-coral text-white px-12 py-6 rounded-full font-black text-sm tracking-tight hover:bg-white hover:text-brand-coral transition-all shadow-2xl uppercase">
                Discover the Experience <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. Speakers Section - New */}
      <section className="py-32 bg-brand-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none mb-8">Featured <span className="text-brand-coral">Speakers</span></h2>
              <p className="text-white/40 text-xl font-medium max-w-2xl">
                Gain insights from global visionaries and industry leaders shaping the future of international trade.
              </p>
            </motion.div>
            <Link to="/speakers" className="inline-flex items-center gap-4 text-brand-coral font-bold text-sm tracking-tight hover:text-white transition-colors">
              Meet All Speakers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {SPEAKERS.map((speaker, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-10 border border-white/10 group hover:border-brand-coral transition-all bg-white/5 rounded-sm"
              >
                <div className="w-24 h-24 rounded-sm bg-white/10 mb-8 overflow-hidden border border-white/10 group-hover:border-brand-coral transition-all">
                  {speaker.image ? (
                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/20">
                      <Users className="w-10 h-10" />
                    </div>
                  )}
                </div>
                <h4 className="text-2xl font-black text-white tracking-tighter mb-2">{speaker.name}</h4>
                <div className="text-brand-coral font-bold text-xs tracking-tight mb-4">{speaker.role}</div>
                <p className="text-white/40 text-sm font-medium leading-relaxed">{speaker.topic}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Strategic Roadmap Section */}
      <section className="py-40 bg-brand-navy border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-coral/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-32"
          >
            <span className="text-brand-coral font-bold tracking-[0.3em] text-xs mb-6 block uppercase">The Journey</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-8 uppercase">Strategic <span className="text-brand-coral">Roadmap</span></h2>
            <p className="text-white/40 text-xl font-medium max-w-3xl mx-auto">
              A meticulously planned three-day journey designed to maximize value for every participant.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                day: "01",
                title: "Innovation & Insight",
                desc: "Focusing on emerging technologies and market intelligence from Asia's top tech hubs.",
                icon: <Zap className="w-8 h-8" />
              },
              {
                day: "02",
                title: "Trade & Connectivity",
                desc: "Direct B2B matching and high-level ministerial dialogues to catalyze trade agreements.",
                icon: <Globe className="w-8 h-8" />
              },
              {
                day: "03",
                title: "Investment & Future",
                desc: "Venture capital showcases and long-term strategic partnership announcements.",
                icon: <TrendingUp className="w-8 h-8" />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative p-12 bg-white/5 border border-white/10 rounded-sm group hover:border-brand-coral transition-all"
              >
                <div className="text-brand-coral font-black text-6xl opacity-10 absolute top-8 right-8 group-hover:opacity-20 transition-opacity">DAY {item.day}</div>
                <div className="w-16 h-16 bg-brand-coral/10 border border-brand-coral/20 rounded-sm flex items-center justify-center text-brand-coral mb-10 group-hover:bg-brand-coral group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black text-white tracking-tighter mb-6 uppercase leading-none">{item.title}</h4>
                <p className="text-white/40 text-sm font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Partners & Sponsors Strip - New */}
      <section className="py-32 bg-brand-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 reveal">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none mb-8">Our <span className="text-brand-coral">Partners</span></h2>
            <p className="text-white/40 text-xl font-medium max-w-3xl mx-auto">
              Collaborating with leading organizations to drive global trade and innovation.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-40 hover:opacity-100 transition-opacity duration-700">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="reveal h-20 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center font-black text-xs text-white/20 hover:border-brand-coral hover:text-brand-coral transition-all cursor-default">
                PARTNER {i}
              </div>
            ))}
          </div>
          <div className="mt-20 text-center reveal">
            <Link to="/sponsors" className="inline-flex items-center gap-4 text-brand-coral font-bold text-sm tracking-tight hover:text-white transition-colors">
              View All Sponsors <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* Newsletter Signup */}
      <section className="py-32 bg-brand-coral relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-12 leading-none uppercase">Stay in the Loop</h2>
          <p className="text-white/80 text-xl md:text-2xl font-medium mb-20">
            Subscribe to our newsletter for the latest announcements, speaker reveals, and sector insights.
          </p>
          <form className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-3">
              <label className="text-[11px] font-bold text-white/60 tracking-tight ml-4 uppercase">Full Name</label>
              <input type="text" className="w-full bg-white/10 border border-white/20 rounded-full px-8 py-5 text-white placeholder:text-white/30 focus:bg-white/20 outline-none transition-all" placeholder="Your Name" />
            </div>
            <div className="space-y-3">
              <label className="text-[11px] font-bold text-white/60 tracking-tight ml-4 uppercase">Email Address</label>
              <input type="email" className="w-full bg-white/10 border border-white/20 rounded-full px-8 py-5 text-white placeholder:text-white/30 focus:bg-white/20 outline-none transition-all" placeholder="email@example.com" />
            </div>
            <button className="md:col-span-2 mt-8 bg-brand-navy text-white py-6 rounded-full font-black text-sm tracking-widest hover:bg-white hover:text-brand-navy transition-all shadow-2xl uppercase">
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
