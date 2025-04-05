import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperValuationComponent } from './swiper-valuation.component';

describe('SwiperValuationComponent', () => {
  let component: SwiperValuationComponent;
  let fixture: ComponentFixture<SwiperValuationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwiperValuationComponent]
    });
    fixture = TestBed.createComponent(SwiperValuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
