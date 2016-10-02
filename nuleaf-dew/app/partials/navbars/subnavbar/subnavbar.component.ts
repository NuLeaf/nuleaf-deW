import { Component, Input } from '@angular/core';

import { animations }       from '../../../app.animations';

import { Link }             from '../link'


@Component({
  selector: 'ng-subnavbar',
  templateUrl: 'app/partials/navbars/subnavbar/subnavbar.component.html',
  styleUrls: ['app/partials/navbars/subnavbar/subnavbar.component.css'],
  host: {
    '[@fadeSlideIn]': 'true',
    '[@fadeSlideOut]': 'true',
    '[style.display]': "'block'"
  },
  animations: animations
})
export class SubnavbarComponent {
  @Input() links: Link[]
}