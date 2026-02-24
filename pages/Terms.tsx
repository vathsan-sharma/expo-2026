import React, { useEffect } from 'react';

const Terms: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-32 bg-brand-navy min-h-screen">
      <section className="bg-brand-navy pt-48 pb-24 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-brand-coral font-bold tracking-[0.3em] text-xs mb-8 block italic">Legal Information</span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none italic">Terms & Conditions</h1>
          <p className="text-white/60 text-lg md:text-2xl max-w-4xl mx-auto italic font-medium leading-relaxed">
            Please read these terms carefully before using our website or registering for AEEE 2026.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="glass-card p-12 md:p-20 border border-white/10 space-y-16 text-white/60 font-medium italic leading-relaxed">
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white tracking-tighter border-b border-white/5 pb-4 italic">1. Use of Website</h2>
            <p>
              By accessing this website, you agree to comply with these Terms & Conditions. The content provided is for informational purposes related to AEEE 2026. Unauthorized use of this website may give rise to a claim for damages.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white tracking-tighter border-b border-white/5 pb-4 italic">2. Event Registration</h2>
            <p>
              Registration for AEEE 2026 is subject to availability and confirmation. We reserve the right to refuse registration at our discretion. All registration details must be accurate and complete.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white tracking-tighter border-b border-white/5 pb-4 italic">3. Payment & Refunds</h2>
            <p>
              All payments are processed securely. Ticket prices are subject to change. Cancellations made before August 15, 2026, are eligible for a 50% refund. No refunds will be issued for cancellations after this date or for non-attendance.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white tracking-tighter border-b border-white/5 pb-4 italic">4. Intellectual Property</h2>
            <p>
              All materials on this website, including logos, designs, and text, are the intellectual property of the event organizers or their partners. Reproduction is prohibited without prior written consent.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white tracking-tighter border-b border-white/5 pb-4 italic">5. Liability</h2>
            <p>
              The organizers of AEEE 2026 are not liable for any personal injury, loss, or damage to property occurring during the event. We are not responsible for any travel or accommodation costs incurred by delegates.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white tracking-tighter border-b border-white/5 pb-4 italic">6. Governing Law</h2>
            <p>
              These terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein.
            </p>
          </div>

          <div className="pt-12 text-[11px] font-bold tracking-tight text-white/20 border-t border-white/5 italic">
            Last Updated: February 23, 2026
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
