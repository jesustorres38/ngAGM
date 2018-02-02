import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/firestore';
import * as GeoFire from "geofire";

@Injectable()
export class LugaresService {

  public lugares = [];

  constructor() { }

 
  public buscarLugar(id){
  // se pone [0] porq filter devuelve un array asi que mandamos array en la posicion 0
    // return this.lugares.filter( x => { return x.id == id })[0];
}

  public getLugares(){
    this.lugares = [];
    firebase.firestore().collection("lugares").get().then(res => {
      res.forEach(doc => {
        var lugar = doc.data();
        lugar.id = doc.id;
        this.lugares.push(lugar);
      });
      console.log(this.lugares);
    });
    
  }

}
