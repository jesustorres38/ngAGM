import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DetallesComponent } from './detalles/detalles.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LugaresComponent } from './lugares/lugares.component';
import { LugaresService } from './Servicios/lugares.service';

const appRoutes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalles/:id', component: DetallesComponent},
  {path: '**', component: NotFoundComponent} 
];


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    ContactoComponent,
    DetallesComponent,
    FooterComponent,
    NotFoundComponent,
    LugaresComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDYmfwHtUF-Rf2pYTy4D9LHXnthwLjMupo'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
