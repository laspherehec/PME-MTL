import { Component } from '@angular/core';
import { MenuBar } from '../../components/menu-bar/menu-bar';
import { BottomBar } from '../../components/bottom-bar/bottom-bar';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  imports: [MenuBar, BottomBar, TranslocoPipe],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
