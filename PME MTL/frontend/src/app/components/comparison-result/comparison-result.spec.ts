import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComparisonResult } from './comparison-result';

describe('ComparisonResult', () => {
  let component: ComparisonResult;
  let fixture: ComponentFixture<ComparisonResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparisonResult],
    }).compileComponents();

    fixture = TestBed.createComponent(ComparisonResult);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
