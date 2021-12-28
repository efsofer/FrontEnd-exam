import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Game } from '../Models/game.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  historyGames: Game[] = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
  }

  getOrdinaryHistoryGames(): Game[] {
    return this.gamesService.getGames().sort((a, b) => b.score - a.score);
  }

}
