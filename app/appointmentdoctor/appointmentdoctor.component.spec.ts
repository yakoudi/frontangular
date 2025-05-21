import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentdoctorComponent } from './appointmentdoctor.component';

describe('AppointmentdoctorComponent', () => {
  let component: AppointmentdoctorComponent;
  let fixture: ComponentFixture<AppointmentdoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentdoctorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
