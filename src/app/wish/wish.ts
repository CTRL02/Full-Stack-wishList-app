import { Component } from '@angular/core';
import { Wishtlist } from './wishtlist';
import { ErrorService } from '../Services/ErrorService';
import { WishItem } from "../../../modules/WishItem";
import { EventBusService } from '../../../Services/EventBusService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wish',
  standalone: false,
  templateUrl: './wish.html',
  styleUrl: './wish.css'
})
export class Wish {
  items: WishItem[] = [];
  filterStatus: string = 'all';
  private subscription: Subscription[] = [];


  constructor(private eventBus: EventBusService, private wishList: Wishtlist, private errorService: ErrorService) { }

  ngOnInit(): void {
    this.subscription.push(this.wishList.getWishList().subscribe(data => this.items = data));

   


    this.subscription.push(this.eventBus.deleteItem$.subscribe((itemToDelete) => {
      this.items = this.items.filter(item => item !== itemToDelete);
    }));
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub => sub.unsubscribe());
  }
  get filteredItems(): WishItem[] {

    if (this.filterStatus === 'completed') {
      return this.items.filter(item => item.isCompleted);
    } else if (this.filterStatus === 'notCompleted') {
      return this.items.filter(item => !item.isCompleted);
    }

    return this.items;



  };
 
}
