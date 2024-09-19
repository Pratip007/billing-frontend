import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'not-found',
    loadChildren: () =>
      import('./shared/global.gateway').then((m) => m.GLOBAL_ERROR_ROUTES),
  },
  {
    path: 'guest',
    loadComponent: () =>
      import('./shared/views/layouts/guest-layout/guest-layout.component').then(
        (m) => m.GuestLayoutComponent,
      ),
  },
  {
    path: 'setup',
    loadComponent: () =>
      import('./shared/views/app-setup/app-setup.component').then(
        (m) => m.AppSetupComponent,
      ),
  },
  {
    path: 'app',
    loadComponent: () =>
      import('./shared/views/layouts/app-layout/app-layout.component').then(
        (m) => m.AppLayoutComponent,
      ),
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.gateway').then(
            (m) => m.DASHBOARD_ROUTES,
          ),
      },
      {
        path: 'components',
        loadChildren: () =>
          import('./features/components/component.gateway').then(
            (m) => m.COMPONENTS_ROUTES,
          ),
      },

      {
        path: 'products',
        loadChildren: () =>
          import('./features/products/products.gateway').then(
            (m) => m.PRODUCTS_ROUTE,
          ),
      },
      {
        path: 'billings',
        loadChildren: () =>
          import('./features/billings/billings.gateway').then(
            (m) => m.BILLINGS_ROUTE,
          ),
      },
      {
        path: 'clients',
        loadChildren: () =>
          import('./features/clients/clients.gateway').then(
            (m) => m.CLIENTS_ROUTE,
          ),
      },


      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'prefix',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full',
  },
];
