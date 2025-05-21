import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedossiermedicaleComponent } from './listedossiermedicale.component';

describe('ListedossiermedicaleComponent', () => {
  let component: ListedossiermedicaleComponent;
  let fixture: ComponentFixture<ListedossiermedicaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListedossiermedicaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListedossiermedicaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
