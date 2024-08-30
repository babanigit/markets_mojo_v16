import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesMComponent } from './tables-m.component';

describe('TablesMComponent', () => {
  let component: TablesMComponent;
  let fixture: ComponentFixture<TablesMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablesMComponent]
    });
    fixture = TestBed.createComponent(TablesMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
