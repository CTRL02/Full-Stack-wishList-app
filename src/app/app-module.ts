import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { HttpErrorInterceptor } from './Services/HttpErrorInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { WishModule } from './wish/wish-module';
import { ContactModule } from './contact/contact-module';
import { NavMenuModule } from './nav-menu/nav-menu-module';
import { RandomModule } from './random/random-module';
import { NotFound } from './not-found/not-found';


@NgModule({
  declarations: [
    App,
    NotFound
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WishModule,
    ContactModule,
    NavMenuModule,
    RandomModule

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
