import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../shared/services/portfolio-data.service';
import { ButtonComponent } from '../../shared';
import { TimelineEvent } from '../../shared/models';

interface TimelineItem {
  id: string;
  type: 'alternance' | 'standalone';
  startDate: string;
  endDate: string | null;
  current: boolean;
  education?: TimelineEvent;
  job?: TimelineEvent;
  event?: TimelineEvent;
}

@Component({
  selector: 'app-career-timeline',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink],
  templateUrl: './career-timeline.component.html',
  styleUrls: ['./career-timeline.component.scss'],
})
export class CareerTimelineComponent {
  private readonly data = inject(PortfolioDataService);
  private readonly router = inject(Router);

  activeFilter = 'all';

  readonly filters = this.data.timelineFilters;
  readonly timelineEvents = this.data.timelineEvents;

  goToSkills(): void {
    this.router.navigate(['/skills']);
  }

  goToContact(): void {
    this.router.navigate(['/contact']);
  }

  get filteredEvents(): TimelineEvent[] {
    if (this.activeFilter === 'all') return this.timelineEvents;
    return this.timelineEvents.filter((e) => e.type === this.activeFilter);
  }

  get groupedTimelineItems(): TimelineItem[] {
    const processed = new Set<string>();
    const items: TimelineItem[] = [];
    const eventsToProcess = this.filteredEvents;

    for (const event of eventsToProcess) {
      if (processed.has(event.id)) continue;

      if (event.linkedTo) {
        const linkedEvent = this.timelineEvents.find((e) => e.id === event.linkedTo);
        const linkedInFiltered = eventsToProcess.find((e) => e.id === event.linkedTo);

        if (linkedEvent && linkedInFiltered && !processed.has(linkedEvent.id)) {
          const education = event.type === 'education' ? event : linkedEvent;
          const job = event.type === 'job' ? event : linkedEvent;

          items.push({
            id: `alternance-${event.id}-${linkedEvent.id}`,
            type: 'alternance',
            startDate: event.startDate,
            endDate: event.endDate,
            current: event.current || linkedEvent.current,
            education,
            job,
          });

          processed.add(event.id);
          processed.add(linkedEvent.id);
        } else {
          items.push({
            id: `standalone-${event.id}`,
            type: 'standalone',
            startDate: event.startDate,
            endDate: event.endDate,
            current: event.current,
            event,
          });
          processed.add(event.id);
        }
      } else {
        items.push({
          id: `standalone-${event.id}`,
          type: 'standalone',
          startDate: event.startDate,
          endDate: event.endDate,
          current: event.current,
          event,
        });
        processed.add(event.id);
      }
    }

    return items;
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

  formatDateRange(event: TimelineEvent): string {
    return this.data.formatDateRange(event);
  }

  getTypeLabel(type: string): string {
    return this.data.getTypeLabel(type);
  }
}
