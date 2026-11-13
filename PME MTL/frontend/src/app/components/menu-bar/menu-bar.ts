import { Component } from '@angular/core';
import { LanguageSwitcher } from '../language-switcher/language-switcher';
import { TranslocoPipe } from '@jsverse/transloco';
import { RouterLink } from '@angular/router';

@Component({
  imports: [LanguageSwitcher, RouterLink, TranslocoPipe],
  selector: 'app-menu-bar',
  styleUrl: './menu-bar.css',
  templateUrl: './menu-bar.html',
})
export class MenuBar {}
