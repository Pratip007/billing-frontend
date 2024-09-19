import { Route } from '@angular/router';

export const GLOBAL_ERROR_ROUTES: Route[] = [
  {
    path: 'not-found',
    loadComponent: () =>
      import('./views/not-found/not-found.component').then(
        (m) => m.NotFoundComponent,
      ),
    data: {
      breadcrumb: '404 not found',
    },
  },
  {
    path: '',
    redirectTo: 'not-found',
    pathMatch: 'prefix',
  },
];

export const GLOBAL_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./views/app-setup/app-setup.component').then(
        (m) => m.AppSetupComponent,
      ),
    data: {
      breadcrumb: 'Application setup',
    },
  },
];
