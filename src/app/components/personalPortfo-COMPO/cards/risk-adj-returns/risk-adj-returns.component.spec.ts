import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskAdjReturnsComponent } from './risk-adj-returns.component';

describe('RiskAdjReturnsComponent', () => {
  let component: RiskAdjReturnsComponent;
  let fixture: ComponentFixture<RiskAdjReturnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiskAdjReturnsComponent]
    });
    fixture = TestBed.createComponent(RiskAdjReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
