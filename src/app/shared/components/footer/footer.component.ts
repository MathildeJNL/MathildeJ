import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  brandName = 'MathildeJ.dev';
  tagline = 'Développeuse passionnée depuis 2020.';
  currentYear = new Date().getFullYear();

  socialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/MathildeJNL', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mathilde-jnl/', icon: 'linkedin' }
  ];

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
