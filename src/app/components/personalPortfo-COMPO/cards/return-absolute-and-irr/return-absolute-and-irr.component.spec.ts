import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnAbsoluteAndIrrComponent } from './return-absolute-and-irr.component';

describe('ReturnAbsoluteAndIrrComponent', () => {
  let component: ReturnAbsoluteAndIrrComponent;
  let fixture: ComponentFixture<ReturnAbsoluteAndIrrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnAbsoluteAndIrrComponent]
    });
    fixture = TestBed.createComponent(ReturnAbsoluteAndIrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
