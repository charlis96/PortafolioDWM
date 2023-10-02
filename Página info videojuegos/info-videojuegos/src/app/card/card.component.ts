import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Result } from '../game-response-model';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent {

    @Input() game?: Result;
    details?: string;
    showModal: boolean = false;

    constructor() { }

    @Output() idEmitted: EventEmitter<number> = new EventEmitter<number>();

    sendId() {
        let id = this.game?.id;
        this.idEmitted.emit(id);
    }
}
