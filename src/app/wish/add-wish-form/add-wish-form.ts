import { Component, input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../../../modules/WishItem';
@Component({
  selector: 'app-add-wish-form',
  standalone: false,
  templateUrl: './add-wish-form.html',
  styleUrl: './add-wish-form.css'
})
export class AddWishForm {
  @Output() addItem = new EventEmitter<WishItem>();



  newItemText: string = '';


  addItemEvent(): void {
    if (this.newItemText.trim()) {
      this.addItem.emit(new WishItem(this.newItemText.trim()));
      this.newItemText = '';
    }
    console.log(this.addItem);
  }
}
