import { Component, OnInit } from '@angular/core';
import { PageBaseComponent } from '../page-base/page-base.component';
import { SensorsService } from '../services/sensors.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-list-sensors',
  templateUrl: './list-sensors.component.html',
  styleUrls: ['./list-sensors.component.css']
})
export class ListSensorsComponent extends PageBaseComponent implements OnInit {    
  filter:any;
  constructor(public sensorService: SensorsService,
              private sanitizer: DomSanitizer,public router: Router) {
    super(sensorService,router);
   } 
  ngOnInit() {
    this.sensorsList = this.sensorService.getSensors();
  }
  transform(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  deleteRecord(record){
    if(confirm("Are you sure to delete "+record.name)) { 
       this.sensorsList = this.sensorsList.filter(item=> item.id != record.id);
       this.sensorService.setSensors(this.sensorsList);
    }
  }
}
