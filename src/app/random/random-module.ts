import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Random } from './random';



@NgModule({
  declarations: [
    Random
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Random
  ]
})
export class RandomModule { }
