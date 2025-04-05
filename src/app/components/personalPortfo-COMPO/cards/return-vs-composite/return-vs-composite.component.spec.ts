import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnVsCompositeComponent } from './return-vs-composite.component';

describe('ReturnVsCompositeComponent', () => {
  let component: ReturnVsCompositeComponent;
  let fixture: ComponentFixture<ReturnVsCompositeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnVsCompositeComponent]
    });
    fixture = TestBed.createComponent(ReturnVsCompositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
