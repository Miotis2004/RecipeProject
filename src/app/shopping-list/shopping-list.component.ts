import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Ground Beef', 1),
    new Ingredient('Cheddar Cheese (slice)', 4),
    new Ingredient('Salt', .1)
  ];

  constructor() { }

  ngOnInit() {
  }

}
