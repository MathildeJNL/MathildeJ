import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CtaButton } from '../../models';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './cta-section.component.html',
})
export class CtaSectionComponent {
  private readonly router = inject(Router);

  @Input() title = '';
  @Input() description = '';
  @Input() primaryButton: CtaButton | null = null;
  @Input() secondaryButton: CtaButton | null = null;

  navigate(button: CtaButton): void {
    if (button.routerLink) {
      this.router.navigate([button.routerLink]);
    } else if (button.href) {
      window.open(button.href, '_blank', 'noopener,noreferrer');
    }
  }
}
