import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { Subscription, filter } from 'rxjs';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
} from '@angular/router';
import { BreadcrumbT } from '../../models/breadcrumb.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'tid-breadcrumb',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- <div class="flex items-center mb-4"> -->
    <nav aria-label="Breadcrumb">
      <h3
        class="block mb-1 text-md font-medium text-gray-900 dark:text-white"
      >
        {{ breadcrumbs[breadcrumbs.length - 1].label }}
      </h3>
      <ol
        class="inline-flex items-center space-x-1 rtl:space-x-reverse"
      >
        @for (breadcrumb of breadcrumbs; track $index) {
          @if ($first) {
            <li class="inline-flex items-center">
              <a
                [routerLink]="breadcrumb.url"
                class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  class="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
                  />
                </svg>
                {{ breadcrumb.label }}
              </a>
            </li>
          } @else if ($last) {
            <li aria-current="page">
              <div class="flex items-center">
                <svg
                  class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span
                  class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
                  >{{ breadcrumb.label }}</span
                >
              </div>
            </li>
          } @else {
            <li>
              <div class="flex items-center">
                <svg
                  class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <a
                  [routerLink]="breadcrumb.url"
                  class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >{{ breadcrumb.label }}</a
                >
              </div>
            </li>
          }
        }
      </ol>
    </nav>
    <!-- </div> -->
  `,
  styles: ``,
})
export class BreadcrumbComponent
  implements OnInit, OnDestroy
{
  breadcrumbs: BreadcrumbT[] = [];
  bus: Subscription = new Subscription();

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly title: Title,
  ) {}

  ngOnInit(): void {
    this.handleRouteChange();

    // Check if the application is reloaded
    if (this.router.navigated) {
      // If the application is reloaded, the NavigationEnd event won't be triggered immediately
      // Therefore, manually trigger the breadcrumb creation logic
      this.breadcrumbs = this.createBreadcrumbs(
        this.activatedRoute.root,
      );
    }
  }

  ngOnDestroy(): void {
    this.bus.unsubscribe();
  }

  private handleRouteChange(): void {
    this.bus.add(
      this.router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd),
        )
        .subscribe(() => {
          this.breadcrumbs = this.createBreadcrumbs(
            this.activatedRoute.root,
          );
        }),
    );
    setTimeout(() => {
      this.title.setTitle(
        `EDTech | ${this.breadcrumbs[this.breadcrumbs.length - 1].label}`,
      );
    }, 500);
  }

  private createBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: BreadcrumbT[] = [],
  ): BreadcrumbT[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url
        .map((segment) => segment.path)
        .join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
        breadcrumbs.push({
          label: this.getBreadcrumbLabel(child),
          url: url,
        });
        return this.createBreadcrumbs(
          child,
          url,
          breadcrumbs,
        );
      }
    }

    return breadcrumbs;
  }

  private getBreadcrumbLabel(
    route: ActivatedRoute,
  ): string {
    const routeData = route.snapshot.data;
    return routeData['breadcrumb'] || '';
  }
}
