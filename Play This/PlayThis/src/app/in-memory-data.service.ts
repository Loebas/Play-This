import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  games = [
    {
      "gameId": 1,
      "naam": 'Schaken',
      "minspelers": 2,
      "maxspelers": 2,
      "imageUrl": "https://www.spelregels.eu/wp-content/uploads/2018/01/spelregels-schaken.jpg"
    },
    {
      "gameId": 2,
      "naam": 'Runebound',
      "minspelers": 2,
      "maxspelers": 4,
      "imageUrl": "https://s.s-bol.com/imgbase0/imagebase3/large/FC/3/9/1/9/9200000049959193.jpg"
    },
    {
      "gameId": 3,
      "naam": 'Le Havre',
      "minspelers": 1,
      "maxspelers": 5,
      "imageUrl": "https://www.999games.nl/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/L/e/Le_Havre.png"
    },
    {
      "gameId": 4,
      "naam": 'Grand Austria Hotel',
      "minspelers": 2,
      "maxspelers": 4,
      "imageUrl": "https://cf.geekdo-images.com/itemrep/img/M4kKEoLMFiYnUEHQ5TDFQjjq1nQ=/fit-in/246x300/pic2728138.jpg"
    }

  ];
  /**
   *
   */
  constructor() {



  }
  createDb() {


    alert('db gemaakt met ' + this.games.length + ' spellen')
    return this.games;
  }


}
