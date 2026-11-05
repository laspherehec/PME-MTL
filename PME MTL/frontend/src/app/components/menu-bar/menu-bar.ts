import { Component } from '@angular/core';
import { LanguageSwitcher } from '../language-switcher/language-switcher';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  imports: [LanguageSwitcher, TranslocoPipe],
  selector: 'app-menu-bar',
  styleUrl: './menu-bar.css',
  templateUrl: './menu-bar.html',
})
export class MenuBar {}
