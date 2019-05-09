import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './games/game-list.component';
import { FormsModule } from '@angular/forms';
import { KapselStringIn } from './games/KapselStringIn';
import { VentjesComponent } from './games/shared/ventjes.component';
import { HttpClientModule } from '@angular/common/http';
import { GameDetailComponent } from './games/game-detail.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameDetailGuard } from './games/game-detail.guard';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent, GameListComponent, KapselStringIn, VentjesComponent, GameDetailComponent, WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
    ,
    //fake de communicatie met server
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
    , RouterModule.forRoot([
      { path: 'games', component: GameListComponent },
      {
        path: 'games/:id', component: GameDetailComponent,
        canActivate: [GameDetailGuard]

      },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'games', pathMatch: 'full' },
      { path: '**', redirectTo: 'games', pathMatch: 'full' }

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
