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
      id: 'backend',
      name: 'Backend & APIs',
      icon: 'database',
      description: 'Développement serveur, APIs RESTful et GraphQL, microservices',
      longDescription: 'Expert en développement backend avec une forte expérience dans la conception d\'architectures distribuées, la création d\'APIs performantes et scalables, et la mise en place de systèmes de microservices robustes.',
      level: 90,
      yearsExperience: 5,
      colorClass: 'text-blue-500',
      bgClass: 'bg-blue-100 dark:bg-blue-500/20',
      gradientClass: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 95, experience: '5 ans', description: 'Django, FastAPI, Flask, scripting avancé' },
        { name: 'Go', level: 85, experience: '3 ans', description: 'Microservices haute performance, CLI tools' },
        { name: 'Node.js', level: 80, experience: '4 ans', description: 'Express, NestJS, serverless functions' },
        { name: 'Rust', level: 60, experience: '1 an', description: 'Systems programming, WebAssembly' }
      ],
      keyStrengths: ['Architecture microservices', 'API Design', 'Performance optimization', 'Clean Code'],
      tools: ['gRPC', 'GraphQL', 'REST', 'Message Queues', 'WebSockets'],
      relatedProjects: [
        { id: 'cloud-migration', title: 'Cloud Migration Orchestrator', description: 'Migration de 50+ microservices' },
        { id: 'api-gateway', title: 'API Gateway', description: 'Gateway unifiée pour microservices' }
      ],
      resources: [
        { title: 'Clean Architecture', type: 'Livre', url: '#' },
        { title: 'Designing Data-Intensive Applications', type: 'Livre', url: '#' }
      ]
    },
    {
      id: 'cloud-infra',
      name: 'Cloud & Infrastructure',
      icon: 'cloud',
      description: 'AWS, GCP, Azure, Terraform, Kubernetes',
      longDescription: 'Expertise approfondie dans la conception et la gestion d\'infrastructures cloud modernes, avec une forte expérience en Infrastructure as Code et orchestration de conteneurs.',
      level: 92,
      yearsExperience: 5,
      colorClass: 'text-cyan-500',
      bgClass: 'bg-cyan-100 dark:bg-cyan-500/20',
      gradientClass: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'AWS', level: 95, experience: '5 ans', description: 'EC2, EKS, Lambda, RDS, S3, CloudFormation' },
        { name: 'Kubernetes', level: 90, experience: '4 ans', description: 'Helm, Operators, Service Mesh' },
        { name: 'Terraform', level: 88, experience: '3 ans', description: 'Modules, State management, Multi-cloud' },
        { name: 'GCP', level: 75, experience: '2 ans', description: 'GKE, Cloud Run, BigQuery' }
      ],
      keyStrengths: ['Infrastructure as Code', 'Multi-cloud', 'Cost optimization', 'High availability'],
      tools: ['Terraform', 'Pulumi', 'CloudFormation', 'Helm', 'Ansible'],
      relatedProjects: [
        { id: 'cloud-migration', title: 'Cloud Migration Orchestrator', description: 'Migration vers Kubernetes' },
        { id: 'infra-as-code', title: 'IaC Platform', description: 'Plateforme Terraform modulaire' }
      ],
      resources: [
        { title: 'Kubernetes Up & Running', type: 'Livre', url: '#' },
        { title: 'AWS Certified Solutions Architect', type: 'Certification', url: '#' }
      ]
    },
    {
      id: 'devops-sre',
      name: 'DevOps & SRE',
      icon: 'settings',
      description: 'CI/CD, Monitoring, Incident Response, Observabilité',
      longDescription: 'Spécialiste SRE avec une vision holistique de la fiabilité des systèmes, de l\'automatisation des déploiements et de la culture DevOps.',
      level: 88,
      yearsExperience: 5,
      colorClass: 'text-green-500',
      bgClass: 'bg-green-100 dark:bg-green-500/20',
      gradientClass: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'CI/CD', level: 92, experience: '5 ans', description: 'GitHub Actions, GitLab CI, Jenkins, ArgoCD' },
        { name: 'Prometheus/Grafana', level: 88, experience: '4 ans', description: 'Alerting, dashboards, PromQL' },
        { name: 'Docker', level: 95, experience: '5 ans', description: 'Multi-stage builds, optimization' },
        { name: 'Linux Admin', level: 85, experience: '6 ans', description: 'Systemd, networking, security' }
      ],
      keyStrengths: ['Incident management', 'SLO/SLI design', 'Automation', 'Observability'],
      tools: ['DataDog', 'PagerDuty', 'ELK Stack', 'Jaeger', 'OpenTelemetry'],
      relatedProjects: [
        { id: 'monitoring-platform', title: 'Observability Platform', description: 'Stack de monitoring unifié' },
        { id: 'incident-response', title: 'Incident Automation', description: 'Automatisation incident response' }
      ],
      resources: [
        { title: 'Site Reliability Engineering', type: 'Livre', url: '#' },
        { title: 'The Phoenix Project', type: 'Livre', url: '#' }
      ]
    },
    {
      id: 'frontend',
      name: 'Frontend',
      icon: 'web',
      description: 'React, Vue.js, TypeScript, Tailwind CSS',
      longDescription: 'Compétences frontend solides avec un focus sur la création d\'interfaces modernes, accessibles et performantes.',
      level: 75,
      yearsExperience: 3,
      colorClass: 'text-purple-500',
      bgClass: 'bg-purple-100 dark:bg-purple-500/20',
      gradientClass: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'React', level: 80, experience: '3 ans', description: 'Hooks, Context, Next.js' },
        { name: 'TypeScript', level: 85, experience: '3 ans', description: 'Types avancés, generics' },
        { name: 'Vue.js', level: 70, experience: '2 ans', description: 'Composition API, Nuxt' },
        { name: 'Tailwind CSS', level: 90, experience: '2 ans', description: 'Custom themes, plugins' }
      ],
      keyStrengths: ['Responsive design', 'Accessibility', 'Performance', 'Component architecture'],
      tools: ['Vite', 'Webpack', 'Storybook', 'Jest', 'Cypress'],
      relatedProjects: [
        { id: 'dashboard', title: 'ReliableUI Dashboard', description: 'Dashboard temps réel' },
        { id: 'design-system', title: 'Design System', description: 'Bibliothèque de composants' }
      ],
      resources: [
        { title: 'React Patterns', type: 'Documentation', url: '#' },
        { title: 'TypeScript Handbook', type: 'Documentation', url: '#' }
      ]
    },
    {
      id: 'databases',
      name: 'Bases de données',
      icon: 'storage',
      description: 'PostgreSQL, MongoDB, Redis, Elasticsearch',
      longDescription: 'Expertise en conception de schémas de données, optimisation de requêtes et gestion de bases de données à grande échelle.',
      level: 85,
      yearsExperience: 5,
      colorClass: 'text-amber-500',
      bgClass: 'bg-amber-100 dark:bg-amber-500/20',
      gradientClass: 'from-amber-500 to-orange-500',
      skills: [
        { name: 'PostgreSQL', level: 90, experience: '5 ans', description: 'Performance tuning, replication, partitioning' },
        { name: 'MongoDB', level: 80, experience: '3 ans', description: 'Aggregation, sharding, indexing' },
        { name: 'Redis', level: 85, experience: '4 ans', description: 'Caching, pub/sub, data structures' },
        { name: 'Elasticsearch', level: 75, experience: '2 ans', description: 'Full-text search, analytics' }
      ],
      keyStrengths: ['Data modeling', 'Query optimization', 'Replication', 'Backup strategies'],
      tools: ['pgAdmin', 'MongoDB Compass', 'Redis Insight', 'Kibana'],
      relatedProjects: [
        { id: 'data-platform', title: 'Data Platform', description: 'Architecture données distribuée' },
        { id: 'search-engine', title: 'Search Engine', description: 'Moteur de recherche interne' }
      ],
      resources: [
        { title: 'PostgreSQL Administration', type: 'Cours', url: '#' },
        { title: 'Database Internals', type: 'Livre', url: '#' }
      ]
    },
    {
      id: 'security',
      name: 'Sécurité',
      icon: 'security',
      description: 'Zero-Trust, IAM, Audit, Compliance',
      longDescription: 'Approche security-first avec une expertise en architecture Zero-Trust, gestion des identités et conformité réglementaire.',
      level: 82,
      yearsExperience: 4,
      colorClass: 'text-red-500',
      bgClass: 'bg-red-100 dark:bg-red-500/20',
      gradientClass: 'from-red-500 to-rose-500',
      skills: [
        { name: 'OAuth/OIDC', level: 88, experience: '4 ans', description: 'Identity providers, SSO, MFA' },
        { name: 'Security Audits', level: 80, experience: '3 ans', description: 'Vulnerability assessment, pen testing' },
        { name: 'Vault', level: 85, experience: '3 ans', description: 'Secrets management, PKI' },
        { name: 'SOC2 Compliance', level: 75, experience: '2 ans', description: 'Policies, controls, audits' }
      ],
      keyStrengths: ['Zero-trust architecture', 'Identity management', 'Secrets rotation', 'Compliance'],
      tools: ['Vault', 'Auth0', 'Okta', 'OWASP ZAP', 'Snyk'],
      relatedProjects: [
        { id: 'zero-trust', title: 'Zero-Trust Gateway', description: 'Remplacement VPN legacy' },
        { id: 'secrets-management', title: 'Secrets Platform', description: 'Gestion centralisée des secrets' }
      ],
      resources: [
        { title: 'OWASP Top 10', type: 'Documentation', url: '#' },
        { title: 'Zero Trust Networks', type: 'Livre', url: '#' }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

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
