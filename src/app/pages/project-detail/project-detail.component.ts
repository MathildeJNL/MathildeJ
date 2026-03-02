import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';

interface ProjectMetric {
  label: string;
  value: string;
  icon: string;
}

interface Challenge {
  title: string;
  description: string;
}

interface Technology {
  name: string;
  category: string;
  description: string;
}

interface Milestone {
  date: string;
  title: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  galleryImages: string[];
  tags: string[];
  category: string;
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
  links: {
    github?: string;
    live?: string;
    documentation?: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  projectId: string = '';
  project: Project | null = null;
  activeTab = 'overview';

  tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: 'visibility' },
    { id: 'technical', label: 'Technique', icon: 'code' },
    { id: 'timeline', label: 'Timeline', icon: 'schedule' }
  ];

  private projectsData: Project[] = [
    {
      id: 'openclassrooms-2',
      title: 'Transformer une maquette en site web avec HTML & CSS',
      subtitle: 'Projet Formation OpenClassrooms',
      description: 'Intégration d\'une maquette de site responsive en utilisant HTML et CSS.',
      longDescription: 'Ce projet a consisté à intégrer la maquette du site "Reservia" en respectant au maximum le design fourni. Il a fallu s\'assurer que le site soit responsive, c\'est-à-dire adaptable sur tous les supports (mobile, tablette et desktop), en utilisant les bonnes pratiques HTML5 et CSS3 ainsi que l\'approche Mobile-First.',
      imageUrl: 'assets/images/projects/booki.png',
      galleryImages: [],
      tags: ['HTML', 'CSS', 'Responsive'],
      category: 'frontend',
      year: 2021,
      duration: '1 mois',
      role: 'Développeur Front-end',
      teamSize: 'Individuel',
      status: 'Terminé',
      metrics: [
        { label: 'Technos', value: 'HTML/CSS', icon: 'code' }
      ],
      challenges: [
        {
          title: 'Intégration',
          description: 'Respect du pixel perfect en partant d\'outils de maquettage.'
        },
        {
          title: 'Responsive',
          description: 'Assurer une apparence propre quel que soit le format d\'écran.'
        }
      ],
      solutions: [
        'Écriture de code HTML sémantique pour la structure',
        'Utilisation de CSS Flexbox et des Media Queries pour le positionnement'
      ],
      technologies: [
        { name: 'HTML5', category: 'Frontend', description: 'Langage de balisage structurel' },
        { name: 'CSS3', category: 'Frontend', description: 'Langage de style en cascade' }
      ],
      milestones: [
        { date: 'Décembre 2021', title: 'Réalisation', description: 'Création et mise en ligne du projet' }
      ],
      links: {
        github: 'https://github.com/MathildeJNL/MathildeJeannolle_2_07122021'
      }
    },
    {
      id: 'openclassrooms-3',
      title: 'Dynamiser une page web avec des animations CSS',
      subtitle: 'Projet Formation OpenClassrooms',
      description: 'Création d\'animations CSS avancées, approche mobile-first et utilisation d\'un système de versioning.',
      longDescription: 'Ce projet consistait à implémenter la version web de "Ohmyfood", un site de réservation de restaurants. L\'objectif était d\'enrichir l\'interface avec des animations CSS avancées telles que des spinners de chargement, l\'apparition progressive d\'éléments et des effets au survol, le tout avec un code maintenable et pré-traité via SASS.',
      imageUrl: 'assets/images/projects/ohmyfood_.png',
      galleryImages: [],
      tags: ['CSS', 'Animations', 'Git', 'Mobile-first'],
      category: 'frontend',
      year: 2022,
      duration: '1 mois',
      role: 'Développeur Front-end',
      teamSize: 'Individuel',
      status: 'Terminé',
      metrics: [
        { label: 'Technos', value: 'Sass / CSS', icon: 'palette' }
      ],
      challenges: [
        {
          title: 'Animations fluides',
          description: 'Mettre en place des keyframes fluides sans utiliser de Javascript.'
        },
        {
          title: 'Versioning',
          description: 'S\'habituer à historiser le projet avec Git / GitHub.'
        }
      ],
      solutions: [
        'Utilisation du préprocesseur SASS (variables, mixins) pour un CSS optimisé',
        'Réalisation des effets via CSS3 (transform, transition, animation)'
      ],
      technologies: [
        { name: 'CSS / SASS', category: 'Frontend', description: 'Mise en forme et animations' },
        { name: 'Git', category: 'Outils', description: 'Contrôle de version' }
      ],
      milestones: [
        { date: 'Janvier 2022', title: 'Réalisation', description: 'Intégration HTML/SCSS et configuration Git' }
      ],
      links: {
        github: 'https://github.com/MathildeJNL/MathildeJeannolle_3_08012022'
      }
    },
    {
      id: 'openclassrooms-4',
      title: 'Optimiser un site web existant',
      subtitle: 'Projet Formation OpenClassrooms',
      description: 'Amélioration du SEO, de l\'accessibilité et optimisation globale des performances du site.',
      longDescription: 'Sur la base d\'un site existant ("La Panthère"), la mission de ce projet était de détecter les points faibles en matière de SEO, d\'accessibilité et de performance, de produire un rapport d\'audit, puis d\'implémenter les correctifs nécessaires pour atteindre de hauts scores sur les outils de mesure.',
      imageUrl: 'assets/images/projects/chouette-agence.png',
      galleryImages: [],
      tags: ['SEO', 'Accessibilité', 'Performance'],
      category: 'frontend',
      year: 2022,
      duration: '1 mois',
      role: 'Consultante SEO / Frontend',
      teamSize: 'Individuel',
      status: 'Terminé',
      metrics: [
        { label: 'Audit', value: 'Google Lighthouse', icon: 'analytics' }
      ],
      challenges: [
        {
          title: 'Identification des problèmes',
          description: 'Réaliser un audit complet avec Lighthouse et Wave pour trouver les axes d\'amélioration.'
        },
        {
          title: 'Poids du site',
          description: 'Optimiser drastiquement le poids des images.'
        }
      ],
      solutions: [
        'Compression des images, correction de sémantique W3C et ajout de balises meta (OG, Twitter)',
        'Mise à jour du code et amélioration du contraste couleur pour l\'accessibilité'
      ],
      technologies: [
        { name: 'HTML / CSS', category: 'Frontend', description: 'Ajustement structure et style' },
        { name: 'Lighthouse', category: 'Outils', description: 'Analyse SEO, Core Web Vitals' }
      ],
      milestones: [
        { date: 'Février 2022', title: 'Réalisation', description: 'Audit et implémentation SEO' }
      ],
      links: {
        github: 'https://github.com/MathildeJNL/MathildeJeannolle_4_120222'
      }
    },
    {
      id: 'openclassrooms-5',
      title: 'Construire un site de e-commerce en Javascript',
      subtitle: 'Projet Formation OpenClassrooms',
      description: 'Développement d\'un site e-commerce en manipulant une API et le DOM, et mise en place d\'un plan de test.',
      longDescription: 'Le projet "Kanap" demandait la création d\'une vitrine e-commerce dynamique en interagissant avec l\'API d\'un backend au moyen de l\'API Fetch. Il fallait générer le DOM de façon dynamique, valider le panier côté client et renvoyer les données pour confirmation de commande.',
      imageUrl: 'assets/images/projects/kanap.png',
      galleryImages: [],
      tags: ['JavaScript', 'API', 'DOM', 'Tests'],
      category: 'frontend',
      year: 2022,
      duration: '1,5 mois',
      role: 'Développeur Javascript',
      teamSize: 'Individuel',
      status: 'Terminé',
      metrics: [
        { label: 'Language', value: 'Vanilla JS', icon: 'javascript' }
      ],
      challenges: [
        {
          title: 'Appels API',
          description: 'Consommer une API REST en asynchrone (Promises/Async/Await).'
        },
        {
          title: 'Manipulation DOM',
          description: 'Afficher des listes de produits générées dynamiquement en JS.'
        }
      ],
      solutions: [
        'Architecture du code modulaire et séparation des responsabilités',
        'Utilisation du LocalStorage pour persister le panier d\'achat'
      ],
      technologies: [
        { name: 'JavaScript Vanilla', category: 'Frontend', description: 'Langage de logique client' },
        { name: 'API Fetch', category: 'Réseau', description: 'Requêtes HTTP asynchrones' },
        { name: 'LocalStorage', category: 'Stockage', description: 'Sauvegarde des données client' }
      ],
      milestones: [
        { date: 'Mars 2022', title: 'Réalisation', description: 'Développement complet de la boutique et du panier' }
      ],
      links: {
        github: 'https://github.com/MathildeJNL/MathildeJeannolle_5_14032022'
      }
    },
    {
      id: 'openclassrooms-6',
      title: 'Construire une API sécurisée pour une application d\'avis gastronomique',
      subtitle: 'Projet Formation OpenClassrooms',
      description: 'Création d\'une API REST sécurisée avec NodeJS et MongoDB.',
      longDescription: 'Pour le projet "Piiquante", l\'objectif était de concevoir le backend entier d\'une application web d\'avis de sauces pimentées. L\'API devait permettre aux utilisateurs de s\'inscrire, de se connecter, d\'ajouter ou de modifier leurs propres sauces, et de "liker" ou "disliker" les sauces des autres.',
      imageUrl: 'assets/images/projects/piiquante.png',
      galleryImages: [],
      tags: ['NodeJS', 'MongoDB', 'Sécurité', 'API'],
      category: 'backend',
      year: 2022,
      duration: '1,5 mois',
      role: 'Développeur Backend',
      teamSize: 'Individuel',
      status: 'Terminé',
      metrics: [
        { label: 'Serveur', value: 'Node/Express', icon: 'dns' },
        { label: 'DB', value: 'NoSQL', icon: 'database' }
      ],
      challenges: [
        {
          title: 'Sécurité',
          description: 'Mettre en place des pratiques sécurisées (hachage de mot de passe, tokens JWT, protection contre les injections).'
        },
        {
          title: 'Mongoose',
          description: 'Modéliser et interagir avec une base NoSQL MongoDB depuis Node.'
        }
      ],
      solutions: [
        'Implémentation de bcrypt pour le hachage sécurisé des mots de passe',
        'Délivrance et vérification de requêtes via JsonWebToken (JWT)',
        'Structuration d\'un CRUD via le framework Express'
      ],
      technologies: [
        { name: 'Node.js', category: 'Backend', description: 'Environnement d\'exécution serveur' },
        { name: 'Express', category: 'Backend', description: 'Framework pour l\'API et le routage' },
        { name: 'MongoDB', category: 'Base de données', description: 'Stockage NoSQL des sauces et utilisateurs' },
        { name: 'Mongoose', category: 'Base de données', description: 'ODM pour modéliser les données MongoDB' }
      ],
      milestones: [
        { date: 'Juillet 2022', title: 'Réalisation', description: 'Déploiement du serveur sécurisé avec base connectée' }
      ],
      links: {
        github: 'https://github.com/MathildeJNL/MathildeJeannolle_6_01072022'
      }
    },
    {
      id: 'openclassrooms-7',
      title: 'Créez un réseau social d\'entreprise',
      subtitle: 'Projet Formation OpenClassrooms',
      description: 'Développement d\'un réseau social interne avec VueJS (CRUD) et Base de données SQL.',
      longDescription: 'Ce projet final "Groupomania" englobait le frontend et le backend. L\'intitulé demandait de créer un réseau social interne pour les employés d\'une entreprise, leur permettant de s\'authentifier, publier des articles, interagir et modérer le contenu.',
      imageUrl: 'assets/images/projects/groupomania.png',
      galleryImages: [],
      tags: ['VueJS', 'SQL', 'CRUD'],
      category: 'frontend',
      year: 2022,
      duration: '1,5 mois',
      role: 'Développeur Full-Stack',
      teamSize: 'Individuel',
      status: 'Terminé',
      metrics: [
        { label: 'Stack', value: 'Vue / SQL', icon: 'layers' }
      ],
      challenges: [
        {
          title: 'Full Stack',
          description: 'Gérer de bout en bout l\'application: de la base de données à l\'intégration frontend.'
        },
        {
          title: 'Structure de données Relationnelle',
          description: 'Gérer les relations de bases de données en SQL pour les auteurs et les publications.'
        }
      ],
      solutions: [
        'Utilisation du framework Vue.js pour créer l\'interface utilisateur réactive',
        'Création d\'une architecture Node.js / Express couplée à une base MySQL/Sequelize'
      ],
      technologies: [
        { name: 'Vue.js', category: 'Frontend', description: 'Framework JavaScript progressif' },
        { name: 'Node.js/Express', category: 'Backend', description: 'API REST d\'entreprise' },
        { name: 'MySQL', category: 'Base de données', description: 'SGBD Relationnel' }
      ],
      milestones: [
        { date: 'Juillet 2022', title: 'Réalisation', description: 'Livrable Fullstack du projet Groupomania' }
      ],
      links: {
        github: 'https://github.com/MathildeJNL/MathildeJeannolle_7_22072022'
      }
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.projectId = params.get('id') || '';
      this.project = this.projectsData.find(p => p.id === this.projectId) || null;
    });
  }

  setTab(tabId: string): void {
    this.activeTab = tabId;
  }

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'production': return 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400';
      case 'development': return 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400';
      case 'archived': return 'bg-gray-100 text-gray-700 dark:bg-gray-500/20 dark:text-gray-400';
      default: return 'bg-slate-100 text-slate-700 dark:bg-slate-500/20 dark:text-slate-400';
    }
  }
}
