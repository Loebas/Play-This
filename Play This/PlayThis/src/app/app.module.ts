import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './games/game-list.component';
import { FormsModule } from '@angular/forms';
import { KapselStringIn } from './games/KapselStringIn';



@NgModule({
  declarations: [
    AppComponent, GameListComponent, KapselStringIn
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
