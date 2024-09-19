import { Route } from '@angular/router';

export const DASHBOARD_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./views/dashboard.component').then((m) => m.DashboardComponent),
    data: {
      breadcrumb: 'Dashboard',
    },
  },
];
