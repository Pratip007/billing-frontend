import { Component } from '@angular/core';
import {  BreadcrumbComponent } from "../../navigations/breadcrumb/breadcrumb.component";

@Component({
  selector: 'tid-page-header',
  standalone: true,
  imports: [BreadcrumbComponent,],
  template: ` <div
    class="flex items-center justify-between mb-4"
  >
    <tid-breadcrumb></tid-breadcrumb>
    <ng-content />
  </div>`,
})
export class PageHeaderComponent {}
