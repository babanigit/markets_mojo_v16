import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversificationComponent } from './diversification.component';

describe('DiversificationComponent', () => {
  let component: DiversificationComponent;
  let fixture: ComponentFixture<DiversificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiversificationComponent]
    });
    fixture = TestBed.createComponent(DiversificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
