import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Users, BarChart3, Mic2, Star, 
  Calendar, MapPin, Globe, Briefcase, LayoutGrid, 
  Zap, Presentation, MessageSquare, ChevronRight
} from 'lucide-react';
import { COUNTRIES, SECTORS, EXPERIENCE_FEATURES, PARTNER_SKYLINES } from '../constants';

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
      {/* 3.1 Refined Hero Section */}
      <section className="relative pt-32 pb-12 bg-brand-navy">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="relative aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
            {/* Background Visual - Contained Video */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/40 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent z-10"></div>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105"
              >
                <source src="https://raw.githubusercontent.com/vathsan-sharma/imagess/main/Philippines%20(1).mp4" type="video/mp4" />
              </video>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 lg:px-24">
              <div className="max-w-3xl animate-fade-in-up">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-coral/20 backdrop-blur-md border border-brand-coral/30 rounded-full mb-8 reveal">
                  <span className="w-2 h-2 rounded-full bg-brand-coral animate-pulse"></span>
                  <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] italic">October 15-17, 2026 • Toronto</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 tracking-tighter italic">
                  The Gateway to <br/>
                  <span className="text-brand-coral">Emerging Economies</span> <br/>
                  in North America
                </h1>
                
                <p className="text-base md:text-lg text-white/70 font-medium italic max-w-xl leading-relaxed mb-10 reveal">
                  Connecting global capital with high-growth innovation. Experience the definitive platform for cross-border expansion in the heart of Toronto.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 reveal">
                   <Link to="/registration" className="bg-brand-coral text-white px-8 py-4 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-white hover:text-brand-coral transition-all shadow-xl italic flex items-center justify-center gap-3 group">
                    Secure Your Pass <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <Link to="/exhibitors" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-white hover:text-brand-navy transition-all italic flex items-center justify-center">
                    Become an Exhibitor
                  </Link>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-8 right-8 z-30 hidden lg:block reveal">
              <div className="bg-brand-navy/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-2xl">
                <div className="w-12 h-12 rounded-xl bg-brand-coral/20 flex items-center justify-center text-brand-coral">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[9px] text-white/40 font-black uppercase tracking-widest italic">Participating</div>
                  <div className="text-sm font-black text-white italic tracking-tight">8 Powerful Economies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Quick Info Bar */}
      <section className="relative z-30 -mt-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-navy/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-coral/10 blur-[100px] rounded-full -z-10"></div>
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <div className="flex items-center gap-6 reveal">
                <div className="w-16 h-16 rounded-2xl bg-brand-coral flex items-center justify-center text-white shadow-xl">
                  <Calendar className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 font-black uppercase tracking-[0.3em] italic mb-1">Event Date</div>
                  <div className="text-xl font-black text-white tracking-tight italic">October 15-17, 2026</div>
                </div>
              </div>
              <div className="flex items-center gap-6 reveal">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-coral shadow-xl">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 font-black uppercase tracking-[0.3em] italic mb-1">Venue</div>
                  <div className="text-xl font-black text-white tracking-tight italic">Enercare Centre, Toronto</div>
                </div>
              </div>
              <div className="flex items-center justify-end reveal">
                <div className="text-right">
                  <div className="text-[10px] text-white/40 font-black uppercase tracking-[0.3em] italic mb-2">Registration Status</div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-coral/10 border border-brand-coral/20 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-brand-coral animate-pulse"></span>
                    <span className="text-xs font-black text-brand-coral uppercase italic">Now Open</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Event Snapshot */}
      <section className="py-32 bg-brand-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="reveal">
              <h2 className="text-4xl md:text-6xl font-black text-brand-coral tracking-tighter leading-none mb-10">Event Snapshot</h2>
              <p className="text-white/60 text-xl leading-relaxed mb-12 font-medium italic">
                Asia's Emerging Economies Expo (AEEE) 2026 is North America's premier platform for connecting global investors with the high-growth markets of Asia. We bridge the gap between innovation and capital in the world's most dynamic economic corridor.
              </p>
              <div className="space-y-6">
                {[
                  "Direct access to 8 powerful economies under one roof.",
                  "Strategic B2B matchmaking with pre-qualified trade delegations.",
                  "High-level policy dialogues featuring ministerial representatives.",
                  "Showcase of disruptive technologies in Fintech, Energy, and AI."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <ArrowRight className="w-5 h-5 text-brand-coral group-hover:translate-x-2 transition-transform" />
                    <p className="text-white font-bold tracking-tight text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal relative">
              <div className="aspect-video rounded-sm overflow-hidden border border-white/10 group">
                <img src="https://raw.githubusercontent.com/vathsan-sharma/imagess/main/pexels-henri-mathieu-8349430.jpg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Expo" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-coral/20 blur-3xl rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Numbers / At a Glance */}
      <section className="py-32 bg-brand-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Exhibitors", value: "300+", icon: <Briefcase /> },
              { label: "Visitors", value: "50,000+", icon: <Users /> },
              { label: "Sessions", value: "40+", icon: <Mic2 /> },
              { label: "Countries", value: "8", icon: <Globe /> }
            ].map((stat, i) => (
              <div key={i} className="reveal glass-card p-12 border border-white/10 text-center space-y-6 group hover:border-brand-coral transition-all">
                <div className="text-brand-coral group-hover:scale-110 transition-transform">{React.cloneElement(stat.icon as React.ReactElement, { className: 'w-10 h-10 mx-auto' })}</div>
                <div className="text-5xl font-black text-white tracking-tighter italic">{stat.value}</div>
                <div className="text-[11px] font-bold tracking-tight text-white/40 italic">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Participating Nations Preview */}
      <section className="py-24 md:py-32 bg-brand-navy border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 md:p-24 text-white/5 font-black text-[8rem] md:text-[20rem] leading-none pointer-events-none uppercase tracking-tighter italic">Nations</div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
            <div className="reveal">
              <h2 className="text-3xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6 md:mb-8 italic">Participating <br/><span className="text-brand-coral">Nations</span></h2>
              <p className="text-white/40 text-lg md:text-xl font-medium italic max-w-2xl">
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
                className="reveal group relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 hover:border-brand-coral transition-all duration-500"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <img 
                  src={PARTNER_SKYLINES[country.id as keyof typeof PARTNER_SKYLINES]} 
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  alt={country.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl drop-shadow-lg">{country.flag}</span>
                    <h4 className="text-2xl font-black text-white tracking-tighter italic drop-shadow-lg">{country.name}</h4>
                  </div>
                  <p className="text-white/60 text-xs font-bold tracking-tight italic line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {country.summary}
                  </p>
                </div>
                
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-4 group-hover:translate-y-0">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Target Sectors Preview */}
      <section className="py-24 md:py-32 bg-brand-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-24 reveal">
            <h2 className="text-3xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6 md:mb-8 italic">Target <span className="text-brand-coral">Sectors</span></h2>
            <p className="text-white/40 text-lg md:text-xl font-medium italic max-w-3xl mx-auto">
              Focusing on the high-growth industries that define the future of the Asia-Canada trade corridor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SECTORS.slice(0, 8).map((sector, i) => (
              <Link 
                key={sector.id} 
                to="/sectors" 
                className="reveal glass-card p-10 border border-white/10 group hover:border-brand-coral transition-all flex flex-col items-center text-center"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-16 h-16 bg-white/5 rounded-sm flex items-center justify-center text-brand-coral mb-8 group-hover:bg-brand-coral group-hover:text-white transition-all shadow-sm">
                  {React.cloneElement(sector.icon as React.ReactElement, { className: 'w-8 h-8' })}
                </div>
                <h4 className="text-xl font-black text-white tracking-tighter italic mb-4">{sector.title}</h4>
                <p className="text-white/40 text-[11px] font-bold tracking-tight italic leading-relaxed">{sector.description}</p>
              </Link>
            ))}
          </div>
          
          <div className="mt-20 text-center reveal">
            <Link to="/sectors" className="inline-flex items-center gap-4 bg-white/5 border border-white/10 text-white px-12 py-6 rounded-sm font-bold text-sm tracking-tight hover:bg-brand-coral hover:border-brand-coral transition-all italic">
              Explore All Sectors <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who is this for? */}
      <section className="py-24 md:py-32 bg-brand-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter text-center mb-16 md:mb-24 reveal italic">Who is this for?</h2>
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
              <div key={i} className="reveal glass-card p-12 border border-white/10 flex flex-col h-full group hover:border-brand-coral transition-all">
                <h3 className="text-3xl font-black text-white tracking-tighter mb-8 group-hover:text-brand-coral transition-colors italic">{block.title}</h3>
                <ul className="space-y-4 mb-12 flex-grow">
                  {block.benefits.map((b, j) => (
                    <li key={j} className="flex items-center gap-3 text-[11px] font-bold tracking-tight text-white/40 italic">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-coral"></div>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to={block.link} className="inline-flex items-center justify-between bg-white/5 border border-white/10 text-white px-8 py-4 rounded-sm font-bold text-xs tracking-tight hover:bg-brand-coral hover:border-brand-coral transition-all group/btn italic">
                  {block.cta} <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Experience Teaser */}
      <section className="py-24 md:py-32 bg-brand-navy border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="reveal relative aspect-square rounded-sm overflow-hidden border border-white/10 group hidden lg:block">
              <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt="Experience" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="reveal">
              <h2 className="text-3xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8 md:mb-10 italic">The Event <br/><span className="text-brand-coral">Experience</span></h2>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 md:mb-12 font-medium italic">
                Beyond the exhibition floor, AEEE 2026 offers an immersive three-day ecosystem designed to catalyze trade and innovation.
              </p>
              <div className="grid grid-cols-1 gap-8 mb-16">
                {EXPERIENCE_FEATURES.map((feat, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-brand-coral flex-shrink-0 group-hover:bg-brand-coral group-hover:text-white transition-all shadow-sm">
                      {React.cloneElement(feat.icon as React.ReactElement, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white tracking-tighter italic mb-2">{feat.title}</h4>
                      <p className="text-white/40 text-[11px] font-bold tracking-tight italic leading-relaxed">{feat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/experience" className="inline-flex items-center gap-4 bg-brand-coral text-white px-12 py-6 rounded-sm font-bold text-sm tracking-tight hover:bg-white hover:text-brand-coral transition-all shadow-2xl italic">
                Discover the Experience <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Conference & Knowledge Teaser */}
      <section className="py-24 md:py-32 bg-brand-navy border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="reveal">
              <h2 className="text-3xl md:text-6xl font-black text-brand-coral tracking-tighter leading-none mb-8 md:mb-10 italic">Conference & Knowledge</h2>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 md:mb-12 font-medium italic">
                Gain exclusive insights from 100+ global thought leaders across 40+ sessions. Our tracks cover the critical pillars of emerging market growth.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                {["Trade Policy", "Fintech Innovation", "Green Energy", "Supply Chain"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-bold tracking-tight text-white italic">
                    <div className="w-2 h-2 bg-brand-coral rounded-full"></div>
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-6">
                <Link to="/agenda" className="bg-brand-coral text-white px-10 py-5 rounded-sm font-bold text-sm tracking-tight hover:bg-white hover:text-brand-coral transition-all shadow-xl italic">
                  View Full Agenda
                </Link>
                <Link to="/speakers" className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-sm font-bold text-sm tracking-tight hover:bg-white hover:text-brand-navy transition-all italic">
                  View Speakers
                </Link>
              </div>
            </div>
            <div className="reveal relative aspect-square rounded-sm overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale opacity-40" alt="Conference" />
            </div>
          </div>
        </div>
      </section>

      {/* Venue & Travel Teaser */}
      <section className="py-32 bg-brand-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center reveal">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-10 italic">Toronto: Your Host City</h2>
          <p className="text-white/40 text-xl font-medium italic max-w-3xl mx-auto mb-16 leading-relaxed">
            Experience AEEE 2026 at the Enercare Centre, located in the heart of Toronto's vibrant Exhibition Place.
          </p>
          <Link to="/venue" className="inline-flex items-center gap-4 bg-brand-coral text-white px-16 py-8 rounded-sm font-bold text-base tracking-tight hover:bg-white hover:text-brand-coral transition-all shadow-2xl group italic">
            Plan Your Visit <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Sponsors Strip */}
      <section className="py-32 bg-brand-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center reveal">
          <p className="text-white/40 text-xs font-bold tracking-tight mb-16 italic">Strategic Support From Global Leaders</p>
          <div className="flex flex-wrap justify-center gap-16 opacity-20 grayscale mb-20">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="w-32 h-16 bg-white/10 rounded-sm flex items-center justify-center font-bold text-xs">LOGO {i}</div>
            ))}
          </div>
          <Link to="/sponsors" className="text-brand-coral font-bold text-sm tracking-tight hover:text-white transition-colors">
            Become a Sponsor <ArrowRight className="inline-block w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 md:py-32 bg-brand-coral relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-7xl font-black text-white tracking-tighter mb-6 md:mb-8 leading-none italic">Stay in the Loop</h2>
          <p className="text-white/80 text-base md:text-xl font-medium italic mb-12 md:mb-16">
            Subscribe to our newsletter for the latest announcements, speaker reveals, and sector insights.
          </p>
          <form className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-white/60 tracking-tight ml-4 italic">Full Name</label>
              <input type="text" className="w-full bg-white/10 border border-white/20 rounded-sm px-6 py-4 text-white placeholder:text-white/30 focus:bg-white/20 outline-none transition-all italic" placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-white/60 tracking-tight ml-4 italic">Email Address</label>
              <input type="email" className="w-full bg-white/10 border border-white/20 rounded-sm px-6 py-4 text-white placeholder:text-white/30 focus:bg-white/20 outline-none transition-all italic" placeholder="email@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-white/60 tracking-tight ml-4 italic">Country</label>
              <input type="text" className="w-full bg-white/10 border border-white/20 rounded-sm px-6 py-4 text-white placeholder:text-white/30 focus:bg-white/20 outline-none transition-all italic" placeholder="Your Country" />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-white/60 tracking-tight ml-4 italic">Organization Type</label>
              <select className="w-full bg-white/10 border border-white/20 rounded-sm px-6 py-4 text-white focus:bg-white/20 outline-none transition-all appearance-none italic">
                <option className="bg-brand-navy">Corporate</option>
                <option className="bg-brand-navy">Government</option>
                <option className="bg-brand-navy">Investor</option>
                <option className="bg-brand-navy">Media</option>
                <option className="bg-brand-navy">Other</option>
              </select>
            </div>
            <button className="md:col-span-2 mt-6 bg-brand-navy text-white py-6 rounded-sm font-bold text-sm tracking-widest hover:bg-white hover:text-brand-navy transition-all shadow-2xl italic">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
