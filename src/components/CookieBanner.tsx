import { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('nevyl_cookie_consent');
    if (!consent) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('nevyl_cookie_consent', 'accepted');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-navy-dark text-white p-5 rounded-lg border border-gold shadow-2xl z-50 transition-all duration-300 transform scale-100">
      <div className="flex items-start gap-3">
        <ShieldCheck className="text-gold w-6 h-6 flex-shrink-0 animate-pulse" />
        <div className="flex-1">
          <h3 className="font-display font-semibold text-sm tracking-wide text-gold">Compliance &amp; Data Privacy</h3>
          <p className="text-xs text-gray-300 mt-1 leading-relaxed">
            In compliance with the Kenya **Data Protection Act (2019)**, Nevyl Advocates uses essential cookies to safeguard information logs and enhance client consultations. 
          </p>
          <div className="flex justify-end gap-3 mt-4">
            <button 
              onClick={() => setIsOpen(false)}
              className="text-xs text-gray-400 hover:text-white transition-colors"
            >
              Declined
            </button>
            <button 
              onClick={handleAccept}
              className="px-3 py-1.5 bg-gold hover:bg-gold-dark text-navy font-semibold text-xs rounded transition-all shadow-md"
            >
              Accept Cookies
            </button>
          </div>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
