import { TESTIMONIALS } from '../data';
import { Star, Quote, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials-section" className="py-24 bg-white px-6 md:px-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title Group */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-mono font-bold block">Client Success Stories</span>
          <h2 className="font-serif font-light text-3xl md:text-4.5xl text-[#1B2A4A] italic">
            Vouched for by Kenya’s <span className="font-bold not-italic underline decoration-[#C9A84C] decoration-2">Leading Ventures</span>
          </h2>
          <div className="w-12 h-px bg-[#C9A84C] mx-auto my-3" />
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
            Our highest pride lies in protecting commercial assets, securing hard-won corporate mergers, and defending employee integrity. Read opinions shared by active Kenyan executives.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div 
              key={item.id}
              className="bg-white border border-gray-200 p-8 rounded-sm relative flex flex-col justify-between group hover:border-[#C9A84C] transition-colors duration-300"
            >
              {/* Giant Quote graphic overlay */}
              <div className="absolute top-6 right-6 text-[#C9A84C]/10 pointer-events-none group-hover:text-[#C9A84C]/20 duration-300">
                <Quote size={40} />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Visual Stars */}
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="text-[#C9A84C] w-3.5 h-3.5 fill-[#C9A84C]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans italic">
                  "{item.text}"
                </p>
              </div>

              {/* Author Info Column */}
              <div className="pt-6 border-t border-gray-100 mt-6 flex justify-between items-center relative z-10">
                <div>
                  <h4 className="font-serif italic font-light text-sm text-[#1B2A4A]">{item.author}</h4>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-gray-400 mt-1">{item.role}, <strong>{item.organization}</strong></p>
                </div>
                {item.verified && (
                  <div className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-2 py-0.5 rounded-sm text-[9px] font-mono font-medium border border-green-100">
                    <CheckCircle size={10} /> Verified
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Professional stats summary cards representing legal authority */}
        <div className="bg-[#1B2A4A] p-8 md:p-10 rounded-sm border border-gray-800 text-white max-w-4xl mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10 text-center select-none gap-6 md:gap-0">
          <div className="flex-1 space-y-2 py-4 md:py-0 first:pt-0 last:pb-0">
            <h4 className="text-3xl font-serif font-semibold text-[#C9A84C]">1,500+</h4>
            <p className="text-[9px] text-white/50 uppercase tracking-widest font-mono">Successful Consultations</p>
          </div>
          
          <div className="flex-1 space-y-2 py-4 md:py-0 px-4">
            <h4 className="text-3xl font-serif font-semibold text-[#C9A84C]">98.4%</h4>
            <p className="text-[9px] text-white/50 uppercase tracking-widest font-mono">Arbitration Settlements</p>
          </div>

          <div className="flex-1 space-y-2 py-4 md:py-0">
            <h4 className="text-3xl font-serif font-semibold text-[#C9A84C]">100%</h4>
            <p className="text-[9px] text-white/50 uppercase tracking-widest font-mono">Ethical Record</p>
          </div>
        </div>
      </div>
    </section>
  );
}
