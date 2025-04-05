import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTaxValueComponent } from './post-tax-value.component';

describe('PostTaxValueComponent', () => {
  let component: PostTaxValueComponent;
  let fixture: ComponentFixture<PostTaxValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostTaxValueComponent]
    });
    fixture = TestBed.createComponent(PostTaxValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
