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

const appRoutes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'inicio', component: InicioComponent},
  {path: '**', component: NotFoundComponent},
  {path: 'detalles/:id', component: DetallesComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    ContactoComponent,
    DetallesComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDYmfwHtUF-Rf2pYTy4D9LHXnthwLjMupo'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
