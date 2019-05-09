import { Injectable } from '@angular/core';
import { RECIPES } from './mock-recipes';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeDataService {

  private _recipes = RECIPES;

  get recipes(): Recipe[] {
    return this._recipes;
  }

  addNewRecipe(rec: Recipe) {
    this._recipes = [...this._recipes, rec];
  }


  constructor() { }
}
