import { Component } from '@angular/core';

@Component({
  selector: 'tid-menu-item',
  standalone: true,
  imports: [],
  template: `
    <div class="item">
      <ng-content />
    </div>
  `,
  styles: `
    .item,
    .item > :not([hidden]) ~ :not([hidden]){
      --tw-space-y-reverse: 0;
      margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
    }
  `,
})
export class MenuItemComponent {}
