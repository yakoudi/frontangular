import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeappointmentComponent } from './listeappointment.component';

describe('ListeappointmentComponent', () => {
  let component: ListeappointmentComponent;
  let fixture: ComponentFixture<ListeappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeappointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
