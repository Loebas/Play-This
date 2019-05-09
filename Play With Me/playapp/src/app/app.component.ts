import { Component } from '@angular/core';
import { GAMES } from './mock-games';
import { GameDataService } from './game-data.service';
import { Game } from './game/game';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'playapp';



}
