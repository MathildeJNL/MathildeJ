import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat-card.component.html',
})
export class StatCardComponent {
  @Input() icon = '';
  @Input() value = '';
  @Input() label = '';
  @Input() colorClass = 'text-brand-blue';
}
