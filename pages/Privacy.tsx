import React, { useEffect } from 'react';

const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-32 bg-brand-navy min-h-screen">
      <section className="bg-brand-navy pt-48 pb-24 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-brand-coral font-bold tracking-[0.3em] text-xs mb-8 block italic">Legal Information</span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none italic">Privacy Policy</h1>
          <p className="text-white/60 text-lg md:text-2xl max-w-4xl mx-auto italic font-medium leading-relaxed">
            Your privacy is paramount. This policy outlines how we collect, use, and protect your personal data.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="glass-card p-12 md:p-20 border border-white/10 space-y-16 text-white/60 font-medium italic leading-relaxed">
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white tracking-tighter border-b border-white/5 pb-4 italic">1. Data Collection</h2>
            <p>
              We collect personal information that you provide directly to us when you register for the event, subscribe to our newsletter, or contact us for enquiries. This may include your name, email address, phone number, organization, and job title.
            </p>
            <p>
              We also collect payment information via our secure third party processor, Stripe. We do not store full credit card details on our servers.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white tracking-tighter border-b border-white/5 pb-4 italic">2. Use of Data</h2>
            <p>
              Your data is used to facilitate your participation in AEEE 2026, including processing registrations, providing event updates, and managing on site access. We also use data for internal analytics to improve our services.
            </p>
            <p>
              If you have opted in, we may use your contact information to send you marketing communications about future events and industry insights.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white tracking-tighter border-b border-white/5 pb-4 italic">3. Data Sharing</h2>
            <p>
              We share your data with trusted third party service providers who assist in our operations, such as payment processors (Stripe), email service providers, and event management platforms.
            </p>
            <p>
              We do not sell your personal data to third parties. We may disclose information if required by law or to protect our legal rights.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white tracking-tighter border-b border-white/5 pb-4 italic">4. Security</h2>
            <p>
              We implement high level security measures, including 256 bit SSL encryption, to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white tracking-tighter border-b border-white/5 pb-4 italic">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact our privacy officer at <span className="text-brand-coral">privacy@aeee2026.com</span>.
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

export default Privacy;
