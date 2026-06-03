// Default CV JSON Data Structure populated with Markus Waldheim's official dev bio
const defaultCVData = {
  "layout": {
    "theme": "teal",
    "style": "modernist",
    "background": "cream",
    "headerStyle": "split",
    "footerStyle": "corporate",
    "footerText": "Alexander Neumann — Senior IT-Consultant & DevSecOps Experte",
    "previewMode": "a4",
    "visibleSections": {
      "profile": true,
      "workExperience": true,
      "projects": true,
      "openSource": true,
      "skills": true,
      "competencies": true,
      "education": true,
      "certifications": true,
      "methodsAndTools": true,
      "languages": true,
      "hobbies": true,
      "volunteer": false,
      "awards": false,
      "drivingLicense": false,
      "talks": false,
      "publications": false,
      "references": false
    }
  },
  "personal": {
    "name": "Alexander Neumann",
    "role": "Senior IT-Consultant & DevSecOps Experte",
    "email": "alexander.neumann@example.com",
    "phone": "+49 89 12345678",
    "address": "",
    "location": "München, Deutschland",
    "website": "alexander-neumann.dev",
    "github": "github.com/alexander-neumann",
    "linkedin": "linkedin.com/in/alexander-neumann",
    "photo": "",
    "birthDate": "",
    "birthPlace": "",
    "nationality": "",
    "profileText": "Zertifizierter Scrum Master (PSM II) und Ausbilder (IHK) mit über 10 Jahren IT-Praxiserfahrung an der Schnittstelle zwischen Softwarearchitektur, robuster System-Infrastruktur und agiler Transformation. Meine Mission ist das Schließen der Lücke zwischen Geschäfts-Visionen und technischer Exzellenz sowie das Eliminieren von Ineffizienzen in Softwareprojekten."
  },
  "competencies": [
    {
      "title": "DevSecOps & Automation",
      "description": "Integration von automatisierten Sicherheitsprüfungen und stabilen CI/CD-Pipelines in Agile Workflows."
    },
    {
      "title": "Software-Architektur",
      "description": "Konzeption und Modularisierung skalierbarer Cloud-Native- und Kubernetes-Anwendungen."
    },
    {
      "title": "Agiles Coaching & Leadership",
      "description": "Befähigung von cross-funktionalen Teams durch agile Methoden nach Scrum (PSM II) und IHK-Richtlinien."
    }
  ],
  "languages": [
    {
      "name": "Deutsch",
      "level": "Muttersprache",
      "percentage": 100
    },
    {
      "name": "Englisch",
      "level": "Verhandlungssicher",
      "percentage": 90
    }
  ],
  "certifications": [
    {
      "title": "Professional Scrum Master II (PSM II)",
      "authority": "Scrum.org",
      "date": "2024"
    },
    {
      "title": "Professional Scrum Master I (PSM I)",
      "authority": "Scrum.org",
      "date": "2023"
    },
    {
      "title": "Professional Scrum Product Owner I (PSPO I)",
      "authority": "Scrum.org",
      "date": "2023"
    },
    {
      "title": "Zertifizierter Ausbilder (AdA)",
      "authority": "IHK München",
      "date": "2021"
    }
  ],
  "workExperience": [
    {
      "role": "Inhaber & IT-Berater",
      "company": "Neumann Consulting & Tech, München",
      "date": "Seit Feb 2022",
      "details": [
        "IT-Dienstleistungen und strategische Beratung für KMU, Startups und Vereine in Südbayern.",
        "Fokus auf DevSecOps, moderne Webarchitektur (Frontend & Backend), UI/UX-Design und Cloud-Infrastruktur.",
        "Entwicklung und Instandhaltung eigener SaaS-Branchenlösungen zur Prozessautomatisierung und Fuhrparkkosten-Optimierung."
      ]
    },
    {
      "role": "Senior IT-Consultant",
      "company": "Global Technology Solutions AG, München",
      "date": "Seit Jul 2022",
      "details": [
        "Strategische Entwicklung von Geschäftsprozess-Anwendungen in den Bereichen Staatswesen, Medizin und Automobilindustrie.",
        "Kernmitglied des hausinternen DevSecOps-Expertenteams sowie des UI/UX-Zirkels.",
        "Projekte: DevSecOps-Automatisierung für kommunale Software (München), inhouse DevService-Teamunterstützung und Diabetesstudien-Verwaltung."
      ]
    },
    {
      "role": "Fullstack-Entwickler & Teamleiter / Ausbilder",
      "company": "Enterprise Software AG, Augsburg",
      "date": "Feb 2015 — Jul 2022",
      "details": [
        "Entwicklung und Modularisierung eines PHP-basierten ERP/CRM-Systems für Verbände und Organisationen.",
        "Als Teamleiter (seit 2020) verantwortlich für die agile Neuentwicklung des CRM-Kerns auf Angular-Basis.",
        "Verantwortlicher IHK-Ausbilder der Fachinformatiker für Anwendungsentwicklung sowie Administrator der lokalen Netzwerke und CI/CD-Systeme."
      ]
    }
  ],
  "education": [
    {
      "degree": "Ausbildung zum Fachinformatiker für Anwendungsentwicklung",
      "institution": "Enterprise Software AG, Augsburg (Abschluss vor der IHK)",
      "date": "2015 — 2018"
    }
  ],
  "methodsAndTools": [
    "Scrum / Agile",
    "DevSecOps / CI-CD",
    "Chaos Engineering",
    "Git / GitHub Flow",
    "Docker / Podman",
    "UI-UX / Wireframing",
    "KI-gestützte Entwicklung",
    "IHK-Ausbildung & Coaching"
  ],
  "hobbies": [
    "🛠️ Open-Source-Entwicklung (z. B. WetterApp, Custom Framework, Netbox-Plugins)",
    "🎓 Wissensvermittlung und Mentoring",
    "⚡ Cloud Architecture & Tech-Experimente"
  ],
  "projects": [
    {
      "title": "K8s Chaos Battleship (Cloud-Konferenz)",
      "duration": "2026",
      "role": "Rolle: Core Developer & Architect",
      "description": "Konzeption eines interaktiven Chaos Engineering Experiments für eine Tech-Konferenz, aufgebaut mit Go, Kubernetes und FluxCD zur anschaulichen Demonstration resilienter Infrastrukturen.",
      "technologies": ["Go", "Kubernetes", "FluxCD", "Docker", "DevSecOps"]
    },
    {
      "title": "B2B SaaS Plattform",
      "duration": "2024 — 2025",
      "role": "Rolle: Product Owner & Lead Developer",
      "description": "Entwicklung einer mandantenfähigen B2B-Plattform zur Abrechnung und Verwaltung von Miet- und WEG-Nebenkosten für kleinere Immobilienverwaltungen.",
      "technologies": ["Angular", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker"]
    },
    {
      "title": "Webportal Musikverein",
      "duration": "2023 — 2024",
      "role": "Rolle: Web-Designer & Core Committer",
      "description": "Modernisierung eines gesamten Vereinsauftritts mit Astro.js und Tailwind CSS zur Erreichung optimaler Ladezeiten (Lighthouse-Score 100/100) und moderner UI.",
      "technologies": ["Astro.js", "Tailwind CSS", "Vite", "SEO Optimierung"]
    }
  ],
  "openSource": [
    {
      "title": "Custom Go Agent Framework",
      "role": "Creator & Lead Architect",
      "description": "Ein autonomes, hoch-performantes Multi-Agenten-Framework in Go zur Erstellung, Koordination und Ausführung kollaborativer KI-Agenten-Systeme (LLM-integriert).",
      "technologies": ["Go (Golang)", "Anthropic API", "Gemini API", "Docker", "CLI"]
    },
    {
      "title": "Netbox Document Generator",
      "role": "Creator & Maintainer",
      "description": "Ein nützliches Automatisierungs-Tool für Vereine zur schnellen, fehlerfreien Generierung von Hardware-Ausgabescheinen und Übergabebelegen direkt aus Netbox-Datenbanken.",
      "technologies": ["Python", "Netbox API", "HTML / CSS", "PDF-Generation"]
    },
    {
      "title": "WetterApp",
      "role": "Creator",
      "description": "Eine hoch-performante, quelloffene Wetter-App mit Multi-Provider-Unterstützung zur Live-Aggregation meteorologischer Messdaten.",
      "technologies": ["Astro.js", "Tailwind CSS", "TypeScript", "REST APIs"]
    },
    {
      "title": "llms.txt Astro Plugin",
      "role": "Creator",
      "description": "Ein Open-Source Astro.js Plugin zur automatisierten Erstellung und Aktualisierung standardisierter llms.txt-Dateien zur optimalen AI-Lesbarkeit von Websites.",
      "technologies": ["Astro.js", "TypeScript", "Node.js", "Markdown-Parser"]
    }
  ],
  "talks": [
    {
      "title": "DevSecOps in der Praxis – von 0 auf Pipeline in 60 Minuten",
      "event": "DevConf Munich 2025",
      "date": "2025",
      "url": ""
    }
  ],
  "publications": [
    {
      "title": "Clean Architecture im agilen Umfeld",
      "publisher": "IT-Spektrum Blog",
      "date": "2024",
      "url": ""
    }
  ],
  "referencesNote": "Referenzen aus früheren Positionen sind auf Anfrage erhältlich.",
  "volunteer": [
    {
      "role": "Mentor für Nachwuchs-Entwickler",
      "organization": "Tech Mentoring Initiative München",
      "date": "2021 – heute",
      "description": "Begleitung und Förderung von Junior-Entwicklern in den Bereichen Clean Code, agile Methoden und DevSecOps-Praktiken."
    }
  ],
  "awards": [
    {
      "title": "Outstanding Developer Award",
      "issuer": "TechConf Munich",
      "date": "2023",
      "description": "Auszeichnung für herausragende Beiträge zur Open-Source-Community im DevSecOps-Umfeld."
    }
  ],
  "drivingLicense": {
    "classes": "B, BE",
    "ownVehicle": true
  },
  "skills": {
    "groups": [
      {
        "label": "Frontend & UI",
        "items": [
          { "name": "Angular / TypeScript / RxJS", "level": "Experte", "years": "10 Jahre", "percentage": 98 },
          { "name": "Astro.js / Tailwind CSS / Vite", "level": "Experte", "years": "3.5 Jahre", "percentage": 95 },
          { "name": "React / Figma / UI-UX Design", "level": "Sehr gut", "years": "5 Jahre", "percentage": 88 }
        ]
      },
      {
        "label": "Backend & API",
        "items": [
          { "name": "Node.js / Express / NestJS", "level": "Experte", "years": "10 Jahre", "percentage": 92 },
          { "name": "PHP / Java / Spring / Quarkus", "level": "Sehr gut", "years": "12 Jahre", "percentage": 85 },
          { "name": "Go (Golang)", "level": "Gut", "years": "1 Jahr", "percentage": 70 }
        ]
      },
      {
        "label": "DevSecOps & Cloud",
        "items": [
          { "name": "Kubernetes / Docker / Helm", "level": "Experte", "years": "7 Jahre", "percentage": 94 },
          { "name": "GitLab CI/CD / GitHub Actions", "level": "Experte", "years": "6 Jahre", "percentage": 92 },
          { "name": "AWS / Azure / Terraform", "level": "Sehr gut", "years": "5 Jahre", "percentage": 85 }
        ]
      },
      {
        "label": "Datenbanken & Tools",
        "items": [
          { "name": "PostgreSQL / MongoDB / Redis", "level": "Sehr gut", "years": "8 Jahre", "percentage": 87 },
          { "name": "IntelliJ / VS Code / Figma", "level": "Experte", "years": "10 Jahre", "percentage": 95 }
        ]
      }
    ]
  }
};

// Application State
let cvData = {};
let currentTheme = 'navy';
let activeTab = 'design';
let activeBlock = 'workExperience';
let editMode = true; // Always true for interactive builder

// Theme definitions
const themes = {
  // ── Modern / Trendig ──────────────────────────────────────────────────────
  petrol:     { primary: '#0c4a5a', secondary: '#1a6e86', accent: '#0891b2', accentLight: '#e0f2fe', bg: '#f5fbfd', line: '#bae6fd' },
  midnight:   { primary: '#111827', secondary: '#374151', accent: '#6366f1', accentLight: '#eef2ff', bg: '#f9fafb', line: '#e0e7ff' },
  cobalt:     { primary: '#1e3a5f', secondary: '#2a5298', accent: '#3b82f6', accentLight: '#dbeafe', bg: '#f8faff', line: '#bfdbfe' },
  copper:     { primary: '#3d2b1f', secondary: '#7a4d2e', accent: '#b87333', accentLight: '#fdf0e0', bg: '#fffcf8', line: '#f5deb3' },
  olive:      { primary: '#2d3a1e', secondary: '#4a5e2e', accent: '#6b7e3a', accentLight: '#f0f4e0', bg: '#fafcf7', line: '#d4e0b0' },
  // ── Klassisch / Zeitlos ───────────────────────────────────────────────────
  navy:       { primary: '#1e293b', secondary: '#475569', accent: '#2563eb', accentLight: '#dbeafe', bg: '#f8fafc', line: '#e2e8f0' },
  charcoal:   { primary: '#18181b', secondary: '#3f3f46', accent: '#4f46e5', accentLight: '#e0e7ff', bg: '#fafafa', line: '#e4e4e7' },
  royal:      { primary: '#1e3a8a', secondary: '#1e40af', accent: '#2563eb', accentLight: '#eff6ff', bg: '#f8fafc', line: '#dbeafe' },
  oxford:     { primary: '#002147', secondary: '#003e87', accent: '#0064c8', accentLight: '#e6eeff', bg: '#f8faff', line: '#c0d8f8' },
  // ── Natur / Organisch ─────────────────────────────────────────────────────
  teal:       { primary: '#115e59', secondary: '#0f766e', accent: '#0d9488', accentLight: '#ccfbf1', bg: '#f0fdfa', line: '#99f6e4' },
  emerald:    { primary: '#064e3b', secondary: '#0f766e', accent: '#0d9488', accentLight: '#ccfbf1', bg: '#f0fdfa', line: '#e2e8f0' },
  sage:       { primary: '#14532d', secondary: '#3f6212', accent: '#15803d', accentLight: '#dcfce7', bg: '#fcfdfb', line: '#bbf7d0' },
  amber:      { primary: '#78350f', secondary: '#92400e', accent: '#b45309', accentLight: '#fef3c7', bg: '#fffdfa', line: '#fde68a' },
  // ── Warm / Leidenschaftlich ───────────────────────────────────────────────
  wine:       { primary: '#4a0e2c', secondary: '#6b1e42', accent: '#9b1851', accentLight: '#fce4ec', bg: '#fffbfc', line: '#f9a8c9' },
  terracotta: { primary: '#7c2d12', secondary: '#9a3412', accent: '#c2410c', accentLight: '#ffedd5', bg: '#fffbeb', line: '#fed7aa' },
  dustyrose:  { primary: '#4c0519', secondary: '#881337', accent: '#be123c', accentLight: '#ffe4e6', bg: '#fffafb', line: '#fecdd3' },
  // ── Elegant / Akademisch ─────────────────────────────────────────────────
  purple:     { primary: '#3b0764', secondary: '#581c87', accent: '#7c3aed', accentLight: '#f3e8ff', bg: '#faf5ff', line: '#f3e8ff' },
};

const themeLabels = {
  petrol:     'Petrol — modernes Blaugrün',
  midnight:   'Midnight — ultra-modern Dunkel',
  cobalt:     'Kobalt — kräftiges Blau',
  copper:     'Kupfer — warmes Bronze',
  olive:      'Olive — erdiges Grün',
  navy:       'Navy — klassisches Dunkelblau',
  charcoal:   'Charcoal — elegantes Anthrazit',
  royal:      'Royal — tiefes Königsblau',
  oxford:     'Oxford — traditionelles Dunkelblau',
  teal:       'Teal — frisches Blaugrün',
  emerald:    'Emerald — sattes Grün',
  sage:       'Sage — gedämpftes Waldgrün',
  amber:      'Amber — warmes Honiggelb',
  wine:       'Weinrot — elegantes Bordeaux',
  terracotta: 'Terracotta — warmes Erdrot',
  dustyrose:  'Dusty Rose — zartes Altrosa',
  purple:     'Amethyst — elegantes Violett',
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  setupThemeSelector();
  setupControlButtons();
  setupImportExport();
  setupTabController();
  setupInputListeners();
  setupDesignListeners();
  setupMobileToggle();
  
  renderCV();
});

// JSON Path Helper Functions
function getValueByPath(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

function setValueByPath(obj, path, value) {
  const parts = path.split('.');
  const lastPart = parts.pop();
  const target = parts.reduce((acc, part) => acc[part], obj);
  if (target) {
    target[lastPart] = value;
  }
}

// Save & Load State
function saveData() {
  localStorage.setItem('cv_json_data', JSON.stringify(cvData));
  
  // Sync raw JSON textarea
  const jsonEditor = document.getElementById('json-editor');
  if (jsonEditor && document.activeElement !== jsonEditor) {
    jsonEditor.value = JSON.stringify(cvData, null, 2);
  }
}

function loadData() {
  const cached = localStorage.getItem('cv_json_data');
  if (cached) {
    try {
      cvData = JSON.parse(cached);
      // Ensure layout exists (schema migration)
      if (!cvData.layout) cvData.layout = JSON.parse(JSON.stringify(defaultCVData.layout));
      // Ensure personal.address exists (schema migration)
      if (cvData.personal && cvData.personal.address === undefined) cvData.personal.address = '';
      // Migrate new sections if missing
      if (cvData.personal.photo === undefined) cvData.personal.photo = '';
      if (cvData.personal.birthDate === undefined) cvData.personal.birthDate = '';
      if (cvData.personal.birthPlace === undefined) cvData.personal.birthPlace = '';
      if (cvData.personal.nationality === undefined) cvData.personal.nationality = '';
      if (!cvData.talks) cvData.talks = [];
      if (!cvData.publications) cvData.publications = [];
      if (cvData.referencesNote === undefined) cvData.referencesNote = '';
      if (!cvData.volunteer) cvData.volunteer = [];
      if (!cvData.awards) cvData.awards = [];
      if (!cvData.drivingLicense) cvData.drivingLicense = { classes: '', ownVehicle: false };
      if (cvData.layout?.visibleSections?.volunteer === undefined) cvData.layout.visibleSections.volunteer = false;
      if (cvData.layout?.visibleSections?.awards === undefined) cvData.layout.visibleSections.awards = false;
      if (cvData.layout?.visibleSections?.drivingLicense === undefined) cvData.layout.visibleSections.drivingLicense = false;
      if (cvData.layout?.visibleSections?.talks === undefined) cvData.layout.visibleSections.talks = false;
      if (cvData.layout?.visibleSections?.publications === undefined) cvData.layout.visibleSections.publications = false;
      if (cvData.layout?.visibleSections?.references === undefined) cvData.layout.visibleSections.references = false;
      // Migrate old skills format {frontend:[...], backend:[...]} to new {groups:[...]}
      if (cvData.skills && !cvData.skills.groups) {
        const oldGroups = [];
        for (const [key, items] of Object.entries(cvData.skills)) {
          if (Array.isArray(items)) {
            const label = key.charAt(0).toUpperCase() + key.slice(1);
            oldGroups.push({ label, items });
          }
        }
        cvData.skills = { groups: oldGroups };
      }
    } catch (e) {
      console.error("Failed to parse cached CV data", e);
      cvData = JSON.parse(JSON.stringify(defaultCVData));
    }
  } else {
    cvData = JSON.parse(JSON.stringify(defaultCVData));
  }
  // Always persist to keep localStorage in sync with the current schema
  localStorage.setItem('cv_json_data', JSON.stringify(cvData));
}

// Render dynamic sections from JSON model
function renderCV(preventSidebarRebuild = false) {
  const root = document.getElementById('cv-page');
  if (!root) return;

  // 1. Apply Layout Style Configuration
  root.classList.remove(
    'style-minimal', 
    'style-executive', 
    'style-modernist', 
    'style-vintage-editorial', 
    'style-avant-garde', 
    'style-cyberpunk',
    'style-swiss',
    'style-warm-editorial',
    'style-terminal',
    'style-neumorphic',
    'style-scandinavian',
    'style-art-deco',
    'style-academic'
  );
  root.classList.add(`style-${cvData.layout.style}`);
  applyStyleSpecificPrintMargins(cvData.layout.style);

  // 1.5. Apply Screen Preview Mode Configuration (A4 vs Continuous)
  const pMode = cvData.layout.previewMode || 'a4';
  if (pMode === 'continuous') {
    root.classList.add('page-preview-continuous');
  } else {
    root.classList.remove('page-preview-continuous');
  }

  // 2. Apply Paper Background Configuration
  root.classList.remove('paper-bg-white', 'paper-bg-cream', 'paper-bg-grid', 'paper-bg-border');
  root.classList.add(`paper-bg-${cvData.layout.background}`);

  // 3. Apply Header Layout Configuration
  const cvHeader = document.getElementById('cv-header');
  if (cvHeader) {
    cvHeader.className = 'w-full pb-5 relative transition-all duration-300';
    cvHeader.classList.add(`header-layout-${cvData.layout.headerStyle}`);
  }

  // 4. Apply Dynamic Theme Colors
  currentTheme = cvData.layout.theme || 'navy';
  applyTheme(currentTheme);

  // 5. Hide / Show Dynamic Section Blocks
  const visible = cvData.layout.visibleSections || {};
  toggleSectionVisibility('cv-sec-profile', visible.profile);
  toggleSectionVisibility('cv-sec-work', visible.workExperience);
  toggleSectionVisibility('cv-sec-projects', visible.projects);
  toggleSectionVisibility('cv-sec-opensource', visible.openSource);
  toggleSectionVisibility('cv-sec-skills', visible.skills);
  toggleSectionVisibility('cv-sec-competencies', visible.competencies);
  toggleSectionVisibility('cv-sec-education', visible.education);
  toggleSectionVisibility('cv-sec-certifications', visible.certifications);
  toggleSectionVisibility('cv-sec-methodsAndTools', visible.methodsAndTools);
  toggleSectionVisibility('cv-sec-languages', visible.languages);
  toggleSectionVisibility('cv-sec-hobbies', visible.hobbies);
  toggleSectionVisibility('cv-sec-volunteer', visible.volunteer);
  toggleSectionVisibility('cv-sec-awards', visible.awards);
  toggleSectionVisibility('cv-sec-drivingLicense', visible.drivingLicense);
  toggleSectionVisibility('cv-sec-talks', visible.talks);
  toggleSectionVisibility('cv-sec-publications', visible.publications);
  toggleSectionVisibility('cv-sec-references', visible.references);

  // 6. Apply Dynamic Footer Block
  const cvFooter = document.getElementById('cv-footer');
  if (cvFooter) {
    const fStyle = cvData.layout.footerStyle || 'simple';
    
    // Remove custom classes to prevent style leaking
    cvFooter.classList.remove('footer-layout-corporate', 'footer-layout-initials', 'footer-layout-signature');
    
    if (fStyle === 'none') {
      cvFooter.style.display = 'none';
    } else {
      cvFooter.style.display = 'flex';
      const text = cvData.layout.footerText || `Lebenslauf — ${cvData.personal.name}`;
      
      if (fStyle === 'confidential') {
        cvFooter.innerHTML = `
          <span>STRENG VERTRAULICH • LEBENSLAUF</span>
          <span class="no-print">A4-Lebenslauf Vorschau</span>
        `;
      } else if (fStyle === 'corporate') {
        cvFooter.classList.add('footer-layout-corporate');
        cvFooter.innerHTML = `
          <div class="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[var(--color-cv-primary)] text-[9px]">
            <span class="w-1.5 h-1.5 bg-[var(--color-cv-accent)] rounded-full"></span>
            <span>CV SYSTEM</span>
          </div>
          <span>${text}</span>
        `;
      } else if (fStyle === 'initials') {
        cvFooter.classList.add('footer-layout-initials');
        const initials = cvData.personal.name ? cvData.personal.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 3) : 'CV';
        cvFooter.innerHTML = `
          <div class="flex items-center gap-2">
            <span class="footer-layout-initials-badge">${initials}</span>
            <span class="text-[9px] font-semibold text-slate-500">${text}</span>
          </div>
          <span>DINA4 • Live Preview</span>
        `;
      } else if (fStyle === 'signature') {
        cvFooter.classList.add('footer-layout-signature');
        const dateStr = new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' });
        cvFooter.innerHTML = `
          <span class="text-[9px] text-slate-500 font-semibold">${cvData.personal.location || 'Deutschland'}, ${dateStr}</span>
          <div class="footer-signature-line text-[9px] text-slate-500">
            Unterschrift / Gez. ${cvData.personal.name}
          </div>
        `;
      } else {
        // default simple
        cvFooter.innerHTML = `
          <span>${text}</span>
          <span class="no-print">A4-Lebenslauf Vorschau</span>
        `;
      }
    }
  }

  // 7. Render Personal details (A4 Page Preview)
  const staticEditables = [
    { id: 'cv-name', path: 'personal.name' },
    { id: 'cv-role', path: 'personal.role' },
    { id: 'cv-profile-text', path: 'personal.profileText' },
    { id: 'cv-contact-email', path: 'personal.email' },
    { id: 'cv-contact-phone', path: 'personal.phone' },
    { id: 'cv-contact-address', path: 'personal.address' },
    { id: 'cv-contact-location', path: 'personal.location' },
    { id: 'cv-contact-website', path: 'personal.website' },
    { id: 'cv-contact-github', path: 'personal.github' },
    { id: 'cv-contact-linkedin', path: 'personal.linkedin' }
  ];

  staticEditables.forEach(item => {
    const el = document.getElementById(item.id);
    if (el) {
      el.innerHTML = getValueByPath(cvData, item.path) || '';
    }
  });

  // 7b. Render Profile Photo
  const photoWrapper = document.getElementById('cv-photo-wrapper');
  const photoImg = document.getElementById('cv-photo');
  const photoSrc = cvData.personal?.photo || '';
  if (photoWrapper && photoImg) {
    if (photoSrc) {
      photoImg.src = photoSrc;
      photoWrapper.classList.remove('hidden');
    } else {
      photoWrapper.classList.add('hidden');
    }
  }

  // 7c. Render Personal Details (birthDate, birthPlace, nationality)
  const pdWrapper = document.getElementById('cv-personal-details');
  const bdEl = document.getElementById('cv-personal-birthdate');
  const bpEl = document.getElementById('cv-personal-birthplace');
  const natEl = document.getElementById('cv-personal-nationality');
  const birthDate = cvData.personal?.birthDate || '';
  const birthPlace = cvData.personal?.birthPlace || '';
  const nationality = cvData.personal?.nationality || '';
  if (bdEl) {
    if (birthDate) { bdEl.textContent = `Geb. ${birthDate}`; bdEl.classList.remove('hidden'); }
    else { bdEl.classList.add('hidden'); }
  }
  if (bpEl) {
    if (birthPlace) { bpEl.textContent = `Geburtsort: ${birthPlace}`; bpEl.classList.remove('hidden'); }
    else { bpEl.classList.add('hidden'); }
  }
  if (natEl) {
    if (nationality) { natEl.textContent = `Nationalität: ${nationality}`; natEl.classList.remove('hidden'); }
    else { natEl.classList.add('hidden'); }
  }
  if (pdWrapper) {
    const anyPersonalDetails = birthDate || birthPlace || nationality;
    if (anyPersonalDetails) pdWrapper.classList.remove('hidden');
    else pdWrapper.classList.add('hidden');
  }

  // 8. Render Dynamic Content Blocks
  renderCompetencies();
  renderLanguages();
  renderCertifications();
  renderWorkExperience();
  renderEducation();
  renderMethodsAndTools();
  renderHobbies();
  renderProjects();
  renderOpenSource();
  renderSkills();
  renderVolunteer();
  renderAwards();
  renderDrivingLicense();
  renderTalks();
  renderPublications();
  renderReferences();
  // Update page-break indicators after DOM settles
  requestAnimationFrame(() => renderPageBreaks());

  // 9. Sync Left Form Inputs
  syncFormsFromData();
  syncPhotoPreview();

  // 10. Attach on-screen listeners
  syncEditabilityAndListeners();

  // 11. Render Left sidebar building blocks list editor
  if (!preventSidebarRebuild) {
    renderBlockEditor();
  }
}

function toggleSectionVisibility(secId, isVisible) {
  const el = document.getElementById(secId);
  if (el) {
    el.style.display = isVisible ? 'flex' : 'none';
  }
}

// ---------------- RENDER A4 PREVIEW SUB-FUNCTIONS ----------------

function renderCompetencies() {
  const container = document.getElementById('competencies-container');
  container.innerHTML = '';
  
  cvData.competencies.forEach((comp, index) => {
    const div = document.createElement('div');
    div.className = 'group relative flex flex-col gap-0.5 pr-6';
    div.innerHTML = `
      <span class="font-bold text-[var(--color-cv-primary)] font-display" data-path="competencies.${index}.title">${comp.title}</span>
      <span data-path="competencies.${index}.description">${comp.description}</span>
      <button class="no-print absolute top-0.5 right-0 text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-0.5" onclick="removeArrayItem('competencies', ${index})" title="Eintrag entfernen">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
      </button>
    `;
    container.appendChild(div);
  });
}

function renderLanguages() {
  const container = document.getElementById('languages-container');
  container.innerHTML = '';
  
  cvData.languages.forEach((lang, index) => {
    const div = document.createElement('div');
    div.className = 'group relative flex flex-col gap-1 pr-6';
    div.innerHTML = `
      <div class="flex justify-between font-semibold">
        <span data-path="languages.${index}.name">${lang.name}</span>
        <span data-path="languages.${index}.level">${lang.level}</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
          <div class="bg-[var(--color-cv-accent)] h-full transition-all duration-300" style="width: ${lang.percentage}%"></div>
        </div>
        <span class="text-[9px] text-slate-400 no-print font-bold w-6 text-right" data-path="languages.${index}.percentage" data-type="number">${lang.percentage}%</span>
      </div>
      <button class="no-print absolute top-0 right-0 text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-0.5" onclick="removeArrayItem('languages', ${index})" title="Eintrag entfernen">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
      </button>
    `;
    container.appendChild(div);
  });
}

function renderCertifications() {
  const container = document.getElementById('certifications-container');
  container.innerHTML = '';
  
  cvData.certifications.forEach((cert, index) => {
    const li = document.createElement('li');
    li.className = 'group relative flex flex-col gap-0.5 pr-6';
    li.innerHTML = `
      <span class="font-bold text-[var(--color-cv-primary)]" data-path="certifications.${index}.title">${cert.title}</span>
      <span class="text-[10px] text-slate-400">
        <span data-path="certifications.${index}.authority">${cert.authority}</span> • 
        <span data-path="certifications.${index}.date">${cert.date}</span>
      </span>
      <button class="no-print absolute top-0 right-0 text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-0.5" onclick="removeArrayItem('certifications', ${index})" title="Eintrag entfernen">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
      </button>
    `;
    container.appendChild(li);
  });
}

function renderWorkExperience() {
  const container = document.getElementById('work-experience-container');
  container.innerHTML = '';
  
  cvData.workExperience.forEach((job, index) => {
    const jobDiv = document.createElement('div');
    jobDiv.className = 'group relative pl-6 border-l-2 border-[var(--color-cv-line)] pb-5 last:pb-0 timeline-border-clear print-block-avoid';
    
    // Timeline dot
    const dot = document.createElement('div');
    dot.className = 'timeline-dot absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[var(--color-cv-accent)]';
    jobDiv.appendChild(dot);
    
    // Header row
    const headerRow = document.createElement('div');
    headerRow.className = 'flex justify-between items-start gap-4';
    headerRow.innerHTML = `
      <div class="pr-6">
        <h5 class="text-xs font-bold text-[var(--color-cv-primary)]" data-path="workExperience.${index}.role">${job.role}</h5>
        <p class="text-[10px] font-semibold text-[var(--color-cv-accent)] uppercase mt-0.5" data-path="workExperience.${index}.company">${job.company}</p>
      </div>
      <span class="text-[10px] font-bold bg-[var(--color-cv-accent-light)] text-[var(--color-cv-accent)] px-2.5 py-0.5 rounded-full whitespace-nowrap" data-path="workExperience.${index}.date">${job.date}</span>
    `;
    jobDiv.appendChild(headerRow);
    
    // Bullet details
    const ul = document.createElement('ul');
    ul.className = 'list-disc pl-4 mt-2.5 text-xs text-[var(--color-cv-secondary)] space-y-1.5';
    
    job.details.forEach((bullet, bulletIdx) => {
      const li = document.createElement('li');
      li.className = 'bullet-group relative pr-8 group/bullet';
      li.innerHTML = `
        <span data-path="workExperience.${index}.details.${bulletIdx}">${bullet}</span>
        <button class="no-print absolute top-0.5 right-0 text-red-400 hover:text-red-600 opacity-0 group-hover/bullet:opacity-100 transition-opacity cursor-pointer p-0.5" onclick="removeJobBullet(${index}, ${bulletIdx})" title="Stichpunkt löschen">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
        </button>
      `;
      ul.appendChild(li);
    });
    
    if (editMode) {
      const addBulletLi = document.createElement('li');
      addBulletLi.className = 'no-print list-none mt-1';
      addBulletLi.innerHTML = `
        <button class="text-[10px] text-[var(--color-cv-accent)] hover:text-blue-700 font-semibold cursor-pointer flex items-center gap-1 py-0.5" onclick="addJobBullet(${index})">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
          Stichpunkt hinzufügen
        </button>
      `;
      ul.appendChild(addBulletLi);
    }
    
    jobDiv.appendChild(ul);
    
    if (editMode) {
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'no-print absolute top-1.5 right-0 text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-0.5';
      deleteBtn.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>`;
      deleteBtn.onclick = () => removeArrayItem('workExperience', index);
      deleteBtn.title = "Berufserfahrung entfernen";
      jobDiv.appendChild(deleteBtn);
    }
    
    container.appendChild(jobDiv);
  });
}

function renderEducation() {
  const container = document.getElementById('education-container');
  container.innerHTML = '';
  
  cvData.education.forEach((edu, index) => {
    const div = document.createElement('div');
    div.className = 'group relative flex flex-col gap-0.5 pr-6 print-block-avoid';
    div.innerHTML = `
      <span class="font-bold text-[var(--color-cv-primary)]" data-path="education.${index}.degree">${edu.degree}</span>
      <span data-path="education.${index}.institution">${edu.institution}</span>
      <span class="text-[10px] text-slate-400 font-semibold" data-path="education.${index}.date">${edu.date}</span>
      <button class="no-print absolute top-0.5 right-0 text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-0.5" onclick="removeArrayItem('education', ${index})" title="Eintrag entfernen">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
      </button>
    `;
    container.appendChild(div);
  });
}

function renderMethodsAndTools() {
  const container = document.getElementById('methods-tools-container');
  container.innerHTML = '';
  
  cvData.methodsAndTools.forEach((tool, index) => {
    const span = document.createElement('span');
    span.className = 'group relative bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-semibold border border-slate-200 flex items-center gap-1.5 text-[10px] pr-5';
    span.innerHTML = `
      <span data-path="methodsAndTools.${index}">${tool}</span>
      <button class="no-print absolute right-1 text-slate-400 hover:text-red-600 transition-colors cursor-pointer" onclick="removeArrayItem('methodsAndTools', ${index})" title="Entfernen">
        <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    `;
    container.appendChild(span);
  });
}

function renderHobbies() {
  const container = document.getElementById('hobbies-container');
  container.innerHTML = '';
  
  cvData.hobbies.forEach((hobby, index) => {
    const div = document.createElement('div');
    div.className = 'group relative flex justify-between items-center pr-6 py-0.5 print-block-avoid';
    div.innerHTML = `
      <span data-path="hobbies.${index}">${hobby}</span>
      <button class="no-print absolute top-1 right-0 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-0.5" onclick="removeArrayItem('hobbies', ${index})" title="Hobby entfernen">
        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
      </button>
    `;
    container.appendChild(div);
  });
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  container.innerHTML = '';
  
  cvData.projects.forEach((proj, index) => {
    const projDiv = document.createElement('div');
    projDiv.className = 'group relative flex flex-col gap-1.5 border-b border-[var(--color-cv-line)] pb-4 last:border-b-0 last:pb-0 print-block-avoid';
    
    // Header block
    const header = document.createElement('div');
    header.className = 'flex justify-between items-baseline pr-6';
    header.innerHTML = `
      <h5 class="text-xs font-bold text-[var(--color-cv-primary)]" data-path="projects.${index}.title">${proj.title}</h5>
      <span class="text-[10px] text-slate-400 font-semibold" data-path="projects.${index}.duration">${proj.duration}</span>
    `;
    projDiv.appendChild(header);
    
    // Role
    const roleDiv = document.createElement('div');
    roleDiv.className = 'text-[10px] font-semibold text-[var(--color-cv-accent)]';
    roleDiv.innerHTML = `<span data-path="projects.${index}.role">${proj.role}</span>`;
    projDiv.appendChild(roleDiv);
    
    // Description
    const desc = document.createElement('p');
    desc.className = 'text-xs text-[var(--color-cv-secondary)] leading-relaxed';
    desc.innerHTML = `<span data-path="projects.${index}.description">${proj.description}</span>`;
    projDiv.appendChild(desc);
    
    // Technology badges
    const techContainer = document.createElement('div');
    techContainer.className = 'flex flex-wrap gap-1 mt-1';
    
    proj.technologies.forEach((tech, techIdx) => {
      const badge = document.createElement('span');
      badge.className = 'group/badge relative bg-[var(--color-cv-accent-light)] text-[var(--color-cv-accent)] px-2 py-0.5 rounded text-[9px] font-bold pr-5';
      badge.innerHTML = `
        <span data-path="projects.${index}.technologies.${techIdx}">${tech}</span>
        <button class="no-print absolute right-0.5 text-[var(--color-cv-accent)] hover:text-red-600 transition-colors cursor-pointer" onclick="removeProjectTech(${index}, ${techIdx})" title="Tech-Tag entfernen">
          <svg class="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      `;
      techContainer.appendChild(badge);
    });
    
    if (editMode) {
      const addTechBtn = document.createElement('button');
      addTechBtn.className = 'no-print text-[9px] bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-300 font-bold px-2 py-0.5 rounded cursor-pointer flex items-center gap-0.5';
      addTechBtn.innerHTML = `<span>+ Tech</span>`;
      addTechBtn.onclick = () => addProjectTech(index);
      techContainer.appendChild(addTechBtn);
    }
    
    projDiv.appendChild(techContainer);
    
    if (editMode) {
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'no-print absolute top-0.5 right-0 text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-0.5';
      deleteBtn.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>`;
      deleteBtn.onclick = () => removeArrayItem('projects', index);
      deleteBtn.title = "Projekt entfernen";
      projDiv.appendChild(deleteBtn);
    }
    
    container.appendChild(projDiv);
  });
}

function renderOpenSource() {
  const container = document.getElementById('opensource-container');
  if (!container) return;
  container.innerHTML = '';
  
  if (!cvData.openSource) {
    cvData.openSource = [];
  }

  cvData.openSource.forEach((proj, index) => {
    const projDiv = document.createElement('div');
    projDiv.className = 'group relative flex flex-col gap-1.5 border-b border-[var(--color-cv-line)] pb-4 last:border-b-0 last:pb-0 print-block-avoid';
    
    // Header block
    const header = document.createElement('div');
    header.className = 'flex justify-between items-baseline pr-6';
    header.innerHTML = `
      <h5 class="text-xs font-bold text-[var(--color-cv-primary)]" data-path="openSource.${index}.title">${proj.title}</h5>
      <span class="text-[10px] text-slate-400 font-semibold" data-path="openSource.${index}.role">${proj.role || 'Open-Source'}</span>
    `;
    projDiv.appendChild(header);
    
    // Description
    const desc = document.createElement('p');
    desc.className = 'text-xs text-[var(--color-cv-secondary)] leading-relaxed';
    desc.innerHTML = `<span data-path="openSource.${index}.description">${proj.description}</span>`;
    projDiv.appendChild(desc);
    
    // Technology badges
    const techContainer = document.createElement('div');
    techContainer.className = 'flex flex-wrap gap-1 mt-1';
    
    if (proj.technologies) {
      proj.technologies.forEach((tech, techIdx) => {
        const badge = document.createElement('span');
        badge.className = 'group/badge relative bg-[var(--color-cv-accent-light)] text-[var(--color-cv-accent)] px-2 py-0.5 rounded text-[9px] font-bold pr-5';
        badge.innerHTML = `
          <span data-path="openSource.${index}.technologies.${techIdx}">${tech}</span>
          <button class="no-print absolute right-0.5 text-[var(--color-cv-accent)] hover:text-red-600 transition-colors cursor-pointer" onclick="removeOpenSourceTech(${index}, ${techIdx})" title="Tech-Tag entfernen">
            <svg class="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        `;
        techContainer.appendChild(badge);
      });
    }
    
    if (editMode) {
      const addTechBtn = document.createElement('button');
      addTechBtn.className = 'no-print text-[9px] bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-300 font-bold px-2 py-0.5 rounded cursor-pointer flex items-center gap-0.5';
      addTechBtn.innerHTML = `<span>+ Tech</span>`;
      addTechBtn.onclick = () => addOpenSourceTech(index);
      techContainer.appendChild(addTechBtn);
    }
    
    projDiv.appendChild(techContainer);
    
    if (editMode) {
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'no-print absolute top-0.5 right-0 text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-0.5';
      deleteBtn.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>`;
      deleteBtn.onclick = () => removeArrayItem('openSource', index);
      deleteBtn.title = "Eintrag entfernen";
      projDiv.appendChild(deleteBtn);
    }
    
    container.appendChild(projDiv);
  });
}


function renderSkills() {
  const container = document.getElementById('skills-groups-container');
  if (!container) return;
  container.innerHTML = '';

  const groups = cvData.skills?.groups || [];
  groups.forEach((group, gi) => {
    const col = document.createElement('div');
    col.className = 'flex flex-col gap-2';
    col.innerHTML = `<h5 class="text-xs font-bold text-[var(--color-cv-primary)] border-b border-[var(--color-cv-line)] pb-0.5">${group.label}</h5>`;
    const list = document.createElement('div');
    list.className = 'flex flex-col gap-3 text-xs text-[var(--color-cv-secondary)]';

    (group.items || []).forEach((skill, index) => {
      const div = document.createElement('div');
      div.className = 'group relative flex flex-col gap-1 pr-6';
      div.innerHTML = `
        <div class="flex justify-between items-baseline text-xs">
          <span class="font-semibold text-slate-800" data-path="skills.groups.${gi}.items.${index}.name">${skill.name}</span>
          <span class="text-slate-500 text-[10px] shrink-0 font-medium">
            <span class="font-bold text-[var(--color-cv-accent)] uppercase" data-path="skills.groups.${gi}.items.${index}.level">${skill.level}</span> • 
            <span data-path="skills.groups.${gi}.items.${index}.years">${skill.years}</span>
          </span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-full bg-slate-200 h-1 rounded-full overflow-hidden">
            <div class="bg-[var(--color-cv-accent)] h-full transition-all duration-300" style="width: ${skill.percentage}%"></div>
          </div>
          <span class="text-[9px] text-slate-400 no-print font-bold w-6 text-right" data-path="skills.groups.${gi}.items.${index}.percentage" data-type="number">${skill.percentage}%</span>
        </div>
        <button class="no-print absolute top-0.5 right-0 text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-0.5" onclick="removeSkillItem(${gi}, ${index})" title="Skill entfernen">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
        </button>
      `;
      list.appendChild(div);
    });
    col.appendChild(list);
    container.appendChild(col);
  });
}

function renderVolunteer() {
  const container = document.getElementById('volunteer-container');
  if (!container) return;
  container.innerHTML = '';
  (cvData.volunteer || []).forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'group relative flex flex-col gap-0.5 pr-6';
    div.innerHTML = `
      <div class="flex justify-between items-baseline flex-wrap gap-x-2">
        <span class="font-bold text-[var(--color-cv-primary)]" data-path="volunteer.${index}.role">${item.role}</span>
        <span class="text-[10px] text-slate-400 shrink-0" data-path="volunteer.${index}.date">${item.date}</span>
      </div>
      <span class="font-semibold text-[var(--color-cv-accent)] text-[11px]" data-path="volunteer.${index}.organization">${item.organization}</span>
      <span class="leading-relaxed" data-path="volunteer.${index}.description">${item.description}</span>
      <button class="no-print absolute top-0.5 right-0 text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-0.5" onclick="removeArrayItem('volunteer', ${index})" title="Entfernen">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
      </button>
    `;
    container.appendChild(div);
  });
}

function renderAwards() {
  const container = document.getElementById('awards-container');
  if (!container) return;
  container.innerHTML = '';
  (cvData.awards || []).forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'group relative flex flex-col gap-0.5 pr-6';
    div.innerHTML = `
      <div class="flex justify-between items-baseline flex-wrap gap-x-2">
        <span class="font-bold text-[var(--color-cv-primary)]" data-path="awards.${index}.title">${item.title}</span>
        <span class="text-[10px] text-slate-400 shrink-0" data-path="awards.${index}.date">${item.date}</span>
      </div>
      <span class="font-semibold text-[var(--color-cv-accent)] text-[11px]" data-path="awards.${index}.issuer">${item.issuer}</span>
      ${item.description ? `<span class="leading-relaxed" data-path="awards.${index}.description">${item.description}</span>` : ''}
      <button class="no-print absolute top-0.5 right-0 text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-0.5" onclick="removeArrayItem('awards', ${index})" title="Entfernen">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
      </button>
    `;
    container.appendChild(div);
  });
}

function renderDrivingLicense() {
  const container = document.getElementById('driving-license-container');
  if (!container) return;
  container.innerHTML = '';
  const dl = cvData.drivingLicense;
  if (!dl || (!dl.classes && !dl.ownVehicle)) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'flex flex-wrap items-center gap-2';

  if (dl.classes) {
    dl.classes.split(',').map(c => c.trim()).filter(Boolean).forEach(cls => {
      const badge = document.createElement('span');
      badge.className = 'px-2.5 py-0.5 bg-[var(--color-cv-accent-light)] text-[var(--color-cv-accent)] text-[10px] font-bold rounded-full';
      badge.textContent = `Klasse ${cls}`;
      wrapper.appendChild(badge);
    });
  }

  if (dl.ownVehicle) {
    const badge = document.createElement('span');
    badge.className = 'flex items-center gap-1 text-[10px] text-slate-500';
    badge.innerHTML = '<svg class="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg> Eigenes Fahrzeug vorhanden';
    wrapper.appendChild(badge);
  }
  container.appendChild(wrapper);
}

function renderTalks() {
  const container = document.getElementById('talks-container');
  if (!container) return;
  container.innerHTML = '';
  const talks = cvData.talks || [];
  if (!talks.length) return;

  talks.forEach(talk => {
    const div = document.createElement('div');
    div.className = 'flex flex-col gap-0.5';

    const title = document.createElement('div');
    title.className = 'font-semibold text-[var(--color-cv-primary)] leading-tight';
    title.textContent = talk.title || '';

    const meta = document.createElement('div');
    meta.className = 'flex items-center gap-2 text-[var(--color-cv-secondary)]';
    const parts = [talk.event, talk.date].filter(Boolean);
    meta.textContent = parts.join(' · ');

    div.appendChild(title);
    div.appendChild(meta);

    if (talk.url) {
      const link = document.createElement('a');
      link.href = talk.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.className = 'text-[var(--color-cv-accent)] hover:underline truncate';
      link.textContent = talk.url;
      div.appendChild(link);
    }

    container.appendChild(div);
  });
}

function renderPublications() {
  const container = document.getElementById('publications-container');
  if (!container) return;
  container.innerHTML = '';
  const pubs = cvData.publications || [];
  if (!pubs.length) return;

  pubs.forEach(pub => {
    const div = document.createElement('div');
    div.className = 'flex flex-col gap-0.5';

    const title = document.createElement('div');
    title.className = 'font-semibold text-[var(--color-cv-primary)] leading-tight';
    title.textContent = pub.title || '';

    const meta = document.createElement('div');
    meta.className = 'flex items-center gap-2 text-[var(--color-cv-secondary)]';
    const parts = [pub.publisher, pub.date].filter(Boolean);
    meta.textContent = parts.join(' · ');

    div.appendChild(title);
    div.appendChild(meta);

    if (pub.url) {
      const link = document.createElement('a');
      link.href = pub.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.className = 'text-[var(--color-cv-accent)] hover:underline truncate';
      link.textContent = pub.url;
      div.appendChild(link);
    }

    container.appendChild(div);
  });
}

function renderReferences() {
  const container = document.getElementById('references-container');
  if (!container) return;
  container.innerHTML = '';
  const note = cvData.referencesNote || '';
  if (!note) return;
  container.textContent = note;
}

function syncPhotoPreview() {
  const preview = document.getElementById('photo-preview');
  const removeBtn = document.getElementById('photo-remove');
  const photo = cvData.personal?.photo || '';
  if (!preview) return;
  if (photo) {
    preview.innerHTML = `<img src="${photo}" alt="Profilfoto" class="w-full h-full object-cover">`;
    if (removeBtn) removeBtn.classList.remove('hidden');
  } else {
    preview.innerHTML = '<svg class="w-7 h-7 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>';
    if (removeBtn) removeBtn.classList.add('hidden');
  }
}

function renderPageBreaks() {
  // Remove existing break indicators
  document.querySelectorAll('#cv-page .page-break-indicator').forEach(el => el.remove());

  const cvPage = document.getElementById('cv-page');
  if (!cvPage || (cvData.layout?.previewMode === 'continuous')) return;

  // A4 at 96dpi: 297mm × (96px / 25.4mm) ≈ 1122.52px
  const A4_PX = Math.round(297 * 96 / 25.4);
  const totalHeight = cvPage.scrollHeight;

  for (let page = 1; page * A4_PX < totalHeight; page++) {
    const indicator = document.createElement('div');
    indicator.className = 'page-break-indicator no-print';
    indicator.setAttribute('aria-hidden', 'true');
    indicator.style.top = `${page * A4_PX}px`;
    indicator.innerHTML = `
      <div class="page-break-indicator__line">
        <span class="page-break-indicator__label">Seite ${page} → ${page + 1}</span>
      </div>
    `;
    cvPage.appendChild(indicator);
  }
}


// ---------------- DYNAMIC SIDEBAR BLOCK EDITOR RENDERER ----------------

function renderBlockEditor() {
  const container = document.getElementById('block-list-editor');
  if (!container) return;

  container.innerHTML = '';

  // 1. Array-based blocks
  if (Array.isArray(cvData[activeBlock])) {
    const list = cvData[activeBlock];

    if (list.length === 0) {
      container.innerHTML = `
        <div class="text-center py-6 border-2 border-dashed border-slate-700 rounded-xl text-slate-400 text-xs">
          Keine Einträge vorhanden. Klicke auf den Button unten, um einen Baustein hinzuzufügen.
        </div>
      `;
    }

    list.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'bg-slate-900 border border-slate-700 p-3 rounded-lg flex flex-col gap-2 relative';
      
      // Card Title / Header
      let title = `Eintrag #${index + 1}`;
      if (typeof item === 'string') title = item;
      else if (item.role) title = item.role;
      else if (item.title) title = item.title;
      else if (item.degree) title = item.degree;
      else if (item.name) title = item.name;

      card.innerHTML = `
        <div class="flex items-center justify-between pb-1.5 border-b border-slate-800">
          <span class="text-[10px] font-bold text-blue-400 uppercase">#${index + 1} • ${title.substring(0, 30)}</span>
          <button class="text-red-400 hover:text-red-500 cursor-pointer p-0.5" onclick="removeArrayItem('${activeBlock}', ${index})">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
        </div>
        <div class="flex flex-col gap-2 mt-1">
          ${renderItemInputs(item, index)}
        </div>
      `;
      container.appendChild(card);
    });

    // Add Entry Button at the bottom of forms list
    const addBtn = document.createElement('button');
    addBtn.className = 'w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold cursor-pointer transition-colors flex items-center justify-center gap-1.5';
    addBtn.innerHTML = `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> Eintrag hinzufügen`;
    addBtn.onclick = () => addArrayItem(activeBlock);
    container.appendChild(addBtn);

  } else if (activeBlock === 'skills') {
    // Dynamic skill groups editor
    const groups = cvData.skills?.groups || [];
    const wrapper = document.createElement('div');
    wrapper.className = 'flex flex-col gap-5';

    groups.forEach((group, gi) => {
      const section = document.createElement('div');
      section.className = 'flex flex-col gap-2 border border-slate-700 rounded-xl p-3';

      // Group header: rename input + delete group button
      section.innerHTML = `
        <div class="flex items-center gap-2 pb-2 border-b border-slate-700">
          <input type="text" class="flex-1 bg-slate-950 border border-slate-700 rounded px-2 py-1 text-xs text-white font-bold" value="${group.label}" oninput="renameSkillGroup(${gi}, this.value)" placeholder="Gruppen-Name">
          <button class="text-red-400 hover:text-red-500 cursor-pointer p-1" onclick="removeSkillGroup(${gi})" title="Gruppe entfernen">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
        </div>
      `;

      // Skill cards inside the group
      const cardList = document.createElement('div');
      cardList.className = 'flex flex-col gap-2';
      (group.items || []).forEach((skill, index) => {
        const card = document.createElement('div');
        card.className = 'bg-slate-900 border border-slate-800 p-2.5 rounded-lg flex flex-col gap-2';
        card.innerHTML = `
          <div class="flex justify-between items-center">
            <span class="text-[9px] font-bold text-blue-400">#${index + 1}</span>
            <button class="text-red-400 hover:text-red-500 cursor-pointer" onclick="removeSkillItem(${gi}, ${index})">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>
          </div>
          <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${skill.name}" oninput="updateSkillField(${gi}, ${index}, 'name', this.value)" placeholder="Technologie-Name">
          <div class="grid grid-cols-3 gap-1">
            <input type="text" class="col-span-1 bg-slate-950 border border-slate-800 rounded px-1.5 py-1 text-[10px] text-white" value="${skill.level}" oninput="updateSkillField(${gi}, ${index}, 'level', this.value)" placeholder="z.B. Experte">
            <input type="text" class="col-span-1 bg-slate-950 border border-slate-800 rounded px-1.5 py-1 text-[10px] text-white" value="${skill.years}" oninput="updateSkillField(${gi}, ${index}, 'years', this.value)" placeholder="z.B. 6 Jahre">
            <input type="number" class="col-span-1 bg-slate-950 border border-slate-800 rounded px-1.5 py-1 text-[10px] text-white" value="${skill.percentage}" oninput="updateSkillField(${gi}, ${index}, 'percentage', parseInt(this.value) || 0)" placeholder="95" min="0" max="100">
          </div>
        `;
        cardList.appendChild(card);
      });
      section.appendChild(cardList);

      // Add skill button
      const addSkillBtn = document.createElement('button');
      addSkillBtn.className = 'w-full py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg text-xs font-semibold cursor-pointer transition-colors';
      addSkillBtn.textContent = '+ Skill hinzufügen';
      addSkillBtn.onclick = () => addSkillItem(gi);
      section.appendChild(addSkillBtn);

      wrapper.appendChild(section);
    });

    // Add new group button
    const addGroupBtn = document.createElement('button');
    addGroupBtn.className = 'w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold cursor-pointer transition-colors flex items-center justify-center gap-1.5';
    addGroupBtn.innerHTML = '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> Neue Gruppe hinzufügen';
    addGroupBtn.onclick = () => addSkillGroup();
    wrapper.appendChild(addGroupBtn);

    container.appendChild(wrapper);

  } else if (activeBlock === 'drivingLicense') {
    // Special object editor for Führerschein
    const dl = cvData.drivingLicense || {};
    container.innerHTML = `
      <div class="flex flex-col gap-3">
        <div class="flex flex-col gap-1">
          <label class="text-[9px] text-slate-500 uppercase font-semibold">Führerschein-Klassen</label>
          <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${dl.classes || ''}" oninput="window.updateDrivingLicense('classes', this.value)" placeholder="z.B. B, BE, C1">
          <span class="text-[9px] text-slate-600">Mehrere Klassen mit Komma trennen (z.B. B, BE)</span>
        </div>
        <label class="flex items-center gap-2 cursor-pointer text-sm text-slate-300">
          <input type="checkbox" class="rounded accent-blue-500" ${dl.ownVehicle ? 'checked' : ''} onchange="window.updateDrivingLicense('ownVehicle', this.checked)">
          Eigenes Fahrzeug vorhanden
        </label>
      </div>
    `;
  } else if (activeBlock === 'references') {
    // Special free-text editor for Referenzen
    const note = cvData.referencesNote || '';
    container.innerHTML = `
      <div class="flex flex-col gap-2">
        <label class="text-[9px] text-slate-500 uppercase font-semibold">Referenz-Hinweis</label>
        <textarea rows="3" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white leading-normal" oninput="window.updateReferencesNote(this.value)" placeholder="z.B. Referenzen auf Anfrage erhältlich.">${note}</textarea>
        <span class="text-[9px] text-slate-600">Erscheint kursiv am Ende des Lebenslaufs.</span>
      </div>
    `;
  }
}

window.updateReferencesNote = function(value) {
  cvData.referencesNote = value;
  saveData();
  renderCV(true);
};

window.updateDrivingLicense = function(field, value) {
  if (!cvData.drivingLicense) cvData.drivingLicense = { classes: '', ownVehicle: false };
  cvData.drivingLicense[field] = value;
  saveData();
  renderCV(true);
};

// Generate the specific input forms inside dynamic cards
function renderItemInputs(item, index) {
  if (typeof item === 'string') {
    // Simple strings (like Methods and Hobbies)
    return `
      <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item}" oninput="updateBlockField(${index}, null, this.value)">
    `;
  }

  let html = '';

  // Work Experience Inputs
  if (activeBlock === 'workExperience') {
    html += `
      <div class="flex flex-col gap-1">
        <label class="text-[9px] text-slate-500 uppercase font-semibold">Rolle / Titel</label>
        <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.role}" oninput="updateBlockField(${index}, 'role', this.value)">
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-[9px] text-slate-500 uppercase font-semibold">Arbeitgeber &amp; Standort</label>
        <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.company}" oninput="updateBlockField(${index}, 'company', this.value)">
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-[9px] text-slate-500 uppercase font-semibold">Zeitraum (z.B. Seit 2023)</label>
        <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.date}" oninput="updateBlockField(${index}, 'date', this.value)">
      </div>
      
      <!-- Bullet achievements sub-inputs -->
      <div class="flex flex-col gap-1.5 mt-1 border-t border-slate-800 pt-2">
        <label class="text-[9px] text-blue-400 uppercase font-bold">Stichpunkte / Leistungen</label>
        <div class="flex flex-col gap-1.5">
          ${item.details.map((bullet, bulletIdx) => `
            <div class="flex gap-1 items-center">
              <input type="text" class="flex-1 bg-slate-950 border border-slate-800 rounded px-2 py-1 text-[11px] text-white" value="${bullet}" oninput="updateSubBlockList(${index}, 'details', ${bulletIdx}, this.value)">
              <button class="text-red-400 hover:text-red-500 cursor-pointer" onclick="removeJobBullet(${index}, ${bulletIdx})">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
              </button>
            </div>
          `).join('')}
        </div>
        <button class="text-[9px] text-blue-400 hover:text-blue-500 font-semibold cursor-pointer mt-1 self-start flex items-center gap-0.5" onclick="addJobBullet(${index})">+ Stichpunkt</button>
      </div>
    `;
  }

  // Project Experience Inputs
  if (activeBlock === 'projects') {
    html += `
      <div class="flex flex-col gap-1">
        <label class="text-[9px] text-slate-500 uppercase font-semibold">Projektname / Titel</label>
        <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.title}" oninput="updateBlockField(${index}, 'title', this.value)">
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-[9px] text-slate-500 uppercase font-semibold">Dauer &amp; Jahr</label>
        <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.duration}" oninput="updateBlockField(${index}, 'duration', this.value)">
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-[9px] text-slate-500 uppercase font-semibold">Rolle im Projekt</label>
        <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.role}" oninput="updateBlockField(${index}, 'role', this.value)">
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-[9px] text-slate-500 uppercase font-semibold">Kurzbeschreibung</label>
        <textarea rows="3" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white leading-normal" oninput="updateBlockField(${index}, 'description', this.value)">${item.description}</textarea>
      </div>

      <!-- Tech stack sub-inputs -->
      <div class="flex flex-col gap-1.5 mt-1 border-t border-slate-800 pt-2">
        <label class="text-[9px] text-blue-400 uppercase font-bold">Verwendete Technologien</label>
        <div class="flex flex-wrap gap-1.5">
          ${item.technologies.map((tech, techIdx) => `
            <div class="flex gap-1 items-center bg-slate-950 border border-slate-800 rounded p-1">
              <input type="text" class="bg-transparent text-[10px] text-white w-14 border-none p-0 focus:ring-0 focus:outline-none" value="${tech}" oninput="updateSubBlockList(${index}, 'technologies', ${techIdx}, this.value)">
              <button class="text-red-400 hover:text-red-500 cursor-pointer" onclick="removeProjectTech(${index}, ${techIdx})">
                <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
          `).join('')}
          <button class="text-[9px] bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold px-2 py-1 rounded cursor-pointer self-start" onclick="addProjectTech(${index})">+ Tech</button>
        </div>
      </div>
    `;
  }

  // Open Source Inputs
  if (activeBlock === 'openSource') {
    html += `
      <div class="flex flex-col gap-1">
        <label class="text-[9px] text-slate-500 uppercase font-semibold">Projektname / Titel</label>
        <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.title}" oninput="updateBlockField(${index}, 'title', this.value)">
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-[9px] text-slate-500 uppercase font-semibold">Rolle / Fokus (z.B. Creator &amp; Maintainer)</label>
        <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.role || ''}" oninput="updateBlockField(${index}, 'role', this.value)">
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-[9px] text-slate-500 uppercase font-semibold">Kurzbeschreibung</label>
        <textarea rows="3" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white leading-normal" oninput="updateBlockField(${index}, 'description', this.value)">${item.description}</textarea>
      </div>

      <!-- Tech stack sub-inputs -->
      <div class="flex flex-col gap-1.5 mt-1 border-t border-slate-800 pt-2">
        <label class="text-[9px] text-blue-400 uppercase font-bold">Verwendete Technologien</label>
        <div class="flex flex-wrap gap-1.5">
          ${item.technologies ? item.technologies.map((tech, techIdx) => `
            <div class="flex gap-1 items-center bg-slate-950 border border-slate-800 rounded p-1">
              <input type="text" class="bg-transparent text-[10px] text-white w-14 border-none p-0 focus:ring-0 focus:outline-none" value="${tech}" oninput="updateSubBlockList(${index}, 'technologies', ${techIdx}, this.value)">
              <button class="text-red-400 hover:text-red-500 cursor-pointer" onclick="removeOpenSourceTech(${index}, ${techIdx})">
                <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
          `).join('') : ''}
          <button class="text-[9px] bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold px-2 py-1 rounded cursor-pointer self-start" onclick="addOpenSourceTech(${index})">+ Tech</button>
        </div>
      </div>
    `;
  }

  // Competencies Inputs
  if (activeBlock === 'competencies') {
    html += `
      <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.title}" oninput="updateBlockField(${index}, 'title', this.value)" placeholder="Kernkompetenz-Name">
      <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.description}" oninput="updateBlockField(${index}, 'description', this.value)" placeholder="Kurze Erläuterung">
    `;
  }

  // Languages Inputs
  if (activeBlock === 'languages') {
    html += `
      <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.name}" oninput="updateBlockField(${index}, 'name', this.value)" placeholder="Sprache">
      <div class="grid grid-cols-2 gap-2">
        <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.level}" oninput="updateBlockField(${index}, 'level', this.value)" placeholder="z.B. Muttersprache">
        <input type="number" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.percentage}" oninput="updateBlockField(${index}, 'percentage', parseInt(this.value))" placeholder="100" min="0" max="100">
      </div>
    `;
  }

  // Certifications Inputs
  if (activeBlock === 'certifications') {
    html += `
      <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.title}" oninput="updateBlockField(${index}, 'title', this.value)" placeholder="Zertifikatstitel">
      <div class="grid grid-cols-2 gap-2">
        <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.authority}" oninput="updateBlockField(${index}, 'authority', this.value)" placeholder="Aussteller (z.B. AWS)">
        <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.date}" oninput="updateBlockField(${index}, 'date', this.value)" placeholder="Jahr (z.B. 2025)">
      </div>
    `;
  }

  // Education Inputs
  if (activeBlock === 'education') {
    html += `
      <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.degree}" oninput="updateBlockField(${index}, 'degree', this.value)" placeholder="Abschluss / Studiengang">
      <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.institution}" oninput="updateBlockField(${index}, 'institution', this.value)" placeholder="Institut / Universität">
      <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.date}" oninput="updateBlockField(${index}, 'date', this.value)" placeholder="Zeitraum (z.B. 2018 — 2022)">
    `;
  }

  // Volunteer / Ehrenamt Inputs
  if (activeBlock === 'volunteer') {
    html += `
      <div class="flex flex-col gap-1">
        <label class="text-[9px] text-slate-500 uppercase font-semibold">Tätigkeit / Rolle</label>
        <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.role}" oninput="updateBlockField(${index}, 'role', this.value)" placeholder="z.B. Mentor">
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-[9px] text-slate-500 uppercase font-semibold">Organisation / Verein</label>
        <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.organization}" oninput="updateBlockField(${index}, 'organization', this.value)" placeholder="z.B. Tech Mentoring e.V.">
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-[9px] text-slate-500 uppercase font-semibold">Zeitraum</label>
        <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.date}" oninput="updateBlockField(${index}, 'date', this.value)" placeholder="z.B. 2021 – heute">
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-[9px] text-slate-500 uppercase font-semibold">Beschreibung (optional)</label>
        <textarea rows="2" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white leading-normal" oninput="updateBlockField(${index}, 'description', this.value)" placeholder="Kurze Beschreibung">${item.description || ''}</textarea>
      </div>
    `;
  }

  // Awards / Auszeichnungen Inputs
  if (activeBlock === 'awards') {
    html += `
      <div class="flex flex-col gap-1">
        <label class="text-[9px] text-slate-500 uppercase font-semibold">Auszeichnung / Preis</label>
        <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.title}" oninput="updateBlockField(${index}, 'title', this.value)" placeholder="z.B. Best Developer Award">
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div class="flex flex-col gap-1">
          <label class="text-[9px] text-slate-500 uppercase font-semibold">Verleiher</label>
          <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.issuer}" oninput="updateBlockField(${index}, 'issuer', this.value)" placeholder="Verleihende Org.">
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-[9px] text-slate-500 uppercase font-semibold">Jahr</label>
          <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.date}" oninput="updateBlockField(${index}, 'date', this.value)" placeholder="2024">
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-[9px] text-slate-500 uppercase font-semibold">Beschreibung (optional)</label>
        <textarea rows="2" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white leading-normal" oninput="updateBlockField(${index}, 'description', this.value)" placeholder="Optionale Beschreibung">${item.description || ''}</textarea>
      </div>
    `;
  }

  // Talks / Vorträge Inputs
  if (activeBlock === 'talks') {
    html += `
      <div class="flex flex-col gap-1">
        <label class="text-[9px] text-slate-500 uppercase font-semibold">Titel des Vortrags</label>
        <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.title || ''}" oninput="updateBlockField(${index}, 'title', this.value)" placeholder="z.B. DevSecOps in der Praxis">
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div class="flex flex-col gap-1">
          <label class="text-[9px] text-slate-500 uppercase font-semibold">Veranstaltung / Konferenz</label>
          <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.event || ''}" oninput="updateBlockField(${index}, 'event', this.value)" placeholder="z.B. DevConf Munich">
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-[9px] text-slate-500 uppercase font-semibold">Jahr</label>
          <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.date || ''}" oninput="updateBlockField(${index}, 'date', this.value)" placeholder="2024">
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-[9px] text-slate-500 uppercase font-semibold">URL (optional)</label>
        <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.url || ''}" oninput="updateBlockField(${index}, 'url', this.value)" placeholder="https://...">
      </div>
    `;
  }

  // Publications / Publikationen Inputs
  if (activeBlock === 'publications') {
    html += `
      <div class="flex flex-col gap-1">
        <label class="text-[9px] text-slate-500 uppercase font-semibold">Titel</label>
        <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.title || ''}" oninput="updateBlockField(${index}, 'title', this.value)" placeholder="z.B. Clean Architecture im Enterprise">
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div class="flex flex-col gap-1">
          <label class="text-[9px] text-slate-500 uppercase font-semibold">Publisher / Medium</label>
          <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.publisher || ''}" oninput="updateBlockField(${index}, 'publisher', this.value)" placeholder="z.B. Heise Developer">
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-[9px] text-slate-500 uppercase font-semibold">Jahr</label>
          <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.date || ''}" oninput="updateBlockField(${index}, 'date', this.value)" placeholder="2024">
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-[9px] text-slate-500 uppercase font-semibold">URL (optional)</label>
        <input type="text" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white" value="${item.url || ''}" oninput="updateBlockField(${index}, 'url', this.value)" placeholder="https://...">
      </div>
    `;
  }

  return html;
}

// ---------------- STATE UPDATE & RE-RENDERS ----------------

window.updateBlockField = function(index, field, value) {
  if (field === null) {
    // Simple strings list (Tools, Hobbies)
    cvData[activeBlock][index] = value;
  } else {
    cvData[activeBlock][index][field] = value;
  }
  saveData();
  renderCV(true);
};

window.updateSubBlockList = function(index, field, subIndex, value) {
  cvData[activeBlock][index][field][subIndex] = value;
  saveData();
  renderCV(true);
};

window.updateSkillField = function(groupIndex, index, field, value) {
  if (cvData.skills?.groups?.[groupIndex]?.items?.[index] !== undefined) {
    cvData.skills.groups[groupIndex].items[index][field] = value;
    saveData();
    renderCV(true);
  }
};

// ---------------- STRUCTURAL CHANGE ACTIONS (ADD & REMOVE) ----------------

window.addArrayItem = function(section) {
  const templates = {
    competencies: { title: "Neue Kernkompetenz", description: "Beschreibung der Kernkompetenz." },
    languages: { name: "Neue Sprache", level: "Fließend", percentage: 80 },
    certifications: { title: "Neues Zertifikat", authority: "Aussteller-Institution", date: "Jahr" },
    workExperience: {
      role: "Neue Position / Rolle",
      company: "Name des Arbeitgebers, Standort",
      date: "Zeitraum (z.B. 2024)",
      details: ["Wichtigste Leistung oder Aufgabe hier eintragen."]
    },
    education: { degree: "Neuer Abschluss / Studiengang", institution: "Schule / Hochschule", date: "Zeitraum" },
    methodsAndTools: "Neuer Tool-Eintrag",
    hobbies: "Anderes Hobby / Interesse",
    volunteer: {
      role: "Neue Tätigkeit",
      organization: "Organisation / Verein",
      date: "Zeitraum",
      description: "Kurze Beschreibung der ehrenamtlichen Tätigkeit und deren Wirkung."
    },
    awards: {
      title: "Neuer Preis / Auszeichnung",
      issuer: "Verleihende Organisation",
      date: "Jahr",
      description: ""
    },
    talks: {
      title: "Neuer Vortrag / Talk",
      event: "Konferenz / Event",
      date: "Jahr",
      url: ""
    },
    publications: {
      title: "Neuer Artikel / Publikation",
      publisher: "Medium / Verlag",
      date: "Jahr",
      url: ""
    },
    projects: {
      title: "Neues Projekt",
      duration: "Dauer • Jahr",
      role: "Deine Rolle im Projekt",
      description: "Kurze Beschreibung des Projekts, der Problemstellung und deiner genauen Beiträge zum Projekterfolg.",
      technologies: ["Tech1", "Tech2"]
    },
    openSource: {
      title: "Neues Open-Source-Projekt",
      role: "Creator",
      description: "Kurze Beschreibung des Open-Source-Tools und deines Entwicklungseinflusses.",
      technologies: ["Tech1"]
    }
  };
  
  if (cvData[section] && templates[section]) {
    const copy = JSON.parse(JSON.stringify(templates[section]));
    cvData[section].push(copy);
    saveData();
    renderCV();
    showNotification("Eintrag hinzugefügt.");
  }
};

window.removeArrayItem = function(section, index) {
  if (cvData[section] && cvData[section].length > index) {
    cvData[section].splice(index, 1);
    saveData();
    renderCV();
    showNotification("Eintrag entfernt.");
  }
};

window.addSkillItem = function(groupIndex) {
  const defaultSkill = { name: "Neue Technologie / Skill", level: "Tiefe Kenntnisse", years: "3 Jahre", percentage: 75 };
  if (cvData.skills?.groups?.[groupIndex]) {
    cvData.skills.groups[groupIndex].items.push(defaultSkill);
    saveData();
    renderCV();
    showNotification("Skill hinzugefügt.");
  }
};

window.removeSkillItem = function(groupIndex, index) {
  const items = cvData.skills?.groups?.[groupIndex]?.items;
  if (items && items.length > index) {
    items.splice(index, 1);
    saveData();
    renderCV();
    showNotification("Skill entfernt.");
  }
};

window.addSkillGroup = function() {
  if (!cvData.skills) cvData.skills = { groups: [] };
  if (!cvData.skills.groups) cvData.skills.groups = [];
  cvData.skills.groups.push({ label: "Neue Gruppe", items: [] });
  saveData();
  renderCV();
  renderBlockEditor();
  showNotification("Neue Skill-Gruppe hinzugefügt.");
};

window.renameSkillGroup = function(groupIndex, newLabel) {
  if (cvData.skills?.groups?.[groupIndex]) {
    cvData.skills.groups[groupIndex].label = newLabel;
    saveData();
    renderCV(true);
  }
};

window.removeSkillGroup = function(groupIndex) {
  if (cvData.skills?.groups && cvData.skills.groups.length > groupIndex) {
    cvData.skills.groups.splice(groupIndex, 1);
    saveData();
    renderCV();
    renderBlockEditor();
    showNotification("Skill-Gruppe entfernt.");
  }
};

window.addJobBullet = function(jobIdx) {
  if (cvData.workExperience[jobIdx]) {
    cvData.workExperience[jobIdx].details.push("Neuer stichhaltiger Leistungspunkt.");
    saveData();
    renderCV();
  }
};

window.removeJobBullet = function(jobIdx, bulletIdx) {
  if (cvData.workExperience[jobIdx] && cvData.workExperience[jobIdx].details.length > bulletIdx) {
    cvData.workExperience[jobIdx].details.splice(bulletIdx, 1);
    saveData();
    renderCV();
  }
};

window.addProjectTech = function(projIdx) {
  if (cvData.projects[projIdx]) {
    cvData.projects[projIdx].technologies.push("Technologie");
    saveData();
    renderCV();
  }
};

window.removeProjectTech = function(projIdx, techIdx) {
  if (cvData.projects[projIdx] && cvData.projects[projIdx].technologies.length > techIdx) {
    cvData.projects[projIdx].technologies.splice(techIdx, 1);
    saveData();
    renderCV();
  }
};

window.addOpenSourceTech = function(projIdx) {
  if (cvData.openSource[projIdx]) {
    if (!cvData.openSource[projIdx].technologies) {
      cvData.openSource[projIdx].technologies = [];
    }
    cvData.openSource[projIdx].technologies.push("Technologie");
    saveData();
    renderCV();
  }
};

window.removeOpenSourceTech = function(projIdx, techIdx) {
  if (cvData.openSource[projIdx] && cvData.openSource[projIdx].technologies && cvData.openSource[projIdx].technologies.length > techIdx) {
    cvData.openSource[projIdx].technologies.splice(techIdx, 1);
    saveData();
    renderCV();
  }
};

// ---------------- TAB CONTROLLER LOGIC ----------------

function setupTabController() {
  const tabs = ['design', 'personal', 'blocks', 'json'];
  
  tabs.forEach(tab => {
    const btn = document.getElementById(`tab-btn-${tab}`);
    const content = document.getElementById(`tab-content-${tab}`);
    
    if (btn) {
      btn.addEventListener('click', () => {
        // Toggle Active styles on tabs buttons
        tabs.forEach(t => {
          const b = document.getElementById(`tab-btn-${t}`);
          const c = document.getElementById(`tab-content-${t}`);
          if (b) {
            b.className = 'tab-btn-inactive py-2 text-[11px] font-semibold rounded-lg cursor-pointer transition-all';
          }
          if (c) {
            c.classList.add('hidden');
          }
        });
        
        btn.className = 'tab-btn-active py-2 text-[11px] font-bold rounded-lg cursor-pointer transition-all';
        if (content) content.classList.remove('hidden');
        
        activeTab = tab;
      });
    }
  });

  // activeBlock select listener
  const blockSelect = document.getElementById('select-active-block');
  if (blockSelect) {
    blockSelect.addEventListener('change', (e) => {
      activeBlock = e.target.value;
      renderBlockEditor();
    });
  }
}

// ---------------- DYNAMIC FORMS VALUE SYNCHRONIZER ----------------

function setupInputListeners() {
  // Personal detail fields listeners – previewId maps sidebar input to CV preview element
  const fields = [
    { id: 'meta-name', path: 'personal.name', previewId: 'cv-name' },
    { id: 'meta-role', path: 'personal.role', previewId: 'cv-role' },
    { id: 'meta-email', path: 'personal.email', previewId: 'cv-contact-email' },
    { id: 'meta-phone', path: 'personal.phone', previewId: 'cv-contact-phone' },
    { id: 'meta-address', path: 'personal.address', previewId: 'cv-contact-address' },
    { id: 'meta-location', path: 'personal.location', previewId: 'cv-contact-location' },
    { id: 'meta-website', path: 'personal.website', previewId: 'cv-contact-website' },
    { id: 'meta-github', path: 'personal.github', previewId: 'cv-contact-github' },
    { id: 'meta-linkedin', path: 'personal.linkedin', previewId: 'cv-contact-linkedin' },
    { id: 'meta-birth-date', path: 'personal.birthDate', previewId: null },
    { id: 'meta-birth-place', path: 'personal.birthPlace', previewId: null },
    { id: 'meta-nationality', path: 'personal.nationality', previewId: null },
    { id: 'meta-profile-text', path: 'personal.profileText', previewId: 'cv-profile-text' }
  ];

  fields.forEach(f => {
    const el = document.getElementById(f.id);
    if (el) {
      el.addEventListener('input', (e) => {
        setValueByPath(cvData, f.path, e.target.value);
        saveData();
        // Sync preview element directly for instant feedback
        const previewEl = document.getElementById(f.previewId);
        if (previewEl) {
          previewEl.innerHTML = e.target.value;
        }
      });
    }
  });

  // Raw JSON Text Editor Input listener
  const jsonEditor = document.getElementById('json-editor');
  if (jsonEditor) {
    jsonEditor.addEventListener('input', (e) => {
      try {
        const parsed = JSON.parse(e.target.value);
        if (parsed.personal && parsed.personal.name) {
          cvData = parsed;
          saveData();
          renderCV();
        }
      } catch (err) {
        // Silent syntax error bypass while typing
      }
    });
  }

  // Photo upload listener
  const photoUpload = document.getElementById('photo-upload');
  if (photoUpload) {
    photoUpload.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        cvData.personal.photo = ev.target.result;
        saveData();
        syncPhotoPreview();
        renderCV();
      };
      reader.readAsDataURL(file);
    });
  }
  const photoRemove = document.getElementById('photo-remove');
  if (photoRemove) {
    photoRemove.addEventListener('click', () => {
      cvData.personal.photo = '';
      saveData();
      syncPhotoPreview();
      renderCV();
    });
  }
}

// Design layout and visibility panel listeners
function setupDesignListeners() {
  // Preview Mode dropdown
  const previewMode = document.getElementById('select-preview-mode');
  if (previewMode) {
    previewMode.addEventListener('change', (e) => {
      cvData.layout.previewMode = e.target.value;
      saveData();
      renderCV();
    });
  }

  // Styles dropdown
  const layoutStyle = document.getElementById('select-layout-style');
  if (layoutStyle) {
    layoutStyle.addEventListener('change', (e) => {
      cvData.layout.style = e.target.value;
      saveData();
      renderCV();
    });
  }

  // Paper Background style dropdown
  const paperBg = document.getElementById('select-paper-bg');
  if (paperBg) {
    paperBg.addEventListener('change', (e) => {
      cvData.layout.background = e.target.value;
      saveData();
      renderCV();
    });
  }

  // Header style dropdown
  const headerStyle = document.getElementById('select-header-style');
  if (headerStyle) {
    headerStyle.addEventListener('change', (e) => {
      cvData.layout.headerStyle = e.target.value;
      saveData();
      renderCV();
    });
  }

  // Footer Style dropdown
  const footerStyle = document.getElementById('select-footer-style');
  if (footerStyle) {
    footerStyle.addEventListener('change', (e) => {
      cvData.layout.footerStyle = e.target.value;
      saveData();
      renderCV();
    });
  }

  // Footer custom text input
  const footerText = document.getElementById('input-footer-text');
  if (footerText) {
    footerText.addEventListener('input', (e) => {
      cvData.layout.footerText = e.target.value;
      saveData();
      renderCV();
    });
  }

  // Section visible Checkboxes mapping listeners
  const sectionCheckboxes = [
    { id: 'check-visible-profile', key: 'profile' },
    { id: 'check-visible-work', key: 'workExperience' },
    { id: 'check-visible-projects', key: 'projects' },
    { id: 'check-visible-opensource', key: 'openSource' },
    { id: 'check-visible-skills', key: 'skills' },
    { id: 'check-visible-competencies', key: 'competencies' },
    { id: 'check-visible-education', key: 'education' },
    { id: 'check-visible-certs', key: 'certifications' },
    { id: 'check-visible-tools', key: 'methodsAndTools' },
    { id: 'check-visible-languages', key: 'languages' },
    { id: 'check-visible-hobbies', key: 'hobbies' },
    { id: 'check-visible-volunteer', key: 'volunteer' },
    { id: 'check-visible-awards', key: 'awards' },
    { id: 'check-visible-driving', key: 'drivingLicense' },
    { id: 'check-visible-talks', key: 'talks' },
    { id: 'check-visible-publications', key: 'publications' },
    { id: 'check-visible-references', key: 'references' },
  ];

  sectionCheckboxes.forEach(cb => {
    const el = document.getElementById(cb.id);
    if (el) {
      el.addEventListener('change', (e) => {
        cvData.layout.visibleSections[cb.key] = e.target.checked;
        saveData();
        renderCV();
      });
    }
  });
}

function syncFormsFromData() {
  // Sync personal info inputs
  const fields = [
    { id: 'meta-name', path: 'personal.name' },
    { id: 'meta-role', path: 'personal.role' },
    { id: 'meta-email', path: 'personal.email' },
    { id: 'meta-phone', path: 'personal.phone' },
    { id: 'meta-address', path: 'personal.address' },
    { id: 'meta-location', path: 'personal.location' },
    { id: 'meta-website', path: 'personal.website' },
    { id: 'meta-github', path: 'personal.github' },
    { id: 'meta-linkedin', path: 'personal.linkedin' },
    { id: 'meta-birth-date', path: 'personal.birthDate' },
    { id: 'meta-birth-place', path: 'personal.birthPlace' },
    { id: 'meta-nationality', path: 'personal.nationality' },
    { id: 'meta-profile-text', path: 'personal.profileText' }
  ];

  fields.forEach(f => {
    const el = document.getElementById(f.id);
    if (el && document.activeElement !== el) {
      el.value = getValueByPath(cvData, f.path) || '';
    }
  });

  // Sync Preview Mode selection
  const previewModeSelect = document.getElementById('select-preview-mode');
  if (previewModeSelect) previewModeSelect.value = cvData.layout.previewMode || 'a4';

  // Sync Layout selection inputs
  const layoutStyle = document.getElementById('select-layout-style');
  if (layoutStyle) layoutStyle.value = cvData.layout.style || 'minimal';

  const paperBg = document.getElementById('select-paper-bg');
  if (paperBg) paperBg.value = cvData.layout.background || 'white';

  const headerStyle = document.getElementById('select-header-style');
  if (headerStyle) headerStyle.value = cvData.layout.headerStyle || 'minimal';

  const footerStyle = document.getElementById('select-footer-style');
  if (footerStyle) footerStyle.value = cvData.layout.footerStyle || 'simple';

  const footerText = document.getElementById('input-footer-text');
  if (footerText && document.activeElement !== footerText) footerText.value = cvData.layout.footerText || '';

  // Sync Visibilities checkboxes states
  const sectionCheckboxes = [
    { id: 'check-visible-profile', key: 'profile' },
    { id: 'check-visible-work', key: 'workExperience' },
    { id: 'check-visible-projects', key: 'projects' },
    { id: 'check-visible-opensource', key: 'openSource' },
    { id: 'check-visible-skills', key: 'skills' },
    { id: 'check-visible-competencies', key: 'competencies' },
    { id: 'check-visible-education', key: 'education' },
    { id: 'check-visible-certs', key: 'certifications' },
    { id: 'check-visible-tools', key: 'methodsAndTools' },
    { id: 'check-visible-languages', key: 'languages' },
    { id: 'check-visible-hobbies', key: 'hobbies' },
    { id: 'check-visible-volunteer', key: 'volunteer' },
    { id: 'check-visible-awards', key: 'awards' },
    { id: 'check-visible-driving', key: 'drivingLicense' },
    { id: 'check-visible-talks', key: 'talks' },
    { id: 'check-visible-publications', key: 'publications' },
    { id: 'check-visible-references', key: 'references' },
  ];

  sectionCheckboxes.forEach(cb => {
    const el = document.getElementById(cb.id);
    if (el) {
      el.checked = cvData.layout.visibleSections[cb.key] !== false;
    }
  });

  // Sync Theme Selection highlights
  syncThemeButtons();

  // Sync photo preview in sidebar
  syncPhotoPreview();

  // Sync JSON text editor
  const jsonEditor = document.getElementById('json-editor');
  if (jsonEditor && document.activeElement !== jsonEditor) {
    jsonEditor.value = JSON.stringify(cvData, null, 2);
  }
}

// ---------------- EVENT LISTENERS & IN-LINE EDITS SYNC ----------------

function syncEditabilityAndListeners() {
  const pathElements = document.querySelectorAll('[data-path]');
  
  pathElements.forEach(el => {
    if (editMode) {
      el.setAttribute('contenteditable', 'true');
      el.classList.add('hover:bg-slate-100/85', 'focus:bg-slate-100/85', 'focus:outline-2', 'focus:outline-blue-500', 'rounded', 'transition-all', 'duration-150');
    } else {
      el.setAttribute('contenteditable', 'false');
      el.classList.remove('hover:bg-slate-100/85', 'focus:bg-slate-100/85', 'focus:outline-2', 'focus:outline-blue-500', 'rounded');
    }
    
    // Attach listener only once
    if (!el.dataset.listenerAttached) {
      el.addEventListener('blur', (e) => {
        const path = el.getAttribute('data-path');
        if (!path) return;
        
        let val = el.innerText.trim();
        const dataType = el.getAttribute('data-type');
        
        if (dataType === 'number') {
          const parsed = parseInt(val.replace('%', ''));
          val = isNaN(parsed) ? 50 : Math.min(100, Math.max(0, parsed));
        }
        
        setValueByPath(cvData, path, val);
        saveData();
        
        // Render block editor and preview to reflect direct modifications
        renderCV();
      });
      
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          const path = el.getAttribute('data-path');
          const multilinePaths = ['profileText', 'description', 'details'];
          const isMultiline = multilinePaths.some(p => path && path.includes(p));
          
          if (!isMultiline) {
            e.preventDefault();
            el.blur();
          }
        }
      });
      
      el.dataset.listenerAttached = 'true';
    }
  });

  // Toggle dynamic structural add buttons (always hide on preview/print if not edit mode)
  const addButtons = document.querySelectorAll('.add-entry-btn');
  addButtons.forEach(btn => {
    if (editMode) {
      btn.classList.remove('hidden');
    } else {
      btn.classList.add('hidden');
    }
  });
}

// ---------------- HEADER NAVIGATION & INTERFACE BUTTONS ----------------

function setupThemeSelector() {
  const container = document.getElementById('theme-selector-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  Object.keys(themes).forEach(themeName => {
    const theme = themes[themeName];
    const btn = document.createElement('button');
    btn.className = 'theme-btn w-6 h-6 rounded-full cursor-pointer border border-white/20 transition-all hover:scale-110 shrink-0';
    btn.dataset.theme = themeName;
    btn.style.background = `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`;
    btn.title = themeLabels[themeName] || themeName.toUpperCase();
    
    if (themeName === cvData.layout.theme) {
      btn.classList.add('ring-4', 'ring-white');
    }
    
    btn.addEventListener('click', () => {
      document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('ring-4', 'ring-white'));
      btn.classList.add('ring-4', 'ring-white');
      
      cvData.layout.theme = themeName;
      saveData();
      renderCV();
      showNotification(`Farbe auf "${themeName.toUpperCase()}" geändert.`);
    });
    
    container.appendChild(btn);
  });
}

function syncThemeButtons() {
  const activeTheme = cvData.layout.theme || 'navy';
  document.querySelectorAll('.theme-btn').forEach(btn => {
    if (btn.dataset.theme === activeTheme) {
      btn.classList.add('ring-4', 'ring-white');
    } else {
      btn.classList.remove('ring-4', 'ring-white');
    }
  });
}

function applyTheme(themeName) {
  const theme = themes[themeName];
  const root = document.documentElement;
  
  root.style.setProperty('--color-cv-primary', theme.primary);
  root.style.setProperty('--color-cv-secondary', theme.secondary);
  root.style.setProperty('--color-cv-accent', theme.accent);
  root.style.setProperty('--color-cv-accent-light', theme.accentLight);
  root.style.setProperty('--color-cv-bg', theme.bg);
  root.style.setProperty('--color-cv-line', theme.line);
}

function setupControlButtons() {
  const printBtn = document.getElementById('print-btn');
  const resetBtn = document.getElementById('reset-btn');
  
  printBtn.addEventListener('click', () => {
    showPrintGuideModal();
  });
  
  resetBtn.addEventListener('click', () => {
    if (confirm('Möchtest du deinen Lebenslauf wirklich auf ein leeres Blanco-Template zurücksetzen? Alle aktuellen Daten gehen verloren.')) {
      localStorage.removeItem('cv_json_data');
      loadData();
      renderCV();
      showNotification('Blanco-Template geladen.');
    }
  });
}

// ---------------- JSON IMPORT / EXPORT ENGINE ----------------

function setupImportExport() {
  const exportBtn = document.getElementById('export-json-btn');
  const importBtn = document.getElementById('import-json-btn');
  const fileInput = document.getElementById('import-file');
  
  // JSON Export Handler
  exportBtn.addEventListener('click', () => {
    const jsonString = JSON.stringify(cvData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `lebenslauf_${cvData.personal.name.toLowerCase().replace(/\s+/g, '_')}.json`;
    document.body.appendChild(a);
    a.click();
    
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showNotification('JSON-Daten erfolgreich exportiert.');
  });
  
  // JSON Import Trigger
  importBtn.addEventListener('click', () => {
    fileInput.click();
  });
  
  // JSON File Reading Handler
  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        
        // Basic schema validation check
        if (parsed.personal && parsed.personal.name && parsed.workExperience) {
          cvData = parsed;
          saveData();
          renderCV();
          showNotification('Lebenslauf-Daten erfolgreich importiert!');
        } else {
          alert('Ungültiges Dateiformat. Bitte wähle eine valide Lebenslauf-JSON-Datei.');
        }
      } catch (err) {
        alert('Fehler beim Lesen der Datei: ' + err.message);
      }
    };
    reader.readAsText(file);
    
    fileInput.value = '';
  });
}

// Toast notification helper
function showNotification(message) {
  const existingToast = document.querySelector('.toast-notification');
  if (existingToast) existingToast.remove();
  
  const toast = document.createElement('div');
  toast.className = 'toast-notification fixed bottom-5 right-5 bg-slate-800 text-white px-5 py-3 rounded-lg shadow-2xl border border-slate-700 z-50 flex items-center gap-3 transition-opacity duration-300 pointer-events-none opacity-0';
  toast.innerHTML = `
    <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <span class="font-medium text-sm">${message}</span>
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => toast.classList.remove('opacity-0'), 50);
  
  setTimeout(() => {
    toast.classList.add('opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function applyStyleSpecificPrintMargins(styleName) {
  let styleEl = document.getElementById('dynamic-print-margins');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'dynamic-print-margins';
    document.head.appendChild(styleEl);
  }

  // Margin configs in mm (numbers). mm is only used in @media print CSS.
  // Screen CSS variables are converted to px (1mm = 96/25.4 px).
  const marginConfigs = {
    'minimal':          { top: 20, bottom: 20, left: 20, right: 20 },
    'executive':        { top: 22, bottom: 22, left: 22, right: 22 },
    'modernist':        { top: 18, bottom: 18, left: 18, right: 18 },
    'vintage-editorial':{ top: 22, bottom: 22, left: 25, right: 25 },
    'avant-garde':      { top: 15, bottom: 15, left: 15, right: 15 },
    'cyberpunk':        { top: 15, bottom: 15, left: 12, right: 12 },
    'swiss':            { top: 20, bottom: 20, left: 20, right: 20 },
    'warm-editorial':   { top: 22, bottom: 22, left: 22, right: 22 },
    'terminal':         { top: 15, bottom: 15, left: 15, right: 15 },
    'neumorphic':       { top: 20, bottom: 20, left: 20, right: 20 },
    'scandinavian':     { top: 24, bottom: 24, left: 22, right: 22 },
    'art-deco':         { top: 20, bottom: 20, left: 20, right: 20 },
    'academic':         { top: 25, bottom: 25, left: 25, right: 25 }
  };

  const cfg = marginConfigs[styleName] || marginConfigs['minimal'];

  // Convert mm → px for screen CSS variables (1mm = 96/25.4 ≈ 3.7795 px)
  const mmToPx = (mm) => `${Math.round(mm * 96 / 25.4)}px`;

  const rootElement = document.documentElement;
  rootElement.style.setProperty('--cv-margin-x', mmToPx(cfg.left));
  rootElement.style.setProperty('--cv-margin-y', mmToPx(cfg.top));

  // @page margin is the ONLY correct way to get consistent margins on ALL pages.
  // padding on #cv-page would only affect page 1 top and last page bottom.
  styleEl.innerHTML = `
    @media print {
      @page {
        size: A4;
        margin: ${cfg.top}mm ${cfg.right}mm ${cfg.bottom}mm ${cfg.left}mm;
      }
      #cv-page {
        padding: 0 !important;
      }
      .header-layout-corporate {
        margin-left: 0 !important;
        margin-right: 0 !important;
        margin-top: 0 !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        padding-top: 0 !important;
        padding-bottom: 8mm !important;
      }
    }
  `;
}

function showPrintGuideModal() {
  let modal = document.getElementById('print-guide-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    return;
  }

  modal = document.createElement('div');
  modal.id = 'print-guide-modal';
  modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 transition-all duration-300';
  modal.innerHTML = `
    <div class="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl transform transition-all duration-300 scale-100 flex flex-col">
      <!-- Modal Header -->
      <div class="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
        <h3 class="text-base font-bold text-white flex items-center gap-2">
          <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
          Anleitung für perfekten PDF-Export
        </h3>
        <button id="close-print-modal" class="text-slate-400 hover:text-white transition-colors cursor-pointer p-1 rounded-lg hover:bg-slate-800">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-6 flex flex-col gap-4 text-slate-300 text-xs">
        <p class="leading-relaxed">
          Um das Design, die Farben und die Abstände deines Lebenslaufs absolut makellos im PDF zu erhalten, wähle im folgenden Druckdialog bitte folgende Einstellungen:
        </p>

        <div class="flex flex-col gap-3 mt-2">
          <!-- Step 1: Destination -->
          <div class="flex gap-3 bg-slate-950/40 p-3 border border-slate-800/60 rounded-xl">
            <div class="text-blue-500 shrink-0 mt-0.5">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
            </div>
            <div>
              <h4 class="font-bold text-white text-xs mb-0.5">1. Ziel: Als PDF speichern</h4>
              <p class="text-[11px] text-slate-400 leading-normal">Wähle als Drucker/Ziel <strong>"Als PDF speichern"</strong> oder <strong>"Save as PDF"</strong> aus.</p>
            </div>
          </div>

          <!-- Step 2: Background Graphics -->
          <div class="flex gap-3 bg-slate-950/40 p-3 border border-slate-800/60 rounded-xl">
            <div class="text-emerald-500 shrink-0 mt-0.5">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
            </div>
            <div>
              <h4 class="font-bold text-white text-xs mb-0.5">2. Hintergrundgrafiken aktivieren (WICHTIG!)</h4>
              <p class="text-[11px] text-slate-400 leading-normal">Unter "Mehr Einstellungen" <strong>Hintergrundgrafiken aktivieren</strong>, damit Markenfarben, Balken und Zeitlinien gedruckt werden.</p>
            </div>
          </div>

          <!-- Step 3: Margins are irrelevant -->
          <div class="flex gap-3 bg-slate-950/40 p-3 border border-slate-800/60 rounded-xl">
            <div class="text-emerald-500 shrink-0 mt-0.5">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <h4 class="font-bold text-white text-xs mb-0.5">3. Ränder – egal! (automatisch gesteuert)</h4>
              <p class="text-[11px] text-slate-400 leading-normal">Die Seitenränder werden <strong>vollautomatisch durch das CV-System gesteuert</strong> – egal ob du im Dialog "Standard", "Keine" oder einen anderen Wert wählst. Das Ergebnis ist immer korrekt.</p>
            </div>
          </div>

          <!-- Step 4: Hide Headers and Footers -->
          <div class="flex gap-3 bg-slate-950/40 p-3 border border-slate-800/60 rounded-xl">
            <div class="text-rose-500 shrink-0 mt-0.5">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268-2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
            </div>
            <div>
              <h4 class="font-bold text-white text-xs mb-0.5">4. Kopf- und Fußzeilen deaktivieren</h4>
              <p class="text-[11px] text-slate-400 leading-normal">Deaktiviere die Option <strong>"Kopf- und Fußzeilen"</strong>, um störende Browser-Datums- und URL-Zeilen auszublenden.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="px-6 py-4 border-t border-slate-800 flex justify-end gap-2 bg-slate-900/50">
        <button id="cancel-print" class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer">
          Abbrechen
        </button>
        <button id="confirm-print" class="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-900/20 transition-all cursor-pointer">
          Druckdialog öffnen
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const closeModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  };

  document.getElementById('close-print-modal').onclick = closeModal;
  document.getElementById('cancel-print').onclick = closeModal;
  
  document.getElementById('confirm-print').onclick = () => {
    closeModal();
    setTimeout(() => {
      window.print();
    }, 100);
  };
}

// ----------------  MOBILE PANEL TOGGLE ----------------

function setupMobileToggle() {
  const tabEditor = document.getElementById('mobile-tab-editor');
  const tabPreview = document.getElementById('mobile-tab-preview');
  if (!tabEditor || !tabPreview) return;

  function setMobileTab(showPreview) {
    document.body.classList.toggle('mobile-preview-active', showPreview);

    tabEditor.classList.toggle('bg-slate-700', !showPreview);
    tabEditor.classList.toggle('text-white', !showPreview);
    tabEditor.classList.toggle('font-bold', !showPreview);
    tabEditor.classList.toggle('text-slate-400', showPreview);
    tabEditor.classList.toggle('font-semibold', showPreview);

    tabPreview.classList.toggle('bg-slate-700', showPreview);
    tabPreview.classList.toggle('text-white', showPreview);
    tabPreview.classList.toggle('font-bold', showPreview);
    tabPreview.classList.toggle('text-slate-400', !showPreview);
    tabPreview.classList.toggle('font-semibold', !showPreview);
  }

  tabEditor.addEventListener('click', () => setMobileTab(false));
  tabPreview.addEventListener('click', () => setMobileTab(true));
}
