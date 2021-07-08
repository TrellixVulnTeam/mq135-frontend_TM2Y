import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LineChartComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LineChartComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    ChartsModule
  ]
})
export class SharedModule { }
