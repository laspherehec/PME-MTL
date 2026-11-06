import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComparisonTool } from './comparison-tool';

describe('ComparisonTool', () => {
  let component: ComparisonTool;
  let fixture: ComponentFixture<ComparisonTool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparisonTool],
    }).compileComponents();

    fixture = TestBed.createComponent(ComparisonTool);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
