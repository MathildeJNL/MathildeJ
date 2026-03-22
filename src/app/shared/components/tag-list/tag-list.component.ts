import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tag-list.component.html',
})
export class TagListComponent {
  @Input() tags: string[] = [];
  @Input() maxDisplay = 0;
  @Input() tagClass = 'bg-brand-bg text-brand-muted';

  get displayedTags(): string[] {
    return this.maxDisplay > 0 ? this.tags.slice(0, this.maxDisplay) : this.tags;
  }
}
