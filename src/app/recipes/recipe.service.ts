import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';


import { Recipe } from './recipe';
import { Ingredient } from './ingredient';

@Injectable()
export class RecipeService {
  
  recipesChanged = new EventEmitter<Recipe[]>();
  
  private recipes: Recipe[] = [
  new Recipe('Schnitzel','very tasty','http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',[
    new Ingredient('French Fires', 2),
    new Ingredient('Meat', 1)]),
  new Recipe('Summer salad','okayish','http://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/beetroot-feta-grain-salad.jpg',[
    new Ingredient('French Fires', 2),
    new Ingredient('Meat', 1)])
  ];

  constructor(private http: Http) { }
  
  getRecipes() {
    return this.recipes;
  }
  
  getRecipe(id: number) {
    return this.recipes[id];
  }
  
  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }
  
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
  
  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }
  
  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipebook-282b2.firebaseio.com/recipes.json', body,
    {headers: headers})
  }
  
  fetchData() {
    return this.http.get('https://recipebook-282b2.firebaseio.com/recipes.json')
      .map((response : Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      );
  }

}
