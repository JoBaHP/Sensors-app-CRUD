 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditSensorsComponent } from './add-edit-sensors/add-edit-sensors.component';
import { ListSensorsComponent } from './list-sensors/list-sensors.component';
import { PageBaseComponent } from './page-base/page-base.component'; 
import { SensorsService } from './services/sensors.service'; 
import { HomeComponent } from './home/home.component'; 
import { FooterComponent } from './footer/footer.component'; 



import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatMenuModule} from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module 

@NgModule({
  declarations: [
    AppComponent,
    AddEditSensorsComponent,
    ListSensorsComponent,
    PageBaseComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,  
    HttpClientModule, 
    AppRoutingModule, 
    MatMenuModule, 
    BrowserAnimationsModule, 
      MatButtonModule, 
      MatSidenavModule, 
      MatListModule, 
      MatCheckboxModule, 
      MatIconModule,
      MatMenuModule, 
      MatSidenavModule, 
      MatExpansionModule, 
    MatButtonModule,
    MatIconModule, 
    MatListModule, 
    MatSelectModule, 
    MatExpansionModule, 
    MatCheckboxModule, 
    MatCardModule, 
    MatRadioModule,
    MatInputModule,
    MatGridListModule, 
    MatBadgeModule, MatTreeModule, 
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule,
  ], 
  providers: [SensorsService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
