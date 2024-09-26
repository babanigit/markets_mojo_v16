import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuationDetailsComponent } from './valuation-details.component';

describe('ValuationDetailsComponent', () => {
  let component: ValuationDetailsComponent;
  let fixture: ComponentFixture<ValuationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValuationDetailsComponent]
    });
    fixture = TestBed.createComponent(ValuationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
