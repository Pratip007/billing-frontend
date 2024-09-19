import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuComponent } from '../../menu/menu/menu.component';
import { MenuItemComponent } from '../../menu/menu-item/menu-item.component';
import { MenuHeaderComponent } from '../../menu/menu-header/menu-header.component';
import { MenuBorderComponent } from '../../menu/menu-border/menu-border.component';

@Component({
  selector: 'tid-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MenuComponent,
    MenuItemComponent,
    MenuHeaderComponent,
    MenuBorderComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {}
