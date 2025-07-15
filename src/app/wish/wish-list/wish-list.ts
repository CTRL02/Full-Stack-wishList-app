import { Component, Input } from '@angular/core';
import { WishItem } from '../../../../modules/WishItem';
import { EventBusService } from '../../../../Services/EventBusService';

@Component({
  selector: 'app-wish-list',
  standalone: false,
  templateUrl: './wish-list.html',
  styleUrl: './wish-list.css'
})
export class WishList {
  @Input() items: WishItem[] = [];
  constructor(private eventBus: EventBusService) { }

  toggleItem(item: WishItem): void {
    item.isCompleted = !item.isCompleted;
    console.log(item);
  }

   isDone(item: WishItem): string {
    return item.isCompleted ? 'strikeout' : '';
  }

  removeWish(item: WishItem): void {
    this.eventBus.emitDeleteItem(item);
  }
}
