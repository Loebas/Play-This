import { Component, OnInit } from '@angular/core';
import { IGame } from './game';

@Component({
    selector: 'pt-gamelist',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

    /**
     *
     */
    constructor() {
        this.filteredGames = this.games;


    }
    Filter(filterTerm: string): IGame[] {
        return this.games.filter((g: IGame) =>
            g.naam.toLocaleLowerCase().indexOf(filterTerm) !== -1);
    }
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    showImage: boolean = true;
    title: string = 'Spellenlijst van Wouter';


    private _filterTerm: string;
    public get filterTerm(): string {
        return this._filterTerm;
    }
    public set filterTerm(v: string) {
        console.log('Filter geactiveerd op ' && v);
        this._filterTerm = v;
        this.filteredGames = this.filterTerm ? this.Filter(this.filterTerm) : this.games;
    }

    filteredGames: IGame[];
    games: IGame[] = [
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
    ]
    toggleImages(): void {
        this.showImage = !this.showImage
    }
}