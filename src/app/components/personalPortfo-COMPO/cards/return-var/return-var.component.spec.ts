import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnVarComponent } from './return-var.component';

describe('ReturnVarComponent', () => {
  let component: ReturnVarComponent;
  let fixture: ComponentFixture<ReturnVarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnVarComponent]
    });
    fixture = TestBed.createComponent(ReturnVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
