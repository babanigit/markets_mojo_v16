import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksContriReturnComponent } from './stocks-contri-return.component';

describe('StocksContriReturnComponent', () => {
  let component: StocksContriReturnComponent;
  let fixture: ComponentFixture<StocksContriReturnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StocksContriReturnComponent]
    });
    fixture = TestBed.createComponent(StocksContriReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
