import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperHowAmComponent } from './swiper-how-am.component';

describe('SwiperHowAmComponent', () => {
  let component: SwiperHowAmComponent;
  let fixture: ComponentFixture<SwiperHowAmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwiperHowAmComponent]
    });
    fixture = TestBed.createComponent(SwiperHowAmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
