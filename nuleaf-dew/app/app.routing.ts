import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }      from './pages/home/home.component'
import { AboutComponent }     from './pages/about/about.component'
import { BlogComponent }      from './pages/blog/blog.component'
import { SteminarsComponent } from './pages/events/steminars/steminars.component'


const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'steminars',
    component: SteminarsComponent
  },
  {
    path: '',
    component: HomeComponent
  },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);