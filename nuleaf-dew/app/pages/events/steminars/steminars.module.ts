import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';

import { SteminarService }       from '../../../services/steminar.service';

import { BannerComponent }       from '../../../partials/banner/banner.component';

import { SteminarsComponent }    from './steminars.component';
import { SteminarListComponent } from './steminar-list.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    BannerComponent,

    SteminarsComponent,
    SteminarListComponent
  ],
  providers: [ SteminarService ]
})
export class SteminarsModule { }