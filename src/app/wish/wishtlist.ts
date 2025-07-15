import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { WishItem } from '../../../modules/WishItem';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Wishtlist {

  constructor(private http: HttpClient) { }

  getWishList() {
    return this.http.get<WishItem[]>('https://6873626cc75558e273540e6b.mockapi.io/api/v1/wishitems');
  }
  
}
