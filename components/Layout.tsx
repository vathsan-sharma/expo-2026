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
    { label: 'Participate', path: '#', subItems: [
      { label: 'Join as visitor', path: '/visitors' },
      { label: 'Join as exhibitor', path: '/exhibitors' },
      { label: 'Join as sponsor', path: '/sponsors' },
      { label: 'Speakers', path: '/speakers' },
      { label: 'Agenda', path: '/agenda' },
    ]},
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
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[95%] max-w-[1400px] ${
          isScrolled 
            ? 'bg-brand-navy/60 backdrop-blur-2xl border border-white/10 py-2 px-6 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)]' 
            : 'bg-brand-navy/20 backdrop-blur-md border border-white/5 py-3 px-10 rounded-3xl'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="https://raw.githubusercontent.com/vathsan-sharma/imagess/main/Untitled%20design%20(29)%20(1).png" 
              alt="AEEE 2026 Logo" 
              className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 ${
                isScrolled ? 'h-14' : 'h-20'
              }`}
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Navigation & Actions - Right Aligned */}
          <div className="flex items-center space-x-4 xl:space-x-8">
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => (
                <div key={item.label} className="relative group/nav-container">
                  {item.subItems ? (
                    <div className="flex flex-col items-center">
                      <button 
                        className={`px-3 py-2 text-xs xl:text-sm font-black tracking-[0.2em] transition-all duration-300 relative group/nav italic flex items-center gap-1 ${
                          item.subItems.some(sub => location.pathname === sub.path) ? 'text-brand-coral' : 'text-white/50 hover:text-white'
                        }`}
                      >
                        {item.label}
                        <ChevronRight className="w-3 h-3 rotate-90" />
                      </button>
                      {/* Dropdown */}
                      <div className="absolute top-full right-0 pt-4 opacity-0 translate-y-4 pointer-events-none group-hover/nav-container:opacity-100 group-hover/nav-container:translate-y-0 group-hover/nav-container:pointer-events-auto transition-all duration-300 z-[110]">
                        <div className="bg-brand-navy/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 min-w-[220px] shadow-2xl">
                          {item.subItems.map((sub) => (
                            <Link 
                              key={sub.path} 
                              to={sub.path}
                              className={`block px-4 py-3 text-[11px] xl:text-xs font-black tracking-widest transition-all italic hover:text-brand-coral ${
                                location.pathname === sub.path ? 'text-brand-coral' : 'text-white/50'
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link 
                      to={item.path}
                      className={`px-3 py-2 text-xs xl:text-sm font-black tracking-[0.2em] transition-all duration-300 relative group/nav italic ${
                        location.pathname === item.path ? 'text-brand-coral' : 'text-white/50 hover:text-white'
                      }`}
                    >
                      {item.label}
                      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-coral rounded-full transition-all duration-300 ${
                        location.pathname === item.path ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover/nav:opacity-50 group-hover/nav:scale-100'
                      }`}></span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center space-x-6">
              <Link 
                to="/registration" 
                className="relative group overflow-hidden bg-brand-coral text-white px-8 py-3 text-xs font-black tracking-widest rounded-full shadow-[0_10px_20px_rgba(242,125,38,0.3)] hover:shadow-[0_15px_30px_rgba(242,125,38,0.5)] transition-all italic"
              >
                <span className="relative z-10">Register</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="absolute inset-0 flex items-center justify-center text-brand-coral translate-y-full group-hover:translate-y-0 transition-transform duration-300 font-black z-20">Register</span>
              </Link>

              <button 
                className="lg:hidden p-2 text-white hover:text-brand-coral transition-colors" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-brand-navy/98 backdrop-blur-3xl z-[99] lg:hidden flex flex-col transition-all duration-700 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
          style={{ top: '0', left: '0', width: '100%', height: '100vh' }}
        >
          <div className="flex items-center justify-between p-8">
            <img 
              src="https://raw.githubusercontent.com/vathsan-sharma/imagess/main/Untitled%20design%20(29)%20(1).png" 
              alt="AEEE 2026 Logo" 
              className="h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <button 
              className="p-4 text-white hover:text-brand-coral transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <div className="flex-grow flex flex-col items-center justify-center space-y-6 px-8 overflow-y-auto py-20">
            {navItems.map((item, idx) => (
              <div key={item.label} className="flex flex-col items-center w-full">
                {item.subItems ? (
                  <div className="flex flex-col items-center space-y-4 w-full">
                    <button className="text-3xl font-black tracking-tighter italic text-white/30 mb-2">
                      {item.label}
                    </button>
                    <div className="flex flex-col items-center space-y-3 bg-white/5 w-full py-6 rounded-2xl border border-white/10">
                      {item.subItems.map((sub) => (
                        <Link 
                          key={sub.path} 
                          to={sub.path}
                          className={`text-xl font-black tracking-tighter transition-all duration-500 italic hover:text-brand-coral ${
                            location.pathname === sub.path ? 'text-brand-coral' : 'text-white'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    to={item.path}
                    className={`text-3xl font-black tracking-tighter transition-all duration-500 italic hover:text-brand-coral ${
                      location.pathname === item.path ? 'text-brand-coral' : 'text-white'
                    }`}
                    style={{ transitionDelay: `${idx * 50}ms` }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link 
              to="/registration"
              className="mt-12 bg-brand-coral text-white px-12 py-5 font-black text-sm tracking-[0.3em] rounded-full shadow-2xl italic"
              onClick={() => setIsMenuOpen(false)}
            >
              Secure your pass
            </Link>
          </div>

          <div className="p-12 border-t border-white/5 flex justify-center space-x-8">
            {socialLinks.map((social, idx) => (
              <a key={idx} href={social.href} className="text-white/40 hover:text-brand-coral transition-colors">
                {social.icon}
              </a>
            ))}
          </div>
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
                <li><Link to="/" className="text-white/40 hover:text-brand-coral transition-colors text-xs font-medium tracking-tight">Home</Link></li>
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
            <Link to="/" className="flex flex-col items-center group">
              <img 
                src="https://raw.githubusercontent.com/vathsan-sharma/imagess/main/Untitled%20design%20(29)%20(1).png" 
                alt="AEEE 2026 Logo" 
                className="h-32 w-auto object-contain mb-4 transition-transform group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <span className="text-[10px] text-white/60 font-bold tracking-[0.2em] uppercase">
                Asia's Emerging Economies Expo
              </span>
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