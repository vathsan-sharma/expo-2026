import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { XCircle, RefreshCcw, Mail, Phone, ArrowLeft } from 'lucide-react';

const Failed: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-32 bg-brand-navy min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
        <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-12">
          <XCircle className="w-12 h-12 text-red-500" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none italic">Payment Could Not Be Completed</h1>
        
        <p className="text-white/60 text-xl md:text-2xl font-medium italic mb-16 leading-relaxed max-w-2xl mx-auto">
          We were unable to process your payment. No charges were made to your account. Please try again or contact our support team.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-24">
          <Link to="/checkout" className="inline-flex items-center gap-3 bg-brand-coral text-white px-12 py-6 rounded-sm font-bold text-sm tracking-tight hover:bg-white hover:text-brand-coral transition-all shadow-xl group italic">
            <RefreshCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" /> Try Payment Again
          </Link>
          <Link to="/registration" className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white px-12 py-6 rounded-sm font-bold text-sm tracking-tight hover:bg-white hover:text-brand-navy transition-all italic">
            <ArrowLeft className="w-4 h-4" /> Back to Ticket Selection
          </Link>
        </div>

        <div className="bg-white/5 p-10 md:p-16 rounded-sm border border-white/10 shadow-2xl text-left relative overflow-hidden bg-dots">
          <h3 className="text-2xl font-black text-white tracking-tighter mb-10 border-b border-white/5 pb-6 italic">Support & Assistance</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-brand-coral group-hover:bg-brand-coral group-hover:text-white transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white italic mb-2">Email Support</h4>
                <p className="text-[11px] text-white/40 font-bold tracking-tight italic">support@aeee2026.com</p>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-brand-coral group-hover:bg-brand-coral group-hover:text-white transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white italic mb-2">Phone Support</h4>
                <p className="text-[11px] text-white/40 font-bold tracking-tight italic">+1 (416) 555-0199</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Failed;
