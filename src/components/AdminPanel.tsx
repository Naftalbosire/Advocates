import React, { useState, useEffect } from 'react';
import { ContactMessage } from '../types';
import { Shield, Mail, CheckCircle2, Archive, MessageSquare, RefreshCw, X, FileEdit, Trash2, Send } from 'lucide-react';

interface AdminPanelProps {
  onClose: () => void;
  onStateChanged: () => void;
}

export default function AdminPanel({ onClose, onStateChanged }: AdminPanelProps) {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [selectedMsg, setSelectedMsg] = useState<ContactMessage | null>(null);
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [caseNotes, setCaseNotes] = useState('');
  const [successToast, setSuccessToast] = useState('');

  // Fetch from localStorage
  const loadMessages = () => {
    const existingStr = localStorage.getItem('nevyl_contact_messages');
    if (existingStr) {
      setMessages(JSON.parse(existingStr));
    } else {
      // Seed some demo messages if empty to let them test right away!
      const demoMessages: ContactMessage[] = [
        {
          id: 'demo-1',
          name: 'Al-Noor Residential Partners Ltd (Nairobi)',
          email: 'legal@alnoorproperties.com',
          phone: '+254711222333',
          subject: 'Sectional Titling under SPA 2020 near Kileleshwa',
          message: 'Greetings senior partner Omondi, we have a multi-unit block consisting of 24 units completed. We seek rapid due diligence on title registration, transfer, and drafting of sectional certificates under Sectional Properties Act 2020.',
          practiceArea: 'Conveyancing & Property Law',
          date: 'June 18, 2026, 04:12 PM',
          status: 'New'
        },
        {
          id: 'demo-2',
          name: 'Kamau Kipkorir Enterprises',
          email: 'hr@kamaukipkorir.co.ke',
          phone: '+254700987654',
          subject: 'ELRC Court summons regarding redundancy compliance',
          message: 'An ex-employee is disputing their redundancy process at the ELRC Court. They argue that we did not consult them in writing under section 40 of the Employment Act. Our disciplinary hearing logs are perfect. We need representation.',
          practiceArea: 'Employment & Labour Law',
          date: 'June 17, 2026, 11:30 AM',
          status: 'Reviewed',
          notes: 'Pre-vetted disciplinary hearing logs. Appears employer followed process reasonably. Need to draft preliminary objections.'
        }
      ];
      localStorage.setItem('nevyl_contact_messages', JSON.stringify(demoMessages));
      setMessages(demoMessages);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const handleUpdateStatus = (id: string, newStatus: 'New' | 'Reviewed' | 'Archived') => {
    const updated = messages.map(msg => {
      if (msg.id === id) {
        return { ...msg, status: newStatus };
      }
      return msg;
    });
    localStorage.setItem('nevyl_contact_messages', JSON.stringify(updated));
    setMessages(updated);
    if (selectedMsg?.id === id) {
      setSelectedMsg({ ...selectedMsg, status: newStatus });
    }
    onStateChanged();
  };

  const handleSaveNotes = (id: string) => {
    const updated = messages.map(msg => {
      if (msg.id === id) {
        return { ...msg, notes: caseNotes };
      }
      return msg;
    });
    localStorage.setItem('nevyl_contact_messages', JSON.stringify(updated));
    setMessages(updated);
    if (selectedMsg?.id === id) {
      setSelectedMsg({ ...selectedMsg, notes: caseNotes });
    }
    setSuccessToast('Case Notes updated successfully!');
    setTimeout(() => setSuccessToast(''), 3000);
  };

  const handleSendResponse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim() || !selectedMsg) return;

    // Simulate sending email notification
    setIsReplying(false);
    setReplyText('');

    // Highlight message as Revised/Reviewed
    handleUpdateStatus(selectedMsg.id, 'Reviewed');
    setSuccessToast(`Secure reply dispatched via simulated SMTP mailer to ${selectedMsg.email}!`);
    setTimeout(() => setSuccessToast(''), 4500);
  };

  const handleDeleteMessage = (id: string) => {
    if (confirm("Are you sure you want to permanently delete this legal inquiry from chambers records?")) {
      const updated = messages.filter(msg => msg.id !== id);
      localStorage.setItem('nevyl_contact_messages', JSON.stringify(updated));
      setMessages(updated);
      setSelectedMsg(null);
      onStateChanged();
    }
  };

  const handleResetChambersState = () => {
    if (confirm("Reset member portal database to initial default inquiries?")) {
      localStorage.removeItem('nevyl_contact_messages');
      loadMessages();
      setSelectedMsg(null);
      onStateChanged();
    }
  };

  return (
    <div className="fixed inset-0 bg-navy-dark/95 z-50 text-white overflow-hidden flex flex-col animate-fade-in font-sans">
      
      {/* Upper bar */}
      <div className="bg-navy border-b border-gold px-4 md:px-8 py-3.5 flex justify-between items-center flex-shrink-0">
        <div className="flex items-center gap-2">
          <Shield className="text-gold w-5 h-5 flex-shrink-0" />
          <div>
            <h2 className="font-display font-medium text-sm tracking-wider uppercase text-gold">
              Nevyl Advocates LLP • Member Portal
            </h2>
            <p className="text-[10px] text-gray-400 font-mono">LSK Registration: LLP-A908 • Certified ODPC Secure Node Office</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/NEVYL_DEVELOPER_GUIDE.pdf"
            download="NEVYL_DEVELOPER_GUIDE.pdf"
            className="text-[10px] font-mono border border-gold/40 text-gold px-2.5 py-1 rounded hover:bg-gold/10 cursor-pointer flex items-center gap-1"
          >
            Dev Manual (PDF)
          </a>
          <button
            onClick={handleResetChambersState}
            className="text-[10px] font-mono border border-red-500/40 text-red-400 px-2.5 py-1 rounded hover:bg-red-500/10 cursor-pointer"
          >
            Reset Database
          </button>
          <button 
            onClick={onClose}
            className="p-1 px-2.5 bg-gold hover:bg-gold-light text-navy font-bold text-xs rounded transition-colors cursor-pointer"
          >
            Close Panel <X size={12} className="inline-block ml-1" />
          </button>
        </div>
      </div>

      {/* Main Core Area Split */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Side: Messages list */}
        <div className="w-full md:w-5/12 border-b md:border-b-0 md:border-r border-gray-800 flex flex-col overflow-y-auto">
          <div className="p-4 bg-navy/40 border-b border-gray-800 flex justify-between items-center flex-shrink-0">
            <h3 className="font-display font-bold text-xs tracking-wider uppercase text-gray-300">
              Active Legal Inquiries ({messages.length})
            </h3>
            <button onClick={loadMessages} className="text-gold hover:text-white transition-colors cursor-pointer">
              <RefreshCw size={13} className="animate-spin" />
            </button>
          </div>

          <div className="divide-y divide-gray-800">
            {messages.length > 0 ? (
              messages.map(msg => (
                <div 
                  key={msg.id}
                  onClick={() => {
                    setSelectedMsg(msg);
                    setCaseNotes(msg.notes || '');
                    setIsReplying(false);
                  }}
                  className={`p-4 cursor-pointer transition-colors ${
                    selectedMsg?.id === msg.id 
                      ? 'bg-gold/10 border-l-4 border-gold' 
                      : 'hover:bg-white/5'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] text-gray-400 font-mono block">{msg.date}</span>
                    <span className={`px-2 py-0.5 rounded text-[8px] font-mono ${
                      msg.status === 'New' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' :
                      msg.status === 'Reviewed' ? 'bg-green-500/10 text-green-400 border border-green-500/30' :
                      'bg-gray-500/10 text-gray-400 border border-gray-500/30'
                    }`}>
                      {msg.status}
                    </span>
                  </div>
                  <h4 className="font-display font-semibold text-xs text-white mt-1 line-clamp-1">{msg.name}</h4>
                  <p className="text-[10px] font-bold text-gold mt-0.5 uppercase tracking-wider">{msg.practiceArea}</p>
                  <p className="text-[11px] text-gray-400 mt-1 line-clamp-2 leading-relaxed italic">
                    "{msg.message}"
                  </p>
                </div>
              ))
            ) : (
              <div className="py-20 text-center text-gray-500 font-mono text-xs">
                No active Client inquiries logged in LocalStorage node.
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Message Details and Actions */}
        <div className="w-full md:w-7/12 p-6 overflow-y-auto bg-navy-dark flex flex-col justify-between">
          {successToast && (
            <div className="bg-green-500 text-white p-3 rounded-md text-xs font-semibold mb-4 text-center shadow-lg border border-green-400 animate-pulse flex items-center justify-center gap-2">
              <CheckCircle2 size={14} />
              {successToast}
            </div>
          )}

          {selectedMsg ? (
            <div className="space-y-6">
              
              {/* Header section with credentials */}
              <div className="pb-4 border-b border-gray-800 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display font-bold text-lg text-gold">{selectedMsg.name}</h3>
                    <p className="text-xs text-gray-400 font-mono">{selectedMsg.email} • {selectedMsg.phone}</p>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleUpdateStatus(selectedMsg.id, 'Reviewed')}
                      title="Mark Reviewed"
                      className="p-1 px-2.5 bg-green-500/10 text-green-400 hover:bg-green-500 border border-green-500/30 hover:text-navy rounded text-[10px] font-mono transition-colors cursor-pointer"
                    >
                      ✓ Reviewed
                    </button>
                    <button 
                      onClick={() => handleUpdateStatus(selectedMsg.id, 'Archived')}
                      title="Archive"
                      className="p-1.5 bg-gray-500/10 text-gray-400 hover:bg-gray-500 border border-gray-500/30 hover:text-navy rounded transition-colors cursor-pointer"
                    >
                      <Archive size={12} />
                    </button>
                    <button 
                      onClick={() => handleDeleteMessage(selectedMsg.id)}
                      title="Delete Permanently"
                      className="p-1.5 bg-red-500/10 text-red-400 hover:bg-red-500 border border-red-500/30 hover:text-white rounded transition-colors cursor-pointer"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 text-[10px] font-mono">
                  <span className="bg-navy px-2 py-0.5 rounded text-gold uppercase border border-gold/20">
                    Division: {selectedMsg.practiceArea}
                  </span>
                  <span className="bg-navy px-2 py-0.5 rounded text-gray-300">
                    Received: {selectedMsg.date}
                  </span>
                </div>
              </div>

              {/* Message Context */}
              <div className="space-y-2">
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest block font-mono">Submitted Case Brief</span>
                <div className="bg-navy p-4 rounded border border-gray-800 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans italic">
                  "{selectedMsg.message}"
                </div>
              </div>

              {/* Case Research Notes */}
              <div className="space-y-2 pt-2 border-t border-gray-800">
                <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest block font-mono">Chambers Internal Legal Notes</label>
                <div className="flex gap-2 items-center">
                  <textarea
                    rows={2}
                    value={caseNotes}
                    onChange={(e) => setCaseNotes(e.target.value)}
                    placeholder="Add primary statutory findings, conflict checks, or advocate task lists here..."
                    className="flex-1 text-xs p-2.5 bg-navy border border-gray-800 rounded text-white focus:outline-none focus:border-gold resize-none"
                  />
                  <button 
                    onClick={() => handleSaveNotes(selectedMsg.id)}
                    className="p-3 bg-gold hover:bg-gold-light text-navy rounded border border-gold font-bold text-xs"
                  >
                    Save Notes
                  </button>
                </div>
              </div>

              {/* Reply section */}
              <div className="pt-4 border-t border-gray-800">
                {isReplying ? (
                  <form onSubmit={handleSendResponse} className="space-y-3 animate-fade-in">
                    <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest block font-mono">
                      Secure Email Dispatch To: {selectedMsg.email}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder={`Draft formal counsel response on Nevyl LLP letters...\nE.g. Dear client, thank you for contacting Nevyl Advocates regarding your sectional titling. We have examined the statutory terms and wish to book a formal board session...`}
                      className="w-full text-xs p-3 bg-navy border border-gray-800 rounded text-white focus:outline-none focus:border-gold resize-none font-sans"
                    />
                    <div className="flex justify-end gap-3">
                      <button 
                        type="button"
                        onClick={() => setIsReplying(false)}
                        className="text-xs text-gray-400 hover:text-white"
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit"
                        className="px-4 py-2 bg-gold hover:bg-gold-light text-navy font-bold text-xs rounded uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                      >
                        <Send size={12} /> Dispatch Counsel Advice
                      </button>
                    </div>
                  </form>
                ) : (
                  <button
                    onClick={() => {
                      setIsReplying(true);
                      setReplyText(`Dear ${selectedMsg.name},\n\nThank you for reaching out to Nevyl Advocates LLP regarding your query on "${selectedMsg.subject || selectedMsg.practiceArea}".\n\nWe have reviewed the chronological details under the relevant Kenyan statutes. Our Managing Partner recommends we set up a 30-minute introductory Zoom session or face-to-face brief at our Westlands Chambers.\n\nPlease share your preferred timings.\n\nWarm regards,\nNevyl Omondi, Esq.\nManaging Partner | Nevyl Advocates`);
                    }}
                    className="w-full py-3 bg-navy hover:bg-navy-light text-gold hover:text-white border border-gold/40 hover:border-gold rounded font-bold font-display text-xs uppercase tracking-widest text-center cursor-pointer transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={14} className="text-gold" /> Draft Automated Legal Advice Response
                  </button>
                )}
              </div>

            </div>
          ) : (
            <div className="my-auto text-center py-20 space-y-4">
              <Shield className="text-gray-700 w-16 h-16 mx-auto animate-pulse" />
              <div className="space-y-1">
                <h4 className="font-display font-semibold text-gray-400">No Consultation Selected</h4>
                <p className="text-xs text-gray-600 font-mono">Select a message in the registry queue on the left to verify credentials, add legal assessments, or dispatch encrypted counsel replies.</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
