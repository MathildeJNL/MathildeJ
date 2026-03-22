import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-badge.component.html',
})
export class IconBadgeComponent {
  @Input() icon = '';
  @Input() colorClass = 'text-brand-blue';
  @Input() bgClass = 'bg-brand-blue/10';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  get sizeClass(): string {
    switch (this.size) {
      case 'sm':
        return 'w-8 h-8';
      case 'lg':
        return 'w-16 h-16 rounded-xl';
      default:
        return 'w-12 h-12';
    }
  }

  get iconSizeClass(): string {
    switch (this.size) {
      case 'sm':
        return 'text-lg';
      case 'lg':
        return 'text-3xl';
      default:
        return 'text-2xl';
    }
  }
}
