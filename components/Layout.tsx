import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Scroll to top smoothly on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Countries', path: '/countries' },
    { label: 'Sectors', path: '/sectors' },
    { label: 'Partners', path: '/partners' },
    { label: 'Experience', path: '/experience' },
    { label: 'Registration', path: '/registration' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled 
            ? 'bg-brand-obsidian/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg shadow-black/40' 
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative overflow-visible">
               <Globe className="w-9 h-9 text-brand-emerald group-hover:rotate-[360deg] transition-transform duration-1000 ease-in-out" />
               <div className="absolute inset-0 bg-brand-emerald/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black text-brand-platinum tracking-tighter uppercase flex items-center transition-colors group-hover:text-brand-emerald">
                AEEE <span className="text-brand-emerald ml-1.5 group-hover:text-brand-platinum transition-colors">2026</span>
              </span>
              <span className="text-[7px] text-brand-emerald font-black uppercase tracking-[0.4em] hidden sm:block opacity-60">
                ASIA'S EMERGING ECONOMIES EXPO
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`relative px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-brand-emerald ${
                  location.pathname === item.path ? 'text-brand-emerald' : 'text-brand-platinum/60'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-emerald rounded-full animate-[pulse_2s_infinite]"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Action Area */}
          <div className="flex items-center space-x-6">
            <Link 
              to="/registration" 
              className="relative group hidden sm:flex active:scale-95 transition-transform"
            >
              <div className="absolute inset-0 bg-brand-emerald blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
              <div className="relative bg-brand-emerald text-brand-obsidian px-7 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center gap-2 border border-brand-emerald/50 hover:bg-brand-platinum hover:text-brand-obsidian transition-all duration-300 glow-on-hover">
                Register Now <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <button 
              className="xl:hidden p-2 text-brand-platinum hover:text-brand-emerald transition-colors" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-brand-obsidian/98 backdrop-blur-2xl z-[99] xl:hidden flex flex-col items-center justify-center space-y-6 transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          {navItems.map((item, idx) => (
            <Link 
              key={item.path} 
              to={item.path}
              style={{ transitionDelay: `${idx * 50}ms` }}
              className={`text-4xl font-black uppercase tracking-tighter transition-all duration-300 hover:scale-110 ${
                location.pathname === item.path ? 'text-brand-emerald' : 'text-brand-platinum'
              } ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            to="/registration"
            className="mt-8 bg-brand-emerald text-brand-obsidian px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest active:scale-95"
            onClick={() => setIsMenuOpen(false)}
          >
            Register Now
          </Link>
          <button className="absolute top-8 right-8 text-brand-platinum" onClick={() => setIsMenuOpen(false)}>
            <X className="w-10 h-10" />
          </button>
        </div>
      </header>

      <main className="flex-grow pt-0 animate-[fadeInUp_0.8s_ease-out]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-obsidian text-brand-platinum/60 pt-24 pb-12 border-t border-white/5 relative overflow-hidden bg-dots">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-16 mb-16 reveal">
            <div className="col-span-1 md:col-span-2 space-y-8">
              <Link to="/" className="flex items-center space-x-2 group">
                <Globe className="w-10 h-10 text-brand-emerald transition-transform duration-700 group-hover:rotate-12" />
                <span className="text-3xl font-black text-brand-platinum uppercase tracking-tighter">AEEE <span className="text-brand-emerald">2026</span></span>
              </Link>
              <p className="text-lg font-medium italic leading-relaxed max-w-lg">
                “Gateway to Asia’s Expansion” — Connecting Canada with the world's most dynamic industrial frontiers.
              </p>
              <div className="flex space-x-6">
                {['LinkedIn', 'Twitter', 'Instagram'].map(platform => (
                  <a key={platform} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-emerald hover:text-brand-obsidian hover:border-brand-emerald transition-all duration-300 group">
                    <span className="text-xs font-black uppercase">{platform[0]}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-brand-platinum font-black uppercase text-xs tracking-widest border-l-2 border-brand-emerald pl-4">Menu</h4>
              <nav className="flex flex-col space-y-4 text-sm font-bold uppercase tracking-widest">
                {navItems.slice(0, 4).map(item => (
                  <Link key={item.path} to={item.path} className="hover:text-brand-emerald transition-all duration-300 hover:translate-x-2">{item.label}</Link>
                ))}
              </nav>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-brand-platinum font-black uppercase text-xs tracking-widest border-l-2 border-brand-emerald pl-4">Contact</h4>
              <div className="space-y-4 text-sm font-medium italic">
                <div className="flex items-center gap-3 hover:text-brand-emerald transition-colors cursor-default">
                  <MapPin className="w-4 h-4 text-brand-emerald" />
                  <span>{CONTACT_INFO.address}</span>
                </div>
                <div className="flex items-center gap-3 hover:text-brand-emerald transition-colors cursor-default">
                  <Phone className="w-4 h-4 text-brand-emerald" />
                  <span>{CONTACT_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-3 hover:text-brand-emerald transition-colors cursor-default">
                  <Mail className="w-4 h-4 text-brand-emerald" />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-brand-emerald hover:text-brand-platinum transition-colors">{CONTACT_INFO.email}</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase font-black tracking-[0.5em] text-brand-platinum/20">
            <p>&copy; 2026 Asia’s Emerging Economies Expo. Organized by {CONTACT_INFO.organizer}.</p>
            <div className="mt-4 md:mt-0 space-x-6">
              <a href="#" className="hover:text-brand-emerald transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-emerald transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;