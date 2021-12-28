import { Component, OnInit, inject, Injectable, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm, FormsModule, } from '@angular/forms';
import { Player } from '../Models/player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  name = '';
  constructor(private router: Router, private playerService: PlayerService) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    let player = new Player(form.value.name, 0, [], false, 0);
    this.playerService.setPlayer(player);
    this.router.navigate(['/game-board-component']);
  }

}
