import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiusChartComponent } from './radius-chart.component';

describe('RadiusChartComponent', () => {
  let component: RadiusChartComponent;
  let fixture: ComponentFixture<RadiusChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadiusChartComponent]
    });
    fixture = TestBed.createComponent(RadiusChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
