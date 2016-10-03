import {
  Component,
  OnInit,
  Output }                 from '@angular/core';

import { SteminarService } from '../../../services/steminar.service';

import { Steminar }        from '../../../models/steminar';

import { Banner }          from '../../../partials/banner/banner';


@Component({
  selector: 'ng-events-steminars',
  templateUrl: 'app/pages/events/steminars/steminars.component.html'
})
export class SteminarsComponent implements OnInit {
  steminars: Steminar[] = [];
  banner: Banner = {
    imageUrl: '/public/images/leaf_wide.jpg',
    text:     'get inspired'
  };

  constructor(
    private steminarService: SteminarService) {};

  ngOnInit(): void {
    this.getSteminars();
  };

  getSteminars(): void {
    this.steminarService.getSteminars().then(steminars => this.steminars = steminars);
  };
}