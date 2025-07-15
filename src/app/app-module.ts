import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { WishList } from './wish-list/wish-list';
import { AddWishForm } from './add-wish-form/add-wish-form';
import { WishFilter } from './wish-filter/wish-filter';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorInterceptor } from './Services/HttpErrorInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    App,
    WishList,
    AddWishForm,
    WishFilter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
