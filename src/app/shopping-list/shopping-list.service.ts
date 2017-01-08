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
  
  addItem(item : Ingredient) {
    this.items.push(item);
  }
  
  editItem(oldItem: Ingredient, newItem: Ingredient) {
    this.items[this.items.indexOf(oldItem)] = newItem;
  }
  
  deleteItem(item: Ingredient) {
    this.items.splice(this.items.indexOf(item),1);
  }
}
