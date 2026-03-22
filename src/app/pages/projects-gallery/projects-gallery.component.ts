import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PortfolioDataService, ProjectGalleryItem } from '../../shared/services/portfolio-data.service';
import { ButtonComponent } from '../../shared';

@Component({
  selector: 'app-projects-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ButtonComponent],
  templateUrl: './projects-gallery.component.html',
  styleUrls: ['./projects-gallery.component.scss'],
})
export class ProjectsGalleryComponent {
  private readonly data = inject(PortfolioDataService);
  private readonly router = inject(Router);

  searchQuery = '';
  activeCategory = 'all';
  sortBy = 'recent';

  readonly categories = this.data.projectCategories;
  readonly projects = this.data.projects;

  get filteredProjects(): ProjectGalleryItem[] {
    let filtered = this.projects as ProjectGalleryItem[];

    if (this.activeCategory !== 'all') {
      filtered = filtered.filter((p) => p.categories.includes(this.activeCategory));
    }

    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query)),
      );
    }

    if (this.sortBy === 'recent') {
      filtered = [...filtered].sort((a, b) => b.year - a.year);
    } else if (this.sortBy === 'featured') {
      filtered = [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }

  get featuredProjects(): ProjectGalleryItem[] {
    return this.projects.filter((p) => p.featured);
  }

  setCategory(category: string): void {
    this.activeCategory = category;
  }

  getCategoryIcon(categoryId: string): string {
    return this.categories.find((c) => c.id === categoryId)?.icon || 'folder';
  }

  goToContact(): void {
    this.router.navigate(['/contact']);
  }
}
