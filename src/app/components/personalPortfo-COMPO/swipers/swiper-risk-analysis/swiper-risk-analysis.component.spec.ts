import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperRiskAnalysisComponent } from './swiper-risk-analysis.component';

describe('SwiperRiskAnalysisComponent', () => {
  let component: SwiperRiskAnalysisComponent;
  let fixture: ComponentFixture<SwiperRiskAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwiperRiskAnalysisComponent]
    });
    fixture = TestBed.createComponent(SwiperRiskAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
