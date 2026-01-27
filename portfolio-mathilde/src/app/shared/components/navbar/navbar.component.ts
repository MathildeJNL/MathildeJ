import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  path: string;
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

  navItems: NavItem[] = [
    { label: 'Accueil', path: '/' },
    { label: 'Compétences', path: '/skills' },
    { label: 'Projets', path: '/projects' },
    { label: 'Parcours', path: '/timeline' },
    { label: 'Contact', path: '/contact' }
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
