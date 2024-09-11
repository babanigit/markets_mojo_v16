import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperDoingOverallComponent } from './swiper-doing-overall.component';

describe('SwiperDoingOverallComponent', () => {
  let component: SwiperDoingOverallComponent;
  let fixture: ComponentFixture<SwiperDoingOverallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwiperDoingOverallComponent]
    });
    fixture = TestBed.createComponent(SwiperDoingOverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
