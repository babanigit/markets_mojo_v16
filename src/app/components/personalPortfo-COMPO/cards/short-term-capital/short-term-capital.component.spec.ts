import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortTermCapitalComponent } from './short-term-capital.component';

describe('ShortTermCapitalComponent', () => {
  let component: ShortTermCapitalComponent;
  let fixture: ComponentFixture<ShortTermCapitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortTermCapitalComponent]
    });
    fixture = TestBed.createComponent(ShortTermCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
