import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDYmfwHtUF-Rf2pYTy4D9LHXnthwLjMupo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
