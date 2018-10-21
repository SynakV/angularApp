import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipe = this.recipeService.recipeSelected;
    console.log(this.recipe);
  }

}
