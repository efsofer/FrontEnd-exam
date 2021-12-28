import { Injectable } from "@angular/core";
import { Player } from "./Models/player.model";

@Injectable({
    providedIn: 'root',
   })
export class PlayerService{
    private player = new Player('', 0 , [], false, 0);

    ngOnInit() {
        let max = 0;
        this.player.scoresHistory.forEach(score => {
            if(score > max) { max = score; }
        });
        this.player.bestScore = max;
    }

    setPlayer(player: Player) {
        this.player = player;
    }

    getPlayer() {
        return this.player;
    }

    addScores(numOfScores: number) {
        this.player.currentScores += numOfScores;
    }

    getBestScore(): number {
        let max = 0;
        this.player.scoresHistory.forEach(score => {
            if (score > max) {
                max = score;
            }
        });
        return max;
    }

    
}