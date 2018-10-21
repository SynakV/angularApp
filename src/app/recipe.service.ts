import { Injectable } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected: Recipe;

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  onSelectedItem(index: number) {
    this.recipeSelected = this.recipes[index];
    console.log(this.recipeSelected);
  }

}
