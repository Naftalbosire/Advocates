import { TEAM } from '../data';
import { Mail, Phone, Shield, BookOpen } from 'lucide-react';

export default function Team() {
  // Use the high quality generated partner portrait asset for Grace Mutua
  const generatedPartnerPortrait = "/src/assets/images/advocate_female_partner_1781868237868.jpg";

  return (
    <section id="team-section" className="py-24 bg-white px-6 md:px-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-mono font-bold block">Our Legal Team</span>
          <h2 className="font-serif font-light text-3xl md:text-4.5xl text-[#1B2A4A] italic">
            Advocates of the <span className="font-bold not-italic underline decoration-[#C9A84C] decoration-2">High Court</span> of Kenya
          </h2>
          <div className="w-12 h-px bg-[#C9A84C] mx-auto my-3" />
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
            A collective of highly disciplined legal professionals registered under the Law Society of Kenya (LSK), dedicated to analytical precision, confidentiality, and interest protection.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {TEAM.map((member) => {
            // Check if Grace Mutua and inject the custom premium generated image
            const imageToShow = member.id === 'grace-mutua' ? generatedPartnerPortrait : member.image;

            return (
              <div 
                key={member.id} 
                className="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300"
              >
                {/* Header Image Frame */}
                <div className="relative h-[340px] w-full bg-gray-50 overflow-hidden">
                  {imageToShow ? (
                    <img 
                      src={imageToShow} 
                      alt={member.name}
                      className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        // Fallback image
                        (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop`;
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-[#C9A84C] font-mono uppercase tracking-widest p-4 text-center">
                      Advocate Portrait Pending
                    </div>
                  )}
                  {/* Absolute Badge showing court status */}
                  <div className="absolute bottom-4 left-4 bg-[#1B2A4A] border border-gray-800 px-3 py-1 rounded-sm text-[10px] text-white font-mono flex items-center gap-1.5 backdrop-blur-sm z-10">
                    <Shield size={10} className="text-[#C9A84C]" />
                    <span>LSK Roll: Adm. {member.admissionYear}</span>
                  </div>
                </div>

                {/* Profile Details Container */}
                <div className="p-6 md:p-8 space-y-5">
                  <div>
                    <h3 className="font-serif italic font-light text-xl text-[#1B2A4A]">{member.name}</h3>
                    <p className="text-[10px] uppercase font-mono tracking-widest text-[#C9A84C] font-bold pt-1">{member.role}</p>
                    {member.courtRanking && (
                      <p className="text-[10px] text-gray-400 mt-1 italic font-sans">{member.courtRanking}</p>
                    )}
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed font-sans line-clamp-4">
                    {member.bio}
                  </p>

                  {/* Qualifications List */}
                  <div className="space-y-2 pt-3 border-t border-gray-100">
                    <h4 className="text-[9px] uppercase tracking-widest text-[#1B2A4A] font-bold font-mono flex items-center gap-1">
                      <BookOpen size={10} className="text-[#C9A84C]" /> Academic Qualifications
                    </h4>
                    <ul className="space-y-1 text-[10px] text-gray-400 leading-relaxed pl-3.5 list-disc">
                      {member.qualifications.slice(0, 2).map((qual, idx) => (
                        <li key={idx}>{qual}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact shortcuts */}
                  <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400 font-mono">
                    <a href={`mailto:${member.email}`} className="hover:text-[#C9A84C] transition-colors flex items-center gap-1 text-gray-500 font-semibold">
                      <Mail size={12} className="text-[#C9A84C]" strokeWidth={2} /> Email Contact
                    </a>
                    <span className="text-gray-200">|</span>
                    <a href={`tel:${member.email}`} className="hover:text-[#C9A84C] transition-colors flex items-center gap-1 text-gray-500 font-semibold">
                      <Phone size={12} className="text-[#C9A84C]" strokeWidth={2} /> Call Direct
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Advocacy Panel */}
        <div className="p-8 md:p-10 bg-[#1B2A4A] border border-gray-800 rounded-sm text-white grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-2 text-left">
            <h3 className="font-serif italic font-light text-lg text-[#C9A84C]">Commitment to Ethical Representation</h3>
            <p className="text-xs text-white/70 leading-relaxed font-sans">
              Every Advocate at Nevyl Advocates is fully licensed, holding practicing certificates from the Judiciary of Kenya and compliant with Chapter Six of the Constitution. We operate under professional indemnity assurances for transactional safeguards.
            </p>
          </div>
          <div className="md:col-span-4 justify-self-start md:justify-self-end">
            <div className="px-4 py-2 border border-[#C9A84C]/40 text-[#C9A84C] font-mono rounded-sm text-xs text-center uppercase tracking-widest bg-white/5">
              🛡️ Practicing Rolls Valid
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
