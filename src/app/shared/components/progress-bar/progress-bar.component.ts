import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
})
export class ProgressBarComponent {
  @Input() value = 0;
  @Input() barClass = 'bg-gradient-to-r from-brand-blue to-brand-teal';
  @Input() trackClass = 'bg-brand-bg';
  @Input() height = 8;
}
