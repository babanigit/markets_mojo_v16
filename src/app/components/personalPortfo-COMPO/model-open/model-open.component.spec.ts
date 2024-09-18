import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelOpenComponent } from './model-open.component';

describe('ModelOpenComponent', () => {
  let component: ModelOpenComponent;
  let fixture: ComponentFixture<ModelOpenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelOpenComponent]
    });
    fixture = TestBed.createComponent(ModelOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
