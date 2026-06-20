import { Shield, Handshake, Landmark, ChevronRight } from 'lucide-react';

interface HeroProps {
  onNavClick: (tab: string) => void;
}

export default function Hero({ onNavClick }: HeroProps) {
  // Nairobi law office image
  const heroImage = "/src/assets/images/law_office_nairobi_1781868219976.jpg";

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-white text-[#1B2A4A] overflow-hidden border-b border-gray-100">
      
      {/* Structural layout: Two-column split with gorgeous clean minimalism */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Title and details in pristine white/gray layout */}
        <div className="lg:col-span-7 space-y-8 text-left animate-fade-in">
          {/* LSK Compliant Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C9A84C]/10 border border-[#C9A84C]/25 rounded-sm text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#C9A84C] font-mono font-bold">
            <Shield size={12} className="text-[#C9A84C]" />
            <span>LSK Registered LLP • Nairobi, Kenya</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-xs font-bold text-[#C9A84C] uppercase tracking-[0.3em] font-sans">
              Excellence in Kenyan Law
            </h2>
            <h1 className="font-serif font-light text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.12] text-[#1B2A4A] italic">
              Uncompromising <span className="font-bold not-italic underline decoration-[#C9A84C] decoration-4">Legal Stewardship</span> for Kenya's Innovators.
            </h1>
          </div>

          <p className="font-sans text-sm md:text-base text-gray-500 max-w-xl leading-relaxed">
            NEVYL ADVOCATES LLP provides world-class legal counsel anchored on deep knowledge of Kenyan statutes—from digital land registration via <strong className="text-[#1B2A4A] font-semibold">Ardhisasa</strong> to high-stakes defense at the <strong className="text-[#1B2A4A] font-semibold">Employment and Labour Relations Court (ELRC)</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => onNavClick('contact')}
              className="px-8 py-4 bg-[#1B2A4A] hover:bg-[#C9A84C] text-white hover:text-[#1B2A4A] font-bold font-sans text-xs uppercase tracking-widest rounded-sm shadow-md transition-all text-center cursor-pointer flex items-center justify-center gap-2"
            >
              Book Legal Audit <ChevronRight size={14} />
            </button>
            <button
              onClick={() => onNavClick('practices')}
              className="px-8 py-4 bg-transparent hover:bg-gray-50 border border-gray-200 text-[#1B2A4A] font-bold font-sans text-xs uppercase tracking-widest rounded-sm transition-all text-center cursor-pointer"
            >
              Examine Practice Areas
            </button>
          </div>

          {/* Quick Kenyan statutory contexts trust icons with minimalist accents */}
          <div className="pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl text-[11px] text-gray-400 font-mono uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <Landmark className="text-[#C9A84C] w-4 h-4 flex-shrink-0" />
              <span>Companies Act 2015</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="text-[#C9A84C] w-4 h-4 flex-shrink-0" />
              <span>Data Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Handshake className="text-[#C9A84C] w-4 h-4 flex-shrink-0" />
              <span>LSK Approved</span>
            </div>
          </div>
        </div>

        {/* Right Column: Floating high-contrast minimalist stats panel */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md bg-[#1B2A4A] p-8 md:p-10 rounded-sm border border-gray-800 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            {/* Background Graphic overlay inside stats card matching design pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C9A84C 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
            
            <div className="relative z-10 space-y-8">
              <div className="flex items-end justify-between border-b border-white/10 pb-4">
                <h3 className="font-serif italic font-light text-xl text-[#C9A84C]">Chambers Overview</h3>
                <span className="text-[10px] uppercase font-mono tracking-wider text-white/40">Nairobi, KE</span>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-serif text-[#C9A84C] font-semibold leading-none">15+</div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-white font-bold font-sans">Practice Years</h4>
                    <p className="text-[11px] text-white/60 mt-1 leading-relaxed">High-caliber litigators and legal draftsmen of the High Court of Kenya.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-t border-white/5 pt-5">
                  <div className="text-3xl font-serif text-[#C9A84C] font-semibold leading-none">KES 2.5B+</div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-white font-bold font-sans">Secured Assets</h4>
                    <p className="text-[11px] text-white/60 mt-1 leading-relaxed">Perfected lending securities, residential deeds, and escrow accounts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-t border-white/5 pt-5">
                  <div className="text-4xl font-serif text-[#C9A84C] font-semibold leading-none">98%</div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-white font-bold font-sans">Mediation Success</h4>
                    <p className="text-[11px] text-white/60 mt-1 leading-relaxed">We prioritize cost-efficient arbitration preserving client reputation.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 text-center">
                <span className="text-[10px] text-white/45 font-mono uppercase tracking-[0.15em]">
                  Registered under Law Society of Kenya
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
