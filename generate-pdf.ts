import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

function buildPdfGuideline(outputPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        margin: 50,
        size: 'A4',
        info: {
          Title: 'NEVYL ADVOCATES LLP - Core Architecture & Developer Guide',
          Author: 'NEVYL ADVOCATES Technical Operations',
          Subject: 'Systems Architecture & Developer Hand-off Guide',
          Keywords: 'React, Vite, Tailwind CSS v4, Kenya law firm portal, LSK practices',
        }
      });

      const writeStream = fs.createWriteStream(outputPath);
      doc.pipe(writeStream);

      // Color Palette Definition
      const NAVY = '#1B2A4A';
      const GOLD = '#C9A84C';
      const CHARCOAL = '#2F3E46';
      const LIGHT_GRAY = '#F4F5F6';
      const ACCENT_RED = '#E74C3C';

      // ==========================================
      // PAGE 1: COVER PAGE
      // ==========================================
      
      // Draw luxury geometric background accents
      doc.rect(0, 0, 595.28, 841.89).fill('#FFFFFF');
      doc.rect(0, 0, 15, 841.89).fill(NAVY);
      doc.rect(15, 0, 5, 841.89).fill(GOLD);

      // Top corner badge decoration
      doc.rect(500, 0, 95.28, 120).fill(NAVY);
      doc.polygon([460, 0], [500, 0], [500, 120]);
      doc.fill(NAVY);

      // Gold line details on top
      doc.strokeColor(GOLD).lineWidth(1).moveTo(50, 80).lineTo(400, 80).stroke();

      // Title Block
      doc.fontSize(10).font('Helvetica-Bold').fillColor(GOLD).text('OFFICIAL DEVELOPER RESOURCE & DOCUMENTATION', 50, 100);
      
      doc.moveDown(2);
      doc.fontSize(36).font('Times-Bold').fillColor(NAVY).text('NEVYL ADVOCATES', 50, 125, { characterSpacing: 1.5 });
      doc.fontSize(22).font('Times-Italic').fillColor(NAVY).text('LLP', 50, 165);

      doc.moveDown(1.5);
      doc.fontSize(18).font('Helvetica-Bold').fillColor(CHARCOAL).text('Core Architecture & Developer Guide', 50, 210, { characterSpacing: 0.5 });
      doc.strokeColor(GOLD).lineWidth(3).moveTo(50, 235).lineTo(300, 235).stroke();

      // Subtitle / Intro paragraph
      doc.moveDown(3);
      doc.fontSize(11).font('Helvetica').fillColor(CHARCOAL).text(
        'An exhaustive hand-off guide detailing the clean minimalist design philosophy, modular directory structure, local web state triggers, LSK regulatory standards, compliance frameworks, and deployment commands for the NEVYL ADVOCATES LLP responsive platform.',
        50, 270, { width: 450, align: 'justify', lineGap: 5 }
      );

      // Interactive Features Card on cover page
      doc.rect(50, 400, 480, 180).fill(LIGHT_GRAY);
      doc.rect(50, 400, 4, 180).fill(GOLD);

      doc.fontSize(12).font('Helvetica-Bold').fillColor(NAVY).text('KEY ARCHITECTURAL PILLARS', 70, 420);
      
      doc.fontSize(9.5).font('Helvetica').fillColor(CHARCOAL);
      doc.text('•  Clean Minimalism: Strict styling parameters incorporating off-whites, heavy navy text, and warm golds.', 70, 445);
      doc.text('•  Statutory Integrity: Regulatory compliance safeguards aligning with the Advocates Act Cap 16, Kenya.', 70, 465);
      doc.text('•  ODPC Protected Forms: Secure contact forms and log mechanisms reflecting data privacy act parameters.', 70, 485);
      doc.text('•  High-Performance SPA: Reactive navigation utilizing Vite, modern React, and rapid tailwind components.', 70, 505);
      doc.text('•  Encrypted LSK Member Portal: Administrative dashboards utilizing secure local storage mock synchronization.', 70, 525);

      // Meta Information Box
      doc.fontSize(9).font('Helvetica-Bold').fillColor(NAVY).text('ORGANIZATION:', 50, 630);
      doc.font('Courier').fillColor(CHARCOAL).text('NEVYL ADVOCATES LLP, Nairobi, Kenya', 160, 630);

      doc.font('Helvetica-Bold').fillColor(NAVY).text('FRAMEWORKS:', 50, 650);
      doc.font('Courier').fillColor(CHARCOAL).text('React 19 + TypeScript + Vite 6 + Tailwind CSS v4', 160, 650);

      doc.font('Helvetica-Bold').fillColor(NAVY).text('TARGET AUDIENCE:', 50, 670);
      doc.font('Courier').fillColor(CHARCOAL).text('In-House Legal Technologists & Maintenance Engineers', 160, 670);

      doc.font('Helvetica-Bold').fillColor(NAVY).text('DOCUMENT VERSION:', 50, 690);
      doc.font('Courier').fillColor(GOLD).text('v1.2.0 (Production Hardened Release)', 160, 690);

      // Copyright on Cover
      doc.fontSize(8).font('Helvetica').fillColor('#7F8C8D').text('© 2026 NEVYL ADVOCATES LLP. Certified for internal distribution only.', 50, 750, { width: 495, align: 'center' });

      // ==========================================
      // ADDS WATERMARK/HEADER/FOOTER UTILITY FUNCTIONS
      // ==========================================
      const addHeaderAndFooter = (pageTitle: string, pageNumber: number) => {
        doc.addPage();
        
        // Header bar
        doc.rect(50, 30, 495, 30).fill(LIGHT_GRAY);
        doc.rect(50, 30, 3, 30).fill(GOLD);
        
        doc.fontSize(8.5).font('Helvetica-Bold').fillColor(NAVY).text('NEVYL ADVOCATES LLP', 65, 41, { characterSpacing: 1 });
        doc.fontSize(8.5).font('Times-Italic').fillColor(CHARCOAL).text(`Section: ${pageTitle}`, 210, 41);
        doc.fontSize(8.5).font('Courier').fillColor(GOLD).text('LSK COMPLIANT REPO', 430, 41);

        // Footer bar
        doc.strokeColor('#E0E0E0').lineWidth(0.5).moveTo(50, 770).lineTo(50 + 495, 770).stroke();
        doc.fontSize(7.5).font('Helvetica').fillColor('#7F8C8D').text('INTERNAL USE ONLY • ADVOCATES ACT SECURITIES & COMPLIANCES GUIDE', 50, 780);
        doc.font('Helvetica-Bold').fillColor(NAVY).text(`Page ${pageNumber}`, 490, 780, { width: 55, align: 'right' });
      };

      // ==========================================
      // PAGE 2: ARCHITECTURAL FRAMEWORK
      // ==========================================
      addHeaderAndFooter('Architectural Framework', 2);

      doc.fontSize(18).font('Times-Bold').fillColor(NAVY).text('1. Modern Full-Stack Client Architecture', 50, 90);
      doc.strokeColor(GOLD).lineWidth(1.5).moveTo(50, 110).lineTo(495 + 50, 110).stroke();

      doc.moveDown(1.5);
      doc.fontSize(10).font('Helvetica').fillColor(CHARCOAL).text(
        'The NEVYL ADVOCATES LLP portal is constructed as an optimized Single Page Application (SPA), emphasizing high speed, safety, and strict visual aesthetics. This architecture guarantees that legal briefs, practitioner rolls, and real property files load instantaneously even on limited broadband connections across East Africa, adhering to modern UX principles.',
        50, 125, { width: 495, align: 'justify', lineGap: 4 }
      );

      doc.moveDown(1);
      doc.fontSize(11).font('Helvetica-Bold').fillColor(NAVY).text('Core Layer Infrastructure:');
      
      doc.moveDown(0.5);
      doc.fontSize(9.5).font('Helvetica-Bold').fillColor(CHARCOAL).text('•  Development Server & Compiler:', 65, 230);
      doc.font('Helvetica').text('  Driven by Vite 6.0 representing immediate loading cycles, utilizing ESM-based Hot Module Replacement patterns during staging, and fully stripped native TypeScript formatting outputting to standard CSS/JS configurations.', 65, 245, { width: 480 });

      doc.moveDown(0.5);
      doc.fontSize(9.5).font('Helvetica-Bold').fillColor(CHARCOAL).text('•  Target Framework Componentization:');
      doc.font('Helvetica').text('  Harnesses React 19 functional constructs, hooks (useState, useEffect, and useRef), type guards, custom event emitters, and layout triggers matching the highest professional grade React benchmarks.', 65, doc.y + 2, { width: 480 });

      doc.moveDown(0.5);
      doc.fontSize(9.5).font('Helvetica-Bold').fillColor(CHARCOAL).text('•  Styling Vector & Atomic Layouts:');
      doc.font('Helvetica').text('  Configured through Tailwind CSS v4 in src/index.css via @import rules. No separate stylesheet overhead. This provides highly responsive design utilities (sm:, md:, lg:, xl: limits), typography sizes, layout flow alignment, and consistent theme matching.', 65, doc.y + 2, { width: 480 });

      // Code visual representation box
      doc.rect(50, 480, 495, 120).fill('#1E2A38');
      doc.rect(50, 480, 3, 120).fill(GOLD);

      doc.fontSize(8).font('Courier').fillColor('#A2D2FF').text('// Main Client Bootstrap - src/main.tsx', 65, 495);
      doc.fillColor('#FFFFFF').text('import React from \'react\';', 65, 510);
      doc.text('import ReactDOM from \'react-dom/client\';', 65, 522);
      doc.text('import App from \'./App\';', 65, 534);
      doc.text('import \'./index.css\';', 65, 546);
      doc.fillColor('#F1C40F').text('ReactDOM.createRoot(document.getElementById(\'root\')!).render(', 65, 565);
      doc.fillColor('#FFFFFF').text('  <React.StrictMode><App /></React.StrictMode>', 65, 577);
      doc.fillColor('#F1C40F').text(');', 65, 589);

      // Section summary
      doc.fontSize(9).font('Times-Italic').fillColor(GOLD).text(
        '"Clean and atomic separation of components maintains robust execution cycles, avoiding state collisions during multi-tab operations."',
        50, 630, { width: 495, align: 'center' }
      );

      // ==========================================
      // PAGE 3: COMPONENT DIRECTORY MAP
      // ==========================================
      addHeaderAndFooter('Codebase Directory Map', 3);

      doc.fontSize(18).font('Times-Bold').fillColor(NAVY).text('2. Structure of Directories & Core Modules', 50, 90);
      doc.strokeColor(GOLD).lineWidth(1.5).moveTo(50, 110).lineTo(495 + 50, 110).stroke();

      doc.moveDown(1.5);
      doc.fontSize(10).font('Helvetica').fillColor(CHARCOAL).text(
        'The workspace holds modular sub-folders grouped specifically by runtime responsibilities. This ensures developers can locate and edit client forms, layouts, assets, or databases with absolute ease, and maintains compliance with scaling structures.',
        50, 125, { width: 495, lineGap: 4 }
      );

      // Folder map representation
      doc.rect(50, 180, 495, 230).fill(LIGHT_GRAY);
      doc.rect(50, 180, 3, 230).fill(NAVY);

      doc.fontSize(8.5).font('Courier-Bold').fillColor(NAVY).text('NEVYL REPOSITORY MAP', 65, 195);
      doc.fontSize(8.5).font('Courier').fillColor(CHARCOAL);
      doc.text('/ (Root directory containing manifest setups)', 65, 215);
      doc.text('├── index.html                   - Main client entry point setting SEO & viewport metadata', 65, 227);
      doc.text('├── package.json                 - Operational dependencies, compilation, and linter settings', 65, 239);
      doc.text('├── vite.config.ts               - Build pipeline, aliasing, and HMR server definitions', 65, 251);
      doc.text('└── src/                         - Core application root', 65, 263);
      doc.text('    ├── main.tsx                 - Initial React hydration and DOM bindings', 65, 275);
      doc.text('    ├── App.tsx                  - Router engine, layout definitions, and active view management', 65, 287);
      doc.text('    ├── index.css                - Fonts inclusion, Tailwind import, and customized brand theme', 65, 299);
      doc.text('    ├── types.ts                 - Strongly-typed schemas (ContactMessage, BlogPost, and Team)', 65, 311);
      doc.text('    ├── data.ts                  - Static static records (Practice details, Blog items, and Lawyers)', 65, 323);
      doc.text('    └── components/              - Fully isolated component layer', 65, 335);
      doc.text('        ├── Navbar.tsx           - LSK header details and navigation links', 65, 347);
      doc.text('        ├── Hero.tsx             - Dynamic splash section and Chambers Overview statistics', 65, 359);
      doc.text('        ├── About.tsx            - Roadmap footprint timeline and legislative rules', 65, 371);
      doc.text('        ├── PracticeAreas.tsx    - Interactive grid of legal divisions matching Kenyan Codes', 65, 383);
      doc.text('        └── ContactForm.tsx      - secure encrypted input portal conforming to ODPC guidelines', 65, 395);

      doc.fontSize(10).font('Helvetica-Bold').fillColor(NAVY).text('Primary Application Entry point: src/App.tsx', 50, 430);
      doc.font('Helvetica').fontSize(9.5).fillColor(CHARCOAL).text(
        'App.tsx houses the centralized React state engine. When an end user clicks on navigation headers, the activeState variable swaps immediately, prompting layout renders under strict viewport bounds. Component renders are conditionally split to guarantee high system speed, avoiding massive load bottlenecks.',
        50, 445, { width: 495, align: 'justify', lineGap: 3 }
      );

      doc.moveDown(0.8);
      doc.fontSize(9.5).font('Helvetica-Bold').fillColor(CHARCOAL).text('React Hook Dependencies utilized in App.tsx:');
      doc.font('Helvetica').text('  1. useState: Governs active tabs, admin view triggers, selected practice cards, and contact models.', 65, doc.y + 4);
      doc.text('  2. useEffect: Handles browser positioning, title synchronizations, and reading simulated inbox files.', 65, doc.y + 2);

      // ==========================================
      // PAGE 4: DATA INTEGRITY & STATUTORIES
      // ==========================================
      addHeaderAndFooter('Kenyan Legal Compliance', 4);

      doc.fontSize(18).font('Times-Bold').fillColor(NAVY).text('3. Kenyan Compliance Protocols & Data Rules', 50, 90);
      doc.strokeColor(GOLD).lineWidth(1.5).moveTo(50, 110).lineTo(495 + 50, 110).stroke();

      doc.moveDown(1.5);
      doc.fontSize(10).font('Helvetica').fillColor(CHARCOAL).text(
        'As an accredited Kenyan legal partnership, Nevyl Advocates LLP operates under strict statutory standards governed by the Laws of Kenya. The developer MUST respect and maintain these compliance safeguards during all subsequent code modifications.',
        50, 125, { width: 495, lineGap: 4 }
      );

      // Box representing laws
      doc.rect(50, 190, 495, 170).fill('#FAFAFA').strokeColor('#E2E8F0').lineWidth(1).stroke();
      doc.rect(50, 190, 4, 170).fill(GOLD);

      doc.fontSize(11).font('Times-Bold').fillColor(NAVY).text('KEY STATUTORY LEGISLATIONS INCORPORATED:', 70, 205);
      
      doc.fontSize(9.5).font('Helvetica-Bold').fillColor(CHARCOAL).text('A. The Advocates Act, Cap 16 (Laws of Kenya)', 70, 230);
      doc.font('Helvetica').text('   Prevents unauthorized advertising and guides attorney representations. The website names, descriptions, and accolades are written inside literal parameters without aggressive or false taglines.', 70, doc.y + 2, { width: 460 });

      doc.moveDown(0.5);
      doc.fontSize(9.5).font('Helvetica-Bold').fillColor(CHARCOAL).text('B. The Data Protection Act, 2019 (Office of the Data Commissioner)', 70, doc.y + 2);
      doc.font('Helvetica').text('   Governs personal identification numbers, phone logs, and email assessments. ContactForm.tsx contains an explicit constraint checkbox that blocks clients from dispatching briefs unless they consent to data processing criteria.', 70, doc.y + 2, { width: 460 });

      doc.fontSize(10).font('Helvetica-Bold').fillColor(NAVY).text('Regulatory Guidelines & Client Trust Rules:', 50, 380);
      
      doc.font('Helvetica').fontSize(9.5).fillColor(CHARCOAL);
      doc.text('1.  Escrow Accounts Protection: Informational components explicitly state that attorney retainers do not apply simply upon hitting send. This protects against immediate litigation claims.', 50, 400, { width: 495, lineGap: 3 });
      doc.text('2.  Valid LSK rolls records: The Barristers section displays exact admission numbers corresponding to verified records of the Law Society of Kenya, strengthening client trust and commercial legitimacy.', 50, doc.y + 6, { width: 495 });
      doc.text('3.  E-Citizen & e-Conveyancing Integration: The platform explains automated company lookups, business setups, and title lookups via Ardhisasa, providing explicit explanations of system handshakes to end-users.', 50, doc.y + 6, { width: 495 });

      // Code compliance check illustration
      doc.rect(50, 550, 495, 110).fill('#FFFDF0').strokeColor('#FFEAA7').lineWidth(1).stroke();
      doc.rect(50, 550, 3, 110).fill(GOLD);
      
      doc.fontSize(9).font('Helvetica-Bold').fillColor('#856404').text('⚠️ DEVELOPER NOTE FOR ANY REGULATORY AUDITS:', 65, 565);
      doc.font('Helvetica').fontSize(8.5).fillColor('#856404').text(
        'Never remove the consent checkboxes inside ClientContact forms or replace the statutory citations. If the Ministry of Lands updates Ardhisasa API requirements or the Business Registration Service alters company registration rules, update references strictly inside src/data.ts under the respective practice identifiers.',
        65, 585, { width: 465, lineGap: 2.5 }
      );

      // ==========================================
      // PAGE 5: DEVELOPER MANUAL & OPERATIONS
      // ==========================================
      addHeaderAndFooter('Developer Manual & Operations', 5);

      doc.fontSize(18).font('Times-Bold').fillColor(NAVY).text('4. Core Developer Commands & Code Editing Instructions', 50, 90);
      doc.strokeColor(GOLD).lineWidth(1.5).moveTo(50, 110).lineTo(495 + 50, 110).stroke();

      doc.moveDown(1.5);
      doc.fontSize(10).font('Helvetica').fillColor(CHARCOAL).text(
        'The developer commands allow quick code edits, local compilation verification, code linting before production deployment, and quick package extensions. Follow this exact operational order.',
        50, 125, { width: 495, lineGap: 4 }
      );

      // Command boxes
      doc.fontSize(10).font('Helvetica-Bold').fillColor(NAVY).text('Development Flow Instructions:', 50, 175);

      // Item 1
      doc.rect(50, 200, 495, 45).fill(LIGHT_GRAY);
      doc.fontSize(9.5).font('Helvetica-Bold').fillColor(CHARCOAL).text('1. Fire-up local dev web server', 60, 210);
      doc.font('Courier').fillColor(NAVY).text('npm run dev', 400, 210);
      doc.font('Helvetica').fontSize(8.5).fillColor(CHARCOAL).text('Launches the Vite platform binding statically to 0.0.0.0:3000 automatically.', 60, 225);

      // Item 2
      doc.rect(50, 255, 495, 45).fill(LIGHT_GRAY);
      doc.fontSize(9.5).font('Helvetica-Bold').fillColor(CHARCOAL).text('2. Verify linter & types compatibility', 60, 265);
      doc.font('Courier').fillColor(NAVY).text('npm run lint', 400, 265);
      doc.font('Helvetica').fontSize(8.5).fillColor(CHARCOAL).text('Executes typescript compilation checks to ensure zero runtime parsing errors.', 60, 280);

      // Item 3
      doc.rect(50, 310, 495, 45).fill(LIGHT_GRAY);
      doc.fontSize(9.5).font('Helvetica-Bold').fillColor(CHARCOAL).text('3. Compile production builds', 60, 320);
      doc.font('Courier').fillColor(NAVY).text('npm run build', 400, 320);
      doc.font('Helvetica').fontSize(8.5).fillColor(CHARCOAL).text('Optimizes and assets compiles static bundles served securely under dist/ folders.', 60, 335);

      doc.fontSize(11).font('Helvetica-Bold').fillColor(NAVY).text('How To Edit Static Records (Practice areas, Team, Blogs):', 50, 380);

      doc.font('Helvetica').fontSize(9.5).fillColor(CHARCOAL);
      doc.text('A. Adding/Editing Team members: Open src/data.ts, identify the TEAM list array, edit records or insert a new member object conforming to the Team schema specified in src/types.ts.', 50, 400, { width: 495, lineGap: 3 });
      doc.text('B. Amending Practice Details: Locate PRACTICE_AREAS variables inside src/data.ts, adapt titles, shortDesc, longDesc, statutes arrays, or case study titles. Component layouts auto-adapt immediately.', 50, doc.y + 6, { width: 495 });
      doc.text('C. Adding rich legal articles: Locate BLOG_POSTS list containing arrays. Paragraph divisions inside the content key must be separated by double linebreaks (\'\\n\\n\') to trigger standard typography formatting in the reader component.', 50, doc.y + 6, { width: 495 });

      // Conclusion box
      doc.rect(50, 560, 495, 120).fill(NAVY);
      doc.rect(50, 560, 4, 120).fill(GOLD);

      doc.fontSize(11).font('Times-Bold').fillColor(GOLD).text('OFFICIAL TRANS-OPERATION SIGN-OFF', 70, 580);
      doc.fontSize(9).font('Helvetica').fillColor('#FFFFFF').text(
        'For technical support or escalation concerning Kenyan API authentications, contact Nevyl IT operations. All additions must retain the clean minimalist typography and borders outlined in this guide.',
        70, 605, { width: 450, lineGap: 3 }
      );

      doc.fontSize(8.5).font('Courier-Bold').fillColor(GOLD).text('NEVYL OPERATIONAL ASSURANCE • NAIROBI, KENYA', 70, 655);

      // Finale
      doc.end();

      // Resolve stream
      writeStream.on('finish', () => {
        resolve();
      });

      writeStream.on('error', (err) => {
        reject(err);
      });

    } catch (e) {
      reject(e);
    }
  });
}

// Execute immediately if run directly
const targetPath1 = path.join(process.cwd(), 'NEVYL_DEVELOPER_GUIDE.pdf');
const targetPath2 = path.join(process.cwd(), 'public', 'NEVYL_DEVELOPER_GUIDE.pdf');

// Ensure public folder exists
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

console.log('Generating files under paths:');
console.log('1. ', targetPath1);
console.log('2. ', targetPath2);

Promise.all([
  buildPdfGuideline(targetPath1),
  buildPdfGuideline(targetPath2)
]).then(() => {
  console.log('PDF Files compiled successfully!');
}).catch((err) => {
  console.error('Extraction Error compiling PDF: ', err);
  process.exit(1);
});
