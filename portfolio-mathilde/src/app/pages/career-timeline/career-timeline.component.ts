import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface TimelineEvent {
  id: string;
  type: 'job' | 'education' | 'certification' | 'achievement';
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  highlights: string[];
  technologies?: string[];
  icon: string;
  colorClass: string;
  bgClass: string;
}

@Component({
  selector: 'app-career-timeline',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './career-timeline.component.html',
  styleUrls: ['./career-timeline.component.scss']
})
export class CareerTimelineComponent {
  activeFilter = 'all';

  filters = [
    { id: 'all', label: 'Tout', icon: 'timeline' },
    { id: 'job', label: 'Expérience', icon: 'work' },
    { id: 'education', label: 'Formation', icon: 'school' },
    { id: 'certification', label: 'Certifications', icon: 'workspace_premium' },
    { id: 'achievement', label: 'Accomplissements', icon: 'emoji_events' }
  ];

  timelineEvents: TimelineEvent[] = [
    {
      id: '1',
      type: 'job',
      title: 'Lead Site Reliability Engineer',
      organization: 'TechCorp',
      location: 'Paris, France',
      startDate: '2022-03',
      endDate: null,
      current: true,
      description: 'Direction de l\'équipe SRE (5 personnes) responsable de la fiabilité et de la scalabilité de la plateforme.',
      highlights: [
        'Migration de 50+ microservices vers Kubernetes',
        'Réduction du MTTR de 4h à 30min',
        'Mise en place d\'une culture SRE avec SLO/SLI',
        'Automatisation de 80% des tâches opérationnelles'
      ],
      technologies: ['Kubernetes', 'AWS', 'Terraform', 'Go', 'Prometheus'],
      icon: 'work',
      colorClass: 'text-primary',
      bgClass: 'bg-blue-100 dark:bg-primary/20'
    },
    {
      id: '2',
      type: 'certification',
      title: 'AWS Solutions Architect Professional',
      organization: 'Amazon Web Services',
      location: 'En ligne',
      startDate: '2023-06',
      endDate: '2023-06',
      current: false,
      description: 'Certification avancée validant l\'expertise en conception d\'architectures cloud complexes sur AWS.',
      highlights: [
        'Score: 892/1000',
        'Spécialisation multi-compte et organisations',
        'Architecture haute disponibilité'
      ],
      icon: 'workspace_premium',
      colorClass: 'text-amber-500',
      bgClass: 'bg-amber-100 dark:bg-amber-500/20'
    },
    {
      id: '3',
      type: 'job',
      title: 'Senior DevOps Engineer',
      organization: 'StartupFlow',
      location: 'Paris, France',
      startDate: '2020-01',
      endDate: '2022-02',
      current: false,
      description: 'Responsable de l\'infrastructure cloud et des pipelines CI/CD pour une startup en hypercroissance.',
      highlights: [
        'Construction from scratch de l\'infrastructure AWS',
        'Mise en place de GitOps avec ArgoCD',
        'Réduction des coûts cloud de 35%',
        'Onboarding de 10 développeurs sur les pratiques DevOps'
      ],
      technologies: ['AWS', 'Docker', 'GitLab CI', 'Python', 'Ansible'],
      icon: 'work',
      colorClass: 'text-primary',
      bgClass: 'bg-blue-100 dark:bg-primary/20'
    },
    {
      id: '4',
      type: 'certification',
      title: 'Certified Kubernetes Administrator',
      organization: 'CNCF',
      location: 'En ligne',
      startDate: '2022-04',
      endDate: '2022-04',
      current: false,
      description: 'Certification pratique démontrant la maîtrise de l\'administration de clusters Kubernetes.',
      highlights: [
        'Examen pratique de 2h',
        'Networking, security, troubleshooting'
      ],
      icon: 'workspace_premium',
      colorClass: 'text-amber-500',
      bgClass: 'bg-amber-100 dark:bg-amber-500/20'
    },
    {
      id: '5',
      type: 'achievement',
      title: 'Speaker KubeCon Europe',
      organization: 'CNCF',
      location: 'Amsterdam, Pays-Bas',
      startDate: '2023-04',
      endDate: '2023-04',
      current: false,
      description: 'Présentation sur "Scaling Observability: From 10 to 1000 Microservices" devant 500+ participants.',
      highlights: [
        '500+ participants',
        'Talk noté 4.8/5',
        'Publication du talk sur YouTube'
      ],
      icon: 'emoji_events',
      colorClass: 'text-purple-500',
      bgClass: 'bg-purple-100 dark:bg-purple-500/20'
    },
    {
      id: '6',
      type: 'job',
      title: 'Backend Developer',
      organization: 'WebAgency',
      location: 'Lyon, France',
      startDate: '2018-06',
      endDate: '2019-12',
      current: false,
      description: 'Développement d\'APIs et services backend pour des clients variés (e-commerce, SaaS, fintech).',
      highlights: [
        'Développement d\'APIs RESTful en Python/Django',
        'Intégration de systèmes de paiement',
        'Découverte de l\'infrastructure cloud'
      ],
      technologies: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Docker'],
      icon: 'work',
      colorClass: 'text-primary',
      bgClass: 'bg-blue-100 dark:bg-primary/20'
    },
    {
      id: '7',
      type: 'education',
      title: 'Master Informatique - Spécialisation Cloud',
      organization: 'Université Paris-Saclay',
      location: 'Paris, France',
      startDate: '2016-09',
      endDate: '2018-06',
      current: false,
      description: 'Formation approfondie en systèmes distribués, cloud computing et architecture logicielle.',
      highlights: [
        'Major de promotion',
        'Mémoire sur l\'auto-scaling prédictif',
        'Stage de fin d\'études chez AWS'
      ],
      icon: 'school',
      colorClass: 'text-green-500',
      bgClass: 'bg-green-100 dark:bg-green-500/20'
    },
    {
      id: '8',
      type: 'education',
      title: 'Licence Informatique',
      organization: 'Université Claude Bernard Lyon 1',
      location: 'Lyon, France',
      startDate: '2013-09',
      endDate: '2016-06',
      current: false,
      description: 'Fondamentaux de l\'informatique : algorithmique, programmation, bases de données, réseaux.',
      highlights: [
        'Mention Très Bien',
        'Projet tutoré en développement web',
        'Participation au hackathon universitaire'
      ],
      icon: 'school',
      colorClass: 'text-green-500',
      bgClass: 'bg-green-100 dark:bg-green-500/20'
    }
  ];

  get filteredEvents(): TimelineEvent[] {
    if (this.activeFilter === 'all') {
      return this.timelineEvents;
    }
    return this.timelineEvents.filter(e => e.type === this.activeFilter);
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

  formatDateRange(event: TimelineEvent): string {
    const start = this.formatDate(event.startDate);
    if (event.current) {
      return `${start} - Présent`;
    }
    if (event.endDate && event.startDate === event.endDate) {
      return start;
    }
    return `${start} - ${this.formatDate(event.endDate!)}`;
  }

  private formatDate(dateStr: string): string {
    const [year, month] = dateStr.split('-');
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
    return `${months[parseInt(month) - 1]} ${year}`;
  }

  getTypeLabel(type: string): string {
    const labels: Record<string, string> = {
      'job': 'Expérience',
      'education': 'Formation',
      'certification': 'Certification',
      'achievement': 'Accomplissement'
    };
    return labels[type] || type;
  }
}
