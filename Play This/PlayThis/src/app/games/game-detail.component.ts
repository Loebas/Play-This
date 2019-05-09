import { Component, OnInit } from '@angular/core';
import { Game } from './game';
import { ActivatedRoute, Router } from '@angular/router';


@Component({

  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  game: Game;
  pageTitle: 'Game Detail';
  constructor(private route: ActivatedRoute, private router: Router) { }
  onBack(): void {
    this.router.navigate(['/products']);
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += id;


  }

}


