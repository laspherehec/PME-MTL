import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataLecturePage } from './data-lecture-page';

describe('DataLecturePage', () => {
  let component: DataLecturePage;
  let fixture: ComponentFixture<DataLecturePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataLecturePage],
    }).compileComponents();

    fixture = TestBed.createComponent(DataLecturePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
