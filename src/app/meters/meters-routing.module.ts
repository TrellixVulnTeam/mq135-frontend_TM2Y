import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GasMeterComponent } from './components/gas-meter/gas-meter.component';

const routes: Routes = [
  {
    path: 'gas',
    component: GasMeterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetersRoutingModule { }
