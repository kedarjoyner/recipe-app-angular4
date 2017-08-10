import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // colon indicates to typescript that we will be indicated the type
  // use array of Recipe object defined in model
  recipes: Recipe[] = [
    //create new Recipe object, which is calling from the constructor in recipe.model.ts
    new Recipe('A Test Recipe', 'This is simply a test', 'https://s-media-cache-ak0.pinimg.com/736x/c0/4e/2f/c04e2f4a2d474a0d02188891cdacc83b--new-york-street-food-new-york-city-food.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
