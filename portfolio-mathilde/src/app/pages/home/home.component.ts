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
  isOpenToWork = true;
  name = 'Mathilde';
  title = 'Développeuse Full-Stack.';
  tagline = 'Développeuse junior, passionnée par la création d\'applications modernes, fiables et élégantes.';

  profileImageUrl = 'assets/images/mj_pp.png';

  techStack: TechStack[] = [
    { icon: 'web', title: 'Frontend' },
    { icon: 'database', title: 'Backend' },
    { icon: 'storage', title: 'Base de données' },
    { icon: 'travel_explore', title: 'SEO' }
  ];

  values: Value[] = [
    {
      icon: 'favorite',
      title: 'Bienveillance',
      description: "Guidée par l'empathie et l'écoute, je place l'humain au cœur de mes échanges et de mes projets.",
      colorClass: 'text-pink-500',
      bgClass: 'bg-pink-100 dark:bg-pink-500/20',
      hoverBorderClass: 'hover:border-pink-500/50'
    },
    {
      icon: 'groups',
      title: 'Esprit d’équipe',
      description: "Collaborative et communicante, j’aime construire ensemble, partager et apprendre au contact des autres.",
      colorClass: 'text-blue-500',
      bgClass: 'bg-blue-100 dark:bg-blue-500/20',
      hoverBorderClass: 'hover:border-blue-500/50'
    },
    {
      icon: 'auto_awesome',
      title: 'Adaptabilité',
      description: "Polyvalente et curieuse, je m’adapte rapidement aux projets, aux outils et aux nouveaux défis.",
      colorClass: 'text-purple-500',
      bgClass: 'bg-purple-100 dark:bg-purple-500/20',
      hoverBorderClass: 'hover:border-purple-500/50'
    }
  ];

  // About Section
  aboutParagraphs: string[] = [
    'Je suis développeuse Full-Stack junior, dôtée de trois années d\'alternance en développement auprès de Wordline. ',
    'Mon objectif de carrière est de démocratiser l\'architecture haute disponibilité pour les startups, rendant la fiabilité de niveau entreprise accessible aux petites équipes.'
  ];

  currentProject = {
    name: 'Valkea',
    description: 'une application de suivi de la santé de vos animaux de compagnie, avec des alertes personnalisées pour les soins et les rendez-vous vétérinaires.',
  };

  softSkills: string[] = ['Empathique', 'Collaborative', 'Autonome', 'Polyvalente'];

  interests: Interest[] = [
    { icon: 'pool', label: 'Natation' },
    { icon: 'fitness_center', label: 'Crossfit' },
    { icon: 'piano', label: 'Piano' }
  ];

  // Facts Section
  facts: Fact[] = [
    { icon: 'terminal', iconColor: 'text-primary', text: 'Je suis tombée dans le dev comme un cheveu sur la soupe.' },
    { icon: 'pets', iconColor: 'text-purple-500', text: 'Fière humaine d\'un husky têtu mais adorable.' },
    { icon: 'coffee', iconColor: 'text-amber-500', text: 'Alimentée par l\'Espresso... et le chocolat chaud.' },
    { icon: 'exercise', iconColor: 'text-blue-400', text: 'Build physique multi-classe : nageuse, crossfiteuse et combattante.' },
    { icon: 'psychology', iconColor: 'text-green-500', text: 'Je développe mes compétences au quotidien, sans pression.' },
    { icon: 'headphones', iconColor: 'text-red-500', text: 'Ma playlist passe du métal au piano sans prévenir.' }
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
