import { Injectable } from '@angular/core';
import { Game } from './game';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GameService {
    // URL naar api 
    private gamesUrl = 'api/games';

    constructor(private http: HttpClient) {


    }

    // getGames(): Observable<Game[]> {
    //     return of([
    //         {
    //             "gameId": 1,
    //             "naam": 'Schaken',
    //             "minspelers": 2,
    //             "maxspelers": 2,
    //             "imageUrl": "https://www.spelregels.eu/wp-content/uploads/2018/01/spelregels-schaken.jpg"
    //         },
    //         {
    //             "gameId": 2,
    //             "naam": 'Runebound',
    //             "minspelers": 2,
    //             "maxspelers": 4,
    //             "imageUrl": "https://s.s-bol.com/imgbase0/imagebase3/large/FC/3/9/1/9/9200000049959193.jpg"
    //         }]);
    // }
    getGames(): Observable<Game[]> {
        alert(this.http.get<Game[]>(this.gamesUrl))
        return this.http.get<Game[]>(this.gamesUrl);
    }

}
