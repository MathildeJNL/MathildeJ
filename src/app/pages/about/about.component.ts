import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../shared/services/portfolio-data.service';
import { ButtonComponent } from '../../shared';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule, RouterLink, ButtonComponent],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
    private readonly data = inject(PortfolioDataService);
    private readonly router = inject(Router);

    readonly profileImageUrl = 'assets/images/pp2.jpg';
    readonly introParagraphs = this.data.aboutIntroParagraphs;
    readonly values = this.data.aboutValues;
    readonly professionalProject = this.data.aboutProfessionalProject;
    readonly qualities = this.data.aboutQualities;
    readonly interests = this.data.aboutInterests;
    readonly softSkills = this.data.homeSoftSkills;

    goToContact(): void {
        this.router.navigate(['/contact']);
    }

    goToSkills(): void {
        this.router.navigate(['/skills']);
    }
}
