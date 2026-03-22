import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { PortfolioDataService } from '../../shared/services/portfolio-data.service';
import { SkillCategory } from '../../shared/models';

@Component({
  selector: 'app-skill-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.scss'],
})
export class SkillDetailComponent implements OnInit {
  private readonly data = inject(PortfolioDataService);
  private readonly route = inject(ActivatedRoute);

  skillId = '';
  skill: SkillCategory | null = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.skillId = params.get('id') || '';
      this.skill = this.data.getSkillCategoryById(this.skillId) ?? null;
    });
  }

  getLevelLabel(level: number): string {
    return this.data.getLevelLabel(level);
  }
}
