import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  @Input() badgeIcon = '';
  @Input() badgeLabel = '';
  @Input() title = '';
  @Input() titleHighlight = '';
  @Input() description = '';
  @Input() gradientClass = 'from-brand-blue to-brand-purple';
  @Input() bgBlurClass = '';
  @Input() maxWidth = '1000px';
  @Input() hasContent = false;
}
