import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakupComponent } from './breakup.component';

describe('BreakupComponent', () => {
  let component: BreakupComponent;
  let fixture: ComponentFixture<BreakupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreakupComponent]
    });
    fixture = TestBed.createComponent(BreakupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
