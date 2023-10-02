import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Component, Input } from '@angular/core';
import { GameService } from '../game.service';
import { GameResponseModel, Game } from '../game-response-model';

@Component({
    selector: 'app-principal',
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.css']
})

export class PrincipalComponent implements OnInit, OnChanges {

    gameResponse: GameResponseModel = {
        count: 0,
        next: "",
        previous: "",
        results: []
    };

    game: Game = {
        id: 0,
        name: "",
        rating: 0,
        image: "",
        details: ""
    };

    @Input() search: string = "";

    showModal: boolean = false;

    constructor(private gameService: GameService) { }

    ngOnInit(): void {
        this.getGames();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.gameService.searchGame(changes['search'].currentValue).subscribe(games => (this.gameResponse = games));
    }

    getGames(): void {
        this.gameService.searchGame(this.search).subscribe(games => (this.gameResponse = games));
    }

    getGameDetails(id: string): void {
        this.gameService.getGameDetails(id).subscribe(game => (
            this.game.name = game.name,
            this.game.rating = game.rating,
            this.game.image = game.background_image,
            this.game.details = game.description
        ));
        this.showModal = true;
    }

    receiveId(id: number) {
        this.game.id = id;
        this.getGameDetails(this.game.id.toString());
    }

    closeModal() {
        this.showModal = false;
    }


}
