import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocRiskComponent } from './alloc-risk.component';

describe('AllocRiskComponent', () => {
  let component: AllocRiskComponent;
  let fixture: ComponentFixture<AllocRiskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllocRiskComponent]
    });
    fixture = TestBed.createComponent(AllocRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
