import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.scss']
})
export class PrincipalPageComponent implements OnInit {


  imageUrlArray: any[] = [
    {url: 'assets/images/hilton.jpg', caption: 'Hotel Hilton San Andres'},
    {url: 'assets/images/decameron.jpg', caption: 'DeCameron Santa Marta'},
    {url: 'assets/images/decameronvillavicencio.jpg', caption: 'Hotel Botalon Villavicencio'},
    {url: 'assets/images/turcobabu.jpg', caption: 'Hotel La Isla Santa Marta'},
  ];
  

  constructor() {
   }

  ngOnInit() {    
  }

}
