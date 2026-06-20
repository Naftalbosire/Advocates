import React from 'react';
import { ShieldAlert, BookCheck, ClipboardList, Scale } from 'lucide-react';

interface PrivacyTermsProps {
  viewType: 'privacy' | 'terms';
}

export default function PrivacyTerms({ viewType }: PrivacyTermsProps) {
  if (viewType === 'privacy') {
    return (
      <section className="py-20 bg-white min-h-screen px-4 md:px-8">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in pt-10">
          <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
            <div className="p-2.5 bg-navy text-gold rounded border border-gold">
              <ShieldAlert size={28} />
            </div>
            <div>
              <h1 className="font-display font-bold text-2xl md:text-3xl text-navy">Privacy Policy</h1>
              <p className="text-xs text-gray-500 font-mono mt-0.5">Compliant with Kenya’s Data Protection Act, 2019</p>
            </div>
          </div>

          <div className="text-sm text-gray-600 leading-relaxed space-y-6 font-sans">
            <p>
              At **NEVYL ADVOCATES LLP**, we respect your right to privacy and are committed to protecting the personal data of our prospective clients, visitors, and partners. This policy outlines how we collect, store, share, and process individual information in accordance with the **Kenya Data Protection Act (No. 24 of 2019)**.
            </p>

            <h3 className="font-display font-bold text-lg text-navy pt-2">1. Data Controller and Origin</h3>
            <p>
              Nevyl Advocates LLP, located at 7th Floor, Westlands Law Chambers, Nairobi, acts as the registered "Data Controller" under the Office of the Data Protection Commissioner (ODPC).
            </p>

            <h3 className="font-display font-bold text-lg text-navy pt-2">2. Categories of Personal Data We Collect</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>**Identification Logs**: Your full name, KRA PIN, national ID or passport number for client intake and compliance (Know-Your-Customer - KYC audits).</li>
              <li>**Contact Information**: Your phone number, physical address, email address, and company representation details.</li>
              <li>**Legal Case Content**: Factual narratives, property title descriptions, deeds, and litigation briefs provided during custom consultations.</li>
              <li>**Digital Footprints**: IP addresses, cookie preferences, and session indicators captured when navigating our server portals.</li>
            </ul>

            <h3 className="font-display font-bold text-lg text-navy pt-2">3. Purpose of Processing</h3>
            <p>
              We process your data strictly to facilitate legal representation, clear title search applications on Ministry registries (Ardhisasa), perform client onboarding checks mandated by the Advocates Act, and coordinate booking consultations. 
            </p>

            <h3 className="font-display font-bold text-lg text-navy pt-2">4. Client Rights</h3>
            <p>
              Under Kenya’s Data Protection rules, you hold specific statutory rights: the right to access and extract copies of your personal logs, the right to demand corrections of erroneous listings, and the right to object to processing or request deletion (the "right to be forgotten").
            </p>

            <h3 className="font-display font-bold text-lg text-navy pt-2">5. Secure Escrow &amp; Storage</h3>
            <p>
              All legal communications and documents are encrypted using secure browser tokens. We host files inside secure local storage and verified, hardened sandbox databases, restricting third-party access unless authorized by court summons.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Otherwise, render Terms and Conditions
  return (
    <section className="py-20 bg-white min-h-screen px-4 md:px-8">
      <div className="max-w-3xl mx-auto space-y-8 animate-fade-in pt-10">
        <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
          <div className="p-2.5 bg-navy text-gold rounded border border-gold">
            <ClipboardList size={28} />
          </div>
          <div>
            <h1 className="font-display font-bold text-2xl md:text-3xl text-navy">Terms of Use</h1>
            <p className="text-xs text-gray-500 font-mono mt-0.5">Governed by the Advocates Act (Cap 16), Laws of Kenya</p>
          </div>
        </div>

        <div className="text-sm text-gray-600 leading-relaxed space-y-6 font-sans">
          <p>
            Welcome to the digital portal of **NEVYL ADVOCATES LLP** ("Nevyl Advocates", "the Firm"). By accessing this portal and booking consultations, you indicate full, binding agreement to these Terms of Use.
          </p>

          <h3 className="font-display font-bold text-lg text-navy pt-2">1. No Advocate-Client Relationship Established</h3>
          <p>
            The informational materials, blog resources, statutory explanations, and FAQs displayed on this website do **not** constitute formal legal advice. Accessing this material, filling out contact forms, or receiving automated confirmation logs does **not** establish a formal Advocate-Client relationship with Nevyl Advocates LLP.
          </p>
          <p>
            A formal client representation is only established once our Managing Partner issues, and the Client countersigns, an official **Professional Retainer Agreement &amp; Fee Note** specifying scope of work and escrow milestones.
          </p>

          <h3 className="font-display font-bold text-lg text-navy pt-2">2. Retainer and Consultations Escrow</h3>
          <p>
            Any administrative or statutory application fees (such as Ardhisasa search costs of KES 500 or company incorporation fees) are distinct from Advocate client retainer logs. Official banking or M-Pesa till credentials will be issued directly on Nevyl LLP letters when perfecting retainers.
          </p>

          <h3 className="font-display font-bold text-lg text-navy pt-2">3. Intellectual Property Rights</h3>
          <p>
            The design, text layout, custom generated office pictures, partner photographs, and legal blog insights are the exclusive culinary copyright of Nevyl Advocates LLP. Reproducing, republishing, or mirroring these articles without explicit written permission from our partners constitutes copyright violation.
          </p>

          <h3 className="font-display font-bold text-lg text-navy pt-2">4. Limitation of Liability</h3>
          <p>
            While we write high-quality statutory outlines, Kenyan court timelines, e-Citizen portal availability, and land digitisation schedules are subject to county and national administration. The Firm is not liable for delayed approvals originating from statutory authorities.
          </p>
        </div>
      </div>
    </section>
  );
}
