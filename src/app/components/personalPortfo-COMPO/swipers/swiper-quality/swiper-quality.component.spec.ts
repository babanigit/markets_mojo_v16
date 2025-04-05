import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperQualityComponent } from './swiper-quality.component';

describe('SwiperQualityComponent', () => {
  let component: SwiperQualityComponent;
  let fixture: ComponentFixture<SwiperQualityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwiperQualityComponent]
    });
    fixture = TestBed.createComponent(SwiperQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
