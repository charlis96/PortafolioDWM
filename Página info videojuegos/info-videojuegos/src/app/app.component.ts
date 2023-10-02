import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'info-videojuegos';

    search: string = "";

    handleSearch(searchText: string) {
        console.log(searchText);
        this.search = searchText;
    }
}
