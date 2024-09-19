import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tid-menu',
  standalone: true,
  imports: [RouterLink],
  template: `
    <ng-content select="tid-menu-header" />
    <ng-content select="tid-menu-border" />
    <ng-content select="tid-menu-item" />
  `,
})
export class MenuComponent {}
