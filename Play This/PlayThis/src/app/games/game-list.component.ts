import { Component, OnInit } from '@angular/core';
import { Game } from './game';
import { GameService } from './game.service';

@Component({
    //  selector: 'pt-gamelist',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

    /**
     *
     */
    constructor(private gameService: GameService) {



    }
    Filter(filterTerm: string): Game[] {
        return this.games.filter((g: Game) =>
            g.naam.toLocaleLowerCase().indexOf(filterTerm) !== -1);
    }
    ngOnInit(): void {
        this.gameService.getGames().subscribe(g => this.games = g);

        this.filteredGames = this.games;


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

    filteredGames: Game[];
    games: Game[];
    toggleImages(): void {
        this.showImage = !this.showImage
    }
    onVentjesGeklikt(message: string): void {
        this.title = message;
    }
}