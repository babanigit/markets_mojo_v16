import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McapBreakupComponent } from './mcap-breakup.component';

describe('McapBreakupComponent', () => {
  let component: McapBreakupComponent;
  let fixture: ComponentFixture<McapBreakupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McapBreakupComponent]
    });
    fixture = TestBed.createComponent(McapBreakupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
