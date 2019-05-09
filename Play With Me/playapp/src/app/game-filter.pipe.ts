import { Pipe, PipeTransform } from '@angular/core';
import { Game } from './game/game';

@Pipe({
  name: 'gameFilter'
})
export class GameFilterPipe implements PipeTransform {

  transform(games: Game[], naam: string): any {
    if (!naam || naam.length === 0)
      return games;
    return games.filter(g => g.naam.toLowerCase().indexOf(naam.toLowerCase()) != -1);

  }

}
