import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../shared/services/portfolio-data.service';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { StatCardComponent } from '../../shared/components/stat-card/stat-card.component';
import { FilterBarComponent } from '../../shared/components/filter-bar/filter-bar.component';
import { CtaSectionComponent } from '../../shared/components/cta-section/cta-section.component';
import { ButtonComponent } from '../../shared';
import { SkillCategory } from '../../shared/models';

@Component({
  selector: 'app-skills-overview',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroSectionComponent, StatCardComponent, FilterBarComponent, CtaSectionComponent, ButtonComponent],
  templateUrl: './skills-overview.component.html',
  styleUrls: ['./skills-overview.component.scss'],
})
export class SkillsOverviewComponent {
  private readonly data = inject(PortfolioDataService);
  private readonly router = inject(Router);

  readonly stats = this.data.skillStats;
  readonly filters = this.data.skillFilters;
  readonly skillCategories = this.data.skillCategories;
  readonly certifications = this.data.certifications;
  readonly currentlyLearning = this.data.currentlyLearning;

  activeFilter = 'all';

  get filteredCategories(): SkillCategory[] {
    if (this.activeFilter === 'all') return this.skillCategories;
    return this.skillCategories.filter((cat) => cat.id === this.activeFilter);
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

  goToProjects(): void {
    this.router.navigate(['/projects']);
  }

  goToContact(): void {
    this.router.navigate(['/contact']);
  }
}
