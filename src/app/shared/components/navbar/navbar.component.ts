import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  private readonly data = inject(PortfolioDataService);
  readonly theme = inject(ThemeService);

  brandName = 'Mathilde Jeannolle';
  isMobileMenuOpen = false;
  openDropdown: string | null = null;
  expandedMobileItems: Set<string> = new Set();

  readonly navItems = this.data.navItems;

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
