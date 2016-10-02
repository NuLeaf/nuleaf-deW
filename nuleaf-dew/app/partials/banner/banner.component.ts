import { Component, Input } from '@angular/core';

import { animations }       from '../../app.animations';

import { Banner }           from './banner';

@Component({
  selector: 'ng-banner',
  templateUrl: 'app/partials/banner/banner.component.html',
  styleUrls: ['app/partials/banner/banner.component.css'],
  animations: animations
})
export class BannerComponent {
  @Input() banner: Banner;
}