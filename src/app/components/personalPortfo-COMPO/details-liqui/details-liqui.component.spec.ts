import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLiquiComponent } from './details-liqui.component';

describe('DetailsLiquiComponent', () => {
  let component: DetailsLiquiComponent;
  let fixture: ComponentFixture<DetailsLiquiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsLiquiComponent]
    });
    fixture = TestBed.createComponent(DetailsLiquiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
