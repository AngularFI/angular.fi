import { Routes } from '@angular/router';

import { FrontpageModule } from './frontpage';
import { OrganizersModule } from './organizers';
import { ContactModule } from './contact';
import { PageNotFoundModule } from './pagenotfound';

export const AppRoutes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => FrontpageModule },
  { path: 'organizers', loadChildren: () => OrganizersModule },
  { path: 'contact', loadChildren: () => ContactModule },
  { path: '404', loadChildren: () => PageNotFoundModule },
  { path: '**', pathMatch: 'full', redirectTo: '/404' }
];
