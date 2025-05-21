import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddossiermedicaleComponent } from './adddossiermedicale.component';

describe('AdddossiermedicaleComponent', () => {
  let component: AdddossiermedicaleComponent;
  let fixture: ComponentFixture<AdddossiermedicaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdddossiermedicaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddossiermedicaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
