import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddappoimentComponent } from './addappoiment.component';

describe('AddappoimentComponent', () => {
  let component: AddappoimentComponent;
  let fixture: ComponentFixture<AddappoimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddappoimentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddappoimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
