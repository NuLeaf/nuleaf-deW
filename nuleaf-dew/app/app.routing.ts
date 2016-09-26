import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SteminarsComponent }   from './events/steminars/steminars.component'


const appRoutes: Routes = [
  {
    path: 'steminars',
    component: SteminarsComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);