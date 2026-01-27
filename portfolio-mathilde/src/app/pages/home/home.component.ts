import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface TechStack {
  icon: string;
  title: string;
}

interface Value {
  icon: string;
  title: string;
  description: string;
  colorClass: string;
  bgClass: string;
  hoverBorderClass: string;
}

interface Fact {
  icon: string;
  iconColor: string;
  text: string;
}

interface Interest {
  icon: string;
  label: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // Hero Section
  isOpenToWork = true;
  name = 'Mathilde';
  title = 'Développeuse Full-Stack & Site Reliability Engineering (SRE).';
  tagline = 'Je construis des systèmes résilients et évolutifs avec une touche humaine. Créer le pont entre infrastructure complexe et expérience développeur.';
  systemUptime = '99.99%';

  profileImageUrl = 'assets/images/mj_pp.png';

  techStack: TechStack[] = [
    { icon: 'dns', title: 'Infrastructure' },
    { icon: 'cloud', title: 'Cloud' },
    { icon: 'security', title: 'Sécurité' },
    { icon: 'monitoring', title: 'Monitoring' }
  ];

  // Values Section
  values: Value[] = [
    {
      icon: 'code',
      title: 'Expertise Technique',
      description: 'Expertise approfondie en architecture backend, infrastructure cloud et systèmes distribués. J\'écris du code propre et maintenable.',
      colorClass: 'text-primary',
      bgClass: 'bg-blue-100 dark:bg-primary/20',
      hoverBorderClass: 'hover:border-primary/50'
    },
    {
      icon: 'favorite',
      title: 'Humaine',
      description: 'Priorisant l\'empathie, la communication claire et la collaboration. Je mentore les juniors et favorise une culture de sécurité psychologique.',
      colorClass: 'text-pink-500',
      bgClass: 'bg-pink-100 dark:bg-pink-500/20',
      hoverBorderClass: 'hover:border-pink-500/50'
    },
    {
      icon: 'verified_user',
      title: 'Responsable',
      description: 'Engagée pour la fiabilité, la disponibilité et les pratiques durables. Je prends la responsabilité des incidents et apprends des échecs.',
      colorClass: 'text-green-500',
      bgClass: 'bg-green-100 dark:bg-green-500/20',
      hoverBorderClass: 'hover:border-green-500/50'
    }
  ];

  // About Section
  aboutParagraphs: string[] = [
    'Je suis une développeuse Full-Stack spécialisée en Site Reliability Engineering (SRE) avec plus de 5 ans d\'expérience pour assurer que les systèmes soient évolutifs, fiables et efficaces.',
    'Mon objectif de carrière est de démocratiser l\'architecture haute disponibilité pour les startups, rendant la fiabilité de niveau entreprise accessible aux petites équipes.'
  ];

  currentProject = {
    name: 'ReliableUI',
    description: 'un dashboard open-source pour visualiser la santé des microservices en temps réel.'
  };

  softSkills: string[] = ['Empathie', 'Orientée service', 'Autonome', 'Problem Solver'];

  interests: Interest[] = [
    { icon: 'pool', label: 'Natation' },
    { icon: 'fitness_center', label: 'Crossfit' },
    { icon: 'piano', label: 'Piano' }
  ];

  // Facts Section
  facts: Fact[] = [
    { icon: 'terminal', iconColor: 'text-primary', text: 'Je préfère le CLI au GUI.' },
    { icon: 'pets', iconColor: 'text-purple-500', text: 'Fière propriétaire de 2 chats.' },
    { icon: 'coffee', iconColor: 'text-amber-500', text: 'Alimentée par l\'Espresso.' },
    { icon: 'flight', iconColor: 'text-blue-400', text: '20+ pays visités.' },
    { icon: 'psychology', iconColor: 'text-green-500', text: 'Toujours en train d\'apprendre Rust.' },
    { icon: 'headphones', iconColor: 'text-red-500', text: 'Accro aux podcasts.' }
  ];

  // Projects Preview
  projects: Project[] = [
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Orchestrator',
      description: 'Automatisation de la migration de 50+ microservices vers Kubernetes, réduisant le downtime de 90%.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnVrUP1M1feGsjuJWGASr8sGWfEomH0_ErzAG2O7GhneV5YBxqbTwCPrtt-6VyFu1iTYdpW1RLBjJWgMFpAA4I0mgZjvbQzqwgJlR8T_mue6yE2PACvmPtkqhnnY75QTFrwNA8-93gmf28qJR1Ak--VRnIKmGj69mpOWdB00HQcrW2rVQXKYGwIksJ7d-wIycb5YYCwveScbDNptBpm1C6IAaaMiNnwg4U6Mnf5BEarwWIi-1XaAdq1S_SoE8WTXk_cVFkYMzjapEL',
      tags: ['Go', 'Terraform', 'AWS']
    },
    {
      id: 'zero-trust',
      title: 'Zero-Trust Access Gateway',
      description: 'Implémentation d\'une couche d\'accès sécurisée pour les outils internes, remplaçant les VPN legacy.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKn1_A6miu5HblbvQzH4ysb8qDEjE5Yif3D-cIGtWLrL31EFTlRlnRVKh0gR-TZOWxs9_3-JZUIETgVqiVb4aHJMZ9dnDeJp86bVjAdMzBRWk1npzK3v8jRBt1NMXdDgn7TQ25AtihhwlGytNsZ5sQQYAULSD3wGx_pSQdOrMW9xbVbHCmMbTpV179QeybeMsa07BHzW9DjZ56rRrMgVUwpPCRQh9X7CtiimWU4d7NPYoJ7RhtPlKQxNiI_PQu83yma0RvPmVYNWAs',
      tags: ['Rust', 'gRPC', 'Security']
    }
  ];
}
