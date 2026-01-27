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
      id: 'cloud-migration',
      title: 'Cloud Migration Orchestrator',
      subtitle: 'Migration automatisée vers Kubernetes',
      description: 'Automatisation complète de la migration de 50+ microservices vers Kubernetes.',
      longDescription: 'Ce projet a consisté à concevoir et implémenter un orchestrateur de migration cloud permettant de transférer automatiquement plus de 50 microservices d\'une infrastructure on-premise vers un cluster Kubernetes managé sur AWS EKS. L\'objectif principal était de réduire drastiquement le downtime lors des migrations tout en maintenant la cohérence des données.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnVrUP1M1feGsjuJWGASr8sGWfEomH0_ErzAG2O7GhneV5YBxqbTwCPrtt-6VyFu1iTYdpW1RLBjJWgMFpAA4I0mgZjvbQzqwgJlR8T_mue6yE2PACvmPtkqhnnY75QTFrwNA8-93gmf28qJR1Ak--VRnIKmGj69mpOWdB00HQcrW2rVQXKYGwIksJ7d-wIycb5YYCwveScbDNptBpm1C6IAaaMiNnwg4U6Mnf5BEarwWIi-1XaAdq1S_SoE8WTXk_cVFkYMzjapEL',
      galleryImages: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBnVrUP1M1feGsjuJWGASr8sGWfEomH0_ErzAG2O7GhneV5YBxqbTwCPrtt',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCKn1_A6miu5HblbvQzH4ysb8qDEjE5Yif3D-cIGtWLrL31EFTlRlnRVKh0',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBSQz99iRzh8z3R4nCJ2mHLCJaXVOlf7LH4j8mKWsVEG4kcJF0mYqtHvJAO'
      ],
      tags: ['Go', 'Terraform', 'AWS', 'Kubernetes', 'Docker', 'ArgoCD'],
      category: 'infrastructure',
      year: 2024,
      duration: '8 mois',
      role: 'Lead SRE / Architecte',
      teamSize: '5 personnes',
      status: 'Production',
      metrics: [
        { label: 'Microservices migrés', value: '50+', icon: 'dns' },
        { label: 'Réduction downtime', value: '90%', icon: 'trending_down' },
        { label: 'Économies infra', value: '40%', icon: 'savings' },
        { label: 'Temps déploiement', value: '-60%', icon: 'speed' }
      ],
      challenges: [
        {
          title: 'Données stateful',
          description: 'Migration des bases de données sans perte de données ni interruption de service prolongée.'
        },
        {
          title: 'Dépendances inter-services',
          description: 'Gestion des dépendances complexes entre microservices pendant la phase de transition.'
        },
        {
          title: 'Rollback automatique',
          description: 'Mise en place d\'un système de rollback automatique en cas d\'échec de migration.'
        }
      ],
      solutions: [
        'Implémentation d\'un pattern Blue-Green Deployment pour les migrations sans downtime',
        'Utilisation de Terraform pour l\'Infrastructure as Code avec state management centralisé',
        'Mise en place d\'ArgoCD pour le GitOps et les déploiements continus',
        'Création d\'un CLI custom en Go pour orchestrer les migrations de manière déclarative'
      ],
      technologies: [
        { name: 'Go', category: 'Backend', description: 'Développement du CLI et des controllers Kubernetes' },
        { name: 'Terraform', category: 'IaC', description: 'Provisioning de l\'infrastructure AWS' },
        { name: 'Kubernetes', category: 'Orchestration', description: 'Plateforme cible de déploiement' },
        { name: 'ArgoCD', category: 'GitOps', description: 'Déploiement continu et synchronisation' },
        { name: 'AWS EKS', category: 'Cloud', description: 'Cluster Kubernetes managé' },
        { name: 'Prometheus', category: 'Monitoring', description: 'Métriques et alerting' }
      ],
      milestones: [
        { date: 'Janvier 2024', title: 'Kickoff & Architecture', description: 'Définition de l\'architecture cible et planning' },
        { date: 'Mars 2024', title: 'MVP Orchestrateur', description: 'Première version fonctionnelle du CLI' },
        { date: 'Mai 2024', title: 'Migration Pilote', description: 'Migration des 10 premiers services' },
        { date: 'Juillet 2024', title: 'Migration Complète', description: 'Tous les services migrés vers EKS' },
        { date: 'Août 2024', title: 'Optimisation', description: 'Fine-tuning et documentation' }
      ],
      links: {
        github: 'https://github.com/mathildej/cloud-migration-orchestrator',
        documentation: 'https://docs.example.com/migration'
      },
      testimonial: {
        quote: 'La migration s\'est déroulée de manière transparente pour nos utilisateurs. L\'équipe SRE a fait un travail remarquable.',
        author: 'Jean Dupont',
        role: 'VP Engineering'
      }
    },
    {
      id: 'zero-trust',
      title: 'Zero-Trust Access Gateway',
      subtitle: 'Architecture sécurisée sans VPN',
      description: 'Implémentation d\'une couche d\'accès sécurisée remplaçant les VPN legacy.',
      longDescription: 'Ce projet visait à moderniser l\'accès aux ressources internes en remplaçant l\'infrastructure VPN traditionnelle par une solution Zero-Trust. Cette approche permet un contrôle d\'accès granulaire basé sur l\'identité, le contexte et la posture de sécurité du device.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKn1_A6miu5HblbvQzH4ysb8qDEjE5Yif3D-cIGtWLrL31EFTlRlnRVKh0gR-TZOWxs9_3-JZUIETgVqiVb4aHJMZ9dnDeJp86bVjAdMzBRWk1npzK3v8jRBt1NMXdDgn7TQ25AtihhwlGytNsZ5sQQYAULSD3wGx_pSQdOrMW9xbVbHCmMbTpV179QeybeMsa07BHzW9DjZ56rRrMgVUwpPCRQh9X7CtiimWU4d7NPYoJ7RhtPlKQxNiI_PQu83yma0RvPmVYNWAs',
      galleryImages: [],
      tags: ['Rust', 'gRPC', 'Security', 'OAuth', 'mTLS'],
      category: 'security',
      year: 2024,
      duration: '6 mois',
      role: 'Security Engineer',
      teamSize: '3 personnes',
      status: 'Production',
      metrics: [
        { label: 'Latence ajoutée', value: '<10ms', icon: 'speed' },
        { label: 'Utilisateurs', value: '500+', icon: 'group' },
        { label: 'Apps protégées', value: '30+', icon: 'shield' },
        { label: 'Incidents sécurité', value: '0', icon: 'verified_user' }
      ],
      challenges: [
        {
          title: 'Performance',
          description: 'Maintenir une latence minimale malgré les vérifications de sécurité supplémentaires.'
        },
        {
          title: 'Intégration IdP',
          description: 'Support de multiples identity providers (Okta, Azure AD, Google).'
        }
      ],
      solutions: [
        'Développement en Rust pour des performances optimales',
        'Mise en cache des décisions d\'autorisation',
        'Architecture edge-based avec points de présence distribués'
      ],
      technologies: [
        { name: 'Rust', category: 'Backend', description: 'Proxy haute performance' },
        { name: 'gRPC', category: 'Communication', description: 'Communication inter-services' },
        { name: 'OAuth 2.0/OIDC', category: 'Auth', description: 'Protocoles d\'authentification' },
        { name: 'mTLS', category: 'Security', description: 'Authentification mutuelle' }
      ],
      milestones: [
        { date: 'Février 2024', title: 'Design & PoC', description: 'Validation du concept' },
        { date: 'Avril 2024', title: 'Core Development', description: 'Développement du proxy Rust' },
        { date: 'Juin 2024', title: 'Rollout', description: 'Déploiement progressif' }
      ],
      links: {
        github: 'https://github.com/mathildej/zero-trust-gateway'
      }
    }
  ];

  constructor(private route: ActivatedRoute) {}

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
