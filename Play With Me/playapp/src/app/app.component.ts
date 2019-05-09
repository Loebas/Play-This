import { Component } from '@angular/core';
import { GAMES } from './mock-games';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'playapp';

  games = GAMES;
}
