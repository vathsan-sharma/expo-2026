import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Globe, Calendar, MapPin, 
  ChevronRight, Building2, Users, Briefcase, TrendingUp,
  Zap, Presentation, Mic2, Star, ShieldCheck, MessageSquare,
  BarChart3, GraduationCap, ChevronDown, Plane, Car, Train, ExternalLink, Send,
  Info, Palmtree
} from 'lucide-react';
import { 
  SECTORS, COUNTRIES, CONTACT_INFO, MILESTONES, 
  EXPERIENCE_FEATURES, HIGHLIGHTS, IMPACT_STATS, GLOBAL_REACH,
  SPEAKERS, TESTIMONIALS, FAQS
} from '../constants';

const Home: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="space-y-0">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center bg-brand-obsidian overflow-hidden">
        {/* Visual Layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-obsidian/20 via-brand-obsidian/60 to-brand-obsidian z-10"></div>
          
          {/* Main Background Image - Optimized for speed with smaller width and webp format */}
          <div className="absolute inset-0 scale-110 animate-[pulse_10s_ease-in-out_infinite]">
            <img 
              src="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=60&w=1200&fm=webp" 
              className="w-full h-full object-cover grayscale opacity-30 transform transition-transform duration-[5s]" 
              alt="Industrial Asia and Toronto Skyline"
              loading="eager"
            />
          </div>

          {/* Dynamic Grid Overlay */}
          <div className="absolute inset-0 bg-dots opacity-20 z-[5]"></div>
          
          {/* Animated Glows */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-emerald/10 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-forest/20 blur-[150px] rounded-full animate-pulse delay-700"></div>
        </div>

        {/* Hero Content Area */}
        <div className="relative z-20 max-w-[1400px] mx-auto px-6 w-full pt-20">
          <div className="flex flex-col items-center text-center animate-fade-in-up">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default animate-fade-in-down">
              <div className="w-2 h-2 rounded-full bg-brand-emerald animate-ping"></div>
              <span className="text-[9px] font-black text-brand-platinum uppercase tracking-[0.4em] italic">
                {CONTACT_INFO.tagline}
              </span>
            </div>

            {/* Headline with refined typography */}
            <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-black text-brand-platinum leading-[0.85] mb-8 uppercase tracking-tighter">
              Asia’s Emerging <br/>
              <span className="relative inline-block text-brand-emerald italic group cursor-default">
                Economies
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-brand-emerald/30 blur-sm rounded-full group-hover:bg-brand-emerald/60 transition-colors"></div>
              </span> Expo 2026
            </h1>

            {/* Supporting Text */}
            <p className="text-brand-platinum/60 text-lg md:text-xl mb-12 max-w-3xl mx-auto font-medium italic leading-relaxed animate-[fadeInUp_1.2s_ease-out]">
              The premier industrial gateway connecting Canada with Asia's powerhouse emerging markets: 
              <span className="text-brand-platinum ml-1 font-bold border-b border-brand-emerald/30">Sri Lanka, Vietnam, Malaysia, Philippines, Thailand, Indonesia and Pakistan.</span>
            </p>
            
            {/* Meta Info Strip */}
            <div className="flex flex-wrap items-center justify-center gap-y-6 gap-x-12 mb-16 p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm shadow-2xl transition-all duration-500 hover:border-white/10">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-brand-emerald/10 flex items-center justify-center border border-brand-emerald/20 group-hover:bg-brand-emerald group-hover:text-brand-obsidian transition-all duration-500 transform group-hover:-rotate-6 group-hover:scale-110">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[8px] font-black text-brand-emerald uppercase tracking-widest mb-1">Event Dates</p>
                  <p className="text-sm font-bold text-brand-platinum">{CONTACT_INFO.dates}</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-10 bg-white/10"></div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-brand-emerald/10 flex items-center justify-center border border-brand-emerald/20 group-hover:bg-brand-emerald group-hover:text-brand-obsidian transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[8px] font-black text-brand-emerald uppercase tracking-widest mb-1">Global Venue</p>
                  <p className="text-sm font-bold text-brand-platinum">Toronto, ON, Canada</p>
                </div>
              </div>
            </div>

            {/* Main CTAs */}
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/registration" className="relative group overflow-hidden bg-brand-emerald text-brand-obsidian px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-[0_0_40px_rgba(45,204,112,0.3)] hover:shadow-[0_0_60px_rgba(45,204,112,0.5)] hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center gap-2">Register Now <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-20"></div>
              </Link>
              <Link to="/partners" className="bg-white/5 text-brand-platinum px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest border border-white/10 hover:bg-white hover:text-brand-obsidian hover:border-white transition-all duration-500 backdrop-blur-md hover:scale-105">
                Become an Exhibitor
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Abstract Element with Parallax Effect */}
        <div 
          className="absolute top-1/2 -right-40 w-96 h-96 border border-brand-emerald/10 rounded-full animate-[spin_20s_linear_infinite] hidden lg:block pointer-events-none transition-transform duration-75"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-emerald/20 rounded-full blur-sm"></div>
        </div>
      </section>

      {/* About Gateway Section */}
      <section className="py-32 bg-brand-obsidian relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative reveal">
            <div className="absolute -inset-4 bg-brand-emerald/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-[3rem] grayscale opacity-60 border border-white/10 hover:grayscale-0 hover:opacity-100 transition-all duration-700 hover:scale-[1.02]"
              alt="About Expo"
            />
            <div className="absolute -bottom-10 -right-10 glass-card p-10 rounded-3xl animate-float">
              <div className="text-3xl font-black text-brand-emerald">AEEE 2026</div>
              <div className="text-[10px] uppercase font-black tracking-widest text-brand-platinum/40">Trade Platform</div>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <span className="text-brand-emerald font-black uppercase text-xs tracking-[0.3em] mb-4 block">About the Expo</span>
            <h2 className="text-4xl md:text-6xl font-black text-brand-platinum uppercase tracking-tighter mb-8 leading-none">Your Gateway to Trade, Innovation & Investment</h2>
            <p className="text-brand-platinum/60 text-lg mb-10 font-medium italic leading-relaxed">
              The Asia’s Emerging Economies Expo is more than just an event—it's a global platform for trade, innovation, and collaboration. Hosted in the heart of Toronto, the event connects Canada’s thriving economy with international businesses, investors, and communities.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="space-y-4 hover:translate-y-[-5px] transition-transform duration-300">
                <Globe className="w-10 h-10 text-brand-emerald" />
                <h4 className="font-black text-brand-platinum uppercase tracking-tight">Global Connections</h4>
                <p className="text-xs text-brand-platinum/40 italic">International delegations and industries meet in Canada.</p>
              </div>
              <div className="space-y-4 hover:translate-y-[-5px] transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-brand-emerald" />
                <h4 className="font-black text-brand-platinum uppercase tracking-tight">Business Growth</h4>
                <p className="text-xs text-brand-platinum/40 italic">Designed to drive trade, tech, and investment.</p>
              </div>
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-emerald hover:text-brand-obsidian transition-all duration-300 hover:translate-x-2 shadow-lg">
              Discover More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Highlights Grid */}
      <section className="py-32 bg-brand-forest/10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 reveal">
            <h2 className="text-4xl md:text-7xl font-black text-brand-platinum uppercase tracking-tighter mb-6">Key Highlights</h2>
            <p className="text-brand-platinum/50 text-xl italic font-medium">Experience the Future of Global Trade & Innovation</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-container">
            {HIGHLIGHTS.map((h, i) => (
              <div key={i} className={`glass-card p-10 rounded-3xl reveal reveal-delay-${(i % 4) + 1} hover:border-brand-emerald transition-all group overflow-hidden relative`}>
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand-emerald/5 rounded-full blur-2xl group-hover:bg-brand-emerald/10 transition-colors"></div>
                <div className="w-14 h-14 bg-brand-emerald/10 text-brand-emerald rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10">
                  {React.cloneElement(h.icon as React.ReactElement, { className: 'w-7 h-7' })}
                </div>
                <h4 className="text-xl font-black text-brand-platinum uppercase mb-4 tracking-tighter relative z-10">{h.title}</h4>
                <p className="text-xs text-brand-platinum/40 italic leading-relaxed relative z-10 group-hover:text-brand-platinum/60 transition-colors">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact by Numbers */}
      <section className="py-32 bg-brand-obsidian relative bg-dots overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 reveal">
            <span className="text-brand-emerald font-black uppercase text-xs tracking-widest mb-4 block">Our Impact</span>
            <h2 className="text-4xl md:text-7xl font-black text-brand-platinum uppercase tracking-tighter mb-6">Making an Impact <span className="text-brand-emerald italic">by the Numbers</span></h2>
            <p className="text-brand-platinum/50 text-lg italic max-w-2xl mx-auto">Discover the measurable difference AEEE is making in connecting global markets.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
            {IMPACT_STATS.map((stat, i) => (
              <div key={i} className={`text-center reveal reveal-delay-${i + 1} group`} style={{ transitionDelay: `${i*100}ms` }}>
                <div className="w-20 h-20 bg-brand-emerald/5 text-brand-emerald rounded-full flex items-center justify-center mx-auto mb-8 border border-white/5 group-hover:border-brand-emerald group-hover:scale-110 transition-all duration-500 shadow-lg">
                  {React.cloneElement(stat.icon as React.ReactElement, { className: 'w-10 h-10' })}
                </div>
                <div className="text-5xl md:text-7xl font-black text-brand-platinum tracking-tighter mb-4 group-hover:text-brand-emerald transition-colors">{stat.value}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-platinum/30">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            <div className="reveal">
              <h4 className="text-2xl font-black text-brand-platinum uppercase tracking-tighter mb-12 flex items-center gap-4">
                <Globe className="w-8 h-8 text-brand-emerald animate-[spin_10s_linear_infinite]" /> Our Global Reach
              </h4>
              <div className="space-y-8">
                {GLOBAL_REACH.map((r, i) => (
                  <div key={i} className="space-y-4 group">
                    <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                      <span className="text-brand-platinum/70 group-hover:text-brand-platinum transition-colors">{r.region}</span>
                      <span className="text-brand-emerald">{r.value}</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-emerald transition-all duration-1000 ease-in-out group-hover:brightness-125" style={{ width: r.value > 0 ? '50%' : '5%' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-delay-3">
              <h4 className="text-2xl font-black text-brand-platinum uppercase tracking-tighter mb-12 flex items-center gap-4">
                <TrendingUp className="w-8 h-8 text-brand-emerald" /> Projected Growth
              </h4>
              <div className="space-y-8">
                {[
                  { label: 'Exhibitor Interest', value: '+150%' },
                  { label: 'International Reach', value: '+200%' },
                  { label: 'Attendee Engagement', value: '+180%' },
                  { label: 'Media Coverage', value: '+220%' }
                ].map((g, i) => (
                  <div key={i} className="glass-card p-6 rounded-2xl flex justify-between items-center hover:bg-brand-emerald/10 hover:translate-x-4 transition-all duration-500">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-platinum/50">{g.label}</span>
                    <span className="text-2xl font-black text-brand-emerald italic">{g.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choice Participation Section */}
      <section className="py-32 bg-brand-forest/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <div className="reveal">
              <span className="text-brand-emerald font-black uppercase text-xs tracking-widest mb-4 block">Participate</span>
              <h2 className="text-4xl md:text-6xl font-black text-brand-platinum uppercase tracking-tighter mb-8 leading-none">Choose How You Want to <br/><span className="text-brand-emerald italic">Participate</span></h2>
              <p className="text-brand-platinum/50 text-lg font-medium italic mb-12">Whether you're a business leader, investor, government delegate, or media representative, choose the path that fits your goals.</p>
              <Link to="/registration" className="bg-brand-emerald text-brand-obsidian px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-platinum hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-emerald/20">Explore Registrations</Link>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8 reveal reveal-delay-2">
               {[
                 { title: 'Media / Press Registration', date: '15 Mar, 2026', loc: 'Mississauga', type: 'Visitor' },
                 { title: 'Gov / Official Delegate Registration', date: '15 Mar, 2026', loc: 'Mississauga', type: 'Official' },
                 { title: 'Exhibitor Registration', date: '15 Mar, 2026', loc: 'Mississauga', type: 'Exhibitor' },
                 { title: 'Visitor Registration', date: '15 Mar, 2026', loc: 'Mississauga', type: 'Visitor' }
               ].map((card, i) => (
                 <div key={i} className="glass-card p-10 rounded-[3rem] border border-white/5 hover:border-brand-emerald transition-all group overflow-hidden relative active:scale-95">
                    <div className="absolute top-0 right-0 p-8 text-white/5 font-black text-6xl group-hover:text-brand-emerald/20 transition-all duration-700 uppercase tracking-tighter pointer-events-none transform group-hover:scale-125 group-hover:-rotate-12">{card.type[0]}</div>
                    <span className="text-[10px] font-black uppercase text-brand-emerald bg-brand-emerald/10 px-4 py-1.5 rounded-full mb-8 inline-block italic animate-pulse">{card.date}</span>
                    <h4 className="text-2xl font-black text-brand-platinum uppercase tracking-tighter mb-10 leading-tight group-hover:text-brand-emerald transition-colors">{card.title}</h4>
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-platinum/30 mb-8 transition-colors group-hover:text-brand-platinum/60">
                       <MapPin className="w-4 h-4 text-brand-emerald group-hover:animate-bounce" /> {card.loc}
                    </div>
                    <Link to="/registration" className="text-xs font-black uppercase tracking-widest text-brand-platinum flex items-center gap-2 group-hover:text-brand-emerald transition-all duration-300 group-hover:translate-x-2">Register Now <ArrowRight className="w-4 h-4" /></Link>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Keynote Speakers */}
      <section className="py-32 bg-brand-obsidian overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 reveal">
             <span className="text-brand-emerald font-black uppercase text-xs tracking-widest mb-4 block">Featured Speakers</span>
             <h2 className="text-4xl md:text-7xl font-black text-brand-platinum uppercase tracking-tighter mb-8 leading-none">Keynote Speakers <span className="text-brand-emerald italic">2026</span></h2>
             <p className="text-brand-platinum/50 text-xl font-medium italic max-w-3xl mx-auto">World-renowned industry leaders, innovators, and visionaries will share their insights on international trade, technology, and global business.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {SPEAKERS.map((s, i) => (
              <div key={i} className="glass-card rounded-[3rem] p-12 reveal reveal-delay-2 group hover:border-brand-emerald transition-all duration-500 overflow-hidden relative">
                <div className="absolute -inset-10 bg-brand-emerald/5 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl pointer-events-none"></div>
                <div className="relative mb-10 overflow-hidden rounded-[2rem]">
                   <div className="absolute top-0 right-0 bg-brand-emerald text-brand-obsidian px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest z-10 italic shadow-lg group-hover:scale-110 transition-transform">Coming Soon</div>
                   <img src={s.image} className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt={s.name} />
                </div>
                <h4 className="text-2xl font-black text-brand-platinum uppercase tracking-tighter mb-2 group-hover:text-brand-emerald transition-colors">{s.name}</h4>
                <p className="text-xs text-brand-platinum/40 font-black uppercase tracking-widest mb-6">{s.role}</p>
                <p className="text-brand-emerald text-xs font-black uppercase tracking-widest italic border-b border-white/10 pb-4 mb-6">{s.company}</p>
                <div className="space-y-4">
                  <h6 className="text-[10px] font-black uppercase text-brand-platinum/30 tracking-[0.3em]">Expected Topics</h6>
                  <div className="flex flex-wrap gap-2">
                    {s.expertise.map((t, idx) => (
                      <span key={idx} className="text-[8px] font-black uppercase tracking-widest px-3 py-1.5 bg-white/5 rounded-full text-brand-platinum/60 hover:bg-brand-emerald hover:text-brand-obsidian hover:scale-110 transition-all cursor-default">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-brand-forest/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
           <div className="reveal">
              <span className="text-brand-emerald font-black uppercase text-xs tracking-widest mb-4 block">Testimonials</span>
              <h2 className="text-4xl md:text-7xl font-black text-brand-platinum uppercase tracking-tighter mb-8 leading-none">What People Are Saying <span className="text-brand-emerald italic">About Our Expo</span></h2>
              <p className="text-brand-platinum/50 text-lg font-medium italic mb-12">Hear from past exhibitors, business leaders, and delegates about their experience at Asia's Emerging Economies Expo.</p>
              <Link to="/about" className="inline-block bg-brand-obsidian text-brand-platinum px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest border border-white/10 hover:border-brand-emerald hover:translate-x-2 transition-all">All Testimonials</Link>
           </div>
           <div className="reveal reveal-delay-3" style={{ transitionDelay: '200ms' }}>
             {TESTIMONIALS.map((t, i) => (
               <div key={i} className="glass-card p-16 rounded-[4rem] relative group hover:border-brand-emerald transition-all duration-700">
                  <div className="absolute -top-10 -left-10 w-20 h-20 bg-brand-emerald text-brand-obsidian rounded-full flex items-center justify-center text-5xl font-serif shadow-2xl group-hover:scale-110 transition-transform">“</div>
                  <p className="text-2xl font-medium italic text-brand-platinum leading-relaxed mb-12 group-hover:text-brand-emerald transition-colors transition-duration-700">"{t.quote}"</p>
                  <div className="flex items-center gap-6">
                     <img src={t.image} className="w-16 h-16 rounded-full border-2 border-brand-emerald object-cover shadow-xl group-hover:scale-110 transition-transform duration-500" alt={t.name} />
                     <div>
                        <h5 className="font-black uppercase tracking-tighter text-brand-platinum text-xl group-hover:text-brand-emerald transition-colors">{t.name}</h5>
                        <p className="text-xs font-black uppercase tracking-widest text-brand-emerald">{t.role}, {t.company}</p>
                     </div>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-32 bg-brand-obsidian relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-24 reveal">
             <h2 className="text-4xl md:text-7xl font-black text-brand-platinum uppercase tracking-tighter mb-8 leading-none">Questions</h2>
             <p className="text-brand-platinum/50 text-lg italic">Find answers to common questions about Asia's Emerging Economies Expo 2026.</p>
          </div>
          <div className="space-y-4 reveal">
             {FAQS.map((faq, i) => (
               <div key={i} className={`glass-card rounded-[2rem] overflow-hidden group transition-all duration-500 ${openFaqIndex === i ? 'border-brand-emerald/50' : ''}`}>
                  <button 
                    className={`w-full p-8 text-left flex justify-between items-center group-hover:bg-brand-emerald/5 transition-all ${openFaqIndex === i ? 'bg-brand-emerald/5' : ''}`}
                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  >
                    <span className={`text-lg font-black uppercase tracking-tighter leading-tight transition-colors ${openFaqIndex === i ? 'text-brand-emerald' : 'text-brand-platinum'}`}>{faq.question}</span>
                    <ChevronDown className={`w-6 h-6 text-brand-emerald transition-transform duration-500 ${openFaqIndex === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaqIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-8 pt-0 text-brand-platinum/50 italic font-medium leading-relaxed border-t border-white/5 mt-4">
                      {faq.answer}
                    </div>
                  </div>
               </div>
             ))}
          </div>
          <div className="mt-16 text-center reveal reveal-delay-4">
             <p className="text-xs font-black uppercase tracking-widest text-brand-platinum/30 mb-8 flex items-center justify-center gap-2">
                <Info className="w-4 h-4 text-brand-emerald animate-pulse" /> Have More Questions?
             </p>
             <div className="flex flex-wrap justify-center gap-4">
                <a href={`mailto:${CONTACT_INFO.email}`} className="bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-emerald hover:text-brand-obsidian transition-all flex items-center gap-2 hover:scale-105 shadow-lg group"><Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" /> Email Us</a>
                <a href={`tel:${CONTACT_INFO.phone}`} className="bg-white/5 text-brand-platinum border border-white/10 px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:border-brand-emerald hover:text-brand-emerald transition-all hover:scale-105 shadow-lg">Call Now</a>
             </div>
          </div>
        </div>
      </section>

      {/* Venue & Travel Details */}
      <section className="py-32 bg-brand-forest/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 reveal">
             <h2 className="text-4xl md:text-7xl font-black text-brand-platinum uppercase tracking-tighter mb-8 leading-none">Venue <span className="text-brand-emerald italic">Details</span></h2>
             <p className="text-brand-platinum/50 text-lg italic max-w-2xl mx-auto">World-class facilities in the heart of Greater Toronto Area, minutes from Pearson International Airport.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch reveal reveal-delay-2">
             <div className="glass-card rounded-[3rem] p-12 md:p-16 border border-brand-emerald/20 flex flex-col justify-between hover:border-brand-emerald transition-all group">
                <div>
                   <div className="flex items-center gap-4 mb-10 transform group-hover:translate-x-2 transition-transform">
                      <Building2 className="w-10 h-10 text-brand-emerald animate-pulse" />
                      <h4 className="text-3xl font-black text-brand-platinum uppercase tracking-tighter">Mississauga Convention Centre</h4>
                   </div>
                   <div className="space-y-10 mb-16">
                      <div className="flex items-start gap-6 group/item">
                         <MapPin className="w-6 h-6 text-brand-emerald mt-1 group-hover/item:animate-bounce" />
                         <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-brand-platinum/30 mb-1">Address</p>
                            <p className="font-medium italic text-brand-platinum transition-colors group-hover/item:text-brand-emerald">{CONTACT_INFO.address}</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-6 group/item">
                         <Calendar className="w-6 h-6 text-brand-emerald mt-1 group-hover/item:animate-pulse" />
                         <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-brand-platinum/30 mb-1">Event Dates</p>
                            <p className="font-medium italic text-brand-platinum transition-colors group-hover/item:text-brand-emerald">{CONTACT_INFO.dates}<br/>9:00 AM - 6:00 PM</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-6 group/item">
                         <Zap className="w-6 h-6 text-brand-emerald mt-1 group-hover/item:scale-110 transition-transform" />
                         <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-brand-platinum/30 mb-1">Capacity</p>
                            <p className="font-medium italic text-brand-platinum transition-colors group-hover/item:text-brand-emerald">50,000 sq ft Exhibition Space</p>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="pt-10 border-t border-white/5 grid grid-cols-4 gap-4 text-center">
                   <div className="space-y-2 group/icon transition-all duration-300 hover:scale-110"><Users className="w-5 h-5 text-brand-emerald mx-auto" /><span className="text-[8px] font-black uppercase text-brand-platinum/20 group-hover/icon:text-brand-emerald">Lounges</span></div>
                   <div className="space-y-2 group/icon transition-all duration-300 hover:scale-110"><Palmtree className="w-5 h-5 text-brand-emerald mx-auto" /><span className="text-[8px] font-black uppercase text-brand-platinum/20 group-hover/icon:text-brand-emerald">Catering</span></div>
                   <div className="space-y-2 group/icon transition-all duration-300 hover:scale-110"><Mic2 className="w-5 h-5 text-brand-emerald mx-auto" /><span className="text-[8px] font-black uppercase text-brand-platinum/20 group-hover/icon:text-brand-emerald">AV Ready</span></div>
                   <div className="space-y-2 group/icon transition-all duration-300 hover:scale-110"><ShieldCheck className="w-5 h-5 text-brand-emerald mx-auto" /><span className="text-[8px] font-black uppercase text-brand-platinum/20 group-hover/icon:text-brand-emerald">Secure</span></div>
                </div>
             </div>
             <div className="glass-card rounded-[3rem] overflow-hidden relative group shadow-2xl">
                <div className="absolute inset-0 bg-brand-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[3s]" 
                  alt="Venue Context" 
                />
                <div className="absolute inset-0 flex items-center justify-center p-12 z-20">
                   <div className="text-center bg-brand-obsidian/85 backdrop-blur-xl p-12 rounded-[2rem] border border-white/10 shadow-3xl transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                      <p className="text-[10px] font-black uppercase tracking-widest text-brand-emerald mb-6 italic animate-pulse">Interactive Location Portal</p>
                      <h5 className="text-xl font-black text-brand-platinum uppercase tracking-tighter mb-8 group-hover:text-brand-emerald transition-colors">Find Us on the Map</h5>
                      <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`} target="_blank" rel="noopener noreferrer" className="bg-brand-emerald text-brand-obsidian px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-platinum transition-all flex items-center gap-2 mx-auto w-fit shadow-xl group/btn">Open in Google Maps <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" /></a>
                   </div>
                </div>
             </div>
          </div>

          <div className="mt-32 grid md:grid-cols-3 gap-8 reveal reveal-delay-3">
             {[
               { icon: <Plane />, title: 'By Air', desc: 'Toronto Pearson (YYZ) is just 5 mins from the venue. Taxis and shuttles are readily available.' },
               { icon: <Car />, title: 'By Car', desc: 'Over 2,000 parking spaces on-site. Easy access from HWY 401, 407, and QEW.' },
               { icon: <Train />, title: 'Public Transit', desc: 'MiWay bus services stop right near the venue. Complimentary shuttle from major hotels.' }
             ].map((t, i) => (
               <div key={i} className="glass-card p-10 rounded-3xl border border-white/5 hover:border-brand-emerald hover:translate-y-[-10px] transition-all duration-500 group">
                  <div className="w-12 h-12 text-brand-emerald mb-6 group-hover:scale-125 transition-transform duration-500">{t.icon}</div>
                  <h4 className="text-xl font-black text-brand-platinum uppercase tracking-tighter mb-4 group-hover:text-brand-emerald transition-colors">{t.title}</h4>
                  <p className="text-xs text-brand-platinum/40 italic font-medium leading-relaxed group-hover:text-brand-platinum/60 transition-colors">{t.desc}</p>
               </div>
             ))}
          </div>

          <div className="mt-16 reveal reveal-delay-4 text-center">
             <span className="text-xs font-black uppercase tracking-widest text-brand-platinum/20 mb-10 block cursor-default">Partner Hotels Within 5 Minutes</span>
             <div className="flex flex-wrap justify-center gap-6">
                {['Sheraton Gateway', 'Hilton Toronto Airport', 'Delta Hotels Airport', 'Courtyard Marriott'].map((hotel, i) => (
                  <div key={i} className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-full border border-white/5 text-[10px] font-black uppercase tracking-widest text-brand-platinum/50 hover:text-brand-emerald hover:border-brand-emerald hover:scale-110 transition-all cursor-default group">
                     <Star className="w-3 h-3 text-brand-emerald group-hover:rotate-45 transition-transform" /> {hotel}
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-40 bg-brand-emerald text-brand-obsidian text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-1000"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 reveal">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none transform transition-transform duration-700 group-hover:scale-105 cursor-default">Ready to join Asia’s <br/><span className="italic group-hover:text-brand-obsidian/70 transition-colors">next wave of growth?</span></h2>
          <p className="text-xl md:text-2xl mb-16 font-medium italic opacity-70 cursor-default">Accredit your organization for the definitive Asia-Canada trade event of the decade.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/registration" className="bg-brand-obsidian text-brand-platinum px-12 py-6 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-brand-obsidian transition-all shadow-2xl shadow-brand-obsidian/20 hover:scale-105 active:scale-95 group/btn">
              <span className="flex items-center gap-2">Register Now <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" /></span>
            </Link>
            <Link to="/partners" className="bg-brand-obsidian text-brand-platinum px-12 py-6 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-brand-obsidian transition-all shadow-2xl shadow-brand-obsidian/20 hover:scale-105 active:scale-95 group/btn">
              <span className="flex items-center gap-2">Inquire Sponsorship <Briefcase className="w-4 h-4 group-hover/btn:scale-110 transition-transform" /></span>
            </Link>
          </div>
        </div>
        
        {/* Animated Background Blobs */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-obsidian/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-brand-obsidian/10 rounded-full blur-[100px] animate-pulse delay-500"></div>
      </section>
    </div>
  );
};

export default Home;