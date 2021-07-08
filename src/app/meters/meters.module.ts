import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetersRoutingModule } from './meters-routing.module';
import { GasMeterComponent } from './components/gas-meter/gas-meter.component';
import { SharedModule } from '../shared/shared.module';
import { GasTableComponent } from './gas-table/gas-table.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    GasMeterComponent,
    GasTableComponent
  ],
  imports: [
    CommonModule,
    MetersRoutingModule,
    SharedModule,
    MaterialModule,
  ]

})
export class MetersModule { }
