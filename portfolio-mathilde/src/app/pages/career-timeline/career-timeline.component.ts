import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface TimelineEvent {
  id: string;
  type: 'job' | 'education';
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
  linkedTo?: string;
}

interface TimelineItem {
  id: string;
  type: 'alternance' | 'standalone';
  startDate: string;
  endDate: string | null;
  current: boolean;
  education?: TimelineEvent;
  job?: TimelineEvent;
  event?: TimelineEvent;
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
    { id: 'education', label: 'Formation', icon: 'school' }
  ];

  timelineEvents: TimelineEvent[] = [
    {
      id: '1',
      type: 'job',
      title: 'Développeuse Web en alternance',
      organization: 'Worldline',
      location: 'Blois, Centre-Val de Loire',
      startDate: '2024-10',
      endDate: null,
      current: true,
      description: 'Développement d\'applications web full-stack dans le cadre d\'un Mastère Expert en Ingénierie du Logiciel.',
      highlights: [
        'Développement front-end avec Angular et TypeScript',
        'Développement back-end avec Java et Spring Boot',
        'Travail en équipe avec GitLab et méthodologies agiles',
        'Communication et collaboration en mode projet'
      ],
      technologies: ['Angular', 'TypeScript', 'Bootstrap', 'Java', 'GitLab'],
      icon: 'work',
      colorClass: 'text-primary',
      bgClass: 'bg-blue-100 dark:bg-blue-900',
      linkedTo: '2'
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
      description: 'Formation en alternance couvrant l\'architecture logicielle, le développement full-stack, DevOps et la gestion de projet.',
      highlights: [
        'Architecture logicielle et conception UML',
        'Développement Java/Spring Boot et Angular/TypeScript',
        'DevOps avec Docker, Kubernetes et déploiement continu',
        'Management d\'équipes et méthodes agiles Scrum'
      ],
      icon: 'school',
      colorClass: 'text-green-500',
      bgClass: 'bg-green-100 dark:bg-green-900',
      linkedTo: '1'
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
        'Développement d\'outils internes avec Angular',
        'Collaboration avec les équipes de développement'
      ],
      technologies: ['Python', 'Bash', 'Confluence', 'Angular'],
      icon: 'work',
      colorClass: 'text-primary',
      bgClass: 'bg-blue-100 dark:bg-blue-900',
      linkedTo: '4'
    },
    {
      id: '4',
      type: 'education',
      title: 'Bachelor Concepteur Développeur d\'Applications',
      organization: 'CESI',
      location: 'Orléans, Centre-Val de Loire',
      startDate: '2023-09',
      endDate: '2024-09',
      current: false,
      description: 'Formation intensive d\'un an en développement logiciel, de la conception au déploiement.',
      highlights: [
        'Programmation orientée objet avec Java',
        'Modélisation UML et architecture logicielle',
        'Tests et sécurité des applications',
        'Déploiement continu et pratiques DevOps'
      ],
      icon: 'school',
      colorClass: 'text-green-500',
      bgClass: 'bg-green-100 dark:bg-green-900',
      linkedTo: '3'
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
        'Méthodes agiles et Scrum'
      ],
      technologies: ['Java', 'Spring', 'Angular', 'JavaScript', 'SQL'],
      icon: 'school',
      colorClass: 'text-green-500',
      bgClass: 'bg-green-100 dark:bg-green-900'
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
        'Obtention du titre RNCP'
      ],
      icon: 'school',
      colorClass: 'text-green-500',
      bgClass: 'bg-green-100 dark:bg-green-900'
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
        'Obtention du Brevet Professionnel'
      ],
      icon: 'work',
      colorClass: 'text-primary',
      bgClass: 'bg-blue-100 dark:bg-blue-900',
      linkedTo: '8'
    },
    {
      id: '8',
      type: 'education',
      title: 'Brevet Professionnel Préparateur en Pharmacie',
      organization: 'CFA Pharmacie d\'Orléans',
      location: 'Orléans, France',
      startDate: '2018-09',
      endDate: '2021-08',
      current: false,
      description: 'Formation en alternance de 3 ans en préparation pharmaceutique.',
      highlights: [
        'Formation théorique et pratique',
        'Diplôme obtenu avec succès'
      ],
      icon: 'school',
      colorClass: 'text-green-500',
      bgClass: 'bg-green-100 dark:bg-green-900',
      linkedTo: '7'
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
      highlights: [
        'Accueil et relation client',
        'Gestion des réservations',
        'Obtention de la Mention Complémentaire'
      ],
      icon: 'work',
      colorClass: 'text-primary',
      bgClass: 'bg-blue-100 dark:bg-blue-900',
      linkedTo: '10'
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
      highlights: [
        'Formation en alternance',
        'Diplôme obtenu avec succès'
      ],
      icon: 'school',
      colorClass: 'text-green-500',
      bgClass: 'bg-green-100 dark:bg-green-900',
      linkedTo: '9'
    },
    {
      id: '11',
      type: 'education',
      title: 'Bac Pro Commercialisation et Service en Restauration',
      organization: 'Lycée des Métiers de l\'Hôtellerie et du Tourisme du Val de Loire',
      location: 'Blois, Centre-Val de Loire',
      startDate: '2014-09',
      endDate: '2017-06',
      current: false,
      description: 'Formation en commercialisation et service en restauration.',
      highlights: [
        'Service en salle et relation client',
        'Diplôme obtenu avec succès'
      ],
      icon: 'school',
      colorClass: 'text-green-500',
      bgClass: 'bg-green-100 dark:bg-green-900'
    }
  ];

  get filteredEvents(): TimelineEvent[] {
    if (this.activeFilter === 'all') {
      return this.timelineEvents;
    }
    return this.timelineEvents.filter(e => e.type === this.activeFilter);
  }

  // Getter pour regrouper les alternances et les éléments individuels
  get groupedTimelineItems(): TimelineItem[] {
    const processed = new Set<string>();
    const items: TimelineItem[] = [];

    // Filtrer d'abord selon le filtre actif
    const eventsToProcess = this.filteredEvents;

    for (const event of eventsToProcess) {
      if (processed.has(event.id)) continue;

      if (event.linkedTo) {
        const linkedEvent = this.timelineEvents.find(e => e.id === event.linkedTo);

        // Vérifier si l'événement lié est aussi dans les événements filtrés
        const linkedInFiltered = eventsToProcess.find(e => e.id === event.linkedTo);

        if (linkedEvent && linkedInFiltered && !processed.has(linkedEvent.id)) {
          // Créer un bloc alternance
          const education = event.type === 'education' ? event : linkedEvent;
          const job = event.type === 'job' ? event : linkedEvent;

          items.push({
            id: `alternance-${event.id}-${linkedEvent.id}`,
            type: 'alternance',
            startDate: event.startDate,
            endDate: event.endDate,
            current: event.current || linkedEvent.current,
            education,
            job
          });

          processed.add(event.id);
          processed.add(linkedEvent.id);
        } else {
          // L'événement lié n'est pas dans le filtre, afficher seul
          items.push({
            id: `standalone-${event.id}`,
            type: 'standalone',
            startDate: event.startDate,
            endDate: event.endDate,
            current: event.current,
            event
          });
          processed.add(event.id);
        }
      } else {
        // Élément individuel sans liaison
        items.push({
          id: `standalone-${event.id}`,
          type: 'standalone',
          startDate: event.startDate,
          endDate: event.endDate,
          current: event.current,
          event
        });
        processed.add(event.id);
      }
    }

    return items;
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
      'education': 'Formation'
    };
    return labels[type] || type;
  }
}
