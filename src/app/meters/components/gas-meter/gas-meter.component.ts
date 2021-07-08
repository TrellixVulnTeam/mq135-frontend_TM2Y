import { Component, OnDestroy, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

import { RecordGas } from './../../../core/models/record-gas.model';
import { GasService } from './../../../core/services/gas.service';

@Component({
  selector: 'app-gas-meter',
  templateUrl: './gas-meter.component.html',
  styleUrls: ['./gas-meter.component.scss']
})
export class GasMeterComponent implements OnInit, OnDestroy {

  lastRecordGas: RecordGas;
  recordsGas: RecordGas[];

  public chart: any = null;
  private intervalUpdate: any = null;
  public chart1: any = null;

  constructor(private gasService: GasService) { }

  ngOnInit(): void {
    // this.fetchLastRecordGas();

    this.chart = new Chart('realtime', {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Data',
            fill: false,
            data: [],
            backgroundColor: '#168ede',
            borderColor: '#168ede'
          }
        ]
      },
      options: {
        tooltips: {
          enabled: false
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            fontColor: 'white'
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: "white"
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: "white",
              beginAtZero: true
            }
          }]
        }
      }
    });

    console.log(this.lastRecordGas);
    this.intervalUpdate = setInterval(function () {
      this.fetchLastRecordGas();
    }.bind(this), 1500);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalUpdate);
  }

  fetchAllRecordsGas() {
    // Al devolver un observable debemos suscribirnos.
    this.gasService.getAllRecordsGas()
      .subscribe(records => {
        // console.log(products);
        this.recordsGas = records;
      },
        error => {
          console.error("ERROR: Unexpected response");
        });
  }

  fetchLastRecordGas() {
    // Al devolver un observable debemos suscribirnos.
    this.gasService.getLastRecordGas()
      .subscribe(record => {
        let chartTime: any = new Date();
        chartTime = chartTime.getHours() + ':' +
          ((chartTime.getMinutes() < 10) ? '0' +
            chartTime.getMinutes() : chartTime.getMinutes()) +
          ':' + ((chartTime.getSeconds() < 10) ? '0' +
            chartTime.getSeconds() : chartTime.getSeconds());

        if (this.chart.data.labels.length > 20) {
          this.chart.data.labels.shift();
          this.chart.data.datasets[0].data.shift();
        }
        this.chart.data.labels.push(chartTime);
        this.chart.data.datasets[0].data.push(record.data_mq135);
        this.chart.update();
        this.lastRecordGas = record;
      },
        error => {
          console.error("ERROR: Unexpected response");
        });

    console.log('this.lastRecordGas: ')
    console.log(this.lastRecordGas)
  }

}
