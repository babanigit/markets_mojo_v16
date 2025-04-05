import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperFinancialTrendComponent } from './swiper-financial-trend.component';

describe('SwiperFinancialTrendComponent', () => {
  let component: SwiperFinancialTrendComponent;
  let fixture: ComponentFixture<SwiperFinancialTrendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwiperFinancialTrendComponent]
    });
    fixture = TestBed.createComponent(SwiperFinancialTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
