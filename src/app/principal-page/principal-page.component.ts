import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.scss']
})
export class PrincipalPageComponent implements OnInit {


  imageUrlArray: any[] = [
    {url: 'assets/img/home/hilton.jpg', caption: 'Hotel Hilton San Andres'},
    {url: 'assets/img/home/decameron.jpg', caption: 'DeCameron Santa Marta'},
    {url: 'assets/img/home/decameronvillavicencio.jpg', caption: 'Hotel Botalon Villavicencio'},
    {url: 'assets/img/home/turcobabu.jpg', caption: 'Hotel La Isla Santa Marta'},
  ];
  

  constructor() {
   }

  ngOnInit() {    
  }

}