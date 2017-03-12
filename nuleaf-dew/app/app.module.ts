import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NavbarComponent } from './partials/navbar/navbar.component';
import { BannerComponent } from './partials/banner/banner.component';
import { FooterComponent } from './partials/footer/footer.component';

import { LandingComponent } from './pages/landing/landing.component';

import { MissionComponent } from './pages/about/mission/mission.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,

    NgbModule.forRoot(),

    AppRoutingModule
  ],
  declarations: [
    AppComponent,

    NavbarComponent,
    BannerComponent,
    FooterComponent,

    LandingComponent,

    MissionComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
