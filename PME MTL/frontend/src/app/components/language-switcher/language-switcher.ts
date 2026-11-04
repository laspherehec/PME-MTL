import { Component, inject, OnInit } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

type Language = 'fr' | 'en';

@Component({
  imports: [],
  selector: 'app-language-switcher',
  styleUrl: './language-switcher.css',
  templateUrl: './language-switcher.html',
})
export class LanguageSwitcher implements OnInit {
  private transloco = inject(TranslocoService);
  activeLanguage: Language = 'fr';

  ngOnInit() {
    const savedLanguage = localStorage.getItem('lang');
    const currentLanguage = this.isLanguage(savedLanguage)
      ? savedLanguage
      : this.transloco.getActiveLang();

    this.activeLanguage = this.isLanguage(currentLanguage) ? currentLanguage : 'fr';
    this.transloco.setActiveLang(this.activeLanguage);
    document.documentElement.lang = this.activeLanguage;
  }

  switchLanguage(lang: Language) {
    this.activeLanguage = lang;
    this.transloco.setActiveLang(lang);
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
  }

  private isLanguage(lang: string | null): lang is Language {
    return lang === 'fr' || lang === 'en';
  }
}
