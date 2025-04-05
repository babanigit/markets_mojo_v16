import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendContriReturnComponent } from './dividend-contri-return.component';

describe('DividendContriReturnComponent', () => {
  let component: DividendContriReturnComponent;
  let fixture: ComponentFixture<DividendContriReturnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DividendContriReturnComponent]
    });
    fixture = TestBed.createComponent(DividendContriReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
