import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallPortfolioAnalysisComponent } from './overall-portfolio-analysis.component';

describe('OverallPortfolioAnalysisComponent', () => {
  let component: OverallPortfolioAnalysisComponent;
  let fixture: ComponentFixture<OverallPortfolioAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverallPortfolioAnalysisComponent]
    });
    fixture = TestBed.createComponent(OverallPortfolioAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
