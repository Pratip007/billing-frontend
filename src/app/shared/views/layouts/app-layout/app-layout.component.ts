import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navigations/navbar/navbar.component';
import { SidebarComponent } from '../../navigations/sidebar/sidebar.component';
import { ContentProjectorComponent } from '../content-projector/content-projector.component';
import {
  initAccordions,
  initCollapses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips,
} from 'flowbite';

@Component({
  selector: 'tid-app-layout',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, ContentProjectorComponent],
  template: `
    <div class="antialiased bg-gray-50 dark:bg-gray-900">
      <tid-navbar />
      <!-- Sidebar -->
      <div>
        <tid-sidebar />
        <main class="m-6 h-auto">
          <tid-content-projector />
        </main>
      </div>
    </div>
  `,
  styles: [],
})
export class AppLayoutComponent implements OnInit {
  ngOnInit(): void {
    initDropdowns();
    initAccordions();
    initCollapses();
    initTooltips();
    initPopovers();
    initTabs();
    initModals();
    initDrawers();
  }
}
