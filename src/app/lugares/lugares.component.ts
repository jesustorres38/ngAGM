import { LugaresService } from './../Servicios/lugares.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {
  
  //Ubicacion por defecto en caso de que no permita el usuario compartir su ubicacion
  lat: number = 41.3947688;
  lng: number = 2.0787276;
  userLocation = false;

  constructor(private servicioLugares: LugaresService) {
    // Obtenemos la lista de Lugares 
    servicioLugares.getLugares();  
   }

  ngOnInit() {
    this.getLocation();
  }

  // Obtenemos la posicion del usuario en caso de que lo permita
  public getLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => { 
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.userLocation = true;
      });
    }
  }



}
