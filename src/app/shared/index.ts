// Barrel export — shared components
export { SvgComponent } from './components/svg/svg.component';
export { ButtonComponent } from './components/button/button.component';
export { HeroSectionComponent } from './components/hero-section/hero-section.component';
export { StatCardComponent } from './components/stat-card/stat-card.component';
export { FilterBarComponent } from './components/filter-bar/filter-bar.component';
export { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
export { TagListComponent } from './components/tag-list/tag-list.component';
export { CtaSectionComponent } from './components/cta-section/cta-section.component';
export { IconBadgeComponent } from './components/icon-badge/icon-badge.component';
export { SectionComponent } from './components/section/section.component';
export { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
export { NavbarComponent } from './components/navbar/navbar.component';
export { FooterComponent } from './components/footer/footer.component';

// Barrel export — shared models
export * from './models';

// Barrel export — shared services
export { PortfolioDataService } from './services/portfolio-data.service';
export { ThemeService } from './services/theme.service';
export type {
  ProjectGalleryItem,
  ProjectDetail,
  ProjectMetric,
  Challenge,
  Technology,
  Milestone,
} from './services/portfolio-data.service';
