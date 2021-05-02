import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';

import {CardModule} from 'primeng/card';
import { FooterComponent } from './footer/footer.component';








@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PortafolioRoutingModule,
    CardModule
  ],
  exports:[
    HeaderComponent,
    BodyComponent
  ]

})
export class PortafolioModule { }
