import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TerritoriesPage } from './territories-page';

describe('TerritoriesPage', () => {
  let component: TerritoriesPage;
  let fixture: ComponentFixture<TerritoriesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerritoriesPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TerritoriesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('links each territory to its territory page using its ID', () => {
    fixture.detectChanges();

    const firstTerritoryLink: HTMLAnchorElement =
      fixture.nativeElement.querySelector('.territories-page__portrait-button');

    expect(firstTerritoryLink.getAttribute('href')).toBe('/territory/anjou');
  });
});
