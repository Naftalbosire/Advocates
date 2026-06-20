import { ShieldCheck, Award, FileText, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about-us-section" className="py-24 bg-white px-6 md:px-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A84C] font-mono font-bold block">About Our Chambers</span>
            <h2 className="font-serif font-light text-3.5xl md:text-4.5xl leading-tight text-[#1B2A4A] italic">
              Your Trusted Advocates for <span className="font-bold not-italic underline decoration-[#C9A84C] decoration-2">Commercial Expansion</span> &amp; Asset Protection in Kenya.
            </h2>
            <div className="w-12 h-px bg-[#C9A84C]" />
            
            <p className="text-sm text-gray-500 leading-relaxed font-sans">
              Based in the bustling corporate capital of Westlands, Nairobi, <strong>NEVYL ADVOCATES LLP</strong> is a prominent, full-service boutique Kenyan legal partnership. Born from a shared vision of removing administrative friction from civil representations, we represent both individual land families and high-end tech-enabled start-ups.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed font-sans">
              Our firm actively shapes practice standards. We were among the early advocates to establish fully qualified digital conveyance departments following the Ministry of Lands digitisation, guaranteeing that client deeds, allotments, and easements are processed securely and swiftly.
            </p>

            <div className="grid grid-cols-2 gap-y-4 gap-x-2 pt-6 text-xs font-semibold uppercase tracking-wider font-sans text-[#1B2A4A]">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="text-[#C9A84C] w-4 h-4 flex-shrink-0" />
                <span>LSK Accredited LLP</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="text-[#C9A84C] w-4 h-4 flex-shrink-0" />
                <span>East Africa Reach</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="text-[#C9A84C] w-4 h-4 flex-shrink-0" />
                <span>Certified Mediators</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FileText className="text-[#C9A84C] w-4 h-4 flex-shrink-0" />
                <span>ODPC Certified</span>
              </div>
            </div>
          </div>

          {/* Right Side Box representing premium corporate chamber details */}
          <div className="relative bg-[#1B2A4A] p-8 md:p-10 rounded-sm text-white overflow-hidden border border-gray-800">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A84C]/5 rounded-full blur-2xl" />
            
            <h3 className="font-serif italic font-light text-xl text-[#C9A84C] mb-6 border-b border-white/10 pb-3 uppercase tracking-widest">
              Legal Integrity Mission
            </h3>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full" /> The Vision
                </h4>
                <p className="text-xs text-white/70 leading-relaxed pl-3.5">
                  To serve as the benchmark of legal responsiveness and ethical practice across Kenya and the wider East African Community, safeguarding client transactions with meticulous statutory alignment.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full" /> The Mission
                </h4>
                <p className="text-xs text-white/70 leading-relaxed pl-3.5">
                  To provide agile, high-integrity legal intelligence that bridges theoretical legal boundaries with pragmatic commercial, financial, and family safeguards.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/10">
                <h4 className="font-sans font-bold text-[10px] uppercase tracking-wider text-[#C9A84C] flex items-center gap-2">
                  Regulatory Compliance
                </h4>
                <p className="text-xs text-white/60 leading-relaxed pl-0 italic font-sans">
                  "We strictly adhere to the Advocate's Practice Rules (Cap 16), keeping client escrow accounts ring-fenced under Kenya's Central Bank parameters."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Roadmap */}
        <div className="bg-gray-50/50 p-8 md:p-10 rounded-sm border border-gray-100">
          <h3 className="font-serif italic font-light text-xl text-[#1B2A4A] text-center mb-8 uppercase tracking-widest">
            Our Professional Footprint
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3 md:border-r border-gray-150 pr-4 md:pr-8 pl-4 first:pl-0 last:border-0">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#C9A84C] font-semibold">2014 • Foundation</span>
              <h4 className="font-sans font-bold text-sm text-[#1B2A4A]">Omondi &amp; Partners Establishment</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Formed as a boutique chambers specializing strictly in commercial law and civil lease draftings at Upperhill, Nairobi.
              </p>
            </div>
            
            <div className="text-center space-y-3 md:border-r border-gray-150 pr-4 md:pr-8 pl-4 last:border-0">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#C9A84C] font-semibold">2019 • Strategic Expansion</span>
              <h4 className="font-sans font-bold text-sm text-[#1B2A4A]">Corporate LLP Rebranding</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Grace Mutua joined as Senior litigation lead, relocating the team to larger offices in Woodvale Grove, Westlands.
              </p>
            </div>

            <div className="text-center space-y-3 pr-4 pl-4 last:pr-0">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#C9A84C] font-semibold">2023 • Digital Frontier</span>
              <h4 className="font-sans font-bold text-sm text-[#1B2A4A]">Ardhisasa &amp; ODPC Perfecting</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Formed dedicated digital conveyancing and Data protection audits divisions, aligning fully with the e-Citizen ecosystems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
