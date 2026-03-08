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
      description: 'Guidée par l\'empathie et l\'écoute, je place l\'humain au cœur de mes échanges et de mes projets.',
      colorClass: 'text-pink-500',
      bgClass: 'bg-pink-100 dark:bg-pink-500/20',
      hoverBorderClass: 'hover:border-pink-500/50'
    },
    {
      icon: 'groups',
      title: 'Esprit d\'équipe',
      description: 'Collaborative et communicante, j\'aime construire ensemble, partager et apprendre au contact des autres.',
      colorClass: 'text-blue-500',
      bgClass: 'bg-blue-100 dark:bg-blue-500/20',
      hoverBorderClass: 'hover:border-blue-500/50'
    },
    {
      icon: 'auto_awesome',
      title: 'Adaptabilité',
      description: 'Polyvalente et curieuse, je m\'adapte rapidement aux projets, aux outils et aux nouveaux défis.',
      colorClass: 'text-purple-500',
      bgClass: 'bg-purple-100 dark:bg-purple-500/20',
      hoverBorderClass: 'hover:border-purple-500/50'
    }
  ];

  // About Section
  aboutParagraphs: string[] = [
    'Je suis développeuse Web junior, dôtée de trois années d\'alternance en développement auprès de Worldline. ',
    'Mon objectif de carrière est de devenir une développeuse polyvalente, capable de contribuer à toutes les étapes du développement logiciel, du frontend au backend.'
  ];

  currentProject = {
    name: 'Valkea',
    description: 'une application de suivi de la santé de vos animaux de compagnie, avec des alertes personnalisées pour les soins et les rendez-vous vétérinaires.',
  };

  softSkills: string[] = ['Empathique', 'Collaborative', 'Communicante', 'Autonome', 'Polyvalente', 'À l\'écoute', 'Rigoureuse', 'Curieuse'];

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
      id: 'openclassrooms-2',
      title: 'Transformer une maquette en site web avec HTML & CSS',
      description: 'Intégration d\'une maquette de site responsive en utilisant HTML et CSS.',
      imageUrl: 'assets/images/projects/booki.png',
      tags: ['HTML', 'CSS', 'Responsive'],
    },
    {
      id: 'openclassrooms-6',
      title: 'Construire une API sécurisée pour une application d\'avis gastronomique',
      description: 'Création d\'une API REST sécurisée avec NodeJS et MongoDB.',
      imageUrl: 'assets/images/projects/piiquante.png',
      tags: ['NodeJS', 'MongoDB', 'Sécurité', 'API']
    }
  ];
}
