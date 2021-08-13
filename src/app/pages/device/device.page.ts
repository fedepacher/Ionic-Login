import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListDevicesService } from 'src/app/services/list-devices.service';
import { Device } from '../../model/device';
import { ViewDidEnter, ViewWillEnter } from '@ionic/angular';
import * as Highcharts from 'highcharts';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit, ViewWillEnter {

  //@Input() device:any;//variable de entreada que se la manda listado.component
  //@Output() onChange=new EventEmitter(); //se utiliza para devolver algo al padre
  private valorObtenido:number=0;
  public myChart;
  private chartOptions;
  public device : Device;
  isOpen : boolean;


  constructor(private router: ActivatedRoute, private devService: ListDevicesService) { 
    setTimeout(()=>{
      console.log("Cambio el valor del sensor");
      this.valorObtenido=60;
      //llamo al update del chart para refrescar y mostrar el nuevo valor
      this.myChart.update({series: [{
          name: 'kPA',
          data: [this.valorObtenido],
          tooltip: {
              valueSuffix: ' kPA'
          }
      }]});
    },1000);
  }

  ngOnInit() {
    let idDevice = this.router.snapshot.paramMap.get('id');
    this.device = this.devService.getDevice(idDevice);
    console.log(this.device);
    console.log(idDevice);    
  }

  ionViewDidEnter() {
    this.generarChart();
  }

  ionViewWillEnter(): void {
    console.log('ionViewWillEnter');
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

  // changeDevice(){
  //   this.device.name="Cambio de nombre";
  //   this.onChange.emit(this.device);
  // }

  changeState(){
    this.isOpen = !this.isOpen;
    if(this.isOpen){
      alert("Valvula " + this.device.name + " fue abierta");
    }
    else{
      alert("Valvula " + this.device.name + " fue cerrada");
    }
  }

}
