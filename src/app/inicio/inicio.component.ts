import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  lat: number = 41.3947688;
  lng: number = 2.0787276;

  constructor() { }

  ngOnInit() {
  }

}
