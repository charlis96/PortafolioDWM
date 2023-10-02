import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {

    @Output() searchTextEmitted: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    handleInput(event: KeyboardEvent, value: string) {
        if (event.key === 'Enter') {
            this.emitSearchText(value);
        }
    }

    handleButtonClick(value: string) {
        this.emitSearchText(value);
    }

    private emitSearchText(value: string) {
        this.searchTextEmitted.emit(value);
    }

}
