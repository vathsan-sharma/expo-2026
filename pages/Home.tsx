import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Users, BarChart3, Mic2, Star, 
  Calendar, MapPin, Globe, Briefcase, LayoutGrid, 
  Zap, Presentation, MessageSquare, ChevronRight,
  Target, Eye
} from 'lucide-react';
import { COUNTRIES, SECTORS, EXPERIENCE_FEATURES, PARTNER_SKYLINES, SECTOR_IMAGES, IMPACT_STATS, SPEAKERS, TESTIMONIALS } from '../constants';

const CountUp: React.FC<{ end: string, duration?: number }> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(end.replace(/[^0-9]/g, ''));
  const suffix = end.replace(/[0-9]/g, '');

  useEffect(() => {
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
  }, [numericValue, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
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
      <section className="relative h-screen w-full bg-brand-navy overflow-hidden flex items-center justify-center">
        {/* Background Visual - Full Screen Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-40"
          >
            <source src="https://raw.githubusercontent.com/vathsan-sharma/imagess/main/Philippines%20(4).mp4" type="video/mp4" />
          </video>
          {/* Deep atmospheric overlay for maximum text clarity */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/40 to-brand-navy/90 z-10"></div>
        </div>

        {/* Content Overlay - Centered, Clean, and Professional */}
        <div className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center pt-20">
          <div className="animate-fade-in-up space-y-8">
            {/* Micro-label */}
            <div className="reveal">
              <span className="text-brand-coral font-bold text-xs md:text-sm tracking-[0.4em] italic uppercase opacity-90">
                The Global Trade Gateway
              </span>
            </div>
            
            {/* Impactful Headline - Sentence Case, Smaller for readability */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.2] tracking-tight reveal drop-shadow-2xl">
              Asia's Emerging Economies Expo 2026
            </h1>

            {/* Simple Subtext - Smaller for readability */}
            <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed reveal italic max-w-2xl mx-auto">
              Connecting global capital with high growth innovation in the heart of Toronto.
            </p>
            
            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6 reveal">
               <Link to="/registration" className="bg-brand-coral text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-white hover:text-brand-coral transition-all shadow-2xl flex items-center justify-center gap-3 group">
                Secure your pass <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/exhibitors" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-white hover:text-brand-navy transition-all flex items-center justify-center">
                Become an exhibitor
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 animate-bounce opacity-30">
          <div className="flex flex-col items-center gap-2">
            <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center p-1.5">
              <div className="w-1 h-1.5 bg-brand-coral rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Section (Integrated from About.tsx) */}
      <section className="py-32 bg-brand-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <div className="reveal">
              <span className="text-brand-coral font-bold tracking-[0.3em] text-xs mb-6 block italic uppercase">The Vision</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none mb-10 italic">About <span className="text-brand-coral">AEEE 2026</span></h2>
              <p className="text-white/80 text-xl md:text-2xl leading-relaxed mb-12 font-medium italic">
                Asia's Emerging Economies Expo (AEEE) 2026 is Canada's premier platform for connecting global investors with the high growth markets of Asia.
              </p>
              <p className="text-white/40 text-lg leading-relaxed mb-12 italic font-medium">
                Hosted in Toronto, Canada's fastest growing tech and financial hub, the expo serves as a strategic bridge for businesses looking to navigate the complexities of international expansion and tap into the world's most dynamic growth engines.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4 p-8 bg-white/5 border border-white/10 rounded-2xl group hover:border-brand-coral transition-all">
                  <Target className="w-10 h-10 text-brand-coral" />
                  <h4 className="text-xl font-black text-white italic tracking-tight">Our Mission</h4>
                  <p className="text-white/40 text-sm italic font-medium leading-relaxed">facilitating high impact partnerships across the Asia Canada corridor.</p>
                </div>
                <div className="space-y-4 p-8 bg-white/5 border border-white/10 rounded-2xl group hover:border-brand-coral transition-all">
                  <Eye className="w-10 h-10 text-brand-coral" />
                  <h4 className="text-xl font-black text-white italic tracking-tight">Our Vision</h4>
                  <p className="text-white/40 text-sm italic font-medium leading-relaxed">Leading platform for emerging market intelligence and collaboration.</p>
                </div>
              </div>
            </div>
            <div className="reveal relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="https://raw.githubusercontent.com/vathsan-sharma/imagess/main/pexels-henri-mathieu-8349430.jpg" className="w-full h-full object-cover" alt="Expo Experience" />
              </div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-coral/20 blur-[120px] rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Animated Numbers Section */}
      <section className="py-32 bg-brand-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 reveal">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none mb-8 italic">Our <span className="text-brand-coral">Impact</span></h2>
            <p className="text-white/40 text-xl font-medium italic max-w-3xl mx-auto">
              Measuring the scale of Asia's premier emerging economies trade event.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {IMPACT_STATS.map((stat, i) => (
              <div key={i} className="reveal glass-card p-12 border border-white/10 text-center space-y-6 group hover:border-brand-coral transition-all bg-white/5">
                <div className="text-brand-coral group-hover:scale-110 transition-transform">{React.cloneElement(stat.icon as React.ReactElement, { className: 'w-12 h-12 mx-auto' })}</div>
                <div className="text-6xl font-black text-white tracking-tighter italic">
                  <CountUp end={stat.value} />
                </div>
                <div className="text-sm font-black tracking-[0.2em] text-brand-coral uppercase italic">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Participating Nations - Full Color & Transitions */}
      <section className="py-32 bg-brand-navy border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="reveal">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none mb-8 italic">Participating <br/><span className="text-brand-coral">Nations</span></h2>
              <p className="text-white/40 text-xl font-medium italic max-w-2xl">
                A global showcase of Asia's most dynamic emerging economies alongside Canada's industrial strength.
              </p>
            </div>
            <Link to="/countries" className="reveal inline-flex items-center gap-4 text-brand-coral font-bold text-sm tracking-tight hover:text-white transition-colors italic">
              View All Countries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {COUNTRIES.slice(0, 8).map((country, i) => (
              <Link 
                key={country.id} 
                to="/countries" 
                className={`reveal group relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 hover:border-brand-coral transition-all duration-700 shadow-2xl ${
                  i % 2 === 0 ? 'hover:-translate-x-4' : 'hover:translate-x-4'
                }`}
                style={{ 
                  transitionDelay: `${i * 100}ms`,
                  transform: i % 2 === 0 ? 'translateX(20px)' : 'translateX(-20px)',
                  opacity: 0
                }}
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
                    <h4 className="text-3xl font-black text-white tracking-tighter italic drop-shadow-2xl">{country.name}</h4>
                  </div>
                  <p className="text-white/70 text-sm font-medium italic line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {country.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Target Sectors - Redesigned with Images */}
      <section className="py-32 bg-brand-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 reveal">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none mb-8 italic">Target <span className="text-brand-coral">Sectors</span></h2>
            <p className="text-white/40 text-xl font-medium italic max-w-3xl mx-auto">
              Focusing on the high growth industries that define the future of the Asia Canada trade corridor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {SECTORS.map((sector, i) => (
              <Link 
                key={sector.id} 
                to="/sectors" 
                className="reveal relative h-80 rounded-3xl overflow-hidden border border-white/10 group hover:border-brand-coral transition-all shadow-2xl"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <img 
                  src={SECTOR_IMAGES[sector.id as keyof typeof SECTOR_IMAGES]} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                  alt={sector.title}
                />
                <div className="absolute inset-0 bg-brand-navy/60 group-hover:bg-brand-navy/40 transition-all duration-500"></div>
                <div className="absolute inset-0 p-12 flex flex-col justify-center items-center text-center">
                  <div className="w-16 h-16 bg-brand-coral rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl transform group-hover:scale-110 transition-transform">
                    {React.cloneElement(sector.icon as React.ReactElement, { className: 'w-8 h-8' })}
                  </div>
                  <h4 className="text-3xl font-black text-white tracking-tighter italic mb-4">{sector.title}</h4>
                  <p className="text-white/70 text-sm font-bold tracking-tight italic leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {sector.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Who is this for? - Enhanced Visibility & Movement */}
      <section className="py-32 bg-brand-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter text-center mb-32 reveal italic uppercase">Who is this for?</h2>
          <div className="grid lg:grid-cols-3 gap-12">
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
              <div key={i} className="reveal glass-card p-16 border border-white/10 flex flex-col h-full group hover:border-brand-coral transition-all bg-white/5 hover:-translate-y-4 duration-500">
                <h3 className="text-4xl font-black text-white tracking-tighter mb-12 group-hover:text-brand-coral transition-colors italic">{block.title}</h3>
                <ul className="space-y-6 mb-16 flex-grow">
                  {block.benefits.map((b, j) => (
                    <li key={j} className="flex items-center gap-4 text-sm md:text-base font-bold tracking-tight text-white italic">
                      <div className="w-2 h-2 rounded-full bg-brand-coral animate-pulse"></div>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to={block.link} className="inline-flex items-center justify-between bg-brand-coral text-white px-10 py-5 rounded-full font-black text-xs tracking-widest hover:bg-white hover:text-brand-coral transition-all group/btn italic shadow-xl">
                  {block.cta} <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Experience Teaser */}
      <section className="py-32 bg-brand-navy border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="reveal relative aspect-square rounded-3xl overflow-hidden border border-white/10 group hidden lg:block shadow-2xl">
              <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Experience" />
            </div>
            <div className="reveal">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none mb-12 italic">The Event <br/><span className="text-brand-coral">Experience</span></h2>
              <p className="text-white/60 text-xl leading-relaxed mb-12 font-medium italic">
                Beyond the exhibition floor, AEEE 2026 offers an immersive three day ecosystem designed to catalyze trade and innovation.
              </p>
              <div className="grid grid-cols-1 gap-8 mb-16">
                {EXPERIENCE_FEATURES.map((feat, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand-coral flex-shrink-0 group-hover:bg-brand-coral group-hover:text-white transition-all shadow-xl">
                      {React.cloneElement(feat.icon as React.ReactElement, { className: 'w-7 h-7' })}
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-white tracking-tighter italic mb-2">{feat.title}</h4>
                      <p className="text-white/40 text-[11px] font-bold tracking-tight italic leading-relaxed">{feat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/experience" className="inline-flex items-center gap-4 bg-brand-coral text-white px-12 py-6 rounded-full font-black text-sm tracking-tight hover:bg-white hover:text-brand-coral transition-all shadow-2xl italic">
                Discover the Experience <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Speakers Section - New */}
      <section className="py-32 bg-brand-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="reveal">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none mb-8 italic">Featured <span className="text-brand-coral">Speakers</span></h2>
              <p className="text-white/40 text-xl font-medium italic max-w-2xl">
                Gain insights from global visionaries and industry leaders shaping the future of international trade.
              </p>
            </div>
            <Link to="/speakers" className="reveal inline-flex items-center gap-4 text-brand-coral font-bold text-sm tracking-tight hover:text-white transition-colors italic">
              Meet All Speakers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {SPEAKERS.map((speaker, i) => (
              <div key={i} className="reveal glass-card p-10 border border-white/10 group hover:border-brand-coral transition-all bg-white/5">
                <div className="w-24 h-24 rounded-2xl bg-white/10 mb-8 overflow-hidden border border-white/10 group-hover:border-brand-coral transition-all">
                  {speaker.image ? (
                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/20">
                      <Users className="w-10 h-10" />
                    </div>
                  )}
                </div>
                <h4 className="text-2xl font-black text-white tracking-tighter italic mb-2">{speaker.name}</h4>
                <div className="text-brand-coral font-bold text-xs tracking-tight italic mb-4">{speaker.role}</div>
                <p className="text-white/40 text-sm italic font-medium leading-relaxed">{speaker.topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Testimonials Section - New */}
      <section className="py-32 bg-brand-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 reveal">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none mb-8 italic">What People <span className="text-brand-coral">Say</span></h2>
          </div>
          <div className="max-w-4xl mx-auto">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="reveal glass-card p-16 border border-white/10 text-center space-y-10 bg-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 p-12 text-white/5 font-black text-9xl pointer-events-none italic">"</div>
                <p className="text-2xl md:text-3xl text-white font-medium italic leading-relaxed relative z-10">
                  {t.quote}
                </p>
                <div className="flex flex-col items-center gap-4 relative z-10">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-coral shadow-xl">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white tracking-tighter italic">{t.name}</h4>
                    <div className="text-brand-coral font-bold text-xs tracking-tight italic">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Partners & Sponsors Strip - New */}
      <section className="py-32 bg-brand-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 reveal">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none mb-8 italic">Our <span className="text-brand-coral">Partners</span></h2>
            <p className="text-white/40 text-xl font-medium italic max-w-3xl mx-auto">
              Collaborating with leading organizations to drive global trade and innovation.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-40 hover:opacity-100 transition-opacity duration-700">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="reveal h-20 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center font-black text-xs text-white/20 italic hover:border-brand-coral hover:text-brand-coral transition-all cursor-default">
                PARTNER {i}
              </div>
            ))}
          </div>
          <div className="mt-20 text-center reveal">
            <Link to="/sponsors" className="inline-flex items-center gap-4 text-brand-coral font-bold text-sm tracking-tight hover:text-white transition-colors italic">
              View All Sponsors <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Event Quick Info Bar - Moved to bottom */}
      <section className="py-32 bg-brand-navy border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] shadow-2xl p-12 md:p-20 overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-coral/10 blur-[150px] rounded-full -z-10"></div>
            <div className="grid md:grid-cols-3 gap-16 items-center">
              <div className="flex items-center gap-8 reveal">
                <div className="w-20 h-20 rounded-3xl bg-brand-coral flex items-center justify-center text-white shadow-2xl">
                  <Calendar className="w-10 h-10" />
                </div>
                <div>
                  <div className="text-[11px] text-white/40 font-black uppercase tracking-[0.3em] italic mb-2">Event Date</div>
                  <div className="text-2xl font-black text-white tracking-tight italic">October 15 17, 2026</div>
                </div>
              </div>
              <div className="flex items-center gap-8 reveal">
                <div className="w-20 h-20 rounded-3xl bg-white/10 border border-white/20 flex items-center justify-center text-brand-coral shadow-2xl">
                  <MapPin className="w-10 h-10" />
                </div>
                <div>
                  <div className="text-[11px] text-white/40 font-black uppercase tracking-[0.3em] italic mb-2">Venue</div>
                  <div className="text-2xl font-black text-white tracking-tight italic">Enercare Centre, Toronto</div>
                </div>
              </div>
              <div className="flex items-center justify-end reveal">
                <div className="text-right">
                  <div className="text-[11px] text-white/40 font-black uppercase tracking-[0.3em] italic mb-4">Registration Status</div>
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-brand-coral/20 border border-brand-coral/30 rounded-full">
                    <span className="w-3 h-3 rounded-full bg-brand-coral animate-pulse"></span>
                    <span className="text-sm font-black text-brand-coral uppercase italic">Now Open</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-32 bg-brand-coral relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-12 leading-none italic uppercase">Stay in the Loop</h2>
          <p className="text-white/80 text-xl md:text-2xl font-medium italic mb-20">
            Subscribe to our newsletter for the latest announcements, speaker reveals, and sector insights.
          </p>
          <form className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-3">
              <label className="text-[11px] font-bold text-white/60 tracking-tight ml-4 italic uppercase">Full Name</label>
              <input type="text" className="w-full bg-white/10 border border-white/20 rounded-full px-8 py-5 text-white placeholder:text-white/30 focus:bg-white/20 outline-none transition-all italic" placeholder="Your Name" />
            </div>
            <div className="space-y-3">
              <label className="text-[11px] font-bold text-white/60 tracking-tight ml-4 italic uppercase">Email Address</label>
              <input type="email" className="w-full bg-white/10 border border-white/20 rounded-full px-8 py-5 text-white placeholder:text-white/30 focus:bg-white/20 outline-none transition-all italic" placeholder="email@example.com" />
            </div>
            <button className="md:col-span-2 mt-8 bg-brand-navy text-white py-6 rounded-full font-black text-sm tracking-widest hover:bg-white hover:text-brand-navy transition-all shadow-2xl italic uppercase">
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
