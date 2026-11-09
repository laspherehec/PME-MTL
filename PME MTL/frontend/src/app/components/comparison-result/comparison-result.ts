import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoPipe } from '@jsverse/transloco';
import { Input } from '@angular/core';
@Component({
  imports: [CommonModule, TranslocoPipe],
  selector: 'app-comparison-result',
  styleUrl: './comparison-result.css',
  templateUrl: './comparison-result.html',
})
export class ComparisonResult {

   @Input() comparison: any = null;

}
