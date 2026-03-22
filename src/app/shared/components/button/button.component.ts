import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SvgComponent } from '../svg/svg.component';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [SvgComponent],
    templateUrl: './button.component.html',
})
export class ButtonComponent {
    @Input() title = '';
    @Input() name?: string;
    @Input() type: 'button' | 'submit' = 'button';
    @Input() svgName?: string;
    @Input() svgSize = 18;
    @Input() class?: string;
    @Input() label = '';
    @Input() color: 'primary' | 'secondary' | 'danger' | 'success' | 'close' = 'secondary';
    @Input() propagate = true;
    @Input() disabled = false;
    @Output() action = new EventEmitter<void>();

    get colorClasses(): string {
        const base = 'btn-hover inline-flex items-center gap-2 h-10 px-4 rounded-lg font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed';
        switch (this.color) {
            case 'primary':
                return `${base} bg-brand-blue text-white shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/40`;
            case 'danger':
                return `${base} bg-brand-pink hover:bg-brand-pink/80 text-white`;
            case 'success':
                return `${base} bg-brand-green hover:bg-brand-green/80 text-white`;
            case 'close':
                return `${base} bg-transparent hover:bg-brand-surface text-brand-muted hover:text-brand-text`;
            default:
                return `${base} bg-brand-surface border border-brand-border hover:bg-brand-border text-brand-text`;
        }
    }

    click(event: MouseEvent): void {
        if (!this.propagate) {
            event.stopPropagation();
            event.preventDefault();
        }
        this.action.emit();
    }
}
