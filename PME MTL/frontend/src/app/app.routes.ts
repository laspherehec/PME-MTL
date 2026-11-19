import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ComparisonTool } from './pages/comparison-tool/comparison-tool';
import { TerritoriesPage } from './pages/territories-page/territories-page';
import { TerritoryPage } from './pages/territory-page/territory-page';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'territories', component: TerritoriesPage },
  { path: 'comparison-tool', component: ComparisonTool },
  { path: 'territory', component: TerritoryPage },
];
