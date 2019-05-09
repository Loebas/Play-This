import { Component, OnInit } from '@angular/core';
import { Game } from '../game/game';
import { GAMES } from '../mock-games';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games = GAMES;
  selectedGame: Game;

  selectGame(g: Game) {
    this.selectedGame = g;
  }

  constructor() { }

  ngOnInit() {


  }

}
