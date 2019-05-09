import { Component } from '@angular/core';
import { RECIPES } from './mock-recipes';
import { Recipe } from './recipe.model';
import { RecipeDataService } from './recipe-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  filterRecipeName: string;
  title = 'recipeapp';

  constructor(private _recipeDataService: RecipeDataService) {
  }

  get recipes(): Recipe[] {
    return this._recipeDataService.recipes;
  }

  addNewRecipe(rec: Recipe) {
    this._recipeDataService.addNewRecipe(rec);
  }

  applyFilter(filterTerm: string) {
    this.filterRecipeName = filterTerm;

  }

}
