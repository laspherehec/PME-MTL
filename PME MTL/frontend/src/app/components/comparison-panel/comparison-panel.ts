import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoPipe } from '@jsverse/transloco';


interface ComparisonSelection {
  territory: string;
  theme: string;
  dimension: string;
  indicator: string;
}

@Component({
  selector: 'app-comparison-panel',
  imports: [CommonModule, FormsModule, TranslocoPipe],
  templateUrl: './comparison-panel.html',
  styleUrl: './comparison-panel.css'
})
export class ComparisonPanel {

  @Output() compare = new EventEmitter<{
    comparisonA: ComparisonSelection;
    comparisonB: ComparisonSelection;
  }>();

  comparisonA: ComparisonSelection = {
    territory: '',
    theme: '',
    dimension: '',
    indicator: ''
  };

  comparisonB: ComparisonSelection = {
    territory: '',
    theme: '',
    dimension: '',
    indicator: ''
  };

  territories: string[] = [];
  themes: string[] = [];
  dimensions: string[] = [];
  indicators: string[] = [];

  launchComparison(): void {
    this.compare.emit({
      comparisonA: { ...this.comparisonA },
      comparisonB: { ...this.comparisonB }
    });
  }
}