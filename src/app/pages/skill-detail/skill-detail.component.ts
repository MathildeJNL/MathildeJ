import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';

interface Skill {
  name: string;
  level: number;
  experience: string;
  description?: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
}

interface Resource {
  title: string;
  type: string;
  url: string;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  longDescription: string;
  level: number;
  yearsExperience: number;
  colorClass: string;
  bgClass: string;
  gradientClass: string;
  skills: Skill[];
  keyStrengths: string[];
  tools: string[];
  relatedProjects: Project[];
  resources: Resource[];
}

@Component({
  selector: 'app-skill-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.scss']
})
export class SkillDetailComponent implements OnInit {
  skillId: string = '';
  skill: SkillCategory | null = null;

  // All skill data
  private skillsData: SkillCategory[] = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: 'web',
      description: 'HTML5/CSS3, JavaScript, Angular, TypeScript, Vue.js',
      longDescription: 'Ma compétence principale, construite depuis la formation OpenClassrooms et renforcée chez Worldline. Je crée des interfaces modernes, réactives et accessibles, en prenant soin du rendu sur tous les supports (mobile-first, responsive).',
      level: 82,
      yearsExperience: 4,
      colorClass: 'text-purple-500',
      bgClass: 'bg-purple-100 dark:bg-purple-500/20',
      gradientClass: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'HTML5 / CSS3', level: 90, experience: '4 ans', description: 'Intégration de maquettes, animations, mobile-first' },
        { name: 'JavaScript', level: 80, experience: '3 ans', description: 'Manipulation du DOM, fetch API, programmation orientée objet' },
        { name: 'Angular', level: 75, experience: '2 ans', description: 'Components, services, routing, RxJS — utilisé chez Worldline et dans ce portfolio' },
        { name: 'TypeScript', level: 72, experience: '2 ans', description: 'Typage statique, interfaces, generics — utilisé avec Angular' },
        { name: 'Vue.js', level: 65, experience: '1 an', description: 'Composition API, CRUD, réseau social (projet OpenClassrooms)' }
      ],
      keyStrengths: ['Responsive Design', 'Intégration de maquettes', 'Accessibilité', 'Mobile-first'],
      tools: ['VS Code', 'npm', 'Angular CLI', 'Git', 'Chrome DevTools'],
      relatedProjects: [
        { id: 'openclassrooms-2', title: 'Booki - Maquette HTML/CSS', description: 'Intégration responsive depuis une maquette Figma' },
        { id: 'openclassrooms-3', title: 'Ohmyfood - Animations CSS', description: 'Animations avancées et approche mobile-first' },
        { id: 'openclassrooms-7', title: 'Groupomania - Réseau social', description: 'Interface Vue.js avec CRUD complet' }
      ],
      resources: [
        { title: 'MDN Web Docs', type: 'Documentation', url: 'https://developer.mozilla.org' },
        { title: 'Angular Documentation', type: 'Documentation', url: 'https://angular.dev' }
      ]
    },
    {
      id: 'backend',
      name: 'Backend & APIs',
      icon: 'database',
      description: 'Java, Spring Boot, Node.js, Express, REST API',
      longDescription: 'Compétences backend acquises durant la formation OpenClassrooms (Node.js/Express) et approfondies à Wild Code School et chez Worldline (Java/Spring Boot). Je suis à l\'aise pour créer des APIs REST sécurisées et des applications serveur.',
      level: 68,
      yearsExperience: 2,
      colorClass: 'text-blue-500',
      bgClass: 'bg-blue-100 dark:bg-blue-500/20',
      gradientClass: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Node.js / Express', level: 72, experience: '2 ans', description: 'API REST, middleware, gestion des routes et authentification JWT' },
        { name: 'Java / Spring Boot', level: 65, experience: '2 ans', description: 'Formation Wild Code School + apprentissage chez Worldline (Mastère)' },
        { name: 'REST API', level: 72, experience: '2 ans', description: 'Conception et consommation d\'APIs RESTful, gestion des erreurs HTTP' },
        { name: 'Python', level: 60, experience: '1 an', description: 'Scripts d\'automatisation lors de la mission SRE chez Worldline' }
      ],
      keyStrengths: ['Architecture REST', 'Sécurité des APIs', 'Authentification JWT', 'Gestion des erreurs'],
      tools: ['Postman', 'npm', 'Maven', 'IntelliJ IDEA', 'VS Code'],
      relatedProjects: [
        { id: 'openclassrooms-6', title: 'Piiquante - API sécurisée', description: 'API REST Node.js/Express avec authentification et upload de fichiers' },
        { id: 'openclassrooms-5', title: 'Kanap - E-commerce JS', description: 'Consommation d\'une API REST avec vanilla JavaScript' }
      ],
      resources: [
        { title: 'Node.js Documentation', type: 'Documentation', url: 'https://nodejs.org/docs' },
        { title: 'Spring Boot Guides', type: 'Documentation', url: 'https://spring.io/guides' }
      ]
    },
    {
      id: 'databases',
      name: 'Bases de données',
      icon: 'storage',
      description: 'SQL, MySQL, MongoDB',
      longDescription: 'Apprentissage des bases de données relationnelles (SQL/MySQL) et NoSQL (MongoDB) à travers les projets OpenClassrooms et la formation Wild Code School. Je sais concevoir des schémas simples et réaliser des requêtes CRUD.',
      level: 65,
      yearsExperience: 2,
      colorClass: 'text-amber-500',
      bgClass: 'bg-amber-100 dark:bg-amber-500/20',
      gradientClass: 'from-amber-500 to-orange-500',
      skills: [
        { name: 'SQL / MySQL', level: 70, experience: '2 ans', description: 'Requêtes CRUD, jointures, conception de schémas (projet Groupomania)' },
        { name: 'MongoDB', level: 65, experience: '2 ans', description: 'Base NoSQL, schémas dynamiques, utilisé avec Node.js (projet Piiquante)' }
      ],
      keyStrengths: ['Modélisation des données', 'Requêtes CRUD', 'Intégration avec API REST', 'NoSQL vs SQL'],
      tools: ['MySQL Workbench', 'MongoDB Compass', 'TablePlus'],
      relatedProjects: [
        { id: 'openclassrooms-6', title: 'Piiquante - API + MongoDB', description: 'Stockage des produits et images avec MongoDB' },
        { id: 'openclassrooms-7', title: 'Groupomania - Réseau social SQL', description: 'Base de données relationnelle pour le réseau social' }
      ],
      resources: [
        { title: 'MongoDB Documentation', type: 'Documentation', url: 'https://www.mongodb.com/docs' },
        { title: 'SQL Tutorial - W3Schools', type: 'Tutoriel', url: 'https://www.w3schools.com/sql' }
      ]
    },
    {
      id: 'tools',
      name: 'Outils & Workflow',
      icon: 'build',
      description: 'Git, GitLab, Méthodes Agiles, Docker, Bash',
      longDescription: 'Habituée à travailler en équipe avec Git/GitLab dans un contexte professionnel chez Worldline. J\'utilise les méthodes Agiles/Scrum au quotidien et j\'automatise des tâches via Bash. Docker est en cours d\'apprentissage dans le cadre du Mastère.',
      level: 75,
      yearsExperience: 3,
      colorClass: 'text-green-500',
      bgClass: 'bg-green-100 dark:bg-green-500/20',
      gradientClass: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Git / GitHub / GitLab', level: 85, experience: '4 ans', description: 'Versionning, branches, merge requests, code review — utilisé depuis OpenClassrooms jusqu\'à Worldline' },
        { name: 'Méthodes Agiles / Scrum', level: 78, experience: '3 ans', description: 'Sprints, daily stand-up, rétrospectives — pratique quotidienne chez Worldline' },
        { name: 'Docker', level: 60, experience: '1 an', description: 'Conteneurisation d\'applications, en cours d\'approfondissement dans le Mastère' },
        { name: 'Bash / Linux', level: 60, experience: '1 an', description: 'Scripts d\'automatisation lors de la mission SRE chez Worldline' }
      ],
      keyStrengths: ['Collaboration en équipe', 'Versioning propre', 'Automatisation', 'Méthodes Agiles'],
      tools: ['Git', 'GitLab', 'GitHub', 'Jira', 'Confluence'],
      relatedProjects: [
        { id: 'openclassrooms-3', title: 'Ohmyfood - Versioning Git', description: 'Premiers commits et branches avec Git' },
        { id: 'openclassrooms-7', title: 'Groupomania - Projet complet', description: 'Gestion de version et documentation du projet' }
      ],
      resources: [
        { title: 'Git Documentation', type: 'Documentation', url: 'https://git-scm.com/doc' },
        { title: 'Docker Get Started', type: 'Documentation', url: 'https://docs.docker.com/get-started' }
      ]
    },
    {
      id: 'design',
      name: 'Design & Intégration',
      icon: 'palette',
      description: 'Responsive Design, Bootstrap, Tailwind CSS, SEO',
      longDescription: 'Sensible à l\'expérience utilisateur et au rendu visuel, je soigne l\'intégration des maquettes et le responsive de mes interfaces. J\'ai optimisé le SEO et l\'accessibilité d\'un site réel lors de la formation OpenClassrooms.',
      level: 78,
      yearsExperience: 4,
      colorClass: 'text-pink-500',
      bgClass: 'bg-pink-100 dark:bg-pink-500/20',
      gradientClass: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Responsive Design', level: 85, experience: '4 ans', description: 'Media queries, flexbox, grid, approche mobile-first' },
        { name: 'Tailwind CSS', level: 78, experience: '1 an', description: 'Utility-first CSS — utilisé dans ce portfolio Angular' },
        { name: 'Bootstrap', level: 75, experience: '2 ans', description: 'Composants UI, grille responsive — utilisé chez Worldline' },
        { name: 'SEO & Accessibilité', level: 70, experience: '2 ans', description: 'Balises sémantiques, ARIA, optimisation des performances (Lighthouse)' }
      ],
      keyStrengths: ['Intégration pixel-perfect', 'Mobile-first', 'Accessibilité WCAG', 'Performance web'],
      tools: ['Figma', 'Lighthouse', 'Chrome DevTools', 'WAVE (accessibilité)'],
      relatedProjects: [
        { id: 'openclassrooms-2', title: 'Booki - Intégration maquette', description: 'Reproduction fidèle d\'une maquette Figma en HTML/CSS' },
        { id: 'openclassrooms-4', title: 'Chouette Agence - SEO', description: 'Audit et optimisation SEO, accessibilité et performances' }
      ],
      resources: [
        { title: 'Tailwind CSS Docs', type: 'Documentation', url: 'https://tailwindcss.com/docs' },
        { title: 'Google Lighthouse', type: 'Outil', url: 'https://developer.chrome.com/docs/lighthouse' }
      ]
    },
    {
      id: 'soft-skills',
      name: 'Soft Skills',
      icon: 'psychology',
      description: 'Communication, empathie, travail en équipe, adaptabilité',
      longDescription: 'Des compétences humaines solides, construites tout au long de parcours atypiques : 3 ans d\'alternance en pharmacie (relation patient, conseil, rigueur), 1 an à la réception hôtelière, puis une reconversion complète vers le développement web. Ces expériences ont forgé une vraie capacité à communiquer, écouter et s\'adapter à des environnements très différents.',
      level: 90,
      yearsExperience: 7,
      colorClass: 'text-teal-500',
      bgClass: 'bg-teal-100 dark:bg-teal-500/20',
      gradientClass: 'from-teal-500 to-cyan-500',
      skills: [
        { name: 'Communication', level: 92, experience: '6 ans', description: 'Relation client en hôtellerie, conseil patient en pharmacie, communication projet chez Worldline' },
        { name: 'Travail en équipe', level: 90, experience: '5 ans', description: 'Collaboration quotidienne chez Worldline (code review, pair programming)' },
        { name: 'Empathie & écoute', level: 95, experience: '6 ans', description: 'Développée au contact des patients et clients : comprendre les besoins, rassurer, conseiller' },
        { name: 'Adaptabilité', level: 90, experience: '7 ans', description: 'Reconversion professionnelle, passage de l\'hôtellerie à la pharmacie puis au développement web' },
        { name: 'Autonomie', level: 85, experience: '3 ans', description: 'Gestion de projets en solo (formation OpenClassrooms) et missions techniques chez Worldline' },
        { name: 'Rigueur', level: 85, experience: '5 ans', description: 'Exigée dans la préparation de médicaments, retrouvée dans la qualité du code et les tests' }
      ],
      keyStrengths: ['Relation humaine', 'Écoute active', 'Gestion du stress', 'Pédagogie'],
      tools: ['Confluence', 'Slack', 'Microsoft Teams'],
      relatedProjects: [
        { id: 'openclassrooms-7', title: 'Groupomania - Réseau social', description: 'Projet de bout en bout géré en autonomie' },
        { id: 'openclassrooms-4', title: 'Chouette Agence - SEO', description: 'Audit, recommandations et rédaction de rapport' }
      ],
      resources: [
        { title: 'Soft Skills, vous avez dit : soft skills', type: 'Page web', url: 'https://www.cmvrh.developpement-durable.gouv.fr/soft-skills-vous-avez-dit-soft-skills-a4390.html' }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.skillId = params.get('id') || '';
      this.skill = this.skillsData.find(s => s.id === this.skillId) || null;
    });
  }

  getLevelLabel(level: number): string {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Avancé';
    if (level >= 50) return 'Intermédiaire';
    return 'Débutant';
  }
}
