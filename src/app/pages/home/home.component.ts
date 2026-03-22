import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../shared/services/portfolio-data.service';
import { ButtonComponent } from '../../shared';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private readonly data = inject(PortfolioDataService);
  private readonly router = inject(Router);

  readonly isOpenToWork = true;
  readonly name = 'Mathilde';
  readonly title = 'Développeuse Full-Stack.';
  readonly tagline = "Développeuse junior, passionnée par la création d'applications modernes, fiables et élégantes.";
  readonly profileImageUrl = 'assets/images/pp2.jpg';

  readonly techStack = this.data.homeTechStack;
  readonly values = this.data.homeValues;
  readonly aboutParagraphs = this.data.homeAboutParagraphs;
  readonly currentProject = this.data.homeCurrentProject;
  readonly softSkills = this.data.homeSoftSkills;
  readonly interests = this.data.homeInterests;
  readonly facts = this.data.homeFacts;
  readonly projects = this.data.homeProjectPreviews;

  goToProjects(): void {
    this.router.navigate(['/projects']);
  }

  goToContact(): void {
    this.router.navigate(['/contact']);
  }
}
