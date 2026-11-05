import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  imports: [TranslocoPipe],
  selector: 'app-bottom-bar',
  styleUrl: './bottom-bar.css',
  templateUrl: './bottom-bar.html',
})
export class BottomBar {}
