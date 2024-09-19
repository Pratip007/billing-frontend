import { Component, OnInit } from '@angular/core';
import { initDismisses } from 'flowbite';

@Component({
  selector: 'tid-lib-dismiss',
  standalone: true,
  template: `
    <div class="flex items-center justify-center h-screen bg-gray-50">
      <div class="mx-auto max-w-screen-md px-4"></div>
    </div>
  `,
})
export class DismissComponent implements OnInit {
  ngOnInit(): void {
    initDismisses();
  }
}
