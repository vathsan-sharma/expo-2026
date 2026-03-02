import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      category: "General",
      questions: [
        { q: "What is Asia's Powerful Economies Expo (AEEE) 2026?", a: "AEEE 2026 is a premier international trade event in Toronto, Canada, showcasing high growth opportunities across Asia's most dynamic powerful markets." },
        { q: "Where and when will the event take place?", a: "The expo will be held at the Exhibition Place, Toronto, from October 15 17, 2026." },
        { q: "Who should attend AEEE 2026?", a: "The event is designed for investors, trade leaders, government officials, and business executives looking to scale operations in the Asia Canada corridor." }
      ]
    },
    {
      category: "Registration & Tickets",
      questions: [
        { q: "How can I register for the event?", a: "You can register online via our Registration page. Select your pass type, provide your details, and complete the secure payment." },
        { q: "What payment methods are accepted?", a: "We accept all major credit cards and local payment methods processed securely via Stripe." },
        { q: "What is the refund policy?", a: "Cancellations made before August 15, 2026, are eligible for a 50% refund. No refunds will be issued after this date." }
      ]
    },
    {
      category: "Exhibitors",
      questions: [
        { q: "How do I book a booth?", a: "Please submit an enquiry via the Exhibitors page. Our team will contact you to discuss booth options and availability." },
        { q: "What is included in a standard booth package?", a: "A standard 9sqm booth includes shell scheme walls, basic lighting, one power socket, and a company name board." },
        { q: "When is the setup and teardown period?", a: "Setup begins on October 13, 2026. Teardown must be completed by 10:00 PM on October 17, 2026." }
      ]
    },
    {
      category: "Travel & Logistics",
      questions: [
        { q: "Do I need a visa to enter Canada?", a: "Visa requirements vary by country. Please check the official IRCC website for the latest information." },
        { q: "Are there recommended hotels near the venue?", a: "Yes, we have partnered with several hotels, including Hotel X Toronto, to offer exclusive rates for delegates." },
        { q: "Is parking available at the Exhibition Place?", a: "Yes, the venue has extensive on site parking facilities available for a daily fee." }
      ]
    }
  ];

  return (
    <div className="pb-32 bg-brand-navy min-h-screen">
      {/* Hero */}
      <section className="bg-brand-navy pt-32 md:pt-48 pb-16 md:pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <div className="container-custom relative z-10 animate-fade-in-up">
          <span className="text-brand-coral font-bold tracking-[0.3em] text-xs mb-8 block italic">Support Center</span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none italic">Frequently Asked Questions</h1>
          <p className="text-white/60 text-lg md:text-2xl max-w-4xl mx-auto italic font-medium leading-relaxed">
            Find answers to common questions about registration, exhibiting, travel, and the overall event experience.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-32 container-custom max-w-4xl">
        <div className="space-y-24">
          {faqs.map((group, gIdx) => (
            <div key={gIdx} className="reveal">
              <h2 className="text-2xl font-black text-brand-coral tracking-tighter mb-10 border-b border-white/5 pb-4 italic">[{group.category}]</h2>
              <div className="space-y-4">
                {group.questions.map((faq, qIdx) => {
                  const index = gIdx * 10 + qIdx;
                  const isOpen = openIndex === index;
                  return (
                    <div key={qIdx} className={`glass-card border border-white/10 transition-all ${isOpen ? 'border-brand-coral bg-white/5' : 'hover:border-white/20'}`}>
                      <button 
                         onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="w-full p-8 flex items-center justify-between text-left"
                      >
                        <span className="text-lg font-black text-white tracking-tighter leading-tight italic">{faq.q}</span>
                        {isOpen ? <Minus className="w-5 h-5 text-brand-coral flex-shrink-0" /> : <Plus className="w-5 h-5 text-white/20 flex-shrink-0" />}
                      </button>
                      {isOpen && (
                        <div className="px-8 pb-8 animate-fade-in">
                          <p className="text-white/40 text-sm italic font-medium leading-relaxed border-t border-white/5 pt-6">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-48 bg-white/5 p-16 md:p-24 rounded-sm border border-white/10 text-center reveal relative overflow-hidden bg-dots">
          <HelpCircle className="w-16 h-16 text-brand-coral mx-auto mb-10" />
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-8 italic">Still Have Questions?</h3>
          <p className="text-white/40 text-lg mb-12 italic font-medium max-w-2xl mx-auto leading-relaxed">
            Our team is here to help. Reach out to us directly for any specific inquiries not covered in the FAQ.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-4 bg-brand-coral text-white px-12 py-6 rounded-sm font-bold text-sm tracking-tight hover:bg-white hover:text-brand-coral transition-all shadow-xl group italic">
            Contact Support <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
