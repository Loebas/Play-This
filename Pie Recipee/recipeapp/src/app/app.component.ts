import { Component, Input } from '@angular/core';
import { RECIPES } from './mock-recipes';
import { Recipe } from './recipe/recipe.model';
import { RecipeDataService } from './recipe-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recipes = RECIPES;
  filterWaarde: string;

  constructor(private _recipeDataService: RecipeDataService) {



  }



  applyFilter(filterWaarde: string) {

    this.filterWaarde = filterWaarde;


  }

  getRecipes(): Recipe[] {
    return this._recipeDataService.recipes;
  }

  addNewRecipe(recipe: Recipe) {
    this._recipeDataService.addNewRecipe(recipe);
  }
}
