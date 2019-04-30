import { Injectable } from '@angular/core';
import { IGame } from './game';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GameService {

    private gameUrl;
    constructor(private http: HttpClient) {


    }
    getGames(): IGame[] {
        return [
            {
                "naam": 'Schaken',
                "minspelers": 2,
                "maxspelers": 2,
                "imageUrl": "https://www.spelregels.eu/wp-content/uploads/2018/01/spelregels-schaken.jpg"
            },
            {

                "naam": 'Runebound',
                "minspelers": 2,
                "maxspelers": 4,
                "imageUrl": "https://s.s-bol.com/imgbase0/imagebase3/large/FC/3/9/1/9/9200000049959193.jpg"
            },
            {
                "naam": 'Le Havre',
                "minspelers": 1,
                "maxspelers": 5,
                "imageUrl": "https://www.999games.nl/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/L/e/Le_Havre.png"
            },
            {
                "naam": 'Grand Austria Hotel',
                "minspelers": 2,
                "maxspelers": 4,
                "imageUrl": "https://cf.geekdo-images.com/itemrep/img/M4kKEoLMFiYnUEHQ5TDFQjjq1nQ=/fit-in/246x300/pic2728138.jpg"
            }
        ];
    }

}
