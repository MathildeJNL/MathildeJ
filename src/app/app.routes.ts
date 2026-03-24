import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('./pages/skills-overview/skills-overview.component').then((m) => m.SkillsOverviewComponent),
  },
  {
    path: 'skills/:id',
    loadComponent: () => import('./pages/skill-detail/skill-detail.component').then((m) => m.SkillDetailComponent),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects-gallery/projects-gallery.component').then((m) => m.ProjectsGalleryComponent),
  },
  {
    path: 'projects/:id',
    loadComponent: () =>
      import('./pages/project-detail/project-detail.component').then((m) => m.ProjectDetailComponent),
  },
  {
    path: 'timeline',
    loadComponent: () =>
      import('./pages/career-timeline/career-timeline.component').then((m) => m.CareerTimelineComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
