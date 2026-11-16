import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { ComparisonPanel } from '../../components/comparison-panel/comparison-panel';
import { ComparisonResult } from '../../components/comparison-result/comparison-result';



@Component({
  imports: [TranslocoPipe, ComparisonResult, ComparisonPanel],
  selector: 'app-comparison-tool',
  styleUrl: './comparison-tool.css',
  templateUrl: './comparison-tool.html',
})
export class ComparisonTool {


  selectedComparison: any = null;


  
  onCompare(comparison: any): void {
    this.selectedComparison = comparison;
  }
}
