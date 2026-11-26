import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { themeStructures, themeValues } from '../../../assets/temp/territory-theme.data';
import {
  isTerritoryId,
  TERRITORY_IDS,
  type TerritoryId,
} from '../../interfaces/territory-theme-interface';

@Component({
  imports: [RouterLink, TranslocoPipe],
  selector: 'app-territory-page',
  styleUrl: './territory-page.css',
  templateUrl: './territory-page.html',
})
export class TerritoryPage {
  readonly territoryId: TerritoryId | null;
  readonly dashboardThemes = computed(() => {
    const territoryId = this.territoryId;
    if (!territoryId) {
      return [];
    }

    return themeStructures.map((theme) => {
      const values = themeValues[territoryId][theme.id];
      const comparisonStats = TERRITORY_IDS.flatMap((comparisonTerritoryId) => {
        if (comparisonTerritoryId === territoryId) {
          return [];
        }

        const stats = values.stats[comparisonTerritoryId];
        return stats ? [{ territoryId: comparisonTerritoryId, ...stats }] : [];
      });

      return { theme, values, comparisonStats };
    });
  });

  constructor() {
    const selectedTerritoryId = inject(ActivatedRoute).snapshot.paramMap.get('territoryId');

    if (isTerritoryId(selectedTerritoryId)) {
      this.territoryId = selectedTerritoryId;
    } else {
      this.territoryId = null;
      void inject(Router).navigateByUrl('/territories');
    }
  }
}
