import { Component } from '@angular/core';
import {WishItem} from "../../modules/WishItem";
import { FormsModule } from '@angular/forms';
import { EventBusService } from '../../Services/EventBusService';
import { Subscription } from 'rxjs';
import { Wishtlist } from './wishtlist';
import { ErrorService } from './Services/ErrorService';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  items: WishItem[] = [];
  filterStatus: string = 'all';
  private subscription: Subscription[] = [];
  errorMessage: string | null = null;

  constructor(private eventBus: EventBusService , private wishList: Wishtlist , private errorService: ErrorService) { }

  ngOnInit(): void {
    this.subscription.push(this.wishList.getWishList().subscribe(data => this.items = data));

    this.subscription.push(
      this.errorService.error$.subscribe(message => {
        this.errorMessage = message;
      })
    );


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
  protected title = 'AngularProject1';


 

 
 
}
