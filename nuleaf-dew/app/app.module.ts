import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

import { AppComponent }       from './app.component';
import { NavbarComponent }    from './navbars/navbar.component';
import { SubnavbarComponent } from './navbars/subnavbar/subnavbar.component';
import { BannerComponent }    from './banner/banner.component'

import { SteminarsComponent } from './events/steminars/steminars.component';

import { routing } from './app.routing';


@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    SubnavbarComponent,
    BannerComponent,

    SteminarsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
