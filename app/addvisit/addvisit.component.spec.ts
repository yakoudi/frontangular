import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvisitComponent } from './addvisit.component';

describe('AddvisitComponent', () => {
  let component: AddvisitComponent;
  let fixture: ComponentFixture<AddvisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddvisitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddvisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
