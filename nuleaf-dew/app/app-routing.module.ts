import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        component: LandingComponent
      },

      { path: 'about/overview', component: OverviewComponent },
      { path: 'about/biomimicry', component: BiomimicryComponent },
      { path: 'about/members', component: MembersComponent },

      { path: 'products/aw-pmfc', component: AwpmfcComponent },
      { path: 'products/biosolar', component: BiosolarComponent },

      { path: 'blog', component: BlogComponent },
      { path: 'contact', component: ContactComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
