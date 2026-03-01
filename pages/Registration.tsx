import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Calendar, ShieldCheck, Clock, CreditCard } from 'lucide-react';

const Registration: React.FC = () => {
  const ticketTypes = [
    { name: "Visitor Pass", price: "CAD 0", access: "Exhibition Hall", notes: "Valid for 1 day" },
    { name: "Full Event Pass", price: "CAD 0", access: "All Tracks + Expo", notes: "Valid for 3 days" },
    { name: "Conference Pass", price: "CAD 0", access: "Conference Sessions", notes: "Valid for 3 days" },
    { name: "VIP Executive", price: "CAD 0", access: "All Access + VIP Lounge", notes: "Limited availability" }
  ];

  return (
    <div className="pb-32 bg-brand-navy min-h-screen">
      {/* Hero */}
      <section className="bg-brand-navy pt-48 pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 relative z-10"
        >
          <span className="text-brand-coral font-bold tracking-[0.3em] text-xs mb-8 block italic">Secure Your Spot</span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none italic">Registration & Tickets</h1>
          <p className="text-white/60 text-lg md:text-2xl max-w-4xl mx-auto italic font-medium leading-relaxed">
            Choose the right pass for your professional goals and join the conversation shaping the future of Asia Canada trade.
          </p>
        </motion.div>
      </section>

      {/* Ticket Options */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="mb-48">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-16 tracking-tighter text-white text-center italic uppercase"
          >
            Ticket Options
          </motion.h2>
          
          {/* Desktop Table View */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden md:block overflow-hidden rounded-sm border border-white/10 mb-24"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="p-8 text-[11px] font-bold tracking-tight text-brand-coral italic uppercase">Ticket Type</th>
                  <th className="p-8 text-[11px] font-bold tracking-tight text-brand-coral italic uppercase">Access</th>
                  <th className="p-8 text-[11px] font-bold tracking-tight text-brand-coral italic uppercase">Price</th>
                  <th className="p-8 text-[11px] font-bold tracking-tight text-brand-coral italic uppercase">Notes</th>
                  <th className="p-8"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {ticketTypes.map((ticket, i) => (
                  <motion.tr 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="hover:bg-white/5 transition-colors group"
                  >
                    <td className="p-8 font-black text-white tracking-tighter text-xl italic">{ticket.name}</td>
                    <td className="p-8 text-white/40 text-xs font-bold tracking-tight italic uppercase">{ticket.access}</td>
                    <td className="p-8 text-white font-black text-2xl tracking-tighter italic">{ticket.price}</td>
                    <td className="p-8 text-white/20 text-[11px] font-bold tracking-tight italic uppercase">{ticket.notes}</td>
                    <td className="p-8 text-right">
                      <Link to="/checkout" className="inline-flex items-center gap-2 bg-brand-coral text-white px-6 py-3 rounded-full font-bold text-xs tracking-tight hover:bg-white hover:text-brand-coral transition-all italic uppercase">
                        Select <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-8 mb-24">
            {ticketTypes.map((ticket, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 border border-white/10 space-y-6 bg-white/5 rounded-sm"
              >
                <h3 className="text-2xl font-black text-white tracking-tighter italic">{ticket.name}</h3>
                <div className="text-4xl font-black text-brand-coral tracking-tighter italic">{ticket.price}</div>
                <div className="space-y-2">
                  <div className="text-[11px] font-bold tracking-tight text-white/40 italic uppercase">Access: {ticket.access}</div>
                  <div className="text-[11px] font-bold tracking-tight text-white/20 italic uppercase">{ticket.notes}</div>
                </div>
                <Link to="/checkout" className="block text-center bg-brand-coral text-white py-4 rounded-full font-bold text-sm tracking-tight italic uppercase">
                  Select Ticket
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Key Dates */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Early Bird Ends", date: "June 30, 2026", icon: <Clock /> },
              { label: "Standard Ends", date: "Sept 30, 2026", icon: <Calendar /> },
              { label: "On Site Registration", date: "Oct 15 17, 2026", icon: <MapPin /> }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, borderColor: "#E31837" }}
                className="p-10 bg-white/5 border border-white/10 rounded-sm text-center space-y-4 group transition-all"
              >
                <div className="text-brand-coral mx-auto group-hover:scale-110 transition-transform">{React.cloneElement(item.icon as React.ReactElement, { className: 'w-8 h-8 mx-auto' })}</div>
                <h4 className="text-[11px] font-bold tracking-tight text-white/40 italic">{item.label}</h4>
                <div className="text-xl font-black text-white tracking-tighter italic">{item.date}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Registration Steps */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 rounded-sm p-16 md:p-32 text-white border border-white/10 relative overflow-hidden bg-dots mb-48"
        >
          <h2 className="text-4xl md:text-7xl font-black mb-16 tracking-tighter leading-none text-center italic">Registration Steps</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Select Ticket", desc: "Choose the pass that fits your needs from the options above.", icon: <ArrowRight /> },
              { step: "02", title: "Provide Details", desc: "Fill in your professional information and attendee details.", icon: <Users /> },
              { step: "03", title: "Secure Payment", desc: "Complete your purchase safely via our Stripe powered checkout.", icon: <CreditCard /> }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="space-y-6 text-center"
              >
                <div className="text-5xl font-black text-brand-coral/20 italic">{s.step}</div>
                <h4 className="text-2xl font-black tracking-tighter italic">{s.title}</h4>
                <p className="text-white/40 text-[11px] font-bold tracking-tight italic leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center space-y-8">
            <Link to="/checkout" className="inline-flex items-center gap-4 bg-brand-coral text-white px-16 py-8 rounded-sm font-bold text-base tracking-tight hover:bg-white hover:text-brand-coral transition-all shadow-2xl group italic">
              Start Registration <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            <div className="flex items-center gap-3 text-[11px] font-bold tracking-tight text-white/20 italic">
              <ShieldCheck className="w-4 h-4 text-brand-coral" /> Secure 256-bit SSL Encrypted Payment
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

const MapPin = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

const Users = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

export default Registration;
