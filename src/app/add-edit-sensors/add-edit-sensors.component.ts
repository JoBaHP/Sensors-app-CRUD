import { Component, OnInit } from '@angular/core';
import { Sensors } from '../services/model.sensors';
import { PageBaseComponent } from '../page-base/page-base.component';
import { DomSanitizer } from '@angular/platform-browser';
import { SensorsService } from '../services/sensors.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-sensors',
  templateUrl: './add-edit-sensors.component.html',
  styleUrls: ['./add-edit-sensors.component.css']
})
export class AddEditSensorsComponent extends PageBaseComponent implements OnInit {
  sensor:Sensors = new Sensors();
  constructor(public sensorService: SensorsService,
              private sanitizer: DomSanitizer,
              private route: ActivatedRoute,
              public router: Router) {
     super(sensorService,router);
  }
 isEditMode:boolean = false;
  ngOnInit() { 
    this.route.queryParams.subscribe(params => { 
         if(params['id']){
          this.sensor = this.sensorService.getSensorById(params['id']);
          if(this.sensor && this.sensor.id){
           this.isEditMode = true;
          }
         }
    }); 
  }
  saveClick(){
  if(this.isEditMode){
    this.goToMenu('sensors');
  }else{
    let sensorList = this.sensorService.getSensors();
    this.sensor.id = this.sensorsList.length+1;
    sensorList.push(this.sensor);
    this.sensorService.setSensors(sensorList);
    this.goToMenu('sensors');
  }
  }
  
  selectedImage:File = null;
  onSelectFile(event) { 
     if (event.target.files && event.target.files[0]) {
     var reader = new FileReader(); 
     reader.readAsDataURL(event.target.files[0]); // read file as data url 
     reader.onload = (event:any) => { // called once readAsDataURL is completed
     this.sensor.image = event.target.result;  
      }
     }
    } 
}
