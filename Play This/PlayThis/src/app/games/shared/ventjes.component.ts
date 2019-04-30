import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pt-ventje',
    templateUrl: './ventje.component.html'
})
export class VentjesComponent {

    @Input() ventjes: number;
    @Output() ventjesGeklikt: EventEmitter<string> =
        new EventEmitter<string>();
    onClick(): void {
        this.ventjesGeklikt.emit(`Op ${this.ventjes} geklikt`);
    }

}