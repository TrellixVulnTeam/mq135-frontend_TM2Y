import { Component, OnInit } from '@angular/core';
import { RecordGas } from 'src/app/core/models/record-gas.model';
import { GasService } from 'src/app/core/services/gas.service';

@Component({
  selector: 'app-gas-table',
  templateUrl: './gas-table.component.html',
  styleUrls: ['./gas-table.component.scss']
})
export class GasTableComponent implements OnInit {

  lastRecordGas: RecordGas;
  recordsGas: RecordGas[];
  displayedColumns: string[] = ['id', 'log', 'date', 'actions'];
  
  constructor(private gasService: GasService) { }

  ngOnInit(): void {
    this.fetchAllRecordsGas();
    console.log(this.recordsGas);
  }

  fetchAllRecordsGas() {
    // Al devolver un observable debemos suscribirnos.
    this.gasService.getAllRecordsGas()
      .subscribe(records => {
        // console.log(products);
        this.recordsGas = records;
      });
  }

  fetchLastRecordGas() {
    // Al devolver un observable debemos suscribirnos.
    this.gasService.getLastRecordGas()
      .subscribe(record => {
        // console.log(products);
        this.lastRecordGas = record;
      });

    console.log('this.lastRecordGas: ')
    console.log(this.lastRecordGas)
  }

}
