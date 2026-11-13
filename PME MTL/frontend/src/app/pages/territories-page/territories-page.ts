import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  imports: [TranslocoPipe],
  selector: 'app-territories-page',
  styleUrl: './territories-page.css',
  templateUrl: './territories-page.html',
})
export class TerritoriesPage {
  territories: string[] = [
    'Anjou',
    'Montréal-Nord',
    'Saint-Léonard',
    'Rivière-des-Prairies-Pointe-aux-Trembles',
    'Montréal-Est',
  ];
}
