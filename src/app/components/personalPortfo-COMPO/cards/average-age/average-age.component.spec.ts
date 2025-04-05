import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageAgeComponent } from './average-age.component';

describe('AverageAgeComponent', () => {
  let component: AverageAgeComponent;
  let fixture: ComponentFixture<AverageAgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AverageAgeComponent]
    });
    fixture = TestBed.createComponent(AverageAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
