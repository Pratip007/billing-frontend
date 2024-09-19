import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'tid-app-setup',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './app-setup.component.html',
  styleUrl: './app-setup.component.scss',
})
export class AppSetupComponent {
  readonly date = new Date();
}
