import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LandingComponent } from './pages/landing/landing.component';

import { MissionComponent } from './pages/about/mission/mission.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        component: LandingComponent
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: '/about/mission'
          },
          {
            path: 'mission',
            component: MissionComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
