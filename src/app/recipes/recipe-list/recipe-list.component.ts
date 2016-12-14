import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy','Dummy','https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSmVRuVfirCIL6YHo_h6P9x4jdhcvJF-Y11Bijb4539zReDrY61');

  constructor() { }

  ngOnInit() {
  }
  
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
