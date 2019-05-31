import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { HotelService } from './hotel.service';
import {SlideshowModule} from 'ng-simple-slideshow';
import { Page404Component } from './page404/page404.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import {MatToolbarModule, MatButtonModule,MatCardModule} from '@angular/material';
import { HotelsListComponent } from './hotels-list/hotels-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalPageComponent,   
    Page404Component, 
    SlideShowComponent, 
    TopBarComponent,
    HotelsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SlideshowModule,
    [MatToolbarModule, MatButtonModule, MatCardModule]
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
