import { Component } from '@angular/core';
import {WishItem} from "../../modules/WishItem";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
    items: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Learn React', false),
    new WishItem('Learn Vue', false),
    new WishItem('Learn Svelte', true),
    new WishItem('Learn Web Components', true)
  ];
  filterStatus: string = 'all';
  get filteredItems(): WishItem[] {

  if (this.filterStatus === 'completed') {
      return this.items.filter(item => item.isCompleted);
  } else if (this.filterStatus === 'notCompleted') {
      return this.items.filter(item => !item.isCompleted);
  }
  
    return this.items;
  


};
  newItemText: string ='';
  protected title = 'AngularProject1';


 

  addItem():void {
    if (this.newItemText.trim()) {
      this.items.push(new WishItem(this.newItemText.trim()));
      this.newItemText = '';
    }
    console.log(this.items);
  }
 
}
