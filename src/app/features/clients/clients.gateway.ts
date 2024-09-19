import { Route } from "@angular/router";

export const CLIENTS_ROUTE : Route[] = [
  {
    path: '',
    loadComponent : ()=>
      import('./views/clients/clients.component').then((m)=>m.ClientsComponent),
    data : {
     breadcrumb: 'Clients',
    },
  },
];
