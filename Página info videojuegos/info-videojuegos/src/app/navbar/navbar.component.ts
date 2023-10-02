import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    @Output() searchTextEmitted: EventEmitter<string> = new EventEmitter<string>();

    handleSearch(searchText: string) {
        this.searchTextEmitted.emit(searchText);
    }

}
