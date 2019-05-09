import { Component, OnInit } from '@angular/core';
import { Game } from '../game/game';
import { GAMES } from '../mock-games';
import { GameDataService } from '../game-data.service';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {


  selectedGame: Game;
  gameFilterTerm: string;

  selectGame(g: Game) {
    this.selectedGame = g;
  }

  constructor(private _gameDataService: GameDataService) {

  }

  get games(): Game[] {
    return this._gameDataService.games;
  }

  addGame(g): void {
    this._gameDataService.addGame(g);
  }

  pasFilterToe(term: string) {
    this.gameFilterTerm = term;
  }

  ngOnInit() {


  }

}
