import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WishItem } from '../modules/WishItem';


@Injectable({
    providedIn: 'root'
})
export class EventBusService {
    private deleteItemSource = new Subject<WishItem>();
    deleteItem$ = this.deleteItemSource.asObservable();

    emitDeleteItem(item: WishItem) {
        this.deleteItemSource.next(item);
    }
}
