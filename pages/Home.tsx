import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Globe, Calendar, MapPin, 
  ChevronRight, Building2, Users, Briefcase, TrendingUp,
  Zap, Presentation, Mic2, Star, ShieldCheck, MessageSquare,
  BarChart3, GraduationCap, ChevronDown, Plane, Car, Train, ExternalLink, Send,
  Info, Palmtree
} from 'lucide-react';
import { 
  SECTORS, COUNTRIES, CONTACT_INFO, 
  HIGHLIGHTS, IMPACT_STATS, GLOBAL_REACH,
  SPEAKERS, TESTIMONIALS, FAQS
} from '../constants';

const Counter: React.FC<{ value: string; label: string }> = ({ value, label }) => {
  const [count, setCount] = useState(0);
  const targetValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();

          const updateCount = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            if (elapsedTime < duration) {
              const nextCount = Math.floor((elapsedTime / duration) * targetValue);
              setCount(nextCount);
              requestAnimationFrame(updateCount);
            } else {
              setCount(targetValue);
            }
          };
          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [targetValue]);

  return (
    <div ref={ref} className="reveal group">
      <div className="text-6xl md:text-7xl font-black text-brand-obsidian tracking-tighter mb-2 group-hover:text-brand-emerald transition-colors">
        {count}{suffix}
      </div>
      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
        {label}
      </div>
    </div>
  );
};

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

  const skylineImages = {
    // Premium direct image links for the partner nations section
    canada: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1200", 
    srilanka: "https://images.unsplash.com/photo-1563297607-e1058c4dd38a?auto=format&fit=crop&q=80&w=1200", // Sigiriya Rock
    indonesia: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1200", // Bali
    thailand: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200", // Bangkok Temple
    pakistan: "https://images.unsplash.com/photo-1627837577626-ec5508ca448a?auto=format&fit=crop&q=80&w=1200", // Badshahi Mosque
    vietnam: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1200", 
    philippines: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=1200", 
    malaysia: "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&q=80&w=1200" 
  };

  return (
    <div className="space-y-0 bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/80 to-white z-10"></div>
          
          <div className="absolute inset-0 animate-slow-pan">
            <img 
              src={skylineImages.canada} 
              className="w-full h-full object-cover grayscale opacity-20" 
              alt="Canada Background"
              loading="eager"
            />
          </div>

          <div className="absolute inset-0 bg-dots opacity-30 z-[5]"></div>
          
          <div 
            className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-emerald/5 blur-[100px] rounded-full"
            style={{ transform: `translate(${scrollY * -0.05}px, ${scrollY * 0.1}px)` }}
          ></div>
        </div>

        <div className="relative z-20 max-w-[1400px] mx-auto px-6 w-full pt-20">
          <div className="flex flex-col items-center text-center animate-fade-in-up">
            
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-platinum border border-gray-100 mb-8 shadow-sm transition-transform hover:scale-105">
              <div className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></div>
              <span className="text-[10px] font-black text-brand-obsidian uppercase tracking-[0.3em] italic">
                {CONTACT_INFO.tagline}
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[8.5rem] font-black text-brand-obsidian leading-[0.85] mb-8 uppercase tracking-tighter">
              Asia’s Emerging <br/>
              <span className="relative inline-block text-brand-emerald italic">
                Economies
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-brand-emerald/20 blur-sm rounded-full"></div>
              </span> Expo 2026
            </h1>

            <p className="text-gray-500 text-lg md:text-xl mb-12 max-w-3xl mx-auto font-medium italic italic leading-relaxed">
              The premier industrial gateway connecting Canada with Asia's powerhouse markets: 
              <span className="text-brand-obsidian ml-1 font-bold underline decoration-brand-emerald/30 underline-offset-8">Sri Lanka, Vietnam, Malaysia, Philippines, Thailand, Indonesia and Pakistan.</span>
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-12 mb-16 px-10 py-6 rounded-3xl bg-brand-platinum border border-gray-100 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-brand-emerald/10 rounded-lg group-hover:scale-110 transition-transform">
                  <Calendar className="w-5 h-5 text-brand-emerald" />
                </div>
                <div className="text-left">
                  <p className="text-[8px] font-black text-brand-emerald uppercase tracking-widest">Dates</p>
                  <p className="text-sm font-bold text-brand-obsidian">{CONTACT_INFO.dates}</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-8 bg-gray-200"></div>
              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-brand-emerald/10 rounded-lg group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 text-brand-emerald" />
                </div>
                <div className="text-left">
                  <p className="text-[8px] font-black text-brand-emerald uppercase tracking-widest">Venue</p>
                  <p className="text-sm font-bold text-brand-obsidian">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/registration" className="group bg-brand-emerald text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest transition-all hover:bg-brand-obsidian shadow-xl shadow-brand-emerald/20 hover:scale-105 active:scale-95">
                Register Now
              </Link>
              <Link to="/partners" className="bg-white text-brand-obsidian px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest border border-gray-200 hover:border-brand-emerald transition-all shadow-sm hover:scale-105">
                Become an Exhibitor
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Abstract Element */}
        <div 
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] border border-brand-emerald/5 rounded-full animate-spin-slow pointer-events-none transition-transform duration-75"
          style={{ transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.1}deg)` }}
        >
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-brand-emerald/10 rounded-full blur-sm"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative reveal">
            <div className="absolute -inset-4 bg-brand-emerald/5 blur-3xl opacity-60"></div>
            <div className="relative overflow-hidden rounded-[3rem] shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                alt="About"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 z-20 animate-float">
              <div className="text-3xl font-black text-brand-emerald tracking-tighter">AEEE 2026</div>
              <div className="text-[9px] uppercase font-black tracking-widest text-gray-400">Trade Nexus</div>
            </div>
          </div>
          <div className="reveal">
            <span className="text-brand-emerald font-black uppercase text-xs tracking-[0.3em] mb-4 block">Our Identity</span>
            <h2 className="text-4xl md:text-6xl font-black text-brand-obsidian uppercase tracking-tighter mb-8 leading-[0.9]">Your Gateway to Innovation & Investment</h2>
            <p className="text-gray-500 text-lg mb-10 font-medium italic leading-relaxed">
              Based in Toronto, the AEEE connects the industrial powerhouses of emerging Asia with the capital and technology of North America. We are the definitive bridge for 2026.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="space-y-3 group cursor-default">
                <Globe className="w-8 h-8 text-brand-emerald group-hover:rotate-12 transition-transform" />
                <h4 className="font-black text-brand-obsidian uppercase tracking-tight">Global Reach</h4>
                <p className="text-xs text-gray-400 font-medium italic">Delegations from 8+ major economies.</p>
              </div>
              <div className="space-y-3 group cursor-default">
                <TrendingUp className="w-8 h-8 text-brand-emerald group-hover:translate-x-2 transition-transform" />
                <h4 className="font-black text-brand-obsidian uppercase tracking-tight">Scale</h4>
                <p className="text-xs text-gray-400 font-medium italic">50,000+ expected attendees in 3 days.</p>
              </div>
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 text-brand-emerald font-black text-xs uppercase tracking-widest hover:translate-x-4 transition-transform group">
              Learn More About the Vision <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-32 bg-brand-platinum relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <h2 className="text-4xl md:text-7xl font-black text-brand-obsidian uppercase tracking-tighter mb-6">Key Highlights</h2>
            <p className="text-gray-400 text-xl italic font-medium">The Defining Features of AEEE 2026</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((h, i) => (
              <div key={i} className="glass-card p-10 rounded-3xl reveal group">
                <div className="w-12 h-12 bg-brand-emerald/10 text-brand-emerald rounded-xl flex items-center justify-center mb-8 group-hover:bg-brand-emerald group-hover:text-white transition-all duration-500">
                  {React.cloneElement(h.icon as React.ReactElement, { className: 'w-6 h-6' })}
                </div>
                <h4 className="text-xl font-black text-brand-obsidian uppercase mb-4 tracking-tighter leading-none group-hover:text-brand-emerald transition-colors">{h.title}</h4>
                <p className="text-[11px] text-gray-400 italic leading-relaxed font-medium">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Counting Animation */}
      <section className="py-32 bg-white relative bg-dots">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center mb-32">
            {IMPACT_STATS.map((stat, i) => (
              <Counter key={i} value={stat.value} label={stat.label} />
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="reveal">
              <h4 className="text-2xl font-black text-brand-obsidian uppercase tracking-tighter mb-10 flex items-center gap-4">
                <Globe className="w-7 h-7 text-brand-emerald animate-pulse" /> Regional Presence
              </h4>
              <div className="space-y-8">
                {GLOBAL_REACH.map((r, i) => (
                  <div key={i} className="space-y-3 group">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-brand-obsidian transition-colors">
                      <span>{r.region}</span>
                      <span className="text-brand-emerald">{r.value > 0 ? 'ACTIVE' : 'EXPANDING'}</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-emerald transition-all duration-[3s] group-hover:brightness-110" style={{ width: r.value > 0 ? '85%' : '15%' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal glass-card p-12 rounded-[3rem] bg-brand-platinum group overflow-hidden">
               <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-emerald/5 rounded-full blur-3xl group-hover:bg-brand-emerald/10 transition-colors"></div>
               <h4 className="text-2xl font-black text-brand-obsidian uppercase tracking-tighter mb-8 relative z-10">Ready to Scale?</h4>
               <p className="text-gray-500 italic font-medium mb-8 leading-relaxed relative z-10">
                 Join 300+ businesses already locked in for the largest Asia-Canada industrial event in history.
               </p>
               <Link to="/registration" className="inline-flex items-center gap-2 bg-brand-obsidian text-white px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-brand-emerald transition-all relative z-10 group/btn shadow-lg">
                 Secure Your Spot <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Nations with Verified Direct Image Links */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 reveal">
            <h2 className="text-4xl md:text-7xl font-black text-brand-obsidian uppercase tracking-tighter mb-6">Partner <span className="text-brand-emerald italic">Nations</span></h2>
            <p className="text-gray-400 text-xl italic font-medium">Visualizing Global Trade & Dynamic Horizons</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {COUNTRIES.map((country, i) => {
              const imageKey = country.id as keyof typeof skylineImages;
              return (
                <div key={i} className="reveal group relative h-96 rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 bg-brand-platinum">
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img 
                      src={skylineImages[imageKey]} 
                      className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2s] animate-slow-pan" 
                      alt={`${country.name} Skyline`} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian/80 via-brand-obsidian/20 to-transparent"></div>
                  </div>
                  <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl drop-shadow-md">{country.flag}</span>
                      <h4 className="text-2xl font-black text-white uppercase tracking-tighter group-hover:text-brand-emerald transition-colors">{country.name}</h4>
                    </div>
                    <p className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-6 group-hover:text-white transition-colors italic leading-relaxed">
                      {country.summary}
                    </p>
                    <Link to="/countries" className="flex items-center gap-2 text-white text-[9px] font-black uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">
                      Explore Showcase <ArrowRight className="w-3 h-3 text-brand-emerald" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-brand-platinum">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20 reveal">
             <h2 className="text-4xl md:text-7xl font-black text-brand-obsidian uppercase tracking-tighter mb-6">Questions</h2>
             <p className="text-gray-400 italic font-medium">Clear Answers for International Delegates</p>
          </div>
          <div className="space-y-4">
             {FAQS.map((faq, i) => (
               <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 reveal">
                  <button 
                    className="w-full p-8 text-left flex justify-between items-center hover:bg-gray-50 transition-colors group/btn"
                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  >
                    <span className="text-lg font-black text-brand-obsidian uppercase tracking-tighter leading-tight group-hover/btn:text-brand-emerald transition-colors">{faq.question}</span>
                    <ChevronDown className={`w-6 h-6 text-brand-emerald transition-transform duration-500 ${openFaqIndex === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`transition-all duration-500 overflow-hidden ${openFaqIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-8 pt-0 text-gray-500 italic font-medium leading-relaxed border-t border-gray-50 mt-4">
                      {faq.answer}
                    </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Final CTA with Motion */}
      <section className="py-40 bg-brand-emerald text-white text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 reveal">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none transform transition-transform duration-700 group-hover:scale-105">Ready for Asia’s <br/><span className="italic opacity-80">Next Wave?</span></h2>
          <p className="text-xl md:text-2xl mb-16 font-medium italic text-white/80">Accredit your organization for the definitive trade event of 2026.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/registration" className="bg-white text-brand-emerald px-12 py-6 rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-obsidian hover:text-white transition-all shadow-2xl hover:scale-110 active:scale-95">
              Register Now
            </Link>
            <Link to="/contact" className="bg-brand-obsidian text-white px-12 py-6 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-brand-obsidian transition-all shadow-2xl hover:scale-110 active:scale-95">
              Contact Secretariat
            </Link>
          </div>
        </div>
        
        {/* Animated Background Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full animate-float delay-1000"></div>
      </section>
    </div>
  );
};

export default Home;