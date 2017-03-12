import { Component,
         Input }      from '@angular/core';

import { animations } from './banner.animation';


@Component({
  moduleId: module.id,
  selector: 'nl-banner',
  templateUrl: 'banner.component.html',
  styleUrls: ['banner.component.css'],
  animations: animations
})
export class BannerComponent {
  @Input() imageUrl: string;
  @Input() text: string;
}