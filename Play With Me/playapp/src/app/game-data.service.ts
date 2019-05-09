import { Injectable } from '@angular/core';
import { GAMES } from './mock-games';
import { Game } from './game/game';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  private _games = GAMES;

  constructor() { }

  get games(): Game[] {
    return this._games;
  }

  addGame(g: Game) {
    this._games.push(g);
  }
}
