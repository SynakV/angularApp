import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.recipes;
  }

  onSelect(index: number) {
    this.recipeService.onSelectedItem(index);
  }

}
