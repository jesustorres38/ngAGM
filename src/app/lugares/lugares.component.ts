import { LugaresService } from './../Servicios/lugares.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {
  
  lat: number = 41.3947688;
  lng: number = 2.0787276;
  lugares = null;

  constructor(private servicioLugares: LugaresService) {
    this.lugares = servicioLugares.getLugares();
   }

  ngOnInit() {
  }



}
