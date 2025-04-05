import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoChildComponent } from './demo-child.component';

describe('DemoChildComponent', () => {
  let component: DemoChildComponent;
  let fixture: ComponentFixture<DemoChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoChildComponent]
    });
    fixture = TestBed.createComponent(DemoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
