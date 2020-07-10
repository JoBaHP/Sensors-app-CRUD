import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';  
import { Sensors } from './model.sensors';

@Injectable()
export class SensorsService {
  sensorsList : Sensors[] = [];
  constructor(private http: HttpClient) {
  }  
 setSensors(sensorsList){
  console.log("this.setSensors",sensorsList)
  this.sensorsList = sensorsList;
 }
 getSensors(){
  console.log("getSensors",this.sensorsList)
   return this.sensorsList;
 }
 getSensorById(id){ 
  let sensor: Sensors;
  this.sensorsList.map(val=>{
    if(val.id == id) sensor = val;
  });
  console.log("getSensorById",sensor)
  return sensor; 
 }
 updateSensor(sensor){ 
    let present: Boolean = false;
    this.sensorsList.map((val, index)=>{
      if(val.id == sensor.id) {this.sensorsList[index] = sensor;present=true}
    });
    return present; 
  }
  AddSensor(sensor){
   this.sensorsList.push(sensor);
  } 
  deleteSensor(id){
    this.sensorsList = this.sensorsList.filter( item => item.id === id);
  }
}

