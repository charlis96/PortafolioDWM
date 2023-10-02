import { Component, Input, HostListener, EventEmitter, Output } from '@angular/core';
import { Game } from '../game-response-model';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})

export class ModalComponent {

    @Input() game?: Game;

    @Output() closeModalEvent = new EventEmitter<void>();

    @HostListener('document:keydown.escape', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        this.closeModal();
    }

    closeModal() {
        this.closeModalEvent.emit();
    }

    constructor() { }

}
