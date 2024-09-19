import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'tid-content-projector',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class ContentProjectorComponent {}
