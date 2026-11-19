import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomBar } from './components/bottom-bar/bottom-bar';
import { MenuBar } from './components/menu-bar/menu-bar';
import { TerritoryPage } from './pages/territory-page/territory-page';

@Component({
  imports: [BottomBar, MenuBar, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  isTerritoryPage = false;

  onRouteActivate(component: unknown): void {
    this.isTerritoryPage = component instanceof TerritoryPage;
  }

  onRouteDeactivate(): void {
    this.isTerritoryPage = false;
  }
}
