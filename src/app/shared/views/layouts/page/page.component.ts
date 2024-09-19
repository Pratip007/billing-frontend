import { Component } from '@angular/core';

@Component({
  selector: 'tid-page',
  standalone: true,
  template: `
    <ng-content select="tid-page-header" />
    <ng-content select="tid-page-body" />
  `,
})
export class PageComponent {}
