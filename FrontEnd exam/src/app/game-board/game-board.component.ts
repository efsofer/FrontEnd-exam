import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { GamesService } from '../games.service';
import { Bulb } from '../Models/bulb.model';
import { Game } from '../Models/game.model';
import { Player } from '../Models/player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {


  player: Player = new Player('', 0, [], false, 0);
  stage: number = 1;
  bulbs: Bulb[] = [];
  illuminatedBulbs: number[] = [];
  illuminationFinished = false;
  clicksNumber: number = 0;

  constructor(private gamesService: GamesService, private playerService: PlayerService) { }

  ngOnInit(): void {
    this.player = this.playerService.getPlayer();
    this.bulbs = [
      new Bulb('#00FFFF', false),
      new Bulb('#FFD700', false),
      new Bulb('#FF00FF', false),
      new Bulb('#008000', false),
      new Bulb('#4B0082', false),
      new Bulb('#FF4500', false)];

      
  }

  ngAfterViewInit() {
  }

  onStartGame() {
    this.player.isOnGame = true;
    this.playerService.setPlayer(this.player);
    this.illuminateRandomBulb();
  }

illuminateRandomBulb(){

  let randomIndex = Math.floor(Math.random() *(6));
  this.illuminatedBulbs.push(randomIndex);

    let illuminatedBulbs = this.illuminatedBulbs;
      let i=0;
      let interval = setInterval(() => {
        if( i > this.stage - 1) clearInterval(interval);;
        let b = <HTMLElement>document.getElementById('bulb'+illuminatedBulbs[i]);
        if (b.style.visibility === ''||b.style.visibility === 'visible') {
          b.style.visibility = 'hidden';
        } else {
          b.style.visibility = 'visible';
        } 
        if(b.style.visibility === 'visible') {
          i++;
        }   
    }, 500);

    this.illuminationFinished = true;
  }

  onBulbClicked(indexOfBulb: number): void {
    if(this.illuminationFinished === true) {
      if(indexOfBulb !== this.illuminatedBulbs[this.clicksNumber]){ //if wrong click
        this.setPlayerToFinishGame();
        return;
      }
      this.clicksNumber++;
      if(this.clicksNumber === this.illuminatedBulbs.length){ //if player finished the stage
        this.raisingStage();
        return;
      }

    }
  }

  setPlayerToFinishGame() {
    let date = new Date();
    let game = new Game(this.player.name, date, this.player.currentScores);
    this.gamesService.addGame(game);
    this.player.isOnGame = false;
    this.illuminatedBulbs = [];
    this.clicksNumber = 0;
    this.stage = 1;
    this.player.scoresHistory.push(this.player.currentScores);
    this.player.currentScores = 0;
    this.playerService.setPlayer(this.player);
  }

  raisingStage() {
    this.playerService.addScores(10);
    this.illuminationFinished = false;
    this.stage++;
    this.clicksNumber = 0;
    this.illuminateRandomBulb();
  }

  getBestScore() {
    let max = 0;
    this.gamesService.getGames().forEach(game => {
      if(game.playerName === this.player.name && game.score > max) {
        max = game.score;
      }
    });
    return max;
  }

}


