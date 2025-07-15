import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishList } from './wish-list/wish-list';
import { AddWishForm } from './add-wish-form/add-wish-form';
import { WishFilter } from './wish-filter/wish-filter';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Wish } from './wish';

@NgModule({
  declarations: [
    WishList,
    AddWishForm,
    WishFilter,
    Wish
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    Wish
  ]
})
export class WishModule { }
