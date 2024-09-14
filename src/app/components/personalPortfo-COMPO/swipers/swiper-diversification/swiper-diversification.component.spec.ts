import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperDiversificationComponent } from './swiper-diversification.component';

describe('SwiperDiversificationComponent', () => {
  let component: SwiperDiversificationComponent;
  let fixture: ComponentFixture<SwiperDiversificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwiperDiversificationComponent]
    });
    fixture = TestBed.createComponent(SwiperDiversificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
