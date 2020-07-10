import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSensorsComponent } from './add-edit-sensors.component';

describe('AddEditSensorsComponent', () => {
  let component: AddEditSensorsComponent;
  let fixture: ComponentFixture<AddEditSensorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditSensorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
