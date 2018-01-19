import { LugaresService } from './../Servicios/lugares.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

 
  lugar: any ={};

  constructor(private ruta: ActivatedRoute, private servicioLugares: LugaresService) { 
    this.lugar = this.servicioLugares.buscarLugar(this.ruta.snapshot.params['id']);
  }

  ngOnInit() {
  }

}
