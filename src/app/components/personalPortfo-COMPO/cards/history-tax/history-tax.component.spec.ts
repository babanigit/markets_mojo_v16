import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTaxComponent } from './history-tax.component';

describe('HistoryTaxComponent', () => {
  let component: HistoryTaxComponent;
  let fixture: ComponentFixture<HistoryTaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryTaxComponent]
    });
    fixture = TestBed.createComponent(HistoryTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
