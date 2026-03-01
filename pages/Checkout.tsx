import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, CreditCard, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/success');
    }, 2000);
  };

  return (
    <div className="pb-32 bg-brand-navy min-h-screen">
      {/* Header */}
      <section className="bg-brand-navy pt-48 pb-12 text-center relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter leading-none italic">Checkout</h1>
          <p className="text-brand-coral font-bold tracking-[0.3em] text-[11px] italic">Complete Your Registration</p>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form Side */}
          <div className="lg:col-span-2 space-y-12">
            <form onSubmit={handlePayment} className="space-y-12">
              {/* Attendee Details */}
              <div className="bg-white/5 p-10 md:p-16 rounded-sm border border-white/10 shadow-2xl reveal">
                <h3 className="text-2xl font-black mb-10 tracking-tighter text-white border-b border-white/5 pb-6 italic">Attendee Details</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <InputGroup label="Full Name" placeholder="First & Last Name" required />
                  <InputGroup label="Email Address" placeholder="business@example.com" type="email" required />
                  <InputGroup label="Phone Number" placeholder="+1 (___) ___ ____" type="tel" required />
                  <InputGroup label="Country" placeholder="Country of Residence" required />
                  <InputGroup label="Organization" placeholder="Company / Institution" required />
                  <InputGroup label="Job Title" placeholder="e.g., Director of Trade" required />
                </div>
              </div>

              {/* Billing Details */}
              <div className="bg-white/5 p-10 md:p-16 rounded-sm border border-white/10 shadow-2xl reveal">
                <h3 className="text-2xl font-black mb-10 tracking-tighter text-white border-b border-white/5 pb-6 italic">Billing Details</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <InputGroup label="Billing Name" placeholder="Name on Card" required />
                  <InputGroup label="Billing Address" placeholder="Street Address" required />
                  <InputGroup label="City" placeholder="City" required />
                  <InputGroup label="Postal Code" placeholder="ZIP / Postal Code" required />
                  <InputGroup label="Country" placeholder="Billing Country" required />
                </div>
              </div>

              {/* Payment Section */}
              <div className="bg-white/5 p-10 md:p-16 rounded-sm border border-white/10 shadow-2xl reveal">
                <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-6">
                  <h3 className="text-2xl font-black tracking-tighter text-white italic">Payment Method</h3>
                  <div className="flex gap-4">
                    <CreditCard className="w-6 h-6" />
                    <Lock className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-white/40 text-sm mb-10 italic font-medium">
                  Your payment is processed securely via Stripe. We do not store your card details on our servers.
                </p>
                
                {/* Stripe Placeholder */}
                <div className="bg-white/5 border border-white/10 p-12 rounded-sm text-center space-y-6 mb-12">
                  <CreditCard className="w-12 h-12 text-brand-coral mx-auto opacity-20" />
                  <p className="text-[11px] font-bold tracking-tight text-white/20 italic">
                    [Stripe Payment Element Placeholder]
                  </p>
                </div>

                <div className="space-y-6">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input type="checkbox" required className="mt-1 accent-brand-coral" />
                    <span className="text-[11px] font-bold tracking-tight text-white/40 group-hover:text-white transition-colors italic">
                      I agree to the <Link to="/terms" className="text-brand-coral underline">Terms & Conditions</Link> and <Link to="/privacy" className="text-brand-coral underline">Privacy Policy</Link>.
                    </span>
                  </label>
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input type="checkbox" className="mt-1 accent-brand-coral" />
                    <span className="text-[11px] font-bold tracking-tight text-white/40 group-hover:text-white transition-colors italic">
                      I agree to receive event updates and marketing communications by email.
                    </span>
                  </label>
                </div>

                <button 
                  type="submit"
                  disabled={isProcessing}
                  className="w-full mt-12 bg-brand-coral text-white py-6 rounded-sm font-bold text-sm tracking-tight hover:bg-white hover:text-brand-coral transition-all shadow-xl flex items-center justify-center gap-4 group disabled:opacity-50 disabled:cursor-not-allowed italic"
                >
                  {isProcessing ? 'Processing Payment...' : 'Pay and Complete Registration'} 
                  {!isProcessing && <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />}
                </button>
                
                <div className="mt-8 flex items-center justify-center gap-2 text-[8px] text-white/20 font-black uppercase tracking-[0.4em] italic">
                  <ShieldCheck className="w-3 h-3" /> Encrypted 256-bit SSL Connection
                </div>
              </div>
            </form>
          </div>

          {/* Summary Side */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <div className="bg-white/5 p-10 rounded-sm border border-white/10 shadow-2xl reveal">
                <h3 className="text-xl font-black mb-8 tracking-tighter text-white border-b border-white/5 pb-4 italic">Order Summary</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-white font-bold text-xs tracking-tight italic">Full Event Pass</div>
                      <div className="text-white/40 text-[11px] font-bold tracking-tight italic">Qty: 1</div>
                    </div>
                    <div className="text-white font-black italic">CAD 350.00</div>
                  </div>
                  <div className="pt-6 border-t border-white/5 space-y-4">
                    <div className="flex justify-between text-[11px] font-bold tracking-tight text-white/40 italic">
                      <span>Subtotal</span>
                      <span>CAD 350.00</span>
                    </div>
                    <div className="flex justify-between text-[11px] font-bold tracking-tight text-white/40 italic">
                      <span>Taxes (13% HST)</span>
                      <span>CAD 45.50</span>
                    </div>
                    <div className="flex justify-between text-xl font-black tracking-tighter text-white pt-4 border-t border-white/10 italic">
                      <span>Total</span>
                      <span className="text-brand-coral">CAD 395.50</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-8 rounded-sm border border-white/10 reveal">
                <h4 className="text-xs font-bold mb-4 text-white italic">Need Help?</h4>
                <p className="text-[11px] text-white/40 font-bold tracking-tight italic leading-relaxed">
                  For assistance with your registration or payment, please contact our support team at <span className="text-brand-coral">support@aeee2026.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const InputGroup = ({ label, placeholder, type = "text", required = false }: { label: string, placeholder: string, type?: string, required?: boolean }) => (
  <div className="space-y-3 group">
    <label className="text-[11px] font-bold text-white/40 tracking-tight italic ml-4 group-focus-within:text-brand-coral transition-colors">
      {label} {required && <span className="text-brand-coral">*</span>}
    </label>
    <input 
      type={type} 
      required={required}
      className="w-full px-6 py-5 rounded-sm bg-white/5 border border-white/10 focus:bg-white/10 focus:border-brand-coral outline-none font-medium text-white transition-all italic" 
      placeholder={placeholder} 
    />
  </div>
);

export default Checkout;
