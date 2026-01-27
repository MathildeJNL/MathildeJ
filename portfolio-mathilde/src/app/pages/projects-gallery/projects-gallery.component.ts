import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  category: string;
  year: number;
  featured: boolean;
  metrics?: {
    label: string;
    value: string;
  }[];
}

@Component({
  selector: 'app-projects-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './projects-gallery.component.html',
  styleUrls: ['./projects-gallery.component.scss']
})
export class ProjectsGalleryComponent {
  searchQuery = '';
  activeCategory = 'all';
  sortBy = 'recent';

  categories = [
    { id: 'all', label: 'Tous', icon: 'apps' },
    { id: 'infrastructure', label: 'Infrastructure', icon: 'dns' },
    { id: 'backend', label: 'Backend', icon: 'database' },
    { id: 'devops', label: 'DevOps', icon: 'settings' },
    { id: 'security', label: 'Sécurité', icon: 'security' },
    { id: 'frontend', label: 'Frontend', icon: 'web' }
  ];

  projects: Project[] = [
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Orchestrator',
      description: 'Automatisation complète de la migration de 50+ microservices vers Kubernetes, réduisant le downtime de 90% et les coûts d\'infrastructure de 40%.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnVrUP1M1feGsjuJWGASr8sGWfEomH0_ErzAG2O7GhneV5YBxqbTwCPrtt-6VyFu1iTYdpW1RLBjJWgMFpAA4I0mgZjvbQzqwgJlR8T_mue6yE2PACvmPtkqhnnY75QTFrwNA8-93gmf28qJR1Ak--VRnIKmGj69mpOWdB00HQcrW2rVQXKYGwIksJ7d-wIycb5YYCwveScbDNptBpm1C6IAaaMiNnwg4U6Mnf5BEarwWIi-1XaAdq1S_SoE8WTXk_cVFkYMzjapEL',
      tags: ['Go', 'Terraform', 'AWS', 'Kubernetes'],
      category: 'infrastructure',
      year: 2024,
      featured: true,
      metrics: [
        { label: 'Microservices', value: '50+' },
        { label: 'Downtime réduit', value: '90%' }
      ]
    },
    {
      id: 'zero-trust',
      title: 'Zero-Trust Access Gateway',
      description: 'Implémentation d\'une couche d\'accès sécurisée pour les outils internes, remplaçant les VPN legacy avec une architecture Zero-Trust moderne.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKn1_A6miu5HblbvQzH4ysb8qDEjE5Yif3D-cIGtWLrL31EFTlRlnRVKh0gR-TZOWxs9_3-JZUIETgVqiVb4aHJMZ9dnDeJp86bVjAdMzBRWk1npzK3v8jRBt1NMXdDgn7TQ25AtihhwlGytNsZ5sQQYAULSD3wGx_pSQdOrMW9xbVbHCmMbTpV179QeybeMsa07BHzW9DjZ56rRrMgVUwpPCRQh9X7CtiimWU4d7NPYoJ7RhtPlKQxNiI_PQu83yma0RvPmVYNWAs',
      tags: ['Rust', 'gRPC', 'Security', 'OAuth'],
      category: 'security',
      year: 2024,
      featured: true,
      metrics: [
        { label: 'Latence', value: '<10ms' },
        { label: 'Utilisateurs', value: '500+' }
      ]
    },
    {
      id: 'observability-platform',
      title: 'Plateforme d\'Observabilité',
      description: 'Stack de monitoring unifié combinant métriques, logs et traces pour une visibilité complète sur l\'infrastructure et les applications.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSQz99iRzh8z3R4nCJ2mHLCJaXVOlf7LH4j8mKWsVEG4kcJF0mYqtHvJAOGRj2I9GJrjWKS9Z6OQFHaGGgRqLXcXUe8N9yrBwBWI2ksV1DXYVvpFJiKEw-Jq9OYXxzGFNRwKYT2Z4LQVVNqg',
      tags: ['Prometheus', 'Grafana', 'Loki', 'Tempo'],
      category: 'devops',
      year: 2023,
      featured: false,
      metrics: [
        { label: 'Métriques/sec', value: '1M+' },
        { label: 'Retention', value: '90 jours' }
      ]
    },
    {
      id: 'api-gateway',
      title: 'API Gateway Haute Performance',
      description: 'Gateway centralisée pour microservices avec rate limiting, authentification, et routing intelligent.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5vXIzCuqYLT8Rv7X3Vy8TjXSGV8fVnlF7_KrqpI0TL2NlZH7rnpXvwMsI2NvgXKYzrqPPXpBqJlZ5N3YoL8qF4Z1nKEBY4Z2G7VjJ',
      tags: ['Go', 'Redis', 'gRPC', 'REST'],
      category: 'backend',
      year: 2023,
      featured: false,
      metrics: [
        { label: 'Requêtes/sec', value: '100K+' },
        { label: 'P99 Latency', value: '5ms' }
      ]
    },
    {
      id: 'ci-cd-platform',
      title: 'Plateforme CI/CD Self-Service',
      description: 'Plateforme de déploiement permettant aux équipes de créer et gérer leurs pipelines de manière autonome.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvJ9Fy5vJL5MqX9BQRv8s3LnVHV1WoYB7qIpKF3RvL8tT7J9nHXpBwZKVF2NpXrYQqL5xG8mPnVN9H6oJI4Z2M7KBXY3wF',
      tags: ['GitLab CI', 'ArgoCD', 'Kubernetes', 'Helm'],
      category: 'devops',
      year: 2023,
      featured: true,
      metrics: [
        { label: 'Déploiements/jour', value: '200+' },
        { label: 'Teams', value: '15' }
      ]
    },
    {
      id: 'reliable-ui',
      title: 'ReliableUI Dashboard',
      description: 'Dashboard open-source pour visualiser la santé des microservices en temps réel avec alerting intelligent.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCb8qZP5V7KvXYF3nBL9M7RoWpHT5vJ2qI8sNfK6LgX4rYH1mZW3tUoEJN5K8qF9pXvL7yG2nMbVJ6I3oRH',
      tags: ['React', 'TypeScript', 'D3.js', 'WebSocket'],
      category: 'frontend',
      year: 2024,
      featured: false,
      metrics: [
        { label: 'Stars GitHub', value: '2.5K' },
        { label: 'Contributors', value: '25' }
      ]
    }
  ];

  get filteredProjects(): Project[] {
    let filtered = this.projects;

    // Filter by category
    if (this.activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === this.activeCategory);
    }

    // Filter by search query
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.tags.some(t => t.toLowerCase().includes(query))
      );
    }

    // Sort
    if (this.sortBy === 'recent') {
      filtered = [...filtered].sort((a, b) => b.year - a.year);
    } else if (this.sortBy === 'featured') {
      filtered = [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }

  get featuredProjects(): Project[] {
    return this.projects.filter(p => p.featured);
  }

  setCategory(category: string): void {
    this.activeCategory = category;
  }

  getCategoryIcon(categoryId: string): string {
    return this.categories.find(c => c.id === categoryId)?.icon || 'folder';
  }
}
