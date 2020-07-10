import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SensorsService } from './services/sensors.service';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  navItems: any[] = []; 
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );
  opened = true;
  over = 'side';
  expandHeight = '42px';  
  collapseHeight = '42px';
  displayMode = 'flat'; 
  errorMessage:string; 
  watcher: Subscription;
  platform:string='';
  isReg:boolean; 
  constructor(private httpService: HttpClient,
    private sensorService: SensorsService,private router: Router,
    private breakpointObserver: BreakpointObserver){ 
  } 
ngOnInit() {  
  this.httpService.get('./assets/db.json').subscribe(
    data => {  
    this.sensorService.setSensors(data["sensors"]);
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }); 
  }
  goToMenu(menu){ 
    this.router.navigate([menu]);  
  }
}
