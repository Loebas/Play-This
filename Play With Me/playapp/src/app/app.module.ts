import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameComponent } from './game/game.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameFilterPipe } from './game-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameComponent,
    GameDetailComponent,
    GameFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }