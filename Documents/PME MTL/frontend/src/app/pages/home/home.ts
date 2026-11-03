import { Component } from '@angular/core';
import { MenuBar } from '../../components/menu-bar/menu-bar';

@Component({
  imports: [MenuBar],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
