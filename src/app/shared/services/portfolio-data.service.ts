import { Injectable } from '@angular/core';
import {
  Stat,
  Filter,
  Value,
  Fact,
  Skill,
  SkillCategory,
  Certification,
  LearningItem,
  TimelineEvent,
  ContactMethod,
  SocialLink,
  FaqItem,
} from '../models';

// ── Project interfaces (kept close to their data) ──
export interface ProjectGalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  categories: string[];
  year: number;
  featured: boolean;
  metrics?: { label: string; value: string }[];
}

export interface ProjectMetric {
  label: string;
  value: string;
  icon: string;
}

export interface Challenge {
  title: string;
  description: string;
}

export interface Technology {
  name: string;
  category: string;
  description: string;
}

export interface Milestone {
  date: string;
  title: string;
  description: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  galleryImages: string[];
  tags: string[];
  categories: string[];
  year: number;
  duration: string;
  role: string;
  teamSize: string;
  status: string;
  metrics: ProjectMetric[];
  challenges: Challenge[];
  solutions: string[];
  technologies: Technology[];
  milestones: Milestone[];
  links: { github?: string; live?: string; documentation?: string };
  testimonial?: { quote: string; author: string; role: string };
}

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  // ─────────────────────────── HOME ───────────────────────────

  readonly homeTechStack = [
    { icon: 'web', title: 'Frontend' },
    { icon: 'database', title: 'Backend' },
    { icon: 'storage', title: 'Base de données' },
    { icon: 'travel_explore', title: 'SEO' },
  ];

  readonly homeValues: Value[] = [
    {
      icon: 'favorite',
      title: 'Bienveillance',
      description: "Guidée par l'empathie et l'écoute, je place l'humain au cœur de mes échanges et de mes projets.",
      colorClass: 'text-brand-pink',
      bgClass: 'bg-brand-pink/20',
      hoverBorderClass: 'hover:border-brand-pink/50',
    },
    {
      icon: 'groups',
      title: "Esprit d'équipe",
      description:
        "Collaborative et communicante, j'aime construire ensemble, partager et apprendre au contact des autres.",
      colorClass: 'text-brand-blue',
      bgClass: 'bg-brand-blue/20',
      hoverBorderClass: 'hover:border-brand-blue/50',
    },
    {
      icon: 'auto_awesome',
      title: 'Adaptabilité',
      description: "Polyvalente et curieuse, je m'adapte rapidement aux projets, aux outils et aux nouveaux défis.",
      colorClass: 'text-brand-purple',
      bgClass: 'bg-brand-purple/20',
      hoverBorderClass: 'hover:border-brand-purple/50',
    },
  ];

  readonly homeAboutParagraphs = [
    "Je suis développeuse Web junior, dôtée de trois années d'alternance en développement auprès de Worldline. ",
    'Mon objectif de carrière est de devenir une développeuse polyvalente, capable de contribuer à toutes les étapes du développement logiciel, du frontend au backend.',
  ];

  readonly homeCurrentProject = {
    name: 'Valkea',
    description:
      'une application de suivi de la santé de vos animaux de compagnie, avec des alertes personnalisées pour les soins et les rendez-vous vétérinaires.',
  };

  readonly homeSoftSkills = [
    'Empathique',
    'Collaborative',
    'Communicante',
    'Autonome',
    'Polyvalente',
    "À l'écoute",
    'Rigoureuse',
    'Curieuse',
  ];

  readonly homeInterests = [
    { icon: 'pool', label: 'Natation' },
    { icon: 'fitness_center', label: 'Crossfit' },
    { icon: 'piano', label: 'Piano' },
  ];

  readonly homeFacts: Fact[] = [
    { icon: 'terminal', iconColor: 'text-brand-blue', text: 'Je suis tombée dans le dev comme un cheveu sur la soupe.' },
    { icon: 'pets', iconColor: 'text-brand-purple', text: "Fière humaine d'un husky têtu mais adorable." },
    { icon: 'coffee', iconColor: 'text-brand-amber', text: "Alimentée par l'Espresso... et le chocolat chaud." },
    {
      icon: 'exercise',
      iconColor: 'text-brand-blue',
      text: 'Build physique multi-classe : nageuse, crossfiteuse et combattante.',
    },
    {
      icon: 'psychology',
      iconColor: 'text-brand-green',
      text: 'Je développe mes compétences au quotidien, sans pression.',
    },
    { icon: 'headphones', iconColor: 'text-brand-pink', text: 'Ma playlist passe du métal au piano sans prévenir.' },
  ];

  readonly homeProjectPreviews = [
    {
      id: 'openclassrooms-2',
      title: 'Transformer une maquette en site web avec HTML & CSS',
      description: "Intégration d'une maquette de site responsive en utilisant HTML et CSS.",
      imageUrl: 'assets/images/projects/booki.png',
      tags: ['HTML', 'CSS', 'Responsive'],
    },
    {
      id: 'openclassrooms-6',
      title: "Construire une API sécurisée pour une application d'avis gastronomique",
      description: "Création d'une API REST sécurisée avec NodeJS et MongoDB.",
      imageUrl: 'assets/images/projects/piiquante.png',
      tags: ['NodeJS', 'MongoDB', 'Sécurité', 'API'],
    },
  ];

  // ─────────────────────────── SKILLS ───────────────────────────

  readonly skillStats: Stat[] = [
    { icon: 'code', value: '10+', label: 'Technologies maîtrisées', colorClass: 'text-brand-blue' },
    { icon: 'workspace_premium', value: '5+', label: 'Diplômes obtenus', colorClass: 'text-brand-amber' },
    { icon: 'trending_up', value: '7 ans', label: 'En alternance', colorClass: 'text-brand-green' },
    { icon: 'school', value: 'Bac+5', label: 'Mastère en cours', colorClass: 'text-brand-purple' },
  ];

  readonly skillFilters: Filter[] = [
    { id: 'all', label: 'Tout' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'databases', label: 'Databases' },
    { id: 'tools', label: 'Outils' },
    { id: 'design', label: 'Design' },
    { id: 'soft-skills', label: 'Soft Skills' },
  ];

  readonly skillCategories: SkillCategory[] = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: 'web',
      description: 'HTML5/CSS3, JavaScript, Angular, TypeScript, Vue.js',
      longDescription:
        'Ma compétence principale, construite depuis la formation OpenClassrooms et renforcée chez Worldline. Je crée des interfaces modernes, réactives et accessibles, en prenant soin du rendu sur tous les supports (mobile-first, responsive).',
      level: 82,
      yearsExperience: 4,
      colorClass: 'text-brand-purple',
      bgClass: 'bg-brand-purple/20',
      borderClass: 'border-brand-purple/30 hover:border-brand-purple',
      barClass: 'bg-brand-purple',
      gradientClass: 'from-brand-purple to-brand-pink',
      skills: [
        {
          name: 'HTML5 / CSS3',
          level: 90,
          experience: '4 ans',
          description: 'Intégration de maquettes, animations, mobile-first',
        },
        {
          name: 'JavaScript',
          level: 80,
          experience: '3 ans',
          description: 'Manipulation du DOM, fetch API, programmation orientée objet',
        },
        {
          name: 'Angular',
          level: 75,
          experience: '2 ans',
          description: 'Components, services, routing, RxJS — utilisé chez Worldline et dans ce portfolio',
        },
        {
          name: 'TypeScript',
          level: 72,
          experience: '2 ans',
          description: 'Typage statique, interfaces, generics — utilisé avec Angular',
        },
        {
          name: 'Vue.js',
          level: 65,
          experience: '1 an',
          description: 'Composition API, CRUD, réseau social (projet OpenClassrooms)',
        },
      ],
      keyStrengths: ['Responsive Design', 'Intégration de maquettes', 'Accessibilité', 'Mobile-first'],
      tools: ['VS Code', 'npm', 'Angular CLI', 'Git', 'Chrome DevTools'],
      relatedProjects: [
        {
          id: 'openclassrooms-2',
          title: 'Booki - Maquette HTML/CSS',
          description: 'Intégration responsive depuis une maquette Figma',
        },
        {
          id: 'openclassrooms-3',
          title: 'Ohmyfood - Animations CSS',
          description: 'Animations avancées et approche mobile-first',
        },
        {
          id: 'openclassrooms-7',
          title: 'Groupomania - Réseau social',
          description: 'Interface Vue.js avec CRUD complet',
        },
      ],
      resources: [
        { title: 'MDN Web Docs', type: 'Documentation', url: 'https://developer.mozilla.org' },
        { title: 'Angular Documentation', type: 'Documentation', url: 'https://angular.dev' },
      ],
    },
    {
      id: 'backend',
      name: 'Backend & APIs',
      icon: 'database',
      description: 'Java, Spring Boot, Node.js, Express, REST API',
      longDescription:
        "Compétences backend acquises durant la formation OpenClassrooms (Node.js/Express) et approfondies à Wild Code School et chez Worldline (Java/Spring Boot). Je suis à l'aise pour créer des APIs REST sécurisées et des applications serveur.",
      level: 68,
      yearsExperience: 2,
      colorClass: 'text-brand-blue',
      bgClass: 'bg-brand-blue/20',
      borderClass: 'border-brand-blue/30 hover:border-brand-blue',
      barClass: 'bg-brand-blue',
      gradientClass: 'from-brand-blue to-brand-teal',
      skills: [
        {
          name: 'Node.js / Express',
          level: 72,
          experience: '2 ans',
          description: 'API REST, middleware, gestion des routes et authentification JWT',
        },
        {
          name: 'Java / Spring Boot',
          level: 65,
          experience: '2 ans',
          description: 'Formation Wild Code School + apprentissage chez Worldline (Mastère)',
        },
        {
          name: 'REST API',
          level: 72,
          experience: '2 ans',
          description: "Conception et consommation d'APIs RESTful, gestion des erreurs HTTP",
        },
        {
          name: 'Python',
          level: 60,
          experience: '1 an',
          description: "Scripts d'automatisation lors de la mission SRE chez Worldline",
        },
      ],
      keyStrengths: ['Architecture REST', 'Sécurité des APIs', 'Authentification JWT', 'Gestion des erreurs'],
      tools: ['Postman', 'npm', 'Maven', 'IntelliJ IDEA', 'VS Code'],
      relatedProjects: [
        {
          id: 'openclassrooms-6',
          title: 'Piiquante - API sécurisée',
          description: 'API REST Node.js/Express avec authentification et upload de fichiers',
        },
        {
          id: 'openclassrooms-5',
          title: 'Kanap - E-commerce JS',
          description: "Consommation d'une API REST avec vanilla JavaScript",
        },
      ],
      resources: [
        { title: 'Node.js Documentation', type: 'Documentation', url: 'https://nodejs.org/docs' },
        { title: 'Spring Boot Guides', type: 'Documentation', url: 'https://spring.io/guides' },
      ],
    },
    {
      id: 'databases',
      name: 'Bases de données',
      icon: 'storage',
      description: 'SQL, MySQL, MongoDB',
      longDescription:
        'Apprentissage des bases de données relationnelles (SQL/MySQL) et NoSQL (MongoDB) à travers les projets OpenClassrooms et la formation Wild Code School. Je sais concevoir des schémas simples et réaliser des requêtes CRUD.',
      level: 65,
      yearsExperience: 2,
      colorClass: 'text-brand-amber',
      bgClass: 'bg-brand-amber/20',
      borderClass: 'border-brand-amber/30 hover:border-brand-amber',
      barClass: 'bg-brand-amber',
      gradientClass: 'from-brand-amber to-brand-pink',
      skills: [
        {
          name: 'SQL / MySQL',
          level: 70,
          experience: '2 ans',
          description: 'Requêtes CRUD, jointures, conception de schémas (projet Groupomania)',
        },
        {
          name: 'MongoDB',
          level: 65,
          experience: '2 ans',
          description: 'Base NoSQL, schémas dynamiques, utilisé avec Node.js (projet Piiquante)',
        },
      ],
      keyStrengths: ['Modélisation des données', 'Requêtes CRUD', 'Intégration avec API REST', 'NoSQL vs SQL'],
      tools: ['MySQL Workbench', 'MongoDB Compass', 'TablePlus'],
      relatedProjects: [
        {
          id: 'openclassrooms-6',
          title: 'Piiquante - API + MongoDB',
          description: 'Stockage des produits et images avec MongoDB',
        },
        {
          id: 'openclassrooms-7',
          title: 'Groupomania - Réseau social SQL',
          description: 'Base de données relationnelle pour le réseau social',
        },
      ],
      resources: [
        { title: 'MongoDB Documentation', type: 'Documentation', url: 'https://www.mongodb.com/docs' },
        { title: 'SQL Tutorial - W3Schools', type: 'Tutoriel', url: 'https://www.w3schools.com/sql' },
      ],
    },
    {
      id: 'tools',
      name: 'Outils & Workflow',
      icon: 'build',
      description: 'Git, GitLab, Méthodes Agiles, Docker, Bash',
      longDescription:
        "Habituée à travailler en équipe avec Git/GitLab dans un contexte professionnel chez Worldline. J'utilise les méthodes Agiles/Scrum au quotidien et j'automatise des tâches via Bash. Docker est en cours d'apprentissage dans le cadre du Mastère.",
      level: 75,
      yearsExperience: 3,
      colorClass: 'text-brand-green',
      bgClass: 'bg-brand-green/20',
      borderClass: 'border-brand-green/30 hover:border-brand-green',
      barClass: 'bg-brand-green',
      gradientClass: 'from-brand-green to-brand-teal',
      skills: [
        {
          name: 'Git / GitHub / GitLab',
          level: 85,
          experience: '4 ans',
          description:
            "Versionning, branches, merge requests, code review — utilisé depuis OpenClassrooms jusqu'à Worldline",
        },
        {
          name: 'Méthodes Agiles / Scrum',
          level: 78,
          experience: '3 ans',
          description: 'Sprints, daily stand-up, rétrospectives — pratique quotidienne chez Worldline',
        },
        {
          name: 'Docker',
          level: 60,
          experience: '1 an',
          description: "Conteneurisation d'applications, en cours d'approfondissement dans le Mastère",
        },
        {
          name: 'Bash / Linux',
          level: 60,
          experience: '1 an',
          description: "Scripts d'automatisation lors de la mission SRE chez Worldline",
        },
      ],
      keyStrengths: ['Collaboration en équipe', 'Versioning propre', 'Automatisation', 'Méthodes Agiles'],
      tools: ['Git', 'GitLab', 'GitHub', 'Jira', 'Confluence'],
      relatedProjects: [
        {
          id: 'openclassrooms-3',
          title: 'Ohmyfood - Versioning Git',
          description: 'Premiers commits et branches avec Git',
        },
        {
          id: 'openclassrooms-7',
          title: 'Groupomania - Projet complet',
          description: 'Gestion de version et documentation du projet',
        },
      ],
      resources: [
        { title: 'Git Documentation', type: 'Documentation', url: 'https://git-scm.com/doc' },
        { title: 'Docker Get Started', type: 'Documentation', url: 'https://docs.docker.com/get-started' },
      ],
    },
    {
      id: 'design',
      name: 'Design & Intégration',
      icon: 'palette',
      description: 'Responsive Design, Bootstrap, Tailwind CSS, SEO',
      longDescription:
        "Sensible à l'expérience utilisateur et au rendu visuel, je soigne l'intégration des maquettes et le responsive de mes interfaces. J'ai optimisé le SEO et l'accessibilité d'un site réel lors de la formation OpenClassrooms.",
      level: 78,
      yearsExperience: 4,
      colorClass: 'text-brand-pink',
      bgClass: 'bg-brand-pink/20',
      borderClass: 'border-brand-pink/30 hover:border-brand-pink',
      barClass: 'bg-brand-pink',
      gradientClass: 'from-brand-pink to-brand-purple',
      skills: [
        {
          name: 'Responsive Design',
          level: 85,
          experience: '4 ans',
          description: 'Media queries, flexbox, grid, approche mobile-first',
        },
        {
          name: 'Tailwind CSS',
          level: 78,
          experience: '1 an',
          description: 'Utility-first CSS — utilisé dans ce portfolio Angular',
        },
        {
          name: 'Bootstrap',
          level: 75,
          experience: '2 ans',
          description: 'Composants UI, grille responsive — utilisé chez Worldline',
        },
        {
          name: 'SEO & Accessibilité',
          level: 70,
          experience: '2 ans',
          description: 'Balises sémantiques, ARIA, optimisation des performances (Lighthouse)',
        },
      ],
      keyStrengths: ['Intégration pixel-perfect', 'Mobile-first', 'Accessibilité WCAG', 'Performance web'],
      tools: ['Figma', 'Lighthouse', 'Chrome DevTools', 'WAVE (accessibilité)'],
      relatedProjects: [
        {
          id: 'openclassrooms-2',
          title: 'Booki - Intégration maquette',
          description: "Reproduction fidèle d'une maquette Figma en HTML/CSS",
        },
        {
          id: 'openclassrooms-4',
          title: 'Chouette Agence - SEO',
          description: 'Audit et optimisation SEO, accessibilité et performances',
        },
      ],
      resources: [
        { title: 'Tailwind CSS Docs', type: 'Documentation', url: 'https://tailwindcss.com/docs' },
        { title: 'Google Lighthouse', type: 'Outil', url: 'https://developer.chrome.com/docs/lighthouse' },
      ],
    },
    {
      id: 'soft-skills',
      name: 'Soft Skills',
      icon: 'psychology',
      description: 'Communication, empathie, travail en équipe, adaptabilité',
      longDescription:
        "Des compétences humaines solides, construites tout au long de parcours atypiques : 1 an à la réception hôtelière, puis 3 ans d'alternance en pharmacie (relation patient, conseil, rigueur), avant une reconversion complète vers le développement web. Ces expériences ont forgé une vraie capacité à communiquer, écouter et s'adapter à des environnements très différents.",
      level: 90,
      yearsExperience: 7,
      colorClass: 'text-brand-teal',
      bgClass: 'bg-brand-teal/20',
      borderClass: 'border-brand-teal/30 hover:border-brand-teal',
      barClass: 'bg-brand-teal',
      gradientClass: 'from-brand-teal to-brand-blue',
      skills: [
        {
          name: 'Communication',
          level: 92,
          experience: '6 ans',
          description:
            'Relation client en hôtellerie, conseil patient en pharmacie, communication projet chez Worldline',
        },
        {
          name: 'Travail en équipe',
          level: 90,
          experience: '5 ans',
          description: 'Collaboration quotidienne chez Worldline (code review, pair programming)',
        },
        {
          name: 'Empathie & écoute',
          level: 95,
          experience: '6 ans',
          description: 'Développée au contact des patients et clients : comprendre les besoins, rassurer, conseiller',
        },
        {
          name: 'Adaptabilité',
          level: 90,
          experience: '7 ans',
          description: "Reconversion professionnelle, passage de l'hôtellerie à la pharmacie puis au développement web",
        },
        {
          name: 'Autonomie',
          level: 85,
          experience: '3 ans',
          description: 'Gestion de projets en solo (formation OpenClassrooms) et missions techniques chez Worldline',
        },
        {
          name: 'Rigueur',
          level: 85,
          experience: '5 ans',
          description: 'Exigée dans la préparation de médicaments, retrouvée dans la qualité du code et les tests',
        },
      ],
      keyStrengths: ['Relation humaine', 'Écoute active', 'Empathie', 'Pédagogie'],
      tools: ['Confluence', 'Slack', 'Microsoft Teams'],
      relatedProjects: [
        {
          id: 'openclassrooms-7',
          title: 'Groupomania - Réseau social',
          description: 'Projet de bout en bout géré en autonomie',
        },
        {
          id: 'openclassrooms-4',
          title: 'Chouette Agence - SEO',
          description: 'Audit, recommandations et rédaction de rapport',
        },
      ],
      resources: [
        {
          title: 'Soft Skills, vous avez dit : soft skills',
          type: 'Page web',
          url: 'https://www.cmvrh.developpement-durable.gouv.fr/soft-skills-vous-avez-dit-soft-skills-a4390.html',
        },
      ],
    },
  ];

  readonly certifications: Certification[] = [
    {
      name: 'Développeur Web - Titre RNCP Niveau 5',
      issuer: 'OpenClassrooms',
      date: '2022',
      icon: 'web',
      colorClass: 'text-brand-purple',
      bgClass: 'bg-brand-purple/20',
    },
    {
      name: "Bachelor Concepteur Développeur d'Applications",
      issuer: 'CESI',
      date: '2024',
      icon: 'code',
      colorClass: 'text-brand-blue',
      bgClass: 'bg-brand-blue/20',
    },
    {
      name: 'Brevet Professionnel Préparateur en Pharmacie',
      issuer: "CFA Pharmacie d'Orléans",
      date: '2021',
      icon: 'medication',
      colorClass: 'text-brand-green',
      bgClass: 'bg-brand-green/20',
    },
  ];

  readonly currentlyLearning: LearningItem[] = [
    { name: 'Java / Spring Boot avancé', progress: 65, status: 'En cours' },
    { name: 'Angular avancé', progress: 55, status: 'En cours' },
    { name: 'Docker & CI/CD', progress: 40, status: 'Débuté' },
  ];

  // ─────────────────────────── PROJECTS ───────────────────────────

  readonly projectCategories: Filter[] = [
    { id: 'all', label: 'Tous', icon: 'apps' },
    { id: 'backend', label: 'Backend', icon: 'database' },
    { id: 'frontend', label: 'Frontend', icon: 'web' },
  ];

  readonly projects: ProjectGalleryItem[] = [
    {
      id: 'openclassrooms-2',
      title: 'Transformer une maquette en site web avec HTML & CSS',
      description: "Intégration d'une maquette de site responsive en utilisant HTML et CSS.",
      imageUrl: 'assets/images/projects/booki.png',
      tags: ['HTML', 'CSS', 'Responsive'],
      categories: ['frontend'],
      year: 2021,
      featured: false,
      metrics: [{ label: 'Formation', value: 'OpenClassrooms' }],
    },
    {
      id: 'openclassrooms-3',
      title: 'Dynamiser une page web avec des animations CSS',
      description:
        "Création d'animations CSS avancées, approche mobile-first et utilisation d'un système de versioning.",
      imageUrl: 'assets/images/projects/ohmyfood_.png',
      tags: ['CSS', 'Animations', 'Git', 'Mobile-first'],
      categories: ['frontend'],
      year: 2022,
      featured: false,
      metrics: [{ label: 'Formation', value: 'OpenClassrooms' }],
    },
    {
      id: 'openclassrooms-4',
      title: 'Optimiser un site web existant',
      description: "Amélioration du SEO, de l'accessibilité et optimisation globale des performances du site.",
      imageUrl: 'assets/images/projects/chouette-agence.png',
      tags: ['SEO', 'Accessibilité', 'Performance'],
      categories: ['frontend'],
      year: 2022,
      featured: false,
      metrics: [{ label: 'Formation', value: 'OpenClassrooms' }],
    },
    {
      id: 'openclassrooms-5',
      title: 'Construire un site de e-commerce en Javascript',
      description:
        "Développement d'un site e-commerce en manipulant une API et le DOM, et mise en place d'un plan de test.",
      imageUrl: 'assets/images/projects/kanap.png',
      tags: ['JavaScript', 'API', 'DOM', 'Tests'],
      categories: ['frontend', 'backend'],
      year: 2022,
      featured: false,
      metrics: [{ label: 'Formation', value: 'OpenClassrooms' }],
    },
    {
      id: 'openclassrooms-6',
      title: "Construire une API sécurisée pour une application d'avis gastronomique",
      description: "Création d'une API REST sécurisée avec NodeJS et MongoDB.",
      imageUrl: 'assets/images/projects/piiquante.png',
      tags: ['NodeJS', 'MongoDB', 'Sécurité', 'API'],
      categories: ['backend', 'frontend'],
      year: 2022,
      featured: false,
      metrics: [{ label: 'Formation', value: 'OpenClassrooms' }],
    },
    {
      id: 'openclassrooms-7',
      title: "Créez un réseau social d'entreprise",
      description: "Développement d'un réseau social interne avec VueJS (CRUD) et Base de données SQL.",
      imageUrl: 'assets/images/projects/groupomania1.png',
      tags: ['VueJS', 'SQL', 'CRUD'],
      categories: ['frontend', 'backend'],
      year: 2022,
      featured: true,
      metrics: [{ label: 'Formation', value: 'OpenClassrooms' }],
    },
  ];

  readonly projectDetails: ProjectDetail[] = [
    {
      id: 'openclassrooms-2',
      title: 'Transformer une maquette en site web avec HTML & CSS',
      subtitle: 'Projet Formation OpenClassrooms',
      description: "Intégration d'une maquette de site responsive en utilisant HTML et CSS.",
      longDescription:
        "Ce projet a consisté à intégrer la maquette du site \"Reservia\" en respectant au maximum le design fourni. Il a fallu s'assurer que le site soit responsive, c'est-à-dire adaptable sur tous les supports (mobile, tablette et desktop), en utilisant les bonnes pratiques HTML5 et CSS3 ainsi que l'approche Mobile-First.",
      imageUrl: 'assets/images/projects/booki.png',
      galleryImages: [],
      tags: ['HTML', 'CSS', 'Responsive'],
      categories: ['frontend'],
      year: 2021,
      duration: '1 mois',
      role: 'Développeur Front-end',
      teamSize: 'Individuel',
      status: 'Terminé',
      metrics: [{ label: 'Technos', value: 'HTML/CSS', icon: 'code' }],
      challenges: [
        { title: 'Intégration', description: "Respect du pixel perfect en partant d'outils de maquettage." },
        { title: 'Responsive', description: "Assurer une apparence propre quel que soit le format d'écran." },
      ],
      solutions: [
        'Écriture de code HTML sémantique pour la structure',
        'Utilisation de CSS Flexbox et des Media Queries pour le positionnement',
      ],
      technologies: [
        { name: 'HTML5', category: 'Frontend', description: 'Langage de balisage structurel' },
        { name: 'CSS3', category: 'Frontend', description: 'Langage de style en cascade' },
      ],
      milestones: [{ date: 'Décembre 2021', title: 'Réalisation', description: 'Création et mise en ligne du projet' }],
      links: { github: 'https://github.com/MathildeJNL/MathildeJeannolle_2_07122021' },
    },
    {
      id: 'openclassrooms-3',
      title: 'Dynamiser une page web avec des animations CSS',
      subtitle: 'Projet Formation OpenClassrooms',
      description:
        "Création d'animations CSS avancées, approche mobile-first et utilisation d'un système de versioning.",
      longDescription:
        "Ce projet consistait à implémenter la version web de \"Ohmyfood\", un site de réservation de restaurants. L'objectif était d'enrichir l'interface avec des animations CSS avancées telles que des spinners de chargement, l'apparition progressive d'éléments et des effets au survol, le tout avec un code maintenable et pré-traité via SASS.",
      imageUrl: 'assets/images/projects/ohmyfood_.png',
      galleryImages: [],
      tags: ['CSS', 'Animations', 'Git', 'Mobile-first'],
      categories: ['frontend'],
      year: 2022,
      duration: '1 mois',
      role: 'Développeur Front-end',
      teamSize: 'Individuel',
      status: 'Terminé',
      metrics: [{ label: 'Technos', value: 'Sass / CSS', icon: 'palette' }],
      challenges: [
        {
          title: 'Animations fluides',
          description: 'Mettre en place des keyframes fluides sans utiliser de Javascript.',
        },
        { title: 'Versioning', description: "S'habituer à historiser le projet avec Git / GitHub." },
      ],
      solutions: [
        'Utilisation du préprocesseur SASS (variables, mixins) pour un CSS optimisé',
        'Réalisation des effets via CSS3 (transform, transition, animation)',
      ],
      technologies: [
        { name: 'CSS / SASS', category: 'Frontend', description: 'Mise en forme et animations' },
        { name: 'Git', category: 'Outils', description: 'Contrôle de version' },
      ],
      milestones: [
        { date: 'Janvier 2022', title: 'Réalisation', description: 'Intégration HTML/SCSS et configuration Git' },
      ],
      links: { github: 'https://github.com/MathildeJNL/MathildeJeannolle_3_08012022' },
    },
    {
      id: 'openclassrooms-4',
      title: 'Optimiser un site web existant',
      subtitle: 'Projet Formation OpenClassrooms',
      description: "Amélioration du SEO, de l'accessibilité et optimisation globale des performances du site.",
      longDescription:
        "Sur la base d'un site existant (\"La Panthère\"), la mission de ce projet était de détecter les points faibles en matière de SEO, d'accessibilité et de performance, de produire un rapport d'audit, puis d'implémenter les correctifs nécessaires pour atteindre de hauts scores sur les outils de mesure.",
      imageUrl: 'assets/images/projects/chouette-agence.png',
      galleryImages: [],
      tags: ['SEO', 'Accessibilité', 'Performance'],
      categories: ['frontend'],
      year: 2022,
      duration: '1 mois',
      role: 'Consultante SEO / Frontend',
      teamSize: 'Individuel',
      status: 'Terminé',
      metrics: [{ label: 'Audit', value: 'Google Lighthouse', icon: 'analytics' }],
      challenges: [
        {
          title: 'Identification des problèmes',
          description: "Réaliser un audit complet avec Lighthouse et Wave pour trouver les axes d'amélioration.",
        },
        { title: 'Poids du site', description: 'Optimiser drastiquement le poids des images.' },
      ],
      solutions: [
        'Compression des images, correction de sémantique W3C et ajout de balises meta (OG, Twitter)',
        "Mise à jour du code et amélioration du contraste couleur pour l'accessibilité",
      ],
      technologies: [
        { name: 'HTML / CSS', category: 'Frontend', description: 'Ajustement structure et style' },
        { name: 'Lighthouse', category: 'Outils', description: 'Analyse SEO, Core Web Vitals' },
      ],
      milestones: [{ date: 'Février 2022', title: 'Réalisation', description: 'Audit et implémentation SEO' }],
      links: { github: 'https://github.com/MathildeJNL/MathildeJeannolle_4_120222' },
    },
    {
      id: 'openclassrooms-5',
      title: 'Construire un site de e-commerce en Javascript',
      subtitle: 'Projet Formation OpenClassrooms',
      description:
        "Développement d'un site e-commerce en manipulant une API et le DOM, et mise en place d'un plan de test.",
      longDescription:
        "Le projet \"Kanap\" demandait la création d'une vitrine e-commerce dynamique en interagissant avec l'API d'un backend au moyen de l'API Fetch. Il fallait générer le DOM de façon dynamique, valider le panier côté client et renvoyer les données pour confirmation de commande.",
      imageUrl: 'assets/images/projects/kanap.png',
      galleryImages: [],
      tags: ['JavaScript', 'API', 'DOM', 'Tests'],
      categories: ['frontend', 'backend'],
      year: 2022,
      duration: '1,5 mois',
      role: 'Développeur Javascript',
      teamSize: 'Individuel',
      status: 'Terminé',
      metrics: [{ label: 'Language', value: 'Vanilla JS', icon: 'javascript' }],
      challenges: [
        { title: 'Appels API', description: 'Consommer une API REST en asynchrone (Promises/Async/Await).' },
        { title: 'Manipulation DOM', description: 'Afficher des listes de produits générées dynamiquement en JS.' },
      ],
      solutions: [
        'Architecture du code modulaire et séparation des responsabilités',
        "Utilisation du LocalStorage pour persister le panier d'achat",
      ],
      technologies: [
        { name: 'JavaScript Vanilla', category: 'Frontend', description: 'Langage de logique client' },
        { name: 'API Fetch', category: 'Réseau', description: 'Requêtes HTTP asynchrones' },
        { name: 'LocalStorage', category: 'Stockage', description: 'Sauvegarde des données client' },
      ],
      milestones: [
        { date: 'Mars 2022', title: 'Réalisation', description: 'Développement complet de la boutique et du panier' },
      ],
      links: { github: 'https://github.com/MathildeJNL/MathildeJeannolle_5_14032022' },
    },
    {
      id: 'openclassrooms-6',
      title: "Construire une API sécurisée pour une application d'avis gastronomique",
      subtitle: 'Projet Formation OpenClassrooms',
      description: "Création d'une API REST sécurisée avec NodeJS et MongoDB.",
      longDescription:
        'Pour le projet "Piiquante", l\'objectif était de concevoir le backend entier d\'une application web d\'avis de sauces pimentées. L\'API devait permettre aux utilisateurs de s\'inscrire, de se connecter, d\'ajouter ou de modifier leurs propres sauces, et de "liker" ou "disliker" les sauces des autres.',
      imageUrl: 'assets/images/projects/piiquante.png',
      galleryImages: [],
      tags: ['NodeJS', 'MongoDB', 'Sécurité', 'API'],
      categories: ['backend', 'frontend'],
      year: 2022,
      duration: '1,5 mois',
      role: 'Développeur Backend',
      teamSize: 'Individuel',
      status: 'Terminé',
      metrics: [
        { label: 'Serveur', value: 'Node/Express', icon: 'dns' },
        { label: 'DB', value: 'NoSQL', icon: 'database' },
      ],
      challenges: [
        {
          title: 'Sécurité',
          description:
            'Mettre en place des pratiques sécurisées (hachage de mot de passe, tokens JWT, protection contre les injections).',
        },
        { title: 'Mongoose', description: 'Modéliser et interagir avec une base NoSQL MongoDB depuis Node.' },
      ],
      solutions: [
        'Implémentation de bcrypt pour le hachage sécurisé des mots de passe',
        'Délivrance et vérification de requêtes via JsonWebToken (JWT)',
        "Structuration d'un CRUD via le framework Express",
      ],
      technologies: [
        { name: 'Node.js', category: 'Backend', description: "Environnement d'exécution serveur" },
        { name: 'Express', category: 'Backend', description: "Framework pour l'API et le routage" },
        { name: 'MongoDB', category: 'Base de données', description: 'Stockage NoSQL des sauces et utilisateurs' },
        { name: 'Mongoose', category: 'Base de données', description: 'ODM pour modéliser les données MongoDB' },
      ],
      milestones: [
        {
          date: 'Juillet 2022',
          title: 'Réalisation',
          description: 'Déploiement du serveur sécurisé avec base connectée',
        },
      ],
      links: { github: 'https://github.com/MathildeJNL/MathildeJeannolle_6_01072022' },
    },
    {
      id: 'openclassrooms-7',
      title: "Créez un réseau social d'entreprise",
      subtitle: 'Projet Formation OpenClassrooms',
      description: "Développement d'un réseau social interne avec VueJS (CRUD) et Base de données SQL.",
      longDescription:
        "Ce projet final \"Groupomania\" englobait le frontend et le backend. L'intitulé demandait de créer un réseau social interne pour les employés d'une entreprise, leur permettant de s'authentifier, publier des articles, interagir et modérer le contenu.",
      imageUrl: 'assets/images/projects/groupomania1.png',
      galleryImages: [],
      tags: ['VueJS', 'SQL', 'CRUD'],
      categories: ['frontend', 'backend'],
      year: 2022,
      duration: '1,5 mois',
      role: 'Développeur Full-Stack',
      teamSize: 'Individuel',
      status: 'Terminé',
      metrics: [{ label: 'Stack', value: 'Vue / SQL', icon: 'layers' }],
      challenges: [
        {
          title: 'Full Stack',
          description: "Gérer de bout en bout l'application: de la base de données à l'intégration frontend.",
        },
        {
          title: 'Structure de données Relationnelle',
          description: 'Gérer les relations de bases de données en SQL pour les auteurs et les publications.',
        },
      ],
      solutions: [
        "Utilisation du framework Vue.js pour créer l'interface utilisateur réactive",
        "Création d'une architecture Node.js / Express couplée à une base MySQL/Sequelize",
      ],
      technologies: [
        { name: 'Vue.js', category: 'Frontend', description: 'Framework JavaScript progressif' },
        { name: 'Node.js/Express', category: 'Backend', description: "API REST d'entreprise" },
        { name: 'MySQL', category: 'Base de données', description: 'SGBD Relationnel' },
      ],
      milestones: [
        { date: 'Juillet 2022', title: 'Réalisation', description: 'Livrable Fullstack du projet Groupomania' },
      ],
      links: { github: 'https://github.com/MathildeJNL/MathildeJeannolle_7_22072022' },
    },
  ];

  // ─────────────────────────── CAREER TIMELINE ───────────────────────────

  readonly timelineFilters: Filter[] = [
    { id: 'all', label: 'Tout', icon: 'timeline' },
    { id: 'job', label: 'Expérience', icon: 'work' },
    { id: 'education', label: 'Formation', icon: 'school' },
  ];

  readonly timelineStats: Stat[] = [
    { icon: 'work', value: '3+', label: "Années d'expérience en alternance", colorClass: 'text-brand-blue' },
    { icon: 'school', value: 'Bac+5', label: "Niveau d'études", colorClass: 'text-brand-green' },
  ];

  readonly timelineEvents: TimelineEvent[] = [
    {
      id: '1',
      type: 'job',
      title: 'Développeuse Web en alternance',
      organization: 'Worldline',
      location: 'Blois, Centre-Val de Loire',
      startDate: '2024-10',
      endDate: null,
      current: true,
      description:
        "Développement d'applications web full-stack dans le cadre d'un Mastère Expert en Ingénierie du Logiciel.",
      highlights: [
        'Développement front-end avec Angular et TypeScript',
        'Développement back-end avec Java et Spring Boot',
        'Travail en équipe avec GitLab et méthodologies agiles',
        'Communication et collaboration en mode projet',
      ],
      technologies: ['Angular', 'TypeScript', 'Bootstrap', 'Java', 'GitLab'],
      icon: 'work',
      colorClass: 'text-brand-blue',
      bgClass: 'bg-brand-blue/20',
      linkedTo: '2',
    },
    {
      id: '2',
      type: 'education',
      title: 'Mastère Expert en Ingénierie du Logiciel',
      organization: 'ISCOD',
      location: 'France',
      startDate: '2024-10',
      endDate: '2026-09',
      current: true,
      description:
        "Formation en alternance couvrant l'architecture logicielle, le développement full-stack, DevOps et la gestion de projet.",
      highlights: [
        'Architecture logicielle et conception UML',
        'Développement Java/Spring Boot et Angular/TypeScript',
        'DevOps avec Docker, Kubernetes et déploiement continu',
        "Management d'équipes et méthodes agiles Scrum",
      ],
      icon: 'school',
      colorClass: 'text-brand-green',
      bgClass: 'bg-brand-green/20',
      linkedTo: '1',
    },
    {
      id: '3',
      type: 'job',
      title: 'Apprentie Ingénieur SRE',
      organization: 'Worldline',
      location: 'Blois, Centre-Val de Loire',
      startDate: '2023-09',
      endDate: '2024-09',
      current: false,
      description: 'Mission SRE (Site Reliability Engineering) avec automatisation et monitoring des systèmes.',
      highlights: [
        'Automatisation avec Python et Bash',
        'Documentation technique avec Confluence',
        "Développement d'outils internes avec Angular",
        'Collaboration avec les équipes de développement',
      ],
      technologies: ['Python', 'Bash', 'Confluence', 'Angular'],
      icon: 'work',
      colorClass: 'text-brand-blue',
      bgClass: 'bg-brand-blue/20',
      linkedTo: '4',
    },
    {
      id: '4',
      type: 'education',
      title: "Bachelor Concepteur Développeur d'Applications",
      organization: 'CESI',
      location: 'Orléans, Centre-Val de Loire',
      startDate: '2023-09',
      endDate: '2024-09',
      current: false,
      description: "Formation intensive d'un an en développement logiciel, de la conception au déploiement.",
      highlights: [
        'Programmation orientée objet avec Java',
        'Modélisation UML et architecture logicielle',
        'Tests et sécurité des applications',
        'Déploiement continu et pratiques DevOps',
      ],
      icon: 'school',
      colorClass: 'text-brand-green',
      bgClass: 'bg-brand-green/20',
      linkedTo: '3',
    },
    {
      id: '5',
      type: 'education',
      title: 'Formation Développeur Java',
      organization: 'Wild Code School',
      location: 'France',
      startDate: '2023-05',
      endDate: '2023-07',
      current: false,
      description: 'Formation intensive de 3 mois au métier de développeur Java full-stack.',
      highlights: [
        'Front-end : HTML/CSS, JavaScript, Angular',
        'Back-end : Java, Spring, SQL, API REST',
        'Versioning avec Git et GitHub',
        'Méthodes agiles et Scrum',
      ],
      technologies: ['Java', 'Spring', 'Angular', 'JavaScript', 'SQL'],
      icon: 'school',
      colorClass: 'text-brand-green',
      bgClass: 'bg-brand-green/20',
    },
    {
      id: '6',
      type: 'education',
      title: 'Développeur Web - Titre RNCP Niveau 5',
      organization: 'OpenClassrooms',
      location: 'France',
      startDate: '2021-11',
      endDate: '2022-08',
      current: false,
      description: 'Formation diplômante en développement web (équivalent Bac+2).',
      highlights: [
        'Développement front-end et back-end',
        'Création de sites web dynamiques',
        'Obtention du titre RNCP',
      ],
      icon: 'school',
      colorClass: 'text-brand-green',
      bgClass: 'bg-brand-green/20',
    },
    {
      id: '7',
      type: 'job',
      title: 'Apprentie Préparatrice en Pharmacie',
      organization: 'Pharmacie Lefèvre',
      location: 'Olivet, Centre-Val de Loire',
      startDate: '2018-09',
      endDate: '2021-08',
      current: false,
      description: 'Préparation et délivrance de médicaments, conseil aux patients pendant 3 ans en alternance.',
      highlights: [
        'Délivrance de médicaments et conseils patients',
        'Gestion des stocks et commandes',
        'Obtention du Brevet Professionnel',
      ],
      icon: 'work',
      colorClass: 'text-brand-blue',
      bgClass: 'bg-brand-blue/20',
      linkedTo: '8',
    },
    {
      id: '8',
      type: 'education',
      title: 'Brevet Professionnel Préparateur en Pharmacie',
      organization: "CFA Pharmacie d'Orléans",
      location: 'Orléans, France',
      startDate: '2018-09',
      endDate: '2021-08',
      current: false,
      description: 'Formation en alternance de 3 ans en préparation pharmaceutique.',
      highlights: ['Formation théorique et pratique', 'Diplôme obtenu avec succès'],
      icon: 'school',
      colorClass: 'text-brand-green',
      bgClass: 'bg-brand-green/20',
      linkedTo: '7',
    },
    {
      id: '9',
      type: 'job',
      title: 'Apprentie Réceptionniste',
      organization: 'Hôtel Ibis Styles Mulsanne',
      location: 'Mulsanne, Pays de la Loire',
      startDate: '2017-09',
      endDate: '2018-08',
      current: false,
      description: 'Accueil des clients et gestion des réservations en hôtellerie pendant 1 an.',
      highlights: ['Accueil et relation client', 'Gestion des réservations', 'Obtention de la Mention Complémentaire'],
      icon: 'work',
      colorClass: 'text-brand-blue',
      bgClass: 'bg-brand-blue/20',
      linkedTo: '10',
    },
    {
      id: '10',
      type: 'education',
      title: 'MC Accueil et Réception',
      organization: 'CFA de Tours',
      location: 'Tours, France',
      startDate: '2017-09',
      endDate: '2018-08',
      current: false,
      description: 'Mention Complémentaire en accueil et réception hôtelière.',
      highlights: ['Formation en alternance', 'Diplôme obtenu avec succès'],
      icon: 'school',
      colorClass: 'text-brand-green',
      bgClass: 'bg-brand-green/20',
      linkedTo: '9',
    },
    {
      id: '11',
      type: 'education',
      title: 'Bac Pro Commercialisation et Service en Restauration',
      organization: "Lycée des Métiers de l'Hôtellerie et du Tourisme du Val de Loire",
      location: 'Blois, Centre-Val de Loire',
      startDate: '2014-09',
      endDate: '2017-06',
      current: false,
      description: 'Formation en commercialisation et service en restauration.',
      highlights: ['Service en salle et relation client', 'Diplôme obtenu avec succès'],
      icon: 'school',
      colorClass: 'text-brand-green',
      bgClass: 'bg-brand-green/20',
    },
  ];

  // ─────────────────────────── CONTACT ───────────────────────────

  readonly contactMethods: ContactMethod[] = [
    {
      icon: 'mail',
      title: 'Email',
      value: 'mathilde.dev.web@gmail.com',
      link: 'mailto:mathilde.dev.web@gmail.com',
      colorClass: 'text-brand-blue',
      bgClass: 'bg-brand-blue/20',
    },
    {
      icon: 'location_on',
      title: 'Localisation',
      value: 'Centre-Val de Loire, France',
      colorClass: 'text-brand-pink',
      bgClass: 'bg-brand-pink/20',
    },
    {
      icon: 'people',
      title: 'Mode de collaboration',
      value: 'Remote ou Hybride',
      colorClass: 'text-brand-green',
      bgClass: 'bg-brand-green/20',
    },
  ];

  readonly contactSocialLinks: SocialLink[] = [
    {
      icon: 'github',
      name: 'GitHub',
      url: 'https://github.com/MathildeJNL',
      colorClass: 'hover:bg-slate-900 hover:text-white hover:border-slate-900 dark:hover:bg-brand-text dark:hover:text-brand-bg dark:hover:border-brand-text',
    },
    {
      icon: 'linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mathilde-jnl/',
      colorClass: 'hover:bg-brand-blue hover:text-white hover:border-brand-blue dark:text-white',
    },
  ];

  readonly faqItems: FaqItem[] = [
    {
      question: 'Comment continuez-vous à apprendre ?',
      answer:
        "Je me forme en continu grâce à des projets personnels, des ressources en ligne (documentation, cours, articles techniques) et des challenges pour renforcer mes bases. L'apprentissage fait partie intégrante de ma pratique quotidienne.",
      isOpen: false,
    },
    {
      question: 'Pouvez-vous travailler en remote ou en hybride ?',
      answer:
        "Oui, je suis tout à fait à l'aise en remote. Je peux également travailler en hybride selon la localisation et l'organisation de l'équipe.",
      isOpen: false,
    }
  ];

  readonly subjectOptions = [
    'Opportunité professionnelle',
    'Projet freelance',
    'Collaboration',
    'Question technique',
    'Autre',
  ];

  // ─────────────────────────── NAVBAR ───────────────────────────

  readonly navItems = [
    { label: 'Accueil', path: '/' },
    {
      label: 'Compétences',
      path: '/skills',
      children: [
        { label: 'Frontend', path: '/skills/frontend', icon: 'web' },
        { label: 'Backend & APIs', path: '/skills/backend', icon: 'database' },
        { label: 'Bases de données', path: '/skills/databases', icon: 'storage' },
        { label: 'Outils & Workflow', path: '/skills/tools', icon: 'build' },
        { label: 'Design & Intégration', path: '/skills/design', icon: 'palette' },
        { label: 'Soft Skills', path: '/skills/soft-skills', icon: 'psychology' },
      ],
    },
    {
      label: 'Projets',
      path: '/projects',
      children: [
        { label: 'Backend', path: '/projects?category=backend', icon: 'database' },
        { label: 'Frontend', path: '/projects?category=frontend', icon: 'web' },
      ],
    },
    { label: 'Parcours', path: '/timeline' },
  ];

  readonly footerSocialLinks = [
    { name: 'GitHub', url: 'https://github.com/MathildeJNL', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mathilde-jnl/', icon: 'linkedin' },
  ];

  // ─────────────────────────── HELPERS ───────────────────────────

  getSkillCategoryById(id: string): SkillCategory | undefined {
    return this.skillCategories.find((c) => c.id === id);
  }

  getProjectDetailById(id: string): ProjectDetail | undefined {
    return this.projectDetails.find((p) => p.id === id);
  }

  getLevelLabel(level: number): string {
    if (level >= 85) return 'Avancé';
    if (level >= 70) return 'Confirmé';
    if (level >= 50) return 'Intermédiaire';
    if (level >= 30) return 'Bases acquises';
    return 'Notions';
  }

  formatDateRange(event: TimelineEvent): string {
    const start = this.formatDate(event.startDate);
    if (event.current) return `${start} - Présent`;
    if (event.endDate && event.startDate === event.endDate) return start;
    return `${start} - ${this.formatDate(event.endDate!)}`;
  }

  private formatDate(dateStr: string): string {
    const [year, month] = dateStr.split('-');
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
    return `${months[parseInt(month) - 1]} ${year}`;
  }

  getTypeLabel(type: string): string {
    const labels: Record<string, string> = { job: 'Expérience', education: 'Formation' };
    return labels[type] || type;
  }

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'production':
        return 'bg-brand-green/20 text-brand-green';
      case 'development':
        return 'bg-brand-blue/20 text-brand-blue';
      case 'archived':
        return 'bg-brand-border text-brand-muted';
      default:
        return 'bg-brand-muted/20 text-brand-muted';
    }
  }
}
