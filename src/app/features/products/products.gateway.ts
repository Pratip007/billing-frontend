import { Route } from "@angular/router";

export const PRODUCTS_ROUTE : Route[] = [
  {
    path: '',
    loadComponent : ()=>
      import('./views/products/products.component').then((m)=>m.ProductsComponent),
    data : {
     breadcrumb: 'Products',
    },
  },
];
