import { Component, Input } from '@angular/core';
import { WishItem } from '../../../modules/WishItem';

@Component({
  selector: 'app-wish-list',
  standalone: false,
  templateUrl: './wish-list.html',
  styleUrl: './wish-list.css'
})
export class WishList {
  @Input() items: WishItem[] = [];

  toggleItem(item: WishItem): void {
    item.isCompleted = !item.isCompleted;
    console.log(item);
  }
}
