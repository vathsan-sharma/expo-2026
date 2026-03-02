import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Download, Calendar, Home, ArrowRight, Mail } from 'lucide-react';

const Success: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-32 bg-brand-navy min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
        <div className="w-24 h-24 bg-brand-coral/20 rounded-full flex items-center justify-center mx-auto mb-12">
          <CheckCircle2 className="w-12 h-12 text-brand-coral" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none italic">Your Registration Is Confirmed</h1>
        
        <p className="text-white/60 text-xl md:text-2xl font-medium italic mb-16 leading-relaxed max-w-2xl mx-auto">
          Thank you for registering for AEEE 2026. Your payment was successful, and your spot is now secured.
        </p>

        <div className="bg-white/5 p-10 md:p-16 rounded-sm border border-white/10 shadow-2xl mb-16 text-left relative overflow-hidden bg-dots">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-xl font-black text-brand-coral tracking-tighter border-b border-white/5 pb-4 italic">Registration Summary</h3>
              <div className="space-y-4">
                {[
                  { label: "Attendee", value: "Alex Thompson" },
                  { label: "Pass Type", value: "Full Event Pass" },
                  { label: "Amount Paid", value: "CAD 395.50" },
                  { label: "Order ID", value: "#AEEE 88291 X" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-[11px] font-bold tracking-tight italic">
                    <span className="text-white/40 italic">{item.label}</span>
                    <span className="text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-xl font-black text-brand-coral tracking-tighter border-b border-white/5 pb-4 italic">Event Details</h3>
              <div className="space-y-4">
                {[
                  { label: "Event", value: "AEEE 2026" },
                  { label: "Dates", value: "Oct 15 17, 2026" },
                  { label: "Venue", value: "Exhibition Place" },
                  { label: "City", value: "Toronto, Canada" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-[11px] font-bold tracking-tight italic">
                    <span className="text-white/40 italic">{item.label}</span>
                    <span className="text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="glass-card p-8 border border-white/10 text-center space-y-4">
            <Mail className="w-8 h-8 text-brand-coral mx-auto" />
            <h4 className="text-xs font-bold text-white italic">Check Your Email</h4>
            <p className="text-[11px] text-white/40 font-bold tracking-tight italic">We've sent your confirmation and receipt.</p>
          </div>
          <div className="glass-card p-8 border border-white/10 text-center space-y-4">
            <Calendar className="w-8 h-8 text-brand-coral mx-auto" />
            <h4 className="text-xs font-bold text-white italic">Add to Calendar</h4>
            <p className="text-[11px] text-white/40 font-bold tracking-tight italic">Don't miss a single session.</p>
          </div>
          <div className="glass-card p-8 border border-white/10 text-center space-y-4">
            <Download className="w-8 h-8 text-brand-coral mx-auto" />
            <h4 className="text-xs font-bold text-white italic">Download Ticket</h4>
            <p className="text-[11px] text-white/40 font-bold tracking-tight italic">Save your digital badge for entry.</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/" className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white px-10 py-5 rounded-sm font-bold text-sm tracking-tight hover:bg-brand-coral hover:border-brand-coral transition-all italic">
            <Home className="w-4 h-4" /> Back to Home
          </Link>
          <Link to="/venue" className="inline-flex items-center gap-3 bg-brand-coral text-white px-10 py-5 rounded-sm font-bold text-sm tracking-tight hover:bg-white hover:text-brand-coral transition-all shadow-xl group italic">
            Plan Your Visit <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
