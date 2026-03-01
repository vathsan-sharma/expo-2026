import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, MapPin, Download, Filter, ChevronRight, Users } from 'lucide-react';

const Agenda: React.FC = () => {
  const [activeDay, setActiveDay] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [activeDay]);

  const schedule = {
    1: [
      { time: "09:00 AM", title: "Opening Ceremony & Ministerial Keynote", track: "Main Stage", desc: "Official inauguration of AEEE 2026 with leaders from Canada and participating Asian nations." },
      { time: "11:30 AM", title: "The Future of Asia Pacific Trade", track: "Strategic Dialogue", desc: "Panel discussion on evolving trade policies and digital economy frameworks." },
      { time: "02:00 PM", title: "Fintech Frontier: Digital Banking in SE Asia", track: "Innovation Track", desc: "Exploring the rapid expansion of mobile banking and fintech ecosystems." },
      { time: "04:30 PM", title: "Networking Reception: Canada Asia Bridge", track: "Networking", desc: "Informal networking session for delegates and exhibitors." }
    ],
    2: [
      { time: "09:30 AM", title: "Energy Transition & Sustainability", track: "Green Economy", desc: "Focusing on renewable energy projects and cross border investment in green tech." },
      { time: "12:00 PM", title: "Manufacturing 4.0: Vietnam & Thailand", track: "Industrial Hub", desc: "Showcasing the next generation of industrial automation in emerging hubs." },
      { time: "02:30 PM", title: "AI & Data Sovereignty in Emerging Markets", track: "Innovation Track", desc: "Discussing data privacy and AI adoption across diverse regulatory landscapes." },
      { time: "07:00 PM", title: "Ministerial Gala Dinner", track: "VIP Event", desc: "Exclusive dinner for sponsors, speakers, and government delegates." }
    ],
    3: [
      { time: "10:00 AM", title: "B2B Matchmaking: Agri Tech Solutions", track: "Strategic Dialogue", desc: "Facilitated sessions between Canadian tech providers and Asian agricultural leaders." },
      { time: "01:00 PM", title: "The Rise of the Digital Nomad in Asia", track: "Lifestyle & Tourism", desc: "Impact of remote work on tourism and urban development in Thailand and Indonesia." },
      { time: "03:30 PM", title: "Closing Plenary: The 2030 Roadmap", track: "Main Stage", desc: "Summarizing key takeaways and announcing the roadmap for future collaboration." }
    ]
  };

  return (
    <div className="pb-32 bg-brand-navy min-h-screen">
      {/* Hero */}
      <section className="bg-brand-navy pt-48 pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in-up">
          <span className="text-brand-coral font-bold tracking-[0.3em] text-xs mb-8 block italic">Event Schedule</span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none italic">Conference Agenda</h1>
          <p className="text-white/60 text-lg md:text-2xl max-w-4xl mx-auto italic font-medium leading-relaxed">
            A comprehensive three day program featuring high level keynotes, technical tracks, and strategic B2B sessions.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48 reveal">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter text-brand-coral leading-none italic">Conference Overview</h2>
            <p className="text-white/60 text-xl leading-relaxed mb-12 font-medium italic">
              The AEEE 2026 Conference is designed to bridge the knowledge gap between Canadian investors and Asia's most dynamic industrial hubs.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {[
                { title: "Main Themes", list: ["Trade Policy", "Digital Innovation", "Sustainability"] },
                { title: "Tracks", list: ["Strategic Dialogue", "Innovation Track", "Green Economy"] }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <h4 className="text-xs font-bold text-white tracking-widest border-b border-brand-coral/20 pb-2 italic">{item.title}</h4>
                  <ul className="space-y-2">
                    {item.list.map((l, j) => (
                      <li key={j} className="text-[11px] font-bold tracking-tight text-white/40 flex items-center gap-2 italic">
                        <ChevronRight className="w-3 h-3 text-brand-coral" /> {l}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 p-12 rounded-sm border border-white/10 relative overflow-hidden bg-dots">
            <h4 className="text-2xl font-black text-white tracking-tighter mb-8 italic">Program at a Glance</h4>
            <div className="space-y-6">
              {[
                { day: "Day 01", focus: "Policy & Trade Frameworks" },
                { day: "Day 02", focus: "Innovation & Sustainability" },
                { day: "Day 03", focus: "B2B Matchmaking & Roadmaps" }
              ].map((d, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-brand-navy/50 border border-white/5 rounded-sm">
                  <span className="text-brand-coral font-bold tracking-widest text-xs italic">{d.day}</span>
                  <span className="text-white font-bold tracking-tight text-[11px] italic">{d.focus}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Agenda Tabs */}
        <div className="mb-48 reveal">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="flex bg-white/5 p-2 rounded-sm border border-white/10">
              {[1, 2, 3].map(day => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`px-12 py-4 rounded-sm font-bold text-sm tracking-tight transition-all italic ${activeDay === day ? 'bg-brand-coral text-white shadow-xl' : 'text-white/40 hover:text-white'}`}
                >
                  Day 0{day}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4 text-white/40 font-bold tracking-tight text-[11px] italic">
              <Filter className="w-4 h-4" /> Filter by Track
            </div>
          </div>

          <div className="space-y-8">
            {schedule[activeDay as keyof typeof schedule].map((session, i) => (
              <div key={i} className="glass-card p-10 md:p-16 border border-white/10 hover:border-brand-coral transition-all group grid md:grid-cols-4 gap-12 items-start">
                <div className="md:col-span-1">
                  <div className="text-3xl font-black text-white tracking-tighter mb-2 italic">{session.time}</div>
                  <div className="text-[11px] font-bold tracking-tight text-brand-coral italic">{session.track}</div>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter leading-none group-hover:text-brand-coral transition-colors italic">{session.title}</h3>
                  <p className="text-white/40 text-lg font-medium italic leading-relaxed">{session.desc}</p>
                  <div className="flex items-center gap-8 pt-4">
                    <div className="flex items-center gap-2 text-[11px] font-bold tracking-tight text-white/20 italic">
                      <MapPin className="w-4 h-4 text-brand-coral" /> Hall A - Main Stage
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-bold tracking-tight text-white/20 italic">
                      <Users className="w-4 h-4 text-brand-coral" /> Open to All Delegates
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center reveal">
          <button className="inline-flex items-center gap-4 bg-brand-coral text-white px-12 py-6 rounded-sm font-bold text-sm tracking-tight hover:bg-white hover:text-brand-coral transition-all shadow-2xl group italic">
            Download Detailed Agenda <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Agenda;
