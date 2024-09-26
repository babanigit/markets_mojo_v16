import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinTrendDetailsComponent } from './fin-trend-details.component';

describe('FinTrendDetailsComponent', () => {
  let component: FinTrendDetailsComponent;
  let fixture: ComponentFixture<FinTrendDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinTrendDetailsComponent]
    });
    fixture = TestBed.createComponent(FinTrendDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
