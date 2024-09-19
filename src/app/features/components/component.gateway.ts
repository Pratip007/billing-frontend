import { Routes } from '@angular/router';

export const COMPONENTS_ROUTES: Routes = [
  {
    path: 'accordion',
    loadComponent: () =>
      import('./accordion/accordion.component').then(
        (m) => m.AccordionComponent,
      ),
  },
  {
    path: 'breadcrumb',
    loadComponent: () =>
      import('./breadcrumb/breadcrumb.component').then(
        (m) => m.BreadcrumbComponent,
      ),
  },
  {
    path: 'carousel',
    loadComponent: () =>
      import('./carousel/carousel.component').then((m) => m.CarouselComponent),
  },
  {
    path: 'collapse',
    loadComponent: () =>
      import('./collapse/collapse.component').then((m) => m.CollapseComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent,
      ),
  },
  {
    path: 'dismiss',
    loadComponent: () =>
      import('./dismiss/dismiss.component').then((m) => m.DismissComponent),
  },
  {
    path: 'drawer',
    loadComponent: () =>
      import('./drawer/drawer.component').then((m) => m.DrawerComponent),
  },
  {
    path: 'dropdown',
    loadComponent: () =>
      import('./dropdown/dropdown.component').then((m) => m.DropdownComponent),
  },
  {
    path: 'events',
    loadComponent: () =>
      import('./events/events.component').then((m) => m.EventsComponent),
  },
  {
    path: 'modal',
    loadComponent: () =>
      import('./modal/modal.component').then((m) => m.ModalComponent),
  },
  {
    path: 'popover',
    loadComponent: () =>
      import('./popover/popover.component').then((m) => m.PopoverComponent),
  },
  {
    path: 'speed-dial',
    loadComponent: () =>
      import('./speed-dial/speed-dial.component').then(
        (m) => m.SpeedDialComponent,
      ),
  },
  {
    path: 'tabs',
    loadComponent: () =>
      import('./tabs/tabs.component').then((m) => m.TabsComponent),
  },
  {
    path: 'tooltip',
    loadComponent: () =>
      import('./tooltip/tooltip.component').then((m) => m.TooltipComponent),
  },
];
