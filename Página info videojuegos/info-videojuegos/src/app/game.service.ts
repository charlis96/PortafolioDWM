import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameResponseModel } from './game-response-model';
import { GameDetailsModel } from './game-details-model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class GameService {

    constructor(private http: HttpClient) { }

    private apiKey = 'a2cc462b40464c1895564aac66809188';
    private gamesUrl = `https://api.rawg.io/api/games?token&key=${this.apiKey}&page_size=50`;

    getGame(): Observable<GameResponseModel> {
        return this.http.get<GameResponseModel>(this.gamesUrl);
    }

    getGameDetails(id: string): Observable<GameDetailsModel> {
        return this.http.get<GameDetailsModel>(`https://api.rawg.io/api/games/${id}?token&key=${this.apiKey}`)
    }

    searchGame(search: string): Observable<GameResponseModel> {
        if (search === "") {
            // Si la búsqueda es vacía, devuelve los juegos que se muestran cuando se inicia la página.
            return this.http.get<GameResponseModel>(this.gamesUrl);
        }
        return this.http.get<GameResponseModel>(`https://api.rawg.io/api/games?token&key=${this.apiKey}&search=${search}`);
    }
}
