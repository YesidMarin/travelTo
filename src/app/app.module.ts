import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { HotelService } from './hotel.service';
import { Page404Component } from './page404/page404.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalPageComponent,
    Page404Component,
    HotelsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
