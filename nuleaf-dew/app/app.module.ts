import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

import { SteminarsModule }    from './pages/events/steminars/steminars.module';

import { AppComponent }       from './app.component';
import { NavbarComponent }    from './partials/navbars/navbar.component';
import { SubnavbarComponent } from './partials/navbars/subnavbar/subnavbar.component';
import { FooterComponent }    from './partials/footer/footer.component';

import { HomeComponent }      from './pages/home/home.component';
import { AboutComponent }     from './pages/about/about.component';
import { BlogComponent }      from './pages/blog/blog.component';

import { routing } from './app.routing';


@NgModule({
  imports: [
    BrowserModule,
    routing,
    SteminarsModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    SubnavbarComponent,
    FooterComponent,

    HomeComponent,
    AboutComponent,
    BlogComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
