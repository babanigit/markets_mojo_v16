import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperReturnAnalysisComponent } from './swiper-return-analysis.component';

describe('SwiperReturnAnalysisComponent', () => {
  let component: SwiperReturnAnalysisComponent;
  let fixture: ComponentFixture<SwiperReturnAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwiperReturnAnalysisComponent]
    });
    fixture = TestBed.createComponent(SwiperReturnAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
