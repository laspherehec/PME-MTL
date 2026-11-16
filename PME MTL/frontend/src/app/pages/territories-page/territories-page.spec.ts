import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TerritoriesPage } from './territories-page';

describe('TerritoriesPage', () => {
  let component: TerritoriesPage;
  let fixture: ComponentFixture<TerritoriesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerritoriesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(TerritoriesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
