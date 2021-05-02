import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortafolioModule } from './portafolio/portafolio.module';

import { PrimerNgModule } from './primer-ng/primer-ng.module';



@NgModule({
  declarations: [
    AppComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimerNgModule,
    PortafolioModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
