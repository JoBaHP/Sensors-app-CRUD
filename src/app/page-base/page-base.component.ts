import { Component, OnInit } from '@angular/core'; 
import { SensorsService } from '../services/sensors.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-base',
  templateUrl: './page-base.component.html',
  styleUrls: ['./page-base.component.css']
})
export class PageBaseComponent implements OnInit {
  sensorsList:any[]=[];
  constructor(public sensorService: SensorsService,
              public router: Router){ 
  } 
ngOnInit() {   
    this.sensorsList = this.sensorService.getSensors(); 
  }
  
  goToMenu(menu,id=null){ 
    this.router.navigate([menu],{ queryParams: { id: id } });  
  }
}
