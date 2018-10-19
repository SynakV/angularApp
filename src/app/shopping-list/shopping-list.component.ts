import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  selectedIngredientOut: number;

  onAdded(nameAndAmount: Ingredient) {
    this.ingredients.push(nameAndAmount);
  }

  deleteSelectedElement(el) {
    this.ingredients.splice(el, 1);
  }

  onIngredientSelect(index) {
    this.selectedIngredientOut = index;
  }

}
