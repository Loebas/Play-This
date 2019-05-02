import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <nav class ='navbar navbar-expand navbar-light bg-light'>
  <a class = 'navbar-brand'>{{pageTitle}}</a>
  <ul class = 'nav nav-pills'>
    <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
    <li><a class='nav-link' [routerLink]="['/games']">Game List</a></li>
    </ul>
  </nav> 
  <div class = 'container'>
  <router-outlet></router-outlet>
  </div>
  `
  //   <div style="text-align:center">
  //     <h1>
  //         TaDa! Welcome to {{title}}!!
  //     </h1>
  //     <pt-gamelist></pt-gamelist>
  // </div> 



  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlayThis';
}
