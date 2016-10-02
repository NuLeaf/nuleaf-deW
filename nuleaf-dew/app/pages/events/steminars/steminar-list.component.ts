import { Component, Input } from '@angular/core';

import { Steminar }         from '../../../models/steminar'


@Component({
  selector: 'ng-events-steminar-list',
  templateUrl: 'app/pages/events/steminars/steminar-list.component.html',
  styleUrls: ['app/pages/events/steminars/steminar-list.component.css']
})
export class SteminarListComponent {
  @Input() steminars: Steminar[]
}