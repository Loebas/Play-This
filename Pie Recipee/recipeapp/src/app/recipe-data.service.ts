import { Injectable } from '@angular/core';
import { RECIPES } from './mock-recipes';
import { Recipe } from './recipe/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeDataService {
  private _recipes = RECIPES;



  public get recipes(): Recipe[] {
    return this._recipes;
  }


  constructor() { }
  addNewRecipe(r: Recipe) {
    this._recipes = [...this._recipes, r];

  }
}
