import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Team from './components/Team';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import CookieBanner from './components/CookieBanner';
import PrivacyTerms from './components/PrivacyTerms';
import AdminPanel from './components/AdminPanel';
import { MessageSquare, PhoneCall, X, Scale, Send, Check } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedPracticeId, setSelectedPracticeId] = useState<string | undefined>(undefined);
  
  // App initialization states
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [showAdmin, setShowAdmin] = useState(false);
  const [hasNewMessages, setHasNewMessages] = useState(false);
  
  // WhatsApp Chat Widget State
  const [isWAPanelOpen, setIsWAPanelOpen] = useState(false);
  const [waMessage, setWaMessage] = useState('');

  // Simulating pristine 1.2s loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Monitor message additions
  useEffect(() => {
    const checkNewMessages = () => {
      const msgs = localStorage.getItem('nevyl_contact_messages');
      if (msgs) {
        const parsed = JSON.parse(msgs);
        const hasNew = parsed.some((m: any) => m.status === 'New');
        setHasNewMessages(hasNew);
      }
    };
    
    checkNewMessages();
    
    // Set up rapid storage watch
    window.addEventListener('storage', checkNewMessages);
    return () => window.removeEventListener('storage', checkNewMessages);
  }, []);

  const handleEnquireFromPractice = (practiceId: string) => {
    setSelectedPracticeId(practiceId);
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavShortcut = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTriggerMessageAdded = () => {
    setHasNewMessages(true);
  };

  // WhatsApp click handler
  const handleInitiateWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waMessage.trim()) return;
    
    // Format message matching Kenyan phone code +254
    const formattedText = encodeURIComponent(`Nevyl Advocates Consultation:\n${waMessage}`);
    const whatsappUrl = `https://wa.me/254712345678?text=${formattedText}`;
    
    window.open(whatsappUrl, '_blank');
    setIsWAPanelOpen(false);
    setWaMessage('');
  };

  // Page Loader layout
  if (isPageLoading) {
    return (
      <div className="fixed inset-0 bg-navy-dark text-white flex flex-col items-center justify-center z-50 transition-all duration-500">
        <div className="text-center space-y-6">
          <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
            {/* Elegant rotating gold outer circular border spinner */}
            <div className="absolute inset-0 border-4 border-gold/10 border-t-gold rounded-full animate-spin" />
            <Scale className="text-gold w-10 h-10 animate-pulse" />
          </div>
          <div className="space-y-1">
            <h1 className="font-display font-medium text-lg tracking-widest text-white">
              NEVYL <span className="text-gold font-bold">ADVOCATES</span>
            </h1>
            <p className="text-[10px] font-mono tracking-widest text-gold uppercase animate-pulse">
              Authenticating Legal Portal Nodes...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-gold/30 selection:text-navy relative overflow-x-hidden pt-[76px] md:pt-[112px]">
      
      {/* Structural navigation header */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={(id) => {
          setActiveTab(id);
          // If moving away from contact, reset selected practice triggers
          if (id !== 'contact') {
            setSelectedPracticeId(undefined);
          }
        }} 
        openAdmin={() => setShowAdmin(true)}
        hasNewMessages={hasNewMessages}
      />

      {/* Main Switchboard rendering dynamic tabs */}
      <main className="animate-fade-in relative">
        {activeTab === 'home' && (
          <>
            <Hero onNavClick={handleNavShortcut} />
            
            {/* Short narrative trust banner with Clean Minimalism */}
            <section className="bg-gray-50/40 text-[#1B2A4A] py-16 px-6 text-center border-y border-gray-100">
              <div className="max-w-4xl mx-auto space-y-4">
                <span className="text-xs font-mono text-[#C9A84C] uppercase tracking-[0.25em] font-bold block">Commitment &amp; Competence</span>
                <h3 className="font-serif italic font-light text-xl md:text-2xl leading-relaxed text-[#1B2A4A]">
                  "Advocating with precision, executing with unmatched integrity."
                </h3>
                <p className="text-xs text-gray-550 max-w-3xl mx-auto leading-relaxed font-sans mt-2">
                  We maintain strict adherence to Kenya's <strong>Advocates Act (Cap 16)</strong>, facilitating real estate covenants via digitized Ardhisasa searches, commercial corporate company secretarial work on the e-Citizen portal, and strategic representations at the Milimani Courts.
                </p>
              </div>
            </section>

            {/* Quick Practice Area summaries */}
            <PracticeAreas 
              onEnquire={handleEnquireFromPractice} 
              selectedPracticeId={selectedPracticeId}
              setSelectedPracticeId={setSelectedPracticeId}
            />

            {/* Quick About Teaser with LSK parameters */}
            <About />
            
            {/* Quick Team Teaser */}
            <Team />

            {/* Short Testimonials */}
            <Testimonials />
            
            {/* Quick Consultation Block */}
            <ContactForm initialPracticeId={selectedPracticeId} onMessageSubmitted={handleTriggerMessageAdded} />
          </>
        )}

        {activeTab === 'about' && <About />}

        {activeTab === 'practices' && (
          <PracticeAreas 
            onEnquire={handleEnquireFromPractice} 
            selectedPracticeId={selectedPracticeId}
            setSelectedPracticeId={setSelectedPracticeId}
          />
        )}

        {activeTab === 'team' && <Team />}

        {activeTab === 'blog' && <Blog />}

        {activeTab === 'testimonials' && <Testimonials />}

        {activeTab === 'contact' && (
          <ContactForm initialPracticeId={selectedPracticeId} onMessageSubmitted={handleTriggerMessageAdded} />
        )}

        {activeTab === 'privacy' && <PrivacyTerms viewType="privacy" />}
        {activeTab === 'terms' && <PrivacyTerms viewType="terms" />}
      </main>

      {/* FOOTER */}
      <Footer onNavClick={handleNavShortcut} openAdmin={() => setShowAdmin(true)} />

      {/* COOKIE DATA PROTECTION COMPLIANCE */}
      <CookieBanner />

      {/* ADMIN LEVEL LSK PORTAL MODAL */}
      {showAdmin && (
        <AdminPanel 
          onClose={() => setShowAdmin(false)} 
          onStateChanged={() => {
            // Re-vett new messages status for blinkers
            const msgs = localStorage.getItem('nevyl_contact_messages');
            if (msgs) {
              const hasNew = JSON.parse(msgs).some((m: any) => m.status === 'New');
              setHasNewMessages(hasNew);
            }
          }}
        />
      )}

      {/* INTERACTIVE FLOATING WHATSAPP CHAT WIDGET CONTROL */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 font-sans">
        
        {/* Chat Drawer/Dialogue Box */}
        {isWAPanelOpen && (
          <div className="w-80 bg-white border border-green-500 rounded-lg shadow-2xl overflow-hidden animate-fade-in transition-all">
            {/* Header band */}
            <div className="bg-green-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm tracking-wide text-white border border-white/20">
                  ⚖️
                </div>
                <div>
                  <h4 className="text-xs font-bold font-display">Nevyl Advocates Duty Desks</h4>
                  <p className="text-[9px] text-green-100 font-mono">Replies instantly • WhatsApp Direct</p>
                </div>
              </div>
              <button 
                onClick={() => setIsWAPanelOpen(false)}
                className="text-white hover:text-green-200 transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Bubble body */}
            <div className="p-4 bg-gray-50 space-y-4">
              <div className="bg-white p-3 rounded-lg text-xs leading-relaxed text-gray-600 border border-gray-100 shadow-sm relative">
                <div className="absolute top-2 -left-1.5 w-3.5 h-3.5 bg-white border-l border-b border-gray-100 rotate-45" />
                <p>
                  "Habari! Welcome to Nevyl Advocates WhatsApp Hotline. Send us a quick note about your civil transaction or ELRC court issue. Our managing partner will address your puzzle directly."
                </p>
              </div>

              {/* Input Form area */}
              <form onSubmit={handleInitiateWhatsApp} className="space-y-2">
                <textarea
                  required
                  rows={2}
                  value={waMessage}
                  onChange={(e) => setWaMessage(e.target.value)}
                  placeholder="Type your brief legal inquiry here..."
                  className="w-full text-xs p-2.5 bg-white border border-gray-200 rounded focus:border-green-500 focus:outline-none resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-bold text-xs rounded uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Send size={11} /> Launch WhatsApp Desk
                </button>
              </form>
            </div>

            {/* Compliance footnote */}
            <div className="bg-gray-100 px-3 py-1.5 text-[9px] text-gray-400 font-mono text-center">
              🛡️ WhatsApp communications comply with ODPC laws.
            </div>
          </div>
        )}

        {/* Primary circular action toggle button */}
        <button
          onClick={() => setIsWAPanelOpen(!isWAPanelOpen)}
          className="p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 animate-bounce z-10 cursor-pointer flex items-center justify-center relative border border-green-400"
          aria-label="Toggle WhatsApp Consultation"
        >
          <MessageSquare size={24} className="fill-white" />
          {/* Pulse highlight indicator */}
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-400 inline-block border-2 border-white animate-ping" />
        </button>
      </div>

    </div>
  );
}
