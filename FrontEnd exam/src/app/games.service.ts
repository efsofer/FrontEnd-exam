import { Injectable } from "@angular/core";
import { Game } from "./Models/game.model";

@Injectable({
    providedIn: 'root',
   })
export class GamesService {
    private games: Game[] = [];

    getGames(): Game[] {
        return this.games;
    }

    addGame(game: Game): void {
        this.games.push(game);
    }
}
