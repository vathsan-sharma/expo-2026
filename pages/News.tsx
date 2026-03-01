import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag, User, Share2, Newspaper, Mic2, Star } from 'lucide-react';

const News: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const articles = [
    {
      category: "Announcement",
      date: "Oct 12, 2025",
      title: "Toronto Confirmed as Host City for AEEE 2026",
      desc: "The Enercare Centre will serve as the official venue for Asia's largest emerging economies showcase in Canada.",
      image: "https://images.unsplash.com/photo-1506970845246-18f21d533b20?auto=format&fit=crop&q=80&w=800"
    },
    {
      category: "Partnership",
      date: "Nov 05, 2025",
      title: "Title Sponsors Announced for Strategic Trade Council",
      desc: "Leading financial institutions join forces to support cross border innovation and sustainable development.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800"
    },
    {
      category: "Speaker News",
      date: "Dec 15, 2025",
      title: "First Wave of Keynote Speakers Revealed",
      desc: "Visionaries from central banks and tech unicorns confirmed for the AEEE 2026 main stage.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pb-32 bg-brand-navy min-h-screen">
      {/* Hero */}
      <section className="bg-brand-navy pt-48 pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in-up">
          <span className="text-brand-coral font-bold tracking-[0.3em] text-xs mb-8 block italic">Latest Updates</span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none italic">News & Updates</h1>
          <p className="text-white/60 text-lg md:text-2xl max-w-4xl mx-auto italic font-medium leading-relaxed">
            Stay informed with the latest announcements, sector insights, and stories from the AEEE 2026 community.
          </p>
        </div>
      </section>

      {/* Latest Announcements */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 mb-48">
          {articles.map((article, i) => (
            <div key={i} className="reveal group" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="relative aspect-video rounded-sm overflow-hidden mb-8 border border-white/10">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-brand-coral text-white px-4 py-1.5 rounded-sm font-bold text-[9px] tracking-tight italic">{article.category}</div>
              </div>
              <div className="flex items-center gap-4 text-[9px] font-bold tracking-tight text-white/20 mb-4 italic">
                <Calendar className="w-3 h-3 text-brand-coral" /> {article.date}
              </div>
              <h3 className="text-2xl font-black text-white tracking-tighter mb-6 group-hover:text-brand-coral transition-colors leading-none italic">{article.title}</h3>
              <p className="text-white/40 text-sm italic font-medium leading-relaxed mb-8">{article.desc}</p>
              <Link to="#" className="inline-flex items-center gap-2 text-[11px] font-bold tracking-tight text-brand-coral hover:text-white transition-colors italic">
                Read Full Story <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>

        {/* Insights & Stories */}
        <div className="bg-white/5 rounded-sm p-16 md:p-32 text-white reveal border border-white/10 relative overflow-hidden bg-dots mb-48">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter text-brand-coral leading-none italic">Insights & Stories</h2>
              <p className="text-white/60 text-xl leading-relaxed mb-12 font-medium italic">
                Deep dives into the trends shaping emerging markets, from the rise of Fintech in SE Asia to the future of green manufacturing.
              </p>
              <div className="space-y-8">
                {[
                  { title: "The Digital Rupee: Impact on Trade", author: "Dr. Amara Singh" },
                  { title: "Vietnam's Tech Boom: A New Hub", author: "Nguyen Van Minh" },
                  { title: "Sustainable Supply Chains in 2026", author: "Elena Vance" }
                ].map((insight, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-brand-navy/50 border border-white/5 rounded-sm group cursor-pointer hover:border-brand-coral transition-all">
                    <div>
                      <h4 className="text-lg font-black tracking-tighter group-hover:text-brand-coral transition-colors italic">{insight.title}</h4>
                      <div className="flex items-center gap-2 text-[9px] font-bold tracking-tight text-white/20 italic">
                        <User className="w-3 h-3" /> {insight.author}
                      </div>
                    </div>
                    <Share2 className="w-4 h-4 text-white/10 group-hover:text-brand-coral" />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-sm overflow-hidden border border-white/10 aspect-square">
              <img src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Insights" />
            </div>
          </div>
        </div>

        {/* Media & Press */}
        <div className="grid lg:grid-cols-3 gap-12 reveal">
          <div className="glass-card p-12 border border-white/10 space-y-8">
            <Newspaper className="w-12 h-12 text-brand-coral" />
            <h4 className="text-2xl font-black text-white tracking-tighter italic">Press Releases</h4>
            <p className="text-white/40 text-sm italic font-medium leading-relaxed">Official statements and media kits for accredited journalists.</p>
            <Link to="#" className="inline-flex items-center gap-2 text-[11px] font-bold tracking-tight text-brand-coral italic">
              Access Media Kit <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="glass-card p-12 border border-white/10 space-y-8">
            <Mic2 className="w-12 h-12 text-brand-coral" />
            <h4 className="text-2xl font-black text-white tracking-tighter italic">Media Accreditation</h4>
            <p className="text-white/40 text-sm italic font-medium leading-relaxed">Apply for press credentials to cover AEEE 2026 on-site.</p>
            <Link to="/registration" className="inline-flex items-center gap-2 text-[11px] font-bold tracking-tight text-brand-coral italic">
              Apply Now <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="glass-card p-12 border border-white/10 space-y-8">
            <Star className="w-12 h-12 text-brand-coral" />
            <h4 className="text-2xl font-black text-white tracking-tighter italic">Media Contact</h4>
            <p className="text-white/40 text-sm italic font-medium leading-relaxed">Direct line for press inquiries and interview requests.</p>
            <p className="text-white font-bold text-[11px] tracking-tight italic">press@aeee2026.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
