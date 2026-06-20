import { PracticeArea, TeamMember, BlogPost, Testimonial } from './types';

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'conveyancing-property',
    title: 'Conveyancing & Property Law',
    shortDesc: 'Comprehensive real estate counsel, from title searches on Ardhisasa to complex commercial leases.',
    longDesc: 'We offer premier advisory on real property acquisition, management, and disposal in Kenya. Our practice steers individual and corporate clients through the rigorous legal landscapes of the Ministry of Lands, Physical Planning layouts, and county approvals.',
    iconName: 'Home',
    statutes: [
      'Land Act (No. 6 of 2012)',
      'Land Registration Act (No. 3 of 2012)',
      'Sectional Properties Act (No. 21 of 2020)',
      'Physical and Land Use Planning Act (No. 13 of 2019)'
    ],
    services: [
      'Official Land Searches and Due Diligence on the Ardhisasa platform',
      'Drafting and attestation of Agreements for Sale',
      'Preparation of Conveyances, Transfers, and Sectional Titles',
      'Structuring of Commercial & Residential Leases',
      'Real estate development syndication and joint venture drafting'
    ],
    caseStudyTitle: 'Mixed-Use Kilimani Development',
    caseStudyDesc: 'Successfully facilitated the land acquisition, sectional property structuring, and subdivision approvals for a KES 1.2 Billion residential development in Kilimani, Nairobi.'
  },
  {
    id: 'commercial-corporate',
    title: 'Commercial & Corporate Law',
    shortDesc: 'Guiding ventures from incorporation to cross-border expansions, joint ventures, and KRA compliance.',
    longDesc: 'We act as trusted advisors to businesses ranging from ambitious tech startups in Nairobi’s "Silicon Savannah" to established multi-nationals. We provide high-caliber corporate governance, regulatory alignment, and transactional support.',
    iconName: 'Briefcase',
    statutes: [
      'Companies Act (No. 17 of 2015)',
      'Partnerships Act (No. 16 of 2012)',
      'Competition Act (No. 12 of 2010)',
      'Comesa Treaty & Investment Treaties'
    ],
    services: [
      'Corporate formation and compliance under the e-Citizen portal',
      'Drafting of Joint Venture Agreements, Shareholder Agreements, and NDAs',
      'Mergers, acquisitions, and restructuring advisories',
      'Company Secretarial Services & compliance audits',
      'Licensing, Intellectual Property protection, and KIPI registrations'
    ],
    caseStudyTitle: 'E-Commerce Expansion Advisory',
    caseStudyDesc: 'Structured the local joint venture, tax registrations, and cross-border tech licensing contracts for a major regional FMCG delivery brand expanding into the Kenyan market.'
  },
  {
    id: 'family-succession',
    title: 'Family Law, Probate & Succession',
    shortDesc: 'Compassionate and expert administration of estates, wills, trusts, and family matters.',
    longDesc: 'Family and estate alignment requires a high degree of empathy blended with professional precision. We represent families with the utmost confidentiality, focusing on secure wealth preservation and amicable family alignments that comply with Kenyan Succession structures.',
    iconName: 'Heart',
    statutes: [
      'Law of Succession Act (Cap 160)',
      'Marriage Act (No. 4 of 2014)',
      'Children Act (No. 8 of 2001)',
      'Matrimonial Property Act (No. 49 of 2013)'
    ],
    services: [
      'Drafting of clean, custom Wills and private family trusts',
      'Letters of Administration and Petitions for Probate at High Court Family Division',
      'Drafting of Matrimonial Property Agreements and nuptial panels',
      'Representation in matrimonial dispute resolutions and custody advisories',
      'Distribution of testate and intestate estates under Kenyan statutory guidelines'
    ],
    caseStudyTitle: 'Multi-Asset Estate Securitization',
    caseStudyDesc: 'Managed the estate administration and successfully structured a family trust for a complex, distributed asset portfolio including agricultural lands in Rift Valley and apartments in Nairobi.'
  },
  {
    id: 'litigation-dispute',
    title: 'Litigation & Dispute Resolution',
    shortDesc: 'Aggressive courtroom representation and sophisticated Alternative Dispute Resolution (ADR).',
    longDesc: 'When disputes arise, we represent clients before the High Court, Court of Appeal, and Supreme Court of Kenya, alongside state tribunals. Where appropriate, we actively leverage court-annexed mediation to secure swift, favorable outcomes without protracted trials.',
    iconName: 'Scale',
    statutes: [
      'Civil Procedure Act (Cap 21)',
      'Arbitration Act (Cap 49)',
      'High Court (Commercial Division) Practice Directions',
      'Fair Administrative Action Act (No. 4 of 2015)'
    ],
    services: [
      'High-stakes Commercial and Civil Litigation',
      'Arbitration and Court-Annexed Mediation representation',
      'Judicial Review and Constitutional petitions',
      'Debt recovery, summary judgments, and security enforcement',
      'County government planning appeal tribunals'
    ],
    caseStudyTitle: 'Land Landmark Title Safeguarding',
    caseStudyDesc: 'Secured a favorable Judgment from the Environment and Land Court of Kenya, successfully safeguarding our client’s long-held prime public concession parcel against third-party claims.'
  },
  {
    id: 'employment-labour',
    title: 'Employment & Labour Law',
    shortDesc: 'Mitigating employer-employee disputes, drafting policy manuals, and representing before the ELRC.',
    longDesc: 'We assist corporations, public entities, and individual professionals in cultivating compliant workplace relationships. We design robust legal frameworks that align with Kenya’s employee-centric labor jurisprudence, defending actions effectively when needed.',
    iconName: 'UserCheck',
    statutes: [
      'Employment Act (No. 11 of 2007)',
      'Labour Relations Act (No. 14 of 2007)',
      'Work Injury Benefits Act (No. 13 of 2007)'
    ],
    services: [
      'Drafting of Employment Contracts, Executive Agreements, and Service Level covenants',
      'Designing of custom HR Policy Manuals and Code of Conduct frameworks',
      'Guiding legally insulated redundancy exercises and collective bargaining negotiations',
      'Advocacy and representation before the Employment and Labour Relations Court (ELRC)',
      'Advisory on Employee Share Ownership Plans (ESOPs)'
    ],
    caseStudyTitle: 'Corporate Redundancy Shielding',
    caseStudyDesc: 'Advised and executed a sensitive organizational restructuring and workforce alignment for a logistics firm of 250+ employees without triggering any labor litigation or ELRC claims.'
  },
  {
    id: 'banking-finance',
    title: 'Banking & Finance Law',
    shortDesc: 'Structured secure lending documentation, bank securities, and regulatory compliance advisory.',
    longDesc: 'Our team acts for prominent Kenay commercial banks, micro-finance institutions, and business borrowers. We handle loan documentation drafting, register security charges, and offer compliance opinions on central bank directions.',
    iconName: 'Coins',
    statutes: [
      'Banking Act (Cap 488)',
      'Central Bank of Kenya Act (Cap 491)',
      'Chattels Transfer Act (Cap 28)',
      'Consumer Protection Act (No. 46 of 2012)'
    ],
    services: [
      'Preparation and registration of Charges, Guarantees, Mortgages, and Debentures',
      'Structuring of Syndicated Loans and project financing facilities',
      'Due diligence on corporate borrowers and security asset tracking',
      'Legal opinions on Central Bank of Kenya (CBK) guidelines',
      'Secured debt restructuring and recovery litigation representation'
    ],
    caseStudyTitle: 'Agricultural Cooperative Lending Securitization',
    caseStudyDesc: 'Facilitated the compliance auditing, security perfection, and charge registration for a agricultural infrastructure syndicate facility valued at KES 450 Million.'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'nevyl-omondi',
    name: 'Nevyl Omondi, Esq.',
    role: 'Managing Partner',
    email: 'n.omondi@nevyladvocates.co.ke',
    phone: '+254 (0) 712 345 678',
    bio: 'Nevyl has over 15 years of experience in Commercial Law and Real Estate transactional structures in East Africa. An alumnus of the University of Nairobi, he is widely regarded for steering high-value joint ventures and advising government agencies on land legal frameworks. He is a member of the Law Society of Kenya (LSK) and the East Africa Law Society.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    qualifications: [
      'Master of Laws (LL.M.) in Corporate Law - University of Nairobi',
      'Bachelor of Laws (LL.B.) (First Class Honours) - University of Nairobi',
      'Postgraduate Diploma - Kenya School of Law',
      'Commissioner for Oaths & Notary Public'
    ],
    admissionYear: '2010',
    courtRanking: 'Senior Advocate of the High Court of Kenya'
  },
  {
    id: 'grace-mutua',
    name: 'Grace Mutua',
    role: 'Senior Partner, Dispute Resolution',
    email: 'g.mutua@nevyladvocates.co.ke',
    phone: '+254 (0) 722 987 654',
    bio: 'Grace heads the Commercial Litigation and ADR division. She is a certified mediator and has represented top financial entities and private developers in both High Court actions and international arbitration. Her analytical prowess and commitment to rapid dispute resolution ensures Nevyl Advocates’ litigation ratios remain among Kenya’s most successful.',
    image: '', // Will use the generated image path here dynamically
    qualifications: [
      'Bachelor of Laws (LL.B.) (Honours) - Makerere University',
      'Postgraduate Diploma - Kenya School of Law',
      'Chartered Arbitrator (CIArb - London & Kenya Chapter)',
      'Member of the Chartered Institute of Arbitrators'
    ],
    admissionYear: '2012',
    courtRanking: 'Advocate of the High Court of Kenya'
  },
  {
    id: 'alphas-kiprop',
    name: 'Dr. Alphas Kiprop',
    role: 'Partner, Employment & Labour Law',
    email: 'a.kiprop@nevyladvocates.co.ke',
    phone: '+254 (0) 733 444 555',
    bio: 'Dr. Kiprop is a leading legal scholar and practitioner in Employment & Labour Relations. With multiple publications to his credit, he provides strategic counsel to multinational HR departments. He focuses on union negotiations, executive contracts, and defends delicate organizational adjustments in the ELRC.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
    qualifications: [
      'Doctor of Philosophy (Ph.D.) in Workplace Jurisprudence - Strathmore University',
      'Master of Laws (LL.M.) in Labour Law - University of Cape Town',
      'Bachelor of Laws (LL.B.) - University of Nairobi',
      'Postgraduate Diploma - Kenya School of Law'
    ],
    admissionYear: '2014',
    courtRanking: 'Advocate of the High Court of Kenya'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Eng. Patrick Mwangi',
    organization: 'Heri Heights Properties Ltd',
    role: 'Managing Director',
    text: 'Nevyl Advocates handled our sectional properties titling for our Westlands residential project. Their understanding of the new Ardhisasa platform and county approvals process was immaculate. They saved us months of delay and kept investors completely informed.',
    rating: 5,
    verified: true
  },
  {
    id: 't2',
    author: 'Halima Ibrahim',
    organization: 'Fintech Savannah Ltd',
    role: 'Co-Founder & CEO',
    text: 'Setting up a cross-border tech joint venture in Kenya comes with intense licensing and tax regulations. Dr. Alphas Kiprop and the corporate team at Nevyl gave us bulletproof contracts that protect our software IP and satisfy all CBK Guidelines. Absolute elite legal minds.',
    rating: 5,
    verified: true
  },
  {
    id: 't3',
    author: 'Arthur Kamau',
    organization: 'Ndarugu Agricultural Holdings',
    role: 'Estate Trustee',
    text: 'During a stressful intestate family estate division, Nevyl Advocates acted with immense compassion, discretion, and absolute mastery of the Law of Succession Act. Their arbitration and mediation approach kept our family united throughout the process.',
    rating: 5,
    verified: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Navigating Land Registration on the Ardhisasa Platform: A Step-by-Step Advocate’s Guide',
    slug: 'navigating-ardhisasa-land-registration-kenya',
    category: 'Conveyancing Law',
    summary: 'An analytical review of the current land digitization initiatives in Kenya under Ardhisasa, highlight common pitfalls for buyers and tips for swift transaction logs.',
    content: `
### Introduction to Ardhisasa
Ardhisasa is the digital platform developed by the Ministry of Lands, Physical Planning, and Housing in collaboration with the National Land Commission (NLC). It is designed to act as a single, secure gateway for all land transactions in Kenya, transitioning the country away from manual registry systems that were historic hotspots for double titles and document misplacements.

Whether you are seeking to perform an official title search (to confirm property descriptions or registered charges) or finalizing a purchase, understanding how to navigate this platform is critical for anyone in the Kenyan real estate ecosystem.

### Key Regulations
Under the **Land Registration Act (No. 3 of 2012)** and subsequent regulations, all transactions in Nairobi have officially shifted to the digital registry. Manual search certificates are no longer admissible in standard civil contracts.

### Step 1: Pre-Transaction Verification (Searching)
Before paying any reservation fee or commitment deposit to a land seller, you must verify the title deeds. Here’s how you initiate a search on Ardhisasa:
1. **Create an Account**: High-quality standard accounts are split into Personal accounts (for buyers/sellers) and Advocate/Business portals.
2. **Retrieve Parcel Number**: Input the correct parcel layout (e.g., NAIROBI/BLOCK 101/4500).
3. **Pay the Prescribed Search Fees**: Currently fixed at KES 500 via M-Pesa.
4. **Download the Official Registry Search Form**: This system-generated form acts as an official warrant of title existence, detailing active caveats, banks holding charging documents, and the legal owner’s name.

### Common Pitfalls on Ardhisasa
While digitisation aims for efficiency, practitioners have faced certain friction points:
- **Missing Land Records**: Frequently legacy files are not fully digitized. Initiating a formal "record update" petition is required, which can take several weeks as physical files are retrieved from the archives at Ardhi House.
- **Mismatched Client Names**: If your e-Citizen account name does not align perfectly with the name on the title, the automated validation of transfer records will error.
- **Verification Timelines**: county planning assessments must be processed through the system, requiring coordinated follow-ups with local surveying teams.

### Professional Recommendation
We strongly recommend having your Advocate of the High Court run the entire transaction through an Advocate account. This ensures that legal undertakings are verified, escrows are safe, and potential disputes under the Land Registration rules are mitigated through official legal correspondence.
    `,
    author: 'Nevyl Omondi, Esq.',
    reads: 1420,
    date: 'June 05, 2026',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop',
    tags: ['Ardhisasa', 'Conveyancing', 'Nairobi Real Estate', 'Ministry of Lands']
  },
  {
    id: 'b2',
    title: 'Registering a Company in Kenya: Post-Incorporation Compliance checklist with KRA',
    slug: 'registering-company-kenya-compliance-kra',
    category: 'Corporate Law',
    summary: 'Discover key compliance steps under the Companies Act 2015 after registering your legal entity on e-Citizen, including KRA tax obligations, beneficial ownership registers, and audits.',
    content: `
### Post-Incorporation Reality
Under the **Companies Act (No. 17 of 2015)**, registration of a company is remarkably swift. Using the e-Citizen portal, entrepreneurs can have their certificate of incorporation and Articles of Association in hand within a few working days.

A common mistake, however, is assuming the work is complete. In Kenya, failing to adhere to mandatory corporate compliance timelines can trigger personal liabilities for directors, alongside hefty financial penalties from the Registrar of Companies and the Kenya Revenue Authority (KRA).

### Post-Incorporation Milestones:
1. **Obtain Corporate KRA PIN**: Modern e-Citizen processes auto-allocate a corporate PIN, but active activation on the iTax platform is required.
2. **KRA Statutory Registrations**: If you intend to hire, you must immediately set up:
   - PAYE (Pay As You Earn)
   - NSSF (National Social Security Fund)
   - SHIF (Social Health Insurance Fund - replacing the older NHIF framework)
3. **Prepare a Register of Beneficial Ownership**: In compliance with section 93A of the Companies Act, businesses must declare individuals holding more than 10% direct/indirect interest or voting rights in the company. Failure to submit this within 30 days of incorporation exposes directors to a penalty of KES 500,000.
4. **Appoint a Company Secretary (When Applicable)**: Under current laws, private companies with a paid-up share capital of KES 5,000,000 or more MUST appoint a qualified resident Company Secretary.

### Summary Checklist
Use this calendar grid to protect your corporate standing:
- **Beneficial Ownership Form**: 30 days from formation.
- **Annual Returns filing**: 30 days from the anniversary of incorporation (filing Fee is currently KES 10,000 on the business registrar portal).
- **Corporate Income Tax Return**: 6 months from the end of your financial year.

Before moving ahead with major commercial vendor logs, ensure your legal foundation is sound. We provide full-suite company secretarial services to let you focus cleanly on expanding your business.
    `,
    author: 'Dr. Alphas Kiprop',
    reads: 980,
    date: 'May 18, 2026',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
    tags: ['KRA PIN', 'e-Citizen', 'Companies Act 2015', 'Tax iTax', 'Beneficial Ownership']
  },
  {
    id: 'b3',
    title: 'Resolving Workspace Disputes: When to File at the Employment & Labour Relations Court (ELRC)',
    slug: 'resolving-workspace-disputes-elrc-kenya',
    category: 'Labour Law',
    summary: 'A deep analytical piece detailing the statutory bounds of wrongful termination in Kenya, and utilizing ADR options under section 15 of the Employment Act 2007.',
    content: `
### Resolving Workplace Disputes
Kenya’s labour jurisprudence is highly protective of employees, requiring employers to demonstrate both a **fair reason** for dismissal and **fair procedure** as specified under Section 41 of the **Employment Act (No. 11 of 2007)**.

If you are an employer initiating downsizing, or an employee coping with sudden terminations, understanding the procedural milestones of the Employment and Labour Relations Court (ELRC) is crucial.

### Crucial Steps of Procedural Fairness:
1. **Issue an Official Show-Cause Letter**: The employer must notify the employee in writing of the allegations or performance concerns.
2. **Allow Representation**: Employees are legally entitled to bring a union worker or a colleague of their choice into disciplinary hearings.
3. **Conduct a Fair Hearing**: Disciplinary proceedings must be documented, and findings must be evaluated with objective neutrality.
4. **Provide Adequate Notice or Pay in Lieu**: Standard contracts mandate notice or equivalent salary logs.

### The Rise of Mediation
Before taking an active litigation path inside the ELRC (which often faces extensive backlogs, sometimes taking over 18 to 24 months to secure trial slots), parties should explore alternative paths.

The High Court of Kenya now mandates **Court-Annexed Mediation** for specific employment disputes. Under this framework, a court-appointed accredited mediator guides parties to settlement terms that can be registered as a binding decree. This keeps details confidential and saves immense corporate costs.

At **Nevyl Advocates**, we believe in settling court actions swiftly through strategic settlements, keeping litigation as a vital but secondary safety valve.
    `,
    author: 'Grace Mutua',
    reads: 1100,
    date: 'April 22, 2026',
    image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=800&auto=format&fit=crop',
    tags: ['ELRC', 'Labour Court', 'Employment Act 2007', 'Show Cause Letter']
  }
];
