import { useState } from 'react';
import { PRACTICE_AREAS } from '../data';
import * as Icons from 'lucide-react';

interface PracticeAreasProps {
  onEnquire: (practiceId: string) => void;
  selectedPracticeId?: string;
  setSelectedPracticeId: (id: string | undefined) => void;
}

export default function PracticeAreas({ onEnquire, selectedPracticeId, setSelectedPracticeId }: PracticeAreasProps) {
  const selectedArea = PRACTICE_AREAS.find(p => p.id === selectedPracticeId);

  // Helper to dynamically render Lucide icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Icons.Home className="w-6 h-6 text-[#C9A84C]" />;
      case 'Briefcase': return <Icons.Briefcase className="w-6 h-6 text-[#C9A84C]" />;
      case 'Heart': return <Icons.Heart className="w-6 h-6 text-[#C9A84C]" />;
      case 'Scale': return <Icons.Scale className="w-6 h-6 text-[#C9A84C]" />;
      case 'UserCheck': return <Icons.UserCheck className="w-6 h-6 text-[#C9A84C]" />;
      case 'Coins': return <Icons.Coins className="w-6 h-6 text-[#C9A84C]" />;
      default: return <Icons.Shield className="w-6 h-6 text-[#C9A84C]" />;
    }
  };

  const handleSelectArea = (id: string) => {
    setSelectedPracticeId(id);
    document.getElementById('practice-focus')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="practices-section" className="py-24 bg-white min-h-screen px-6 md:px-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4 animate-fade-in">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-mono font-bold block">Areas of Specialization</span>
          <h2 className="font-serif font-light text-3xl md:text-4.5xl text-[#1B2A4A] italic">
            Specialized <span className="font-bold not-italic underline decoration-[#C9A84C] decoration-2">Practice Areas</span>
          </h2>
          <div className="w-12 h-px bg-[#C9A84C] mx-auto my-3" />
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">
            Specializing in corporate, family, and property law with a commitment to integrity and exceptional client service within the Nairobi metropolitan area and beyond.
          </p>
        </div>

        {/* Anchor point for focused viewing */}
        <div id="practice-focus" />

        {/* Interactive Detail View (If selected) */}
        {selectedArea ? (
          <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-6 md:p-10 mb-20 animate-fade-in transition-all">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Left Column: Practice Overview */}
              <div className="w-full lg:w-2/3 space-y-6">
                <button 
                  onClick={() => setSelectedPracticeId(undefined)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B2A4A] hover:text-[#C9A84C] transition-colors font-mono uppercase tracking-wider bg-gray-50 px-3 py-1.5 border border-gray-150 rounded-sm"
                >
                  ← Back to full legal divisions grid
                </button>

                <div className="flex items-center gap-4 pt-2">
                  <div className="p-3 bg-gray-50 rounded-sm border border-gray-200">
                    {renderIcon(selectedArea.iconName)}
                  </div>
                  <div>
                    <h3 className="font-serif italic font-light text-2xl md:text-3.5xl text-[#1B2A4A]">{selectedArea.title}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-[#C9A84C] font-mono font-bold mt-1">Practice Division Overview</p>
                  </div>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed font-sans pt-2">
                  {selectedArea.longDesc}
                </p>

                {/* Sub-Services Offered */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <h4 className="text-xs uppercase tracking-widest text-[#1B2A4A] font-bold font-sans flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" /> Dedicated Practice Services
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    {selectedArea.services.map((service, index) => (
                      <li key={index} className="flex gap-2 text-xs text-gray-500 leading-relaxed border-b border-gray-50 pb-2.5">
                        <Icons.CheckCircle size={14} className="text-[#C9A84C] flex-shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Statutes & Case Studies */}
              <div className="w-full lg:w-1/3 bg-[#1B2A4A] text-white p-8 rounded-sm border border-gray-800 space-y-6 self-stretch flex flex-col justify-between">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#C9A84C] font-bold font-mono border-b border-white/10 pb-3 mb-4">
                    Governing Kenyan Statutes
                  </h4>
                  <ul className="space-y-3">
                    {selectedArea.statutes.map((stat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[11px] text-white/80 font-mono">
                        <Icons.BookOpen size={12} className="text-[#C9A84C] mt-1 flex-shrink-0" />
                        <span>{stat}</span>
                      </li>
                    ))}
                  </ul>

                  {selectedArea.caseStudyTitle && (
                    <div className="mt-8 pt-6 border-t border-white/15 space-y-2.5">
                      <span className="text-[9px] uppercase tracking-widest text-[#C9A84C] bg-white/5 border border-white/10 px-2.5 py-1 rounded-sm font-mono font-semibold">
                        Core Case Study
                      </span>
                      <h5 className="font-serif italic text-sm text-white pt-1">{selectedArea.caseStudyTitle}</h5>
                      <p className="text-xs text-white/60 leading-relaxed italic">
                        "{selectedArea.caseStudyDesc}"
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-white/10">
                  <button
                    onClick={() => onEnquire(selectedArea.id)}
                    className="w-full py-3.5 bg-white hover:bg-[#C9A84C] text-[#1B2A4A] hover:text-[#1B2A4A] font-bold text-xs uppercase tracking-widest rounded-sm transition-colors cursor-pointer text-center"
                  >
                    Discuss My Assessment Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Full Grid of Practice Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRACTICE_AREAS.map((area) => {
            const isCurrentlySelected = selectedPracticeId === area.id;
            return (
              <div 
                key={area.id}
                onClick={() => handleSelectArea(area.id)}
                className={`bg-white border p-8 rounded-sm hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between border-l-4 group ${
                  isCurrentlySelected 
                    ? 'border-l-[#C9A84C] border-gray-200 bg-gray-50/50 scale-[1.01]' 
                    : 'border-l-gray-150 border-gray-200 hover:border-l-[#C9A84C]'
                }`}
              >
                <div className="space-y-5">
                  <div className="p-3 bg-gray-50 group-hover:bg-[#1B2A4A] group-hover:bg-opacity-5 rounded-sm w-fit transition-colors border border-gray-100">
                    {renderIcon(area.iconName)}
                  </div>
                  <div>
                    <h3 className="font-serif italic font-light text-lg text-[#1B2A4A] group-hover:text-[#C9A84C] transition-colors">{area.title}</h3>
                    <p className="text-xs text-gray-400 mt-2.5 leading-relaxed line-clamp-3">
                      {area.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-5 border-t border-gray-100 mt-6 text-xs font-mono font-bold uppercase tracking-wider text-[#1B2A4A] group-hover:text-[#C9A84C] duration-200">
                  <span>Examine Framework</span>
                  <Icons.ArrowRight size={14} className="transform group-hover:translate-x-1.5 transition-transform text-[#C9A84C]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Kenya Legal Integrity Quote widget with Clean Minimalism */}
        <div className="mt-24 p-8 md:p-10 bg-[#1B2A4A] text-white rounded-sm border border-gray-800 text-center relative max-w-3xl mx-auto overflow-hidden">
          <div className="absolute top-0 right-0 p-2 text-white/[0.02] pointer-events-none">
            <Icons.Scale size={160} />
          </div>
          <p className="font-serif italic text-sm md:text-base leading-relaxed text-white/80 relative z-10 font-light">
            "Justice is not a secondary convenience, it is the cornerstone of sustainable commercial venture and secure title integrity in Kenya."
          </p>
          <div className="mt-4 text-[10px] font-mono tracking-widest text-[#C9A84C] relative z-10 uppercase">
            - The Advocates Act, Cap 16 (Laws of Kenya)
          </div>
        </div>
      </div>
    </section>
  );
}
