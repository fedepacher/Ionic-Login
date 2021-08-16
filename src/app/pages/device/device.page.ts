import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevicesService } from 'src/app/services/devices.service';
import { Device } from '../../model/device';
import { IonDatetime, ViewDidEnter, ViewWillEnter } from '@ionic/angular';
import * as Highcharts from 'highcharts';
import { Messure } from 'src/app/model/messure';
import { MessureService } from '../../services/messure.service';
import { CustomDatePipe } from 'src/app/pipe/datetime.pipe';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
  providers:[CustomDatePipe]
})
export class DevicePage implements OnInit, ViewWillEnter {

  //@Input() device:any;//variable de entreada que se la manda listado.component
  //@Output() onChange=new EventEmitter(); //se utiliza para devolver algo al padre
  private valorObtenido:number=0;
  public myChart;
  private chartOptions;
  private device : Device;
  private messure : Messure;
  isOpen : boolean;


  constructor(private router: ActivatedRoute, 
    private devService: DevicesService, 
    private messureService:MessureService,
    private myCustomDatePipe: CustomDatePipe) { 
    setTimeout(()=>{
      this.valorObtenido = Number(this.messure.valor);
      console.log("Valor del sensor: " + this.valorObtenido);      
      //this.valorObtenido=60;
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
    console.log('ngOnInit');
    let idDevice = this.router.snapshot.paramMap.get('id');
    console.log('ID Dispositivo: ' + idDevice); 
    this.getDeviceById(idDevice);
    this.getMessureById(idDevice);
    //console.log('Nombre Dispositivo: ' + this.device.nombre); 
  }


  async getDeviceById(id){
    console.log('Se ejecuta getDeviceById'); 
    this.device = await this.devService.getDevice(id);
    console.log(this.device);

  }

  async getMessureById(id){
    console.log('Se ejecuta getMessureById'); 
    this.messure = await this.messureService.getLastMessure(id);
    console.log(this.messure);    
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    //this.valorObtenido = this.messure.valor;
    this.generarChart();
  }

  ionViewWillEnter(): void {
    console.log('ionViewWillEnter');
    //this.valorObtenido = this.messure.valor;
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
          text: this.device[0].nombre
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
      alert("Valvula " + this.device[0].nombre + " fue abierta");
    }
    else{
      alert("Valvula " + this.device[0].nombre + " fue cerrada");
      this.insertElement();
    }
  }

  insertElement(){
    console.log("insertElement")
    let myDate = this.myCustomDatePipe.transform(new Date());
    this.messureService.postNewValue(new Messure(0, myDate, this.messure.valor, this.device[0].dispositivoId));
  }

}
