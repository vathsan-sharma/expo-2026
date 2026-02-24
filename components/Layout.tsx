import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronRight, Phone, Mail, MapPin, Linkedin, Twitter, Instagram, Facebook, Youtube } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    { label: 'Visitors', path: '/visitors' },
    { label: 'Exhibitors', path: '/exhibitors' },
    { label: 'Sponsors', path: '/sponsors' },
    { label: 'Agenda', path: '/agenda' },
    { label: 'Speakers', path: '/speakers' },
    { label: 'Venue', path: '/venue' },
    { label: 'Countries', path: '/countries' },
    { label: 'Sectors', path: '/sectors' },
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-4 h-4" />, href: "#" },
    { icon: <Twitter className="w-4 h-4" />, href: "#" },
    { icon: <Instagram className="w-4 h-4" />, href: "#" },
    { icon: <Facebook className="w-4 h-4" />, href: "#" },
    { icon: <Youtube className="w-4 h-4" />, href: "#" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-navy">
      {/* Header */}
      <header 
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[95%] max-w-[1200px] ${
          isScrolled 
            ? 'bg-brand-navy/80 backdrop-blur-xl border border-white/10 py-2 px-6 rounded-full shadow-2xl' 
            : 'bg-brand-navy/40 backdrop-blur-md border border-white/5 py-3 px-8 rounded-2xl'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black text-white tracking-tighter group-hover:text-brand-coral transition-colors">
                AEEE <span className="text-brand-coral group-hover:text-white">2026</span>
              </span>
            </div>
          </Link>

          {/* Navigation - Centered */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`text-[11px] font-bold uppercase tracking-widest transition-all duration-300 relative group/nav ${
                  location.pathname === item.path ? 'text-brand-coral' : 'text-white/60 hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-coral transition-all duration-300 group-hover/nav:w-full ${
                  location.pathname === item.path ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/registration" 
              className="bg-brand-coral text-white px-5 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-brand-coral transition-all shadow-lg rounded-full"
            >
              Register
            </Link>

            <button 
              className="lg:hidden p-2 text-white hover:text-brand-coral transition-colors" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-brand-navy/95 backdrop-blur-2xl z-[99] lg:hidden flex flex-col items-center justify-center space-y-6 transition-all duration-500 rounded-3xl ${
            isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
          style={{ top: '0', left: '0', width: '100%', height: '100vh' }}
        >
          <button 
            className="absolute top-8 right-8 p-4 text-white hover:text-brand-coral transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`text-2xl font-black tracking-tighter uppercase transition-colors italic ${
                location.pathname === item.path ? 'text-brand-coral' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            to="/registration"
            className="mt-8 bg-brand-coral text-white px-10 py-4 font-black text-xs uppercase tracking-[0.2em] rounded-full"
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
      <footer className="bg-brand-navy text-white/60 pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-24 text-center md:text-left">
            <div>
              <h4 className="text-white font-bold tracking-tight text-sm mb-8 italic">Navigation</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-white/40 hover:text-brand-coral transition-colors text-xs font-medium tracking-tight">About the Expo</Link></li>
                <li><Link to="/visitors" className="text-white/40 hover:text-brand-coral transition-colors text-xs font-medium tracking-tight">Visitors</Link></li>
                <li><Link to="/exhibitors" className="text-white/40 hover:text-brand-coral transition-colors text-xs font-medium tracking-tight">Exhibitors</Link></li>
                <li><Link to="/agenda" className="text-white/40 hover:text-brand-coral transition-colors text-xs font-medium tracking-tight">Conference Agenda</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold tracking-tight text-sm mb-8 italic">Resources</h4>
              <ul className="space-y-4">
                <li><Link to="/news" className="text-white/40 hover:text-brand-coral transition-colors text-xs font-medium tracking-tight">News & Updates</Link></li>
                <li><Link to="/faq" className="text-white/40 hover:text-brand-coral transition-colors text-xs font-medium tracking-tight">FAQ</Link></li>
                <li><Link to="/privacy" className="text-white/40 hover:text-brand-coral transition-colors text-xs font-medium tracking-tight">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-white/40 hover:text-brand-coral transition-colors text-xs font-medium tracking-tight">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white font-bold tracking-tight text-sm mb-8 italic">Contact</h4>
              <ul className="space-y-4">
                <li className="text-white/40 text-xs font-medium tracking-tight">{CONTACT_INFO.email}</li>
                <li className="text-white/40 text-xs font-medium tracking-tight">{CONTACT_INFO.phone}</li>
                <li className="text-white/40 text-xs font-medium tracking-tight leading-relaxed">{CONTACT_INFO.address}</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-12 mb-16">
            <Link to="/" className="flex flex-col items-center space-y-2 group">
              <div className="flex flex-col leading-none items-center">
                <span className="text-4xl font-black text-white tracking-tighter">
                  AEEE <span className="text-brand-coral">2026</span>
                </span>
                <span className="text-[10px] text-white/60 font-bold tracking-[0.2em]">
                  Asia's Emerging Economies Expo
                </span>
              </div>
            </Link>

            <div className="flex space-x-6">
              {socialLinks.map((social, idx) => (
                <a key={idx} href={social.href} className="text-white hover:text-brand-coral transition-all p-2 border border-white/10 rounded-full hover:border-brand-coral">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[11px] font-medium tracking-tight text-white/40">
            <p>&copy; 2026 Asia’s Emerging Economies Expo. All Rights Reserved.</p>
            <div className="mt-4 md:mt-0 space-x-8">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="text-white/10">|</span>
              <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <span className="text-white/10">|</span>
              <p className="inline">Organized by CSB Convention Secretariat.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;