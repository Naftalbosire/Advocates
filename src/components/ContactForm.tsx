import React, { useState, useEffect } from 'react';
import { PRACTICE_AREAS } from '../data';
import { ContactMessage } from '../types';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react';

interface ContactFormProps {
  initialPracticeId?: string;
  onMessageSubmitted: () => void;
}

export default function ContactForm({ initialPracticeId, onMessageSubmitted }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceArea: initialPracticeId || '',
    subject: '',
    message: '',
    agreeToPrivacy: false
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStep, setSubmitStep] = useState<'idle' | 'encrypting' | 'dispatching' | 'done'>('idle');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialPracticeId) {
      setFormData(prev => ({ ...prev, practiceArea: initialPracticeId }));
    }
  }, [initialPracticeId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToPrivacy) {
      alert("Please check and accept data processing terms under the Kenya Data Protection Act.");
      return;
    }

    setIsLoading(true);
    setSubmitStep('encrypting');

    // Simulate multi-step secure legal dispatch
    await new Promise(resolve => setTimeout(resolve, 800));
    setSubmitStep('dispatching');
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Compile message schema
    const practiceLabel = PRACTICE_AREAS.find(p => p.id === formData.practiceArea)?.title || formData.practiceArea || 'General Inquiry';
    const newMessage: ContactMessage = {
      id: `msg-${Date.now()}`,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject || `Inquiry: ${practiceLabel}`,
      message: formData.message,
      practiceArea: practiceLabel,
      date: new Date().toLocaleDateString('en-KE', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      status: 'New'
    };

    const existingStr = localStorage.getItem('nevyl_contact_messages');
    const existing: ContactMessage[] = existingStr ? JSON.parse(existingStr) : [];
    localStorage.setItem('nevyl_contact_messages', JSON.stringify([newMessage, ...existing]));

    setIsLoading(false);
    setSubmitStep('done');
    setIsSuccess(true);
    onMessageSubmitted();

    // Reset fields except state indicators
    setFormData({
      name: '',
      email: '',
      phone: '',
      practiceArea: '',
      subject: '',
      message: '',
      agreeToPrivacy: false
    });
  };

  return (
    <section id="contact-section" className="py-24 bg-white px-6 md:px-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-mono font-bold block">Contact Our Chambers</span>
          <h2 className="font-serif font-light text-3xl md:text-4.5xl text-[#1B2A4A] italic">
            Book an <span className="font-bold not-italic underline decoration-[#C9A84C] decoration-2">Advocate Consultation</span>
          </h2>
          <div className="w-12 h-px bg-[#C9A84C] mx-auto my-3" />
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
            Ready to secure commercial operations or perfect real property acquisitions in Kenya? Fill out details below. Submissions are processed under the Data Protection Act (2019).
          </p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Block: Contact Data & Embedded maps */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="bg-[#1B2A4A] p-8 rounded-sm text-white border border-gray-800 space-y-6 flex-1 flex flex-col justify-center">
              <h3 className="font-serif italic font-light text-xl text-[#C9A84C] pb-3 border-b border-white/10 uppercase tracking-widest">
                Chamber Ingress
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#C9A84C] w-4 h-4 flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-bold font-sans text-white uppercase tracking-wider text-[10px]">Primary Physical Office</p>
                    <p className="text-white/70 mt-1 leading-relaxed">
                      7th Floor, Westlands Law Chambers,<br />
                      Woodvale Grove,<br />
                      Westlands, Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-white/5 pt-4">
                  <Mail className="text-[#C9A84C] w-4 h-4 flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-bold font-sans text-white uppercase tracking-wider text-[10px]">E-mail Correspondence</p>
                    <p className="text-white/70 mt-1">info@nevyladvocates.co.ke</p>
                    <p className="text-white/40 mt-0.5 text-[10px]">Response TAT: Under 2 Hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-white/5 pt-4">
                  <Phone className="text-[#C9A84C] w-4 h-4 flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-bold font-sans text-white uppercase tracking-wider text-[10px]">Advocacy Phone Hotlines</p>
                    <p className="text-white/70 mt-1">Primary: +254 (0) 712 345 678</p>
                    <p className="text-white/70 mt-0.5">Mobile Registry: +254 (0) 722 987 654</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-white/5 pt-4">
                  <Clock className="text-[#C9A84C] w-4 h-4 flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-bold font-sans text-white uppercase tracking-wider text-[10px]">Working Hours (East Africa Time)</p>
                    <p className="text-white/70 mt-1">Monday – Friday: 8:00 AM – 5:00 PM</p>
                    <p className="text-[#C9A84C] font-mono text-[9px] mt-1 uppercase tracking-wide">🚨 Weekend emergencies? Use float WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded maps iframe representing clean nairobi location */}
            <div className="bg-white p-2 rounded-sm border border-gray-200 shadow-sm h-[240px] overflow-hidden">
              <iframe
                title="Google Maps - Nevyl Advocates Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.81992705139!2d36.8043685!3d-1.2618957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c33306d81%3A0xe5f86641ab3ca4f6!2sWoodvale%20Grove%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1718804561234"
                className="w-full h-full border-0 rounded-sm"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Block: Active Form */}
          <div className="lg:col-span-7 bg-white p-6 md:p-10 rounded-sm border border-gray-200 shadow-sm flex flex-col justify-between">
            {isSuccess ? (
              <div className="my-auto py-12 text-center space-y-6 animate-fade-in">
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto border border-green-200">
                  <CheckCircle2 size={36} className="animate-bounce" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif italic text-xl text-[#1B2A4A]">Consultation Dispatch Successful!</h3>
                  <p className="text-xs text-gray-500 max-w-md mx-auto leading-relaxed">
                    Your brief has been parsed, logged, and encrypted under registration ODPC guidelines. An automated notification has triggered for Advocate review. Nevyl LLP partners will reply shortly.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 text-gray-500 font-mono rounded-sm border border-gray-200 text-[10px] max-w-sm mx-auto">
                  📨 Copy of brief pushed to: client inbox simulator
                </div>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-3 bg-[#1B2A4A] hover:bg-[#C9A84C] hover:text-[#1B2A4A] text-white font-bold font-sans text-xs uppercase tracking-widest rounded-sm transition-colors cursor-pointer"
                >
                  Draft Another Assessment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-gray-500 font-bold block">
                      Full Client Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Patrick Kamau"
                      disabled={isLoading}
                      className="w-full text-xs p-3.5 border border-gray-200 rounded-sm focus:border-[#C9A84C] focus:outline-none bg-white text-[#1B2A4A]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-gray-500 font-bold block">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. patrick@kamauco.ke"
                      disabled={isLoading}
                      className="w-full text-xs p-3.5 border border-gray-200 rounded-sm focus:border-[#C9A84C] focus:outline-none bg-white text-[#1B2A4A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Phone number */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-gray-500 font-bold block">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +254 (0) 712 345 678"
                      disabled={isLoading}
                      className="w-full text-xs p-3.5 border border-gray-200 rounded-sm focus:border-[#C9A84C] focus:outline-none bg-white text-[#1B2A4A]"
                    />
                  </div>

                  {/* Practice dropdown */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-gray-500 font-bold block">
                      Practice Division Focus <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      name="practiceArea"
                      value={formData.practiceArea}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="w-full text-xs p-3.5 border border-gray-200 rounded-sm focus:border-[#C9A84C] bg-white focus:outline-none text-[#1B2A4A]"
                    >
                      <option value="">Select legal practice...</option>
                      {PRACTICE_AREAS.map((p) => (
                        <option key={p.id} value={p.id}>{p.title}</option>
                      ))}
                      <option value="notary-commissioner">Notary Public &amp; Commissioner for Oaths</option>
                      <option value="general">Other / General Advisory</option>
                    </select>
                  </div>
                </div>

                {/* subject */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-mono tracking-wider text-gray-500 font-bold block">
                    Case Subject
                    </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Briefly state subject of dispute or transaction..."
                    disabled={isLoading}
                    className="w-full text-xs p-3.5 border border-gray-200 rounded-sm focus:border-[#C9A84C] focus:outline-none bg-white text-[#1B2A4A]"
                  />
                </div>

                {/* message */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-mono tracking-wider text-gray-500 font-bold block">
                    Consultation Brief &amp; Notes <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide a chronological description of your legal puzzle or agreement objectives in Kenya..."
                    disabled={isLoading}
                    className="w-full text-xs p-3.5 border border-gray-200 rounded-sm focus:border-[#C9A84C] focus:outline-none resize-none font-sans bg-white text-[#1B2A4A]"
                  />
                </div>

                {/* Consent checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    required
                    type="checkbox"
                    id="agreeToPrivacy"
                    name="agreeToPrivacy"
                    checked={formData.agreeToPrivacy}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-4 h-4 border-gray-250 rounded-sm focus:ring-[#C9A84C] mt-0.5 cursor-pointer text-[#C9A84C]"
                  />
                  <label htmlFor="agreeToPrivacy" className="text-[10px] sm:text-xs text-gray-500 leading-relaxed cursor-pointer selection:bg-none">
                    I authorize Nevyl Advocates LLP to process this consultation request in strict compliance with Kenya's <strong className="text-[#1B2A4A]">Data Protection Act (2019)</strong>. I understand that submitting this message does not establish a formal attorney-client retainer.
                  </label>
                </div>

                {/* submit Button with states */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-[#1B2A4A] hover:bg-[#C9A84C] text-white hover:text-[#1B2A4A] font-bold font-sans text-xs uppercase tracking-widest rounded-sm shadow-sm transition-all cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={14} className="animate-spin text-[#C9A84C]" />
                      {submitStep === 'encrypting' && "COMPILING ODPC PROTECTION..."}
                      {submitStep === 'dispatching' && "DISPATCHING SECURE BRIEF..."}
                    </>
                  ) : (
                    <>
                      <Send size={13} className="text-[#C9A84C]" />
                      Transmit Secure Assessment Brief
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
