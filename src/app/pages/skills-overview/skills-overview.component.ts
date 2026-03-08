import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  level: number;
  skills: Skill[];
  colorClass: string;
  bgClass: string;
  borderClass: string;
  barClass: string;
}

interface Skill {
  name: string;
  level: number;
  experience: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: string;
  colorClass: string;
  bgClass: string;
}

interface LearningItem {
  name: string;
  progress: number;
  status: string;
}

@Component({
  selector: 'app-skills-overview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './skills-overview.component.html',
  styleUrls: ['./skills-overview.component.scss']
})
export class SkillsOverviewComponent {
  // Stats
  stats = [
    { icon: 'code', value: '10+', label: 'Technologies maîtrisées', colorClass: 'text-primary' },
    { icon: 'workspace_premium', value: '5+', label: 'Diplômes obtenus', colorClass: 'text-amber-500' },
    { icon: 'trending_up', value: '7 ans', label: 'En alternance (dont 3 en dev)', colorClass: 'text-green-500' },
    { icon: 'school', value: 'Bac+5', label: 'Mastère en cours', colorClass: 'text-purple-500' }
  ];

  // Skill Categories
  skillCategories: SkillCategory[] = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: 'web',
      description: 'HTML5/CSS3, JavaScript, Angular, TypeScript, Vue.js',
      level: 82,
      colorClass: 'text-purple-500',
      bgClass: 'bg-purple-100 dark:bg-purple-500/20',
      borderClass: 'border-purple-500/30 hover:border-purple-500',
      barClass: 'bg-purple-500',
      skills: [
        { name: 'HTML5 / CSS3', level: 90, experience: '4 ans' },
        { name: 'JavaScript', level: 80, experience: '3 ans' },
        { name: 'Angular', level: 75, experience: '2 ans' },
        { name: 'TypeScript', level: 72, experience: '2 ans' },
        { name: 'Vue.js', level: 65, experience: '1 an' }
      ]
    },
    {
      id: 'backend',
      name: 'Backend & APIs',
      icon: 'database',
      description: 'Java, Spring Boot, Node.js, Express, REST API',
      level: 68,
      colorClass: 'text-blue-500',
      bgClass: 'bg-blue-100 dark:bg-blue-500/20',
      borderClass: 'border-blue-500/30 hover:border-blue-500',
      barClass: 'bg-blue-500',
      skills: [
        { name: 'Node.js / Express', level: 72, experience: '2 ans' },
        { name: 'Java / Spring Boot', level: 65, experience: '2 ans' },
        { name: 'REST API', level: 72, experience: '2 ans' },
        { name: 'Python', level: 60, experience: '1 an' }
      ]
    },
    {
      id: 'databases',
      name: 'Bases de données',
      icon: 'storage',
      description: 'SQL, MySQL, MongoDB',
      level: 65,
      colorClass: 'text-amber-500',
      bgClass: 'bg-amber-100 dark:bg-amber-500/20',
      borderClass: 'border-amber-500/30 hover:border-amber-500',
      barClass: 'bg-amber-500',
      skills: [
        { name: 'SQL / MySQL', level: 70, experience: '2 ans' },
        { name: 'MongoDB', level: 65, experience: '2 ans' }
      ]
    },
    {
      id: 'tools',
      name: 'Outils & Workflow',
      icon: 'build',
      description: 'Git, GitLab, Méthodes Agiles, Docker, Bash',
      level: 75,
      colorClass: 'text-green-500',
      bgClass: 'bg-green-100 dark:bg-green-500/20',
      borderClass: 'border-green-500/30 hover:border-green-500',
      barClass: 'bg-green-500',
      skills: [
        { name: 'Git / GitHub / GitLab', level: 85, experience: '4 ans' },
        { name: 'Méthodes Agiles / Scrum', level: 78, experience: '3 ans' },
        { name: 'Docker', level: 60, experience: '1 an' },
        { name: 'Bash / Linux', level: 60, experience: '1 an' }
      ]
    },
    {
      id: 'design',
      name: 'Design & Intégration',
      icon: 'palette',
      description: 'Responsive Design, Bootstrap, Tailwind CSS, SEO',
      level: 78,
      colorClass: 'text-pink-500',
      bgClass: 'bg-pink-100 dark:bg-pink-500/20',
      borderClass: 'border-pink-500/30 hover:border-pink-500',
      barClass: 'bg-pink-500',
      skills: [
        { name: 'Responsive Design', level: 85, experience: '4 ans' },
        { name: 'Tailwind CSS', level: 78, experience: '1 an' },
        { name: 'Bootstrap', level: 75, experience: '2 ans' },
        { name: 'SEO & Accessibilité', level: 70, experience: '2 ans' }
      ]
    },
    {
      id: 'soft-skills',
      name: 'Soft Skills',
      icon: 'psychology',
      description: 'Communication, empathie, travail en équipe, adaptabilité',
      level: 90,
      colorClass: 'text-teal-500',
      bgClass: 'bg-teal-100 dark:bg-teal-500/20',
      borderClass: 'border-teal-500/30 hover:border-teal-500',
      barClass: 'bg-teal-500',
      skills: [
        { name: 'Communication', level: 92, experience: '6 ans' },
        { name: 'Travail en équipe', level: 90, experience: '5 ans' },
        { name: 'Empathie & écoute', level: 95, experience: '6 ans' },
        { name: 'Adaptabilité', level: 90, experience: '7 ans' },
        { name: 'Autonomie', level: 85, experience: '3 ans' },
        { name: 'Rigueur', level: 85, experience: '5 ans' }
      ]
    }
  ];

  // Certifications
  certifications: Certification[] = [
    {
      name: 'Développeur Web - Titre RNCP Niveau 5',
      issuer: 'OpenClassrooms',
      date: '2022',
      icon: 'web',
      colorClass: 'text-purple-500',
      bgClass: 'bg-purple-100 dark:bg-purple-500/20'
    },
    {
      name: 'Bachelor Concepteur Développeur d\'Applications',
      issuer: 'CESI',
      date: '2024',
      icon: 'code',
      colorClass: 'text-blue-500',
      bgClass: 'bg-blue-100 dark:bg-blue-500/20'
    },
    {
      name: 'Brevet Professionnel Préparateur en Pharmacie',
      issuer: 'CFA Pharmacie d\'Orléans',
      date: '2021',
      icon: 'medication',
      colorClass: 'text-green-500',
      bgClass: 'bg-green-100 dark:bg-green-500/20'
    }
  ];

  // Currently Learning
  currentlyLearning: LearningItem[] = [
    { name: 'Java / Spring Boot avancé', progress: 65, status: 'En cours' },
    { name: 'Angular avancé & RxJS', progress: 55, status: 'En cours' },
    { name: 'Docker & CI/CD', progress: 40, status: 'Débuté' }
  ];

  // Filter state
  activeFilter = 'all';
  filters = ['all', 'frontend', 'backend', 'databases', 'tools', 'design', 'soft-skills'];

  get filteredCategories(): SkillCategory[] {
    if (this.activeFilter === 'all') {
      return this.skillCategories;
    }
    return this.skillCategories.filter(cat => cat.id === this.activeFilter);
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

  getFilterLabel(filter: string): string {
    const labels: Record<string, string> = {
      'all': 'Tout',
      'frontend': 'Frontend',
      'backend': 'Backend',
      'databases': 'Databases',
      'tools': 'Outils',
      'design': 'Design',
      'soft-skills': 'Soft Skills'
    };
    return labels[filter] || filter;
  }
}
