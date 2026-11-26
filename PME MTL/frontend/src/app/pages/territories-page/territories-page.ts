import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { TERRITORY_IDS } from '../../interfaces/territory-theme-interface';

@Component({
  imports: [RouterLink, TranslocoPipe],
  selector: 'app-territories-page',
  styleUrl: './territories-page.css',
  templateUrl: './territories-page.html',
})
export class TerritoriesPage {
  readonly territories = TERRITORY_IDS;
}
