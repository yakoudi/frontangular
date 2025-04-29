import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamstartComponent } from './teamstart.component';

describe('TeamstartComponent', () => {
  let component: TeamstartComponent;
  let fixture: ComponentFixture<TeamstartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamstartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
