import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComparisonPanel } from './comparison-panel';

describe('ComparisonPanel', () => {
  let component: ComparisonPanel;
  let fixture: ComponentFixture<ComparisonPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparisonPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(ComparisonPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
