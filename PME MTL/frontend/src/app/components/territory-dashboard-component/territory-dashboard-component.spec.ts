import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TerritoryDashboardComponent } from './territory-dashboard-component';

describe('TerritoryDashboardComponent', () => {
  let component: TerritoryDashboardComponent;
  let fixture: ComponentFixture<TerritoryDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerritoryDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TerritoryDashboardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
