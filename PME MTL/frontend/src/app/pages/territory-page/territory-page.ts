import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  imports: [RouterLink, TranslocoPipe],
  selector: 'app-territory-page',
  styleUrl: './territory-page.css',
  templateUrl: './territory-page.html',
})
export class TerritoryPage {
  readonly dashboardSections = ['01', '02', '03', '04', '05', '06', '07'];
}
