import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scorecard2Component } from './scorecard2.component';

describe('Scorecard2Component', () => {
  let component: Scorecard2Component;
  let fixture: ComponentFixture<Scorecard2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Scorecard2Component]
    });
    fixture = TestBed.createComponent(Scorecard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
