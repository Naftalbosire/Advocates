import { useState } from 'react';
import { Menu, X, Scale } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openAdmin: () => void;
  hasNewMessages: boolean;
}

export default function Navbar({ activeTab, setActiveTab, openAdmin, hasNewMessages }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'practices', label: 'Practice Areas' },
    { id: 'team', label: 'Lawyers/Team' },
    { id: 'blog', label: 'Blog & Resources' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white text-[#1B2A4A] shadow-sm z-40 border-b border-gray-150 transition-all font-sans">
      {/* Upper informational bar mimicking established law structures with Clean Minimalism */}
      <div className="bg-[#1B2A4A] text-white/90 text-[11px] py-2 px-6 hidden md:flex justify-between items-center">
        <div className="flex gap-6 font-mono tracking-tight text-white/70">
          <span>📍 Westlands, Nairobi</span>
          <span>🕒 Mon - Fri: 8:00 AM - 5:00 PM (EAT)</span>
        </div>
        <div className="flex gap-5 items-center">
          <span className="text-[#C9A84C] font-semibold">📞 Hotline: +254 (0) 712 345 678</span>
          <button 
            onClick={openAdmin}
            className="text-[10px] bg-white/10 text-white hover:bg-[#C9A84C] hover:text-[#1B2A4A] px-2.5 py-0.5 rounded-sm border border-white/20 transition-all cursor-pointer font-mono flex items-center gap-1"
          >
            ⚖️ LSK Member Portal
            {hasNewMessages && <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block animate-ping" />}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="p-1.5 border border-[#C9A84C] rounded-sm bg-white group-hover:border-[#1B2A4A] transition-all">
            <Scale className="text-[#C9A84C] w-5 h-5 transform group-hover:rotate-12 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-[#1B2A4A] font-sans">
              NEVYL <span className="text-[#C9A84C]">ADVOCATES</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-gray-400 font-mono -mt-0.5">
              Nairobi, Kenya
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === item.id 
                  ? 'text-[#C9A84C] border-b border-[#C9A84C] pb-1' 
                  : 'text-gray-600 hover:text-[#C9A84C]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('contact')}
            className="bg-[#1B2A4A] hover:bg-[#C9A84C] text-white hover:text-[#1B2A4A] px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
          >
            Consult Us
          </button>
        </nav>

        {/* Mobile Navigation controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <button 
            onClick={openAdmin}
            className="text-[10px] bg-gray-100 hover:bg-gray-200 text-[#1B2A4A] border border-gray-200 px-2.5 py-1 rounded-sm font-mono font-medium"
          >
            Portal
            {hasNewMessages && <span className="w-1 h-1 rounded-full bg-red-500 inline-block ml-1 animate-ping" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 text-[#1B2A4A] hover:text-[#C9A84C] transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-fade-in py-5 px-6 absolute w-full left-0 shadow-lg transition-all duration-300">
          <div className="flex flex-col gap-3 py-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`py-2 text-left font-sans text-xs tracking-wider uppercase border-b border-gray-100 pb-2 font-semibold ${
                  activeTab === item.id ? 'text-[#C9A84C] pl-2 border-l-2 border-[#C9A84C]' : 'text-gray-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 flex flex-col gap-3">
              <div className="text-[11px] text-gray-500 font-mono">
                📞 Hotline: +254 (0) 712 345 678
              </div>
              <button 
                onClick={() => handleNavClick('contact')}
                className="w-full text-center py-2.5 bg-[#1B2A4A] text-white font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-[#C9A84C] transition-colors"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
