import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperTaxComponent } from './swiper-tax.component';

describe('SwiperTaxComponent', () => {
  let component: SwiperTaxComponent;
  let fixture: ComponentFixture<SwiperTaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwiperTaxComponent]
    });
    fixture = TestBed.createComponent(SwiperTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
