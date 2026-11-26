import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { TerritoryPage } from './territory-page';

describe('TerritoryPage', () => {
  let component: TerritoryPage;
  let fixture: ComponentFixture<TerritoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerritoryPage],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ territoryId: 'anjou' }),
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TerritoryPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('stores the territory selected from the territories page', () => {
    expect(component.territoryId).toBe('anjou');
  });

  it('loads all seven themes with the selected territory values and comparison rows', () => {
    const themes = component.dashboardThemes();

    expect(themes).toHaveLength(7);
    expect(themes[0]?.values.mainPercentage).toBe(64);
    expect(themes[0]?.comparisonStats).toHaveLength(4);
  });
});
