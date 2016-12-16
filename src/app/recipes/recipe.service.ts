import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from './ingredient';

@Injectable()
export class RecipeService {
  
  private recipes: Recipe[] = [
  new Recipe('Schnitzel','very tasty','http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',[
    new Ingredient('French Fires', 2),
    new Ingredient('Meat', 1)]),
  new Recipe('Summer salad','okayish','http://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/beetroot-feta-grain-salad.jpg',[])
  ];

  constructor() { }
  
  getRecipes() {
    return this.recipes;
  }

}
