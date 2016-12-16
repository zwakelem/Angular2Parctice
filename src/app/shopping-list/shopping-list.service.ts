import { Ingredient } from '../recipes/ingredient';

export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() { }
  
  getItems() {
    return this.items;
  }

  //add all the items passed to this method to the this.items
  addItems(items: Ingredient[]) {
    Array.prototype.push.apply(this.items, items);
  }
}
