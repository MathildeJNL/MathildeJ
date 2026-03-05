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
  categories: string[];
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
    { id: 'backend', label: 'Backend', icon: 'database' },
    { id: 'frontend', label: 'Frontend', icon: 'web' }
  ];

  projects: Project[] = [
    {
      id: 'openclassrooms-2',
      title: 'Transformer une maquette en site web avec HTML & CSS',
      description: 'Intégration d\'une maquette de site responsive en utilisant HTML et CSS.',
      imageUrl: 'assets/images/projects/booki.png',
      tags: ['HTML', 'CSS', 'Responsive'],
      categories: ['frontend'],
      year: 2021,
      featured: false,
      metrics: [
        { label: 'Formation', value: 'OpenClassrooms' }
      ]
    },
    {
      id: 'openclassrooms-3',
      title: 'Dynamiser une page web avec des animations CSS',
      description: 'Création d\'animations CSS avancées, approche mobile-first et utilisation d\'un système de versioning.',
      imageUrl: 'assets/images/projects/ohmyfood_.png',
      tags: ['CSS', 'Animations', 'Git', 'Mobile-first'],
      categories: ['frontend'],
      year: 2022,
      featured: false,
      metrics: [
        { label: 'Formation', value: 'OpenClassrooms' }
      ]
    },
    {
      id: 'openclassrooms-4',
      title: 'Optimiser un site web existant',
      description: 'Amélioration du SEO, de l\'accessibilité et optimisation globale des performances du site.',
      imageUrl: 'assets/images/projects/chouette-agence.png',
      tags: ['SEO', 'Accessibilité', 'Performance'],
      categories: ['frontend'],
      year: 2022,
      featured: false,
      metrics: [
        { label: 'Formation', value: 'OpenClassrooms' }
      ]
    },
    {
      id: 'openclassrooms-5',
      title: 'Construire un site de e-commerce en Javascript',
      description: 'Développement d\'un site e-commerce en manipulant une API et le DOM, et mise en place d\'un plan de test.',
      imageUrl: 'assets/images/projects/kanap.png',
      tags: ['JavaScript', 'API', 'DOM', 'Tests'],
      categories: ['frontend', 'backend'],
      year: 2022,
      featured: false,
      metrics: [
        { label: 'Formation', value: 'OpenClassrooms' }
      ]
    },
    {
      id: 'openclassrooms-6',
      title: 'Construire une API sécurisée pour une application d\'avis gastronomique',
      description: 'Création d\'une API REST sécurisée avec NodeJS et MongoDB.',
      imageUrl: 'assets/images/projects/piiquante.png',
      tags: ['NodeJS', 'MongoDB', 'Sécurité', 'API'],
      categories: ['backend', 'frontend'],
      year: 2022,
      featured: false,
      metrics: [
        { label: 'Formation', value: 'OpenClassrooms' }
      ]
    },
    {
      id: 'openclassrooms-7',
      title: 'Créez un réseau social d\'entreprise',
      description: 'Développement d\'un réseau social interne avec VueJS (CRUD) et Base de données SQL.',
      imageUrl: 'assets/images/projects/groupomania.png',
      tags: ['VueJS', 'SQL', 'CRUD'],
      categories: ['frontend', 'backend'],
      year: 2022,
      featured: true,
      metrics: [
        { label: 'Formation', value: 'OpenClassrooms' }
      ]
    }
  ];

  get filteredProjects(): Project[] {
    let filtered = this.projects;

    // Filter by category
    if (this.activeCategory !== 'all') {
      filtered = filtered.filter(p => p.categories.includes(this.activeCategory));
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
