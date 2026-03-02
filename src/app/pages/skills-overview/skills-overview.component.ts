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
    { icon: 'code', value: '15+', label: 'Technologies maîtrisées', colorClass: 'text-primary' },
    { icon: 'workspace_premium', value: '5', label: 'Certifications', colorClass: 'text-amber-500' },
    { icon: 'trending_up', value: '5+', label: 'Années d\'expérience', colorClass: 'text-green-500' },
    { icon: 'school', value: '∞', label: 'Apprentissage continu', colorClass: 'text-purple-500' }
  ];

  // Skill Categories
  skillCategories: SkillCategory[] = [
    {
      id: 'backend',
      name: 'Backend & APIs',
      icon: 'database',
      description: 'Développement serveur, APIs RESTful et GraphQL, microservices',
      level: 90,
      colorClass: 'text-blue-500',
      bgClass: 'bg-blue-100 dark:bg-blue-500/20',
      borderClass: 'border-blue-500/30 hover:border-blue-500',
      skills: [
        { name: 'Python', level: 95, experience: '5 ans' },
        { name: 'Go', level: 85, experience: '3 ans' },
        { name: 'Node.js', level: 80, experience: '4 ans' },
        { name: 'Rust', level: 60, experience: '1 an' }
      ]
    },
    {
      id: 'cloud-infra',
      name: 'Cloud & Infrastructure',
      icon: 'cloud',
      description: 'AWS, GCP, Azure, Terraform, Kubernetes',
      level: 92,
      colorClass: 'text-cyan-500',
      bgClass: 'bg-cyan-100 dark:bg-cyan-500/20',
      borderClass: 'border-cyan-500/30 hover:border-cyan-500',
      skills: [
        { name: 'AWS', level: 95, experience: '5 ans' },
        { name: 'Kubernetes', level: 90, experience: '4 ans' },
        { name: 'Terraform', level: 88, experience: '3 ans' },
        { name: 'GCP', level: 75, experience: '2 ans' }
      ]
    },
    {
      id: 'devops-sre',
      name: 'DevOps & SRE',
      icon: 'settings',
      description: 'CI/CD, Monitoring, Incident Response, Observabilité',
      level: 88,
      colorClass: 'text-green-500',
      bgClass: 'bg-green-100 dark:bg-green-500/20',
      borderClass: 'border-green-500/30 hover:border-green-500',
      skills: [
        { name: 'CI/CD', level: 92, experience: '5 ans' },
        { name: 'Prometheus/Grafana', level: 88, experience: '4 ans' },
        { name: 'Docker', level: 95, experience: '5 ans' },
        { name: 'Linux Admin', level: 85, experience: '6 ans' }
      ]
    },
    {
      id: 'frontend',
      name: 'Frontend',
      icon: 'web',
      description: 'React, Vue.js, TypeScript, Tailwind CSS',
      level: 75,
      colorClass: 'text-purple-500',
      bgClass: 'bg-purple-100 dark:bg-purple-500/20',
      borderClass: 'border-purple-500/30 hover:border-purple-500',
      skills: [
        { name: 'React', level: 80, experience: '3 ans' },
        { name: 'TypeScript', level: 85, experience: '3 ans' },
        { name: 'Vue.js', level: 70, experience: '2 ans' },
        { name: 'Tailwind CSS', level: 90, experience: '2 ans' }
      ]
    },
    {
      id: 'databases',
      name: 'Bases de données',
      icon: 'storage',
      description: 'PostgreSQL, MongoDB, Redis, Elasticsearch',
      level: 85,
      colorClass: 'text-amber-500',
      bgClass: 'bg-amber-100 dark:bg-amber-500/20',
      borderClass: 'border-amber-500/30 hover:border-amber-500',
      skills: [
        { name: 'PostgreSQL', level: 90, experience: '5 ans' },
        { name: 'MongoDB', level: 80, experience: '3 ans' },
        { name: 'Redis', level: 85, experience: '4 ans' },
        { name: 'Elasticsearch', level: 75, experience: '2 ans' }
      ]
    },
    {
      id: 'security',
      name: 'Sécurité',
      icon: 'security',
      description: 'Zero-Trust, IAM, Audit, Compliance',
      level: 82,
      colorClass: 'text-red-500',
      bgClass: 'bg-red-100 dark:bg-red-500/20',
      borderClass: 'border-red-500/30 hover:border-red-500',
      skills: [
        { name: 'OAuth/OIDC', level: 88, experience: '4 ans' },
        { name: 'Security Audits', level: 80, experience: '3 ans' },
        { name: 'Vault', level: 85, experience: '3 ans' },
        { name: 'SOC2 Compliance', level: 75, experience: '2 ans' }
      ]
    }
  ];

  // Certifications
  certifications: Certification[] = [
    {
      name: 'AWS Solutions Architect Professional',
      issuer: 'Amazon Web Services',
      date: '2023',
      icon: 'cloud',
      colorClass: 'text-amber-500',
      bgClass: 'bg-amber-100 dark:bg-amber-500/20'
    },
    {
      name: 'Certified Kubernetes Administrator',
      issuer: 'CNCF',
      date: '2022',
      icon: 'hub',
      colorClass: 'text-blue-500',
      bgClass: 'bg-blue-100 dark:bg-blue-500/20'
    },
    {
      name: 'Google Cloud Professional DevOps',
      issuer: 'Google Cloud',
      date: '2023',
      icon: 'settings',
      colorClass: 'text-green-500',
      bgClass: 'bg-green-100 dark:bg-green-500/20'
    },
    {
      name: 'HashiCorp Terraform Associate',
      issuer: 'HashiCorp',
      date: '2022',
      icon: 'grid_view',
      colorClass: 'text-purple-500',
      bgClass: 'bg-purple-100 dark:bg-purple-500/20'
    },
    {
      name: 'Site Reliability Engineering',
      issuer: 'Google',
      date: '2021',
      icon: 'monitoring',
      colorClass: 'text-red-500',
      bgClass: 'bg-red-100 dark:bg-red-500/20'
    }
  ];

  // Currently Learning
  currentlyLearning: LearningItem[] = [
    { name: 'Rust Advanced Patterns', progress: 65, status: 'En cours' },
    { name: 'WebAssembly', progress: 40, status: 'En cours' },
    { name: 'AI/ML Ops', progress: 30, status: 'Débuté' }
  ];

  // Filter state
  activeFilter = 'all';
  filters = ['all', 'backend', 'cloud-infra', 'devops-sre', 'frontend', 'databases', 'security'];

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
      'backend': 'Backend',
      'cloud-infra': 'Cloud',
      'devops-sre': 'DevOps',
      'frontend': 'Frontend',
      'databases': 'Databases',
      'security': 'Sécurité'
    };
    return labels[filter] || filter;
  }
}
