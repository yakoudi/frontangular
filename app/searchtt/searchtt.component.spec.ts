import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchttComponent } from './searchtt.component';

describe('SearchttComponent', () => {
  let component: SearchttComponent;
  let fixture: ComponentFixture<SearchttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchttComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
