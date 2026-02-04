import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronRight, Phone, Mail, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
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

  const socialLinks = [
    { icon: <Linkedin className="w-4 h-4" />, href: "#" },
    { icon: <Twitter className="w-4 h-4" />, href: "#" },
    { icon: <Instagram className="w-4 h-4" />, href: "#" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100 py-3 shadow-sm' 
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
               <Globe className={`w-9 h-9 ${isScrolled || isMenuOpen ? 'text-brand-emerald' : 'text-brand-obsidian'} transition-colors group-hover:rotate-[360deg] transition-transform duration-1000`} />
               <div className="absolute inset-0 bg-brand-emerald/10 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>
            </div>
            <div className="flex flex-col leading-none">
              <span className={`text-2xl font-black ${isScrolled || isMenuOpen ? 'text-brand-obsidian' : 'text-brand-obsidian'} tracking-tighter uppercase`}>
                AEEE <span className="text-brand-emerald">2026</span>
              </span>
              <span className={`text-[7px] ${isScrolled || isMenuOpen ? 'text-brand-emerald' : 'text-brand-emerald'} font-black uppercase tracking-[0.4em] hidden sm:block opacity-60`}>
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
                className={`relative px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  location.pathname === item.path ? 'text-brand-emerald' : 'text-gray-500 hover:text-brand-emerald'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-emerald rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Action Area */}
          <div className="flex items-center space-x-6">
            <Link 
              to="/registration" 
              className="relative group hidden sm:flex"
            >
              <div className="relative bg-brand-emerald text-white px-7 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-brand-obsidian transition-colors shadow-lg shadow-brand-emerald/10">
                Register Now <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <button 
              className="xl:hidden p-2 text-brand-obsidian hover:text-brand-emerald transition-colors" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-white z-[99] xl:hidden flex flex-col items-center justify-center space-y-6 transition-all duration-500 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`text-4xl font-black uppercase tracking-tighter transition-colors ${
                location.pathname === item.path ? 'text-brand-emerald' : 'text-brand-obsidian'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            to="/registration"
            className="mt-8 bg-brand-emerald text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest"
            onClick={() => setIsMenuOpen(false)}
          >
            Register Now
          </Link>
        </div>
      </header>

      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-platinum text-brand-obsidian/60 pt-24 pb-12 border-t border-gray-100 relative overflow-hidden bg-dots">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-8">
              <Link to="/" className="flex items-center space-x-2 group">
                <Globe className="w-10 h-10 text-brand-emerald transition-transform group-hover:rotate-12" />
                <span className="text-3xl font-black text-brand-obsidian uppercase tracking-tighter">AEEE <span className="text-brand-emerald">2026</span></span>
              </Link>
              <p className="text-lg font-medium italic leading-relaxed max-w-lg text-brand-obsidian/70">
                “Gateway to Asia’s Expansion” — Connecting Canada with the world's most dynamic industrial frontiers.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, idx) => (
                  <a key={idx} href={social.href} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-emerald hover:text-white hover:border-brand-emerald transition-all shadow-sm">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-brand-obsidian font-black uppercase text-xs tracking-widest border-l-2 border-brand-emerald pl-4">Menu</h4>
              <nav className="flex flex-col space-y-3 text-xs font-bold uppercase tracking-widest">
                {navItems.slice(0, 5).map(item => (
                  <Link key={item.path} to={item.path} className="hover:text-brand-emerald transition-colors">{item.label}</Link>
                ))}
              </nav>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-brand-obsidian font-black uppercase text-xs tracking-widest border-l-2 border-brand-emerald pl-4">Contact</h4>
              <div className="space-y-4 text-xs font-medium italic">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-emerald mt-1 shrink-0" />
                  <span className="text-brand-obsidian/70">{CONTACT_INFO.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-emerald shrink-0" />
                  <span className="text-brand-obsidian/70">{CONTACT_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-emerald shrink-0" />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-brand-emerald hover:text-brand-obsidian transition-colors">{CONTACT_INFO.email}</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase font-black tracking-[0.4em] text-gray-400">
            <p>&copy; 2026 Asia’s Emerging Economies Expo. Organized by {CONTACT_INFO.organizer}.</p>
            <div className="mt-4 md:mt-0 space-x-6">
              <a href="#" className="hover:text-brand-emerald">Privacy Policy</a>
              <a href="#" className="hover:text-brand-emerald">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;