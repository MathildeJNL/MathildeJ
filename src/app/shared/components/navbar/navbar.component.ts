import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface SubNavItem {
  label: string;
  path: string;
  icon: string;
}

interface NavItem {
  label: string;
  path: string;
  children?: SubNavItem[];
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  brandName = 'MathildeJ.dev';
  isMobileMenuOpen = false;
  openDropdown: string | null = null;
  expandedMobileItems: Set<string> = new Set();

  navItems: NavItem[] = [
    { label: 'Accueil', path: '/' },
    {
      label: 'Compétences',
      path: '/skills',
      children: [
        { label: 'Frontend', path: '/skills/frontend', icon: 'web' },
        { label: 'Backend & APIs', path: '/skills/backend', icon: 'database' },
        { label: 'Bases de données', path: '/skills/databases', icon: 'storage' },
        { label: 'Outils & Workflow', path: '/skills/tools', icon: 'build' },
        { label: 'Design & Intégration', path: '/skills/design', icon: 'palette' },
        { label: 'Soft Skills', path: '/skills/soft-skills', icon: 'psychology' }
      ]
    },
    {
      label: 'Projets',
      path: '/projects',
      children: [
        { label: 'Backend', path: '/projects?category=backend', icon: 'database' },
        { label: 'Frontend', path: '/projects?category=frontend', icon: 'web' }
      ]
    },
    { label: 'Parcours', path: '/timeline' }
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.expandedMobileItems.clear();
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.expandedMobileItems.clear();
  }

  toggleDropdown(label: string): void {
    this.openDropdown = this.openDropdown === label ? null : label;
  }

  closeDropdown(): void {
    this.openDropdown = null;
  }

  toggleMobileExpand(label: string): void {
    if (this.expandedMobileItems.has(label)) {
      this.expandedMobileItems.delete(label);
    } else {
      this.expandedMobileItems.add(label);
    }
  }

  isMobileExpanded(label: string): boolean {
    return this.expandedMobileItems.has(label);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown-container')) {
      this.openDropdown = null;
    }
  }
}
