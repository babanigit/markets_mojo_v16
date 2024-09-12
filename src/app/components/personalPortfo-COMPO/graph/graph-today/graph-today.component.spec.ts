import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphTodayComponent } from './graph-today.component';

describe('GraphTodayComponent', () => {
  let component: GraphTodayComponent;
  let fixture: ComponentFixture<GraphTodayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphTodayComponent]
    });
    fixture = TestBed.createComponent(GraphTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
