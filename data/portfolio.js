export const profile = {
  name: "Hiba Sidinou",
  photo: "/photo.jpg", // enlève cette ligne si la photo n'est pas encore dans /public
  school: "ENSA Marrakech",
  tagline: {
    fr: "Cybersécurité de bout en bout : détection (SIEM, SOC), durcissement, conformité (CIS, ISO) et automatisation, avec une touche d'IA. Je cherche un stage PFE dès février 2027.",
    en: "End-to-end cybersecurity: detection (SIEM, SOC), hardening, compliance (CIS, ISO) and automation, with a touch of AI. Looking for a final-year (PFE) internship starting February 2027.",
  },
  links: {
    email: "hibasidinou2@gmail.com",
    linkedin: "https://www.linkedin.com/in/hiba-sidinou",
    github: "https://github.com/hibasidinou",
  },
  cvs: [
    {
      label: { fr: "CV Technique", en: "Technical CV" },
      files: {
        fr: "/cv/CV_Hiba_Sidinou_Technique_FR.pdf",
        en: "/cv/CV_Hiba_Sidinou_Technique_EN.pdf",
      },
    },
    {
      label: { fr: "CV GRC", en: "GRC CV" },
      files: {
        fr: "/cv/CV_Hiba_Sidinou_GRC_FR.pdf",
        en: "/cv/CV_Hiba_Sidinou_GRC_EN.pdf",
      },
    },
  ],
};

export const ui = {
  nav: [
    { label: { fr: "Expériences", en: "Experience" }, href: "#experiences" },
    { label: { fr: "Projets", en: "Projects" }, href: "#projets" },
    { label: { fr: "Compétences", en: "Skills" }, href: "#competences" },
    { label: { fr: "Formation", en: "Education" }, href: "#formation" },
    { label: { fr: "Contact", en: "Contact" }, href: "#contact" },
  ],
  roles: {
    fr: [
      "Élève ingénieure Cyber Défense",
      "SOC & SIEM (Wazuh)",
      "Hardening CIS & conformité",
      "Python · PowerShell · Bash",
    ],
    en: [
      "Cyber Defense engineering student",
      "SOC & SIEM (Wazuh)",
      "CIS hardening & compliance",
      "Python · PowerShell · Bash",
    ],
  },
  seeProjects: { fr: "Voir mes projets", en: "View my projects" },
  downloadCv: { fr: "Télécharger mon CV", en: "Download my CV" },
  allRepos: {
    fr: "Voir tous mes dépôts GitHub →",
    en: "See all my GitHub repositories →",
  },
  stats: {
    experiences: { fr: "expériences", en: "experiences" },
    projects: { fr: "projets", en: "projects" },
    date: { fr: "Fév. 2027", en: "Feb. 2027" },
    available: { fr: "disponible pour un PFE", en: "available for a PFE internship" },
  },
  titles: {
    experiences: { fr: "Expériences", en: "Experience" },
    projects: { fr: "Projets", en: "Projects" },
    skills: { fr: "Compétences", en: "Skills" },
    education: { fr: "Formation", en: "Education" },
    contact: { fr: "Contact", en: "Contact" },
  },
  viewOnGithub: { fr: "Voir sur GitHub →", en: "View on GitHub →" },
  contactText: {
    fr: "Je cherche un stage PFE à partir de février 2027. N'hésitez pas à me contacter.",
    en: "I'm looking for a final-year (PFE) internship starting February 2027. Feel free to reach out.",
  },
};

export const experiences = [
  {
    role: { fr: "Formatrice Python & AI Labs", en: "Python & AI Labs Instructor" },
    company: "Koding School",
    period: { fr: "Oct. 2026 – présent", en: "Oct. 2026 – present" },
    points: {
      fr: [
        "Enseigne Python Foundations et AI Labs à des enfants et ados (7 ans et plus)",
        "Conçoit et anime des séances pratiques qui introduisent la programmation et l'IA par des projets",
        "Adapte des sujets techniques complexes à de jeunes apprenants",
        "Collabore avec les autres formateurs pour construire et améliorer les supports de cours",
      ],
      en: [
        "Teaches Python Foundations and AI Labs to children and teens (ages 7+)",
        "Designs and leads hands-on sessions that introduce programming and AI through projects",
        "Adapts complex technical topics for young learners",
        "Works with fellow instructors to build and improve course materials",
      ],
    },
  },
  {
    role: {
      fr: "Stagiaire PFA – Sécurité (hardening CIS)",
      en: "PFA Intern – Security (CIS hardening)",
    },
    company: "Holcim Maroc",
    period: { fr: "Juil. – août 2026", en: "Jul. – Aug. 2026" },
    points: {
      fr: [
        "Priorisation de contrôles CIS Benchmark (Windows Server 2022, RHEL 9, SQL Server 2022, MariaDB) avec un scoring pondéré : bénéfice sécurité, impact production, difficulté de mise en œuvre",
        "Classement des contrôles en vagues de déploiement selon une règle déterministe",
        "POC d'audit de conformité automatisé avec InSpec / CINC Auditor et visualisation des résultats dans Heimdall-lite",
        "Étude complémentaire du benchmark CIS Kubernetes",
        "Rédaction de référentiels de durcissement IT/OT et de livrables de présentation",
      ],
      en: [
        "Prioritized CIS Benchmark controls (Windows Server 2022, RHEL 9, SQL Server 2022, MariaDB) with a weighted score: security benefit, production impact, implementation effort",
        "Ranked controls into deployment waves using a deterministic rule",
        "Proof of concept for automated compliance auditing with InSpec / CINC Auditor, with results visualized in Heimdall-lite",
        "Additional study of the CIS Kubernetes benchmark",
        "Wrote IT/OT hardening baselines and presentation deliverables",
      ],
    },
  },
  {
    role: { fr: "Stagiaire IT & Cybersécurité", en: "IT & Cybersecurity Intern" },
    company: "EXIA Technologies",
    period: { fr: "15 juil. – 15 sept. 2025", en: "Jul. 15 – Sep. 15, 2025" },
    points: {
      fr: [
        "Déploiement d'une solution Wazuh complète (manager, indexer, dashboard) avec agents sur Windows (2019/2022) et Ubuntu Server",
        "Supervision SOC et analyse des événements de sécurité",
        "Évaluation de la configuration de sécurité avec les benchmarks CIS (Windows & Ubuntu)",
        "Automatisation de tâches de sécurité avec PowerShell et Bash",
        "Contribution à l'audit et au renforcement de la sécurité des systèmes",
      ],
      en: [
        "Deployed a full Wazuh solution (manager, indexer, dashboard) with agents on Windows (2019/2022) and Ubuntu Server",
        "SOC monitoring and security event analysis",
        "Assessed security configuration with CIS benchmarks (Windows & Ubuntu)",
        "Automated security tasks with PowerShell and Bash",
        "Contributed to auditing and strengthening system security",
      ],
    },
  },
  {
    role: { fr: "Agente de prospection", en: "Prospecting Agent" },
    company: "EYACOM – GITEX Africa 2025",
    period: { fr: "2025", en: "2025" },
    points: {
      fr: [
        "Présentation et explication de la solution SOC à des entreprises de sécurité et à des acteurs proches du domaine",
        "Prospection et échanges directs avec des prospects lors du salon GITEX Africa",
      ],
      en: [
        "Presented and explained the SOC solution to security companies and players in the field",
        "Prospected and engaged directly with leads at GITEX Africa",
      ],
    },
  },
];

export const projects = [
  {
    title: {
      fr: "Contrat d'interface – gestion de crise (ISO 22361)",
      en: "Interface contract – crisis management (ISO 22361)",
    },
    context: { fr: "Mini-ERP hospitalier", en: "Hospital mini-ERP" },
    status: { fr: "Réalisé", en: "Completed" },
    upcoming: false,
    description: {
      fr: "Conception du contrat d'interface avec l'outillage de crise : format JSON des événements, niveaux de gravité INFO/WARNING/CRITICAL, endpoints /health, /events, /status/degraded, et correspondance avec les clauses de l'ISO 22361. Ce contrat a servi de base au module de gestion de crise de l'ERP.",
      en: "Designed the interface contract with the crisis tooling: JSON event format, INFO/WARNING/CRITICAL severity levels, /health, /events and /status/degraded endpoints, and mapping to ISO 22361 clauses. The contract served as the basis for the ERP's crisis management module.",
    },
    tags: ["ISO 22361", "API", "JSON", "Crisis management"],
    link: "",
  },
  {
    title: {
      fr: "Détection explicable des cybermenaces par IA",
      en: "Explainable AI-based cyber threat detection",
    },
    context: { fr: "Sujet académique", en: "Academic project" },
    status: { fr: "À venir", en: "Upcoming" },
    upcoming: true,
    description: {
      fr: "Projet de détection de cybermenaces par intelligence artificielle avec un accent sur l'explicabilité des décisions du modèle.",
      en: "AI-based cyber threat detection project with a focus on the explainability of the model's decisions.",
    },
    tags: ["AI", "Cybersecurity", "Explainability"],
    link: "",
  },
  {
    title: { fr: "Attack Surface Mapper", en: "Attack Surface Mapper" },
    context: { fr: "Sécurité Android", en: "Android security" },
    status: { fr: "Réalisé", en: "Completed" },
    upcoming: false,
    description: {
      fr: "Plateforme d'analyse de sécurité Android qui détecte les surfaces d'attaque risquées des APK par analyse statique et machine learning, et génère des rapports interactifs.",
      en: "Android security analysis platform that detects risky APK attack surfaces using static analysis and machine learning, and generates interactive reports.",
    },
    tags: ["Python", "Android", "Machine Learning", "Static analysis"],
    link: "https://github.com/hibasidinou/attack-surface-mapper",
  },
  {
    title: {
      fr: "Détection, analyse et clustering de malwares",
      en: "Malware detection, analysis and clustering",
    },
    context: { fr: "Projet académique", en: "Academic project" },
    status: { fr: "Réalisé", en: "Completed" },
    upcoming: false,
    description: {
      fr: "Système complet de détection intelligente, d'analyse et de clustering de malwares.",
      en: "Complete system for intelligent malware detection, analysis and clustering.",
    },
    tags: ["Python", "Malware", "Clustering"],
    link: "https://github.com/hibasidinou/Malware_detection_analysis_clustering",
  },
  {
    title: {
      fr: "Plateforme de détection et tracking par drone (YOLO)",
      en: "Drone object detection & tracking platform (YOLO)",
    },
    context: { fr: "Projet académique", en: "Academic project" },
    status: { fr: "Réalisé", en: "Completed" },
    upcoming: false,
    description: {
      fr: "Plateforme de détection et de tracking d'objets en temps réel avec les algorithmes YOLO, carte interactive et module de confidentialité.",
      en: "Real-time object detection and tracking platform using YOLO algorithms, with an interactive map and a privacy module.",
    },
    tags: ["Python", "YOLO", "Computer vision"],
    link: "https://github.com/hibasidinou/drone-yolo-detection-tracking-platform",
  },
  {
    title: {
      fr: "Durcissement d'un serveur web Apache",
      en: "Apache web server hardening",
    },
    context: { fr: "Hardening", en: "Hardening" },
    status: { fr: "Réalisé", en: "Completed" },
    upcoming: false,
    description: {
      fr: "Projet de durcissement d'un serveur web Apache, documenté en LaTeX.",
      en: "Apache web server hardening project, documented in LaTeX.",
    },
    tags: ["Apache", "Hardening", "LaTeX"],
    link: "https://github.com/hibasidinou/webserver-hardening-workspace",
  },
  {
    title: { fr: "TransferPro", en: "TransferPro" },
    context: { fr: "Module JEE", en: "JEE module" },
    status: { fr: "Réalisé", en: "Completed" },
    upcoming: false,
    description: {
      fr: "Système web de transfert d'argent inspiré de CashPlus/WafaCash, développé en Java Enterprise Edition.",
      en: "Web money transfer system inspired by CashPlus/WafaCash, built with Java Enterprise Edition.",
    },
    tags: ["Java EE", "Web"],
    link: "https://github.com/hibasidinou/TransferPro",
  },
];

export const skills = [
  {
    title: { fr: "Sécurité défensive", en: "Defensive security" },
    items: [
      "Wazuh (SIEM)",
      { fr: "Supervision SOC", en: "SOC monitoring" },
      "CIS Benchmarks",
      "Hardening",
      "InSpec / CINC Auditor",
    ],
  },
  {
    title: { fr: "Gouvernance & normes", en: "Governance & standards" },
    items: ["ISO 27001", "ISO 27002", "ISO 22361"],
  },
  {
    title: { fr: "Scripting & dev", en: "Scripting & dev" },
    items: ["Python", "PowerShell", "Bash", "Java EE", "FastAPI", "React"],
  },
  {
    title: { fr: "IA & données", en: "AI & data" },
    items: ["Machine Learning", "YOLO", "Clustering"],
  },
  {
    title: { fr: "Systèmes", en: "Systems" },
    items: ["Windows Server", "Ubuntu / Linux", "RHEL", "Apache", "SQL Server", "MariaDB"],
  },
];

export const education = [
  {
    school: "ENSA Marrakech",
    degree: {
      fr: "Cycle ingénieur – Génie Cyber Défense et Systèmes de Télécommunications Embarqués",
      en: "Engineering degree – Cyber Defense & Embedded Telecommunication Systems",
    },
    period: { fr: "5e année", en: "5th year" },
  },
];