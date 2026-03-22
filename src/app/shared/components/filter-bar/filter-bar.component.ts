import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Filter } from '../../models';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-bar.component.html',
})
export class FilterBarComponent {
  @Input() filters: Filter[] = [];
  @Input() activeFilter = '';
  @Input() maxWidth = '1200px';
  @Output() filterChange = new EventEmitter<string>();
}
