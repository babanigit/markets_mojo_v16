import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoFooterNewComponent } from './ipo-footer-new.component';

describe('IpoFooterNewComponent', () => {
  let component: IpoFooterNewComponent;
  let fixture: ComponentFixture<IpoFooterNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpoFooterNewComponent]
    });
    fixture = TestBed.createComponent(IpoFooterNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
