import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { DataLecturePage } from './pages/data-lecture-page/data-lecture-page';

export const routes: Routes = [{ path: '', component: Home }, {path:"data-lecture",component:DataLecturePage}];
