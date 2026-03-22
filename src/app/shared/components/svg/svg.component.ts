import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-svg',
    standalone: true,
    imports: [],
    templateUrl: './svg.component.html',
})
export class SvgComponent {
    @Input() name = '';
    @Input() size = 20;
}
