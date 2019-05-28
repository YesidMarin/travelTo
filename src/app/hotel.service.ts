import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Hotels } from './model/hotel.model';

@Injectable()
export class HotelService {

  hotelsUrl: string;

  constructor(private http: HttpClient) { 
    this.hotelsUrl = environment.dataHotel;
  }

  getHotels(){
    return this.http.get(this.hotelsUrl)
    .toPromise()
    .then(response => response as Hotels[])
    .catch(this.handleError);
  }

  handleError(error: any){
    const errMsg = error.message ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
  }

}
