import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenu } from '../nav-menu/nav-menu';



@NgModule({
  declarations: [
    NavMenu
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavMenu
  ]
})
export class NavMenuModule { }
