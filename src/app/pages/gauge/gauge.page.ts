import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Device } from '../../model/device';
import { ActivatedRoute } from '@angular/router';
import { ListDevicesService } from '../../services/list-devices.service';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);


@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.page.html',
  styleUrls: ['./gauge.page.scss'],
})
export class GaugePage implements OnInit {

  private valorObtenido:number=0;
  public myChart;
  private chartOptions;
  public device : Device;

  constructor(private router: ActivatedRoute, private devService: ListDevicesService) {    
    setTimeout(()=>{
      console.log("Cambio el valor del sensor");
      this.ionViewDidEnter();
      this.valorObtenido=60;
      //llamo al update del chart para refrescar y mostrar el nuevo valor
      this.myChart.update({series: [{
          name: 'kPA',
          data: [this.valorObtenido],
          tooltip: {
              valueSuffix: ' kPA'
          }
      }]});
    },6000);
  }

  update(){
    
  }

  ngOnInit() {
    let idDevice = this.router.snapshot.paramMap.get('id');
    this.device = this.devService.getDevice(idDevice);
    //this.ionViewDidEnter();
  }

  ionViewDidEnter() {
    this.generarChart();
  }

  generarChart() {
    this.chartOptions={
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        }
        ,title: {
          text: this.device.name
        }

        ,credits:{enabled:false}
        
           
        ,pane: {
            startAngle: -150,
            endAngle: 150
        } 
        // the value axis
      ,yAxis: {
        min: 0,
        max: 100,
  
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
  
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'kPA'
        },
        plotBands: [{
            from: 0,
            to: 10,
            color: '#55BF3B' // green
        }, {
            from: 10,
            to: 30,
            color: '#DDDF0D' // yellow
        }, {
            from: 30,
            to: 100,
            color: '#DF5353' // red
        }]
    }
    ,
  
    series: [{
        name: 'kPA',
        data: [this.valorObtenido],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]

    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions );
  }

}