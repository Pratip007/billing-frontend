import { Route } from "@angular/router";

export const BILLINGS_ROUTE : Route[] = [
  {
    path: '',
    loadComponent : ()=>
      import('./views/billings/billings.component').then((m)=>m.BillingsComponent),
    data : {
     breadcrumb: 'Billings',
    },
  },
];
