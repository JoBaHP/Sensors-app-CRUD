import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditSensorsComponent } from './add-edit-sensors/add-edit-sensors.component';
import { ListSensorsComponent } from './list-sensors/list-sensors.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sensor-add', component: AddEditSensorsComponent },
  { path: 'sensor-add/:id', component: AddEditSensorsComponent },
  {
    path: 'sensors',
    component: ListSensorsComponent
  }, 
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
