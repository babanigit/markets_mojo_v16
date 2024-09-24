import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McapContriReturnComponent } from './mcap-contri-return.component';

describe('McapContriReturnComponent', () => {
  let component: McapContriReturnComponent;
  let fixture: ComponentFixture<McapContriReturnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McapContriReturnComponent]
    });
    fixture = TestBed.createComponent(McapContriReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
