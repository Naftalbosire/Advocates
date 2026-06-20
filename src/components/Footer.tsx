import { Scale, Milestone, Mail, Phone, Clock, Linkedin, Twitter, Facebook, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavClick: (tab: string) => void;
  openAdmin: () => void;
}

export default function Footer({ onNavClick, openAdmin }: FooterProps) {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B2A4A] text-white border-t border-gray-800 pt-16 pb-8 px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand & Mission Column */}
        <div className="space-y-5">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 border border-[#C9A84C] rounded-sm bg-white">
              <Scale className="text-[#C9A84C] w-4 h-4" />
            </div>
            <h2 className="font-sans font-bold text-md tracking-wider">
              NEVYL <span className="text-[#C9A84C]">ADVOCATES</span>
            </h2>
          </div>
          <p className="text-xs text-white/60 leading-relaxed font-sans">
            Registered Advocacy & Notary firm based in Nairobi, Kenya. Dedicated to delivering immaculate judicial representation, robust commercial structures, and compliant property acquisitions.
          </p>
          <div className="flex gap-3 pt-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-[#C9A84C] hover:text-[#1B2A4A] rounded-sm border border-white/10 transition-colors text-white/70">
              <Linkedin size={14} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-[#C9A84C] hover:text-[#1B2A4A] rounded-sm border border-white/10 transition-colors text-white/70">
              <Twitter size={14} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-[#C9A84C] hover:text-[#1B2A4A] rounded-sm border border-white/10 transition-colors text-white/70">
              <Facebook size={14} />
            </a>
          </div>
        </div>

        {/* Practice Area Shortcuts */}
        <div className="space-y-4">
          <h3 className="font-sans font-bold text-xs tracking-widest text-[#C9A84C] uppercase pb-2 border-b border-white/10">
            Practice Divisions
          </h3>
          <ul className="space-y-2.5 text-xs text-white/65">
            <li>
              <button onClick={() => onNavClick('practices')} className="hover:text-[#C9A84C] transition-colors text-left py-0.5 cursor-pointer">
                • Conveyancing &amp; Property Law
              </button>
            </li>
            <li>
              <button onClick={() => onNavClick('practices')} className="hover:text-[#C9A84C] transition-colors text-left py-0.5 cursor-pointer">
                • Corporate &amp; Venture Law
              </button>
            </li>
            <li>
              <button onClick={() => onNavClick('practices')} className="hover:text-[#C9A84C] transition-colors text-left py-0.5 cursor-pointer">
                • Family, Wills &amp; Probate
              </button>
            </li>
            <li>
              <button onClick={() => onNavClick('practices')} className="hover:text-[#C9A84C] transition-colors text-left py-0.5 cursor-pointer">
                • Litigation &amp; Multi-party ADR
              </button>
            </li>
            <li>
              <button onClick={() => onNavClick('practices')} className="hover:text-[#C9A84C] transition-colors text-left py-0.5 cursor-pointer">
                • Employment &amp; ELRC Disputes
              </button>
            </li>
          </ul>
        </div>

        {/* Quick Sitemap Links */}
        <div className="space-y-4">
          <h3 className="font-sans font-bold text-xs tracking-widest text-[#C9A84C] uppercase pb-2 border-b border-white/10">
            Sitemap
          </h3>
          <div className="grid grid-cols-2 gap-2.5 text-xs text-white/65">
            <button onClick={() => onNavClick('home')} className="hover:text-[#C9A84C] transition-colors text-left cursor-pointer">Home</button>
            <button onClick={() => onNavClick('about')} className="hover:text-[#C9A84C] transition-colors text-left cursor-pointer">About Us</button>
            <button onClick={() => onNavClick('practices')} className="hover:text-[#C9A84C] transition-colors text-left cursor-pointer">Practices</button>
            <button onClick={() => onNavClick('team')} className="hover:text-[#C9A84C] transition-colors text-left cursor-pointer">Barristers</button>
            <button onClick={() => onNavClick('blog')} className="hover:text-[#C9A84C] transition-colors text-left cursor-pointer">Resources</button>
            <button onClick={() => onNavClick('testimonials')} className="hover:text-[#C9A84C] transition-colors text-left cursor-pointer">Testimonial</button>
            <button onClick={() => onNavClick('contact')} className="hover:text-[#C9A84C] font-semibold text-[#C9A84C] transition-colors text-left cursor-pointer">Book Now</button>
            <button onClick={openAdmin} className="hover:text-[#C9A84C] text-[#C9A84C]/80 font-mono transition-colors text-left cursor-pointer">Portal 🔒</button>
          </div>
        </div>

        {/* Contact Info Column */}
        <div className="space-y-4">
          <h3 className="font-sans font-bold text-xs tracking-widest text-[#C9A84C] uppercase pb-2 border-b border-white/10">
            Advocate Chambers
          </h3>
          <ul className="space-y-3.5 text-xs text-white/65">
            <li className="flex items-start gap-2.5">
              <Milestone className="text-[#C9A84C] w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>7th Floor, Westlands Law Chambers, Woodvale Grove, Westlands, Nairobi, Kenya</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="text-[#C9A84C] w-4 h-4 flex-shrink-0" />
              <a href="mailto:info@nevyladvocates.co.ke" className="hover:text-[#C9A84C] transition-colors">info@nevyladvocates.co.ke</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="text-[#C9A84C] w-4 h-4 flex-shrink-0" />
              <span>+254 (0) 712 345 678</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="text-[#C9A84C] w-4 h-4 flex-shrink-0" />
              <span>Mon - Fri, 8:00 AM - 5:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Underbar Compliance details */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[11px] text-white/40 gap-4">
        <div>
          © {currentYear} NEVYL ADVOCATES LLP. All rights reserved. Registered under the Advocates Act, Cap 16 of the Laws of Kenya.
        </div>
        <div className="flex gap-4">
          <button onClick={() => onNavClick('privacy')} className="hover:text-[#C9A84C] transition-colors cursor-pointer">Privacy Policy</button>
          <span>•</span>
          <button onClick={() => onNavClick('terms')} className="hover:text-[#C9A84C] transition-colors cursor-pointer">Terms of Use</button>
          <span>•</span>
          <button onClick={handleBackToTop} className="flex items-center gap-1 hover:text-[#C9A84C] text-[#C9A84C] font-mono transition-colors bg-white/5 px-2 py-0.5 border border-white/10 rounded-sm cursor-pointer">
            Top <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
