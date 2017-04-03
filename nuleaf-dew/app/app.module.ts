import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NavbarComponent } from './partials/navbar/navbar.component';
import { FooterComponent } from './partials/footer/footer.component';

import { LandingComponent } from './pages/landing/landing.component';

import { OverviewComponent } from './pages/about/overview/overview.component';
import { BiomimicryComponent } from './pages/about/biomimicry/biomimicry.component';
import { MembersComponent } from './pages/about/members/members.component';

import { AwpmfcComponent } from './pages/products/aw-pmfc/aw-pmfc.component';
import { BiosolarComponent } from './pages/products/biosolar/biosolar.component';

import { BlogComponent } from './pages/blog/blog.component';

import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,

    AppRoutingModule
  ],
  declarations: [
    AppComponent,

    NavbarComponent,
    FooterComponent,

    LandingComponent,

    OverviewComponent,
    BiomimicryComponent,
    MembersComponent,

    AwpmfcComponent,
    BiosolarComponent,
    
    BlogComponent,

    ContactComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
