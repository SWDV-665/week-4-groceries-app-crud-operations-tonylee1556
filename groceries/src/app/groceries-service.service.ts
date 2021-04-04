import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {
  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Rice",
      quantity: 2
    },
    {
      name: "Butter",
      quantity: 3
    },
    {
      name: "Pancake",
      quantity: 10
    },
    {
      name: "egg",
      quantity: 12
    },
  ];
  constructor() { }
  removeItem(index) {
    this.items.splice(index, 1);
  }
  editItem(item,index){
    this.items[index] = item;
  }
  addItem(item){
    this.items.push(item);
  }
  getItem(){
    return this.items;
  }
}
