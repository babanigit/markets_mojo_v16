import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdictFooterNComponent } from './verdict-footer-n.component';

describe('VerdictFooterNComponent', () => {
  let component: VerdictFooterNComponent;
  let fixture: ComponentFixture<VerdictFooterNComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerdictFooterNComponent]
    });
    fixture = TestBed.createComponent(VerdictFooterNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
