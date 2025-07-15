import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from './contact';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Contact
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    Contact
  ]
})
export class ContactModule { }
