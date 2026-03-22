import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Wrapper for full-width page sections with optional dark background.
 * Replaces the repeated pattern:
 *   <section class="py-N px-4 md:px-8 bg-brand-bg">
 *     <div class="max-w-[X] mx-auto"> ... </div>
 *   </section>
 */
@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section.component.html',
})
export class SectionComponent {
  @Input() heading = '';
  @Input() subheading = '';
  @Input() centerHeading = true;
  @Input() altBg = false;
  @Input() maxWidth = '1200px';
  @Input() padding: 'sm' | 'md' | 'lg' = 'md';

  get paddingClass(): string {
    switch (this.padding) {
      case 'sm':
        return 'py-8';
      case 'lg':
        return 'py-20';
      default:
        return 'py-16';
    }
  }
}
