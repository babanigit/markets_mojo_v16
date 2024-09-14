import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperLiquidityComponent } from './swiper-liquidity.component';

describe('SwiperLiquidityComponent', () => {
  let component: SwiperLiquidityComponent;
  let fixture: ComponentFixture<SwiperLiquidityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwiperLiquidityComponent]
    });
    fixture = TestBed.createComponent(SwiperLiquidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
