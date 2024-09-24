import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorsContriReturnComponent } from './sectors-contri-return.component';

describe('SectorsContriReturnComponent', () => {
  let component: SectorsContriReturnComponent;
  let fixture: ComponentFixture<SectorsContriReturnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectorsContriReturnComponent]
    });
    fixture = TestBed.createComponent(SectorsContriReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
