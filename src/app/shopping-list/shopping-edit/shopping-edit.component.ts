import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Input()
  selectedIngredient: number;

  @Output()
  deleteSelectedEl = new EventEmitter<number>();

  @Output()
  outNameAndAmount = new EventEmitter<Ingredient>();

  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  onAdd() {
      const newIngredient = new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value);
      this.outNameAndAmount.emit(newIngredient);
  }

  onDelete() {
    this.deleteSelectedEl.emit(this.selectedIngredient);
  }

  onClear() {
    this.name.nativeElement.value = '';
    this.amount.nativeElement.value = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
