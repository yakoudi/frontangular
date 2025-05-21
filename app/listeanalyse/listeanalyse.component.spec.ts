import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeanalyseComponent } from './listeanalyse.component';

describe('ListeanalyseComponent', () => {
  let component: ListeanalyseComponent;
  let fixture: ComponentFixture<ListeanalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeanalyseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeanalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
