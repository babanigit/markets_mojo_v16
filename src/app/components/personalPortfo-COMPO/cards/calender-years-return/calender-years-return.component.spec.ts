import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderYearsReturnComponent } from './calender-years-return.component';

describe('CalenderYearsReturnComponent', () => {
  let component: CalenderYearsReturnComponent;
  let fixture: ComponentFixture<CalenderYearsReturnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalenderYearsReturnComponent]
    });
    fixture = TestBed.createComponent(CalenderYearsReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
