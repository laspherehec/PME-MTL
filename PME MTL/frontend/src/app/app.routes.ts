import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { TerritoriesPage } from './pages/territories-page/territories-page';
import { DataLecturePage } from './pages/data-lecture-page/data-lecture-page';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'territories', component: TerritoriesPage },{path:"data-lecture-page",component:DataLecturePage}
];
