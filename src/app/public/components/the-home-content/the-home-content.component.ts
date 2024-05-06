import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-the-home-content',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './the-home-content.component.html',
  styleUrl: './the-home-content.component.css'
})
export class TheHomeContentComponent {
  constructor() {}
}
