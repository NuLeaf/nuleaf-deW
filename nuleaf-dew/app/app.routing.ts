import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { HomeComponent }         from './pages/home/home.component'
import { AboutComponent }        from './pages/about/about.component'
import { SteminarsComponent } from './pages/events/steminars/steminars.component'


const appRoutes: Routes = [
  {
    path: 'steminars',
    component: SteminarsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: HomeComponent
  },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);