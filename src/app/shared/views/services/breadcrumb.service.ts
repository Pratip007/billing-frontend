import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Data,
  NavigationEnd,
  Router,
} from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';
import { BreadcrumbT } from '../models/breadcrumb.model';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  // Subject emitting the breadcrumb hierarchy
  private readonly _breadcrumbs$ = new BehaviorSubject<
    BreadcrumbT[]
  >([]);

  // Observable exposing the breadcrumb hierarchy
  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();

  constructor(private router: Router) {
    this.router.events
      .pipe(
        // Filter the NavigationEnd events as the breadcrumb is updated only when the route reaches its end
        filter((event) => event instanceof NavigationEnd),
      )
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .subscribe((event) => {
        // Construct the breadcrumb hierarchy
        const root = this.router.routerState.snapshot.root;
        const breadcrumbs: BreadcrumbT[] = [];
        this.addBreadcrumb(root, [], breadcrumbs);

        // Emit the new hierarchy
        this._breadcrumbs$.next(breadcrumbs);
      });
  }

  private addBreadcrumb(
    route: ActivatedRouteSnapshot,
    parentUrl: string[],
    breadcrumbs: BreadcrumbT[],
  ) {
    if (route) {
      // Construct the route URL
      const routeUrl = parentUrl.concat(
        route.url.map((url) => url.path),
      );

      // Add an element for the current route part
      if (route.data['breadcrumb']) {
        const breadcrumb: Breadcrumb = {
          label: this.getLabel(route.data),
          url: '/' + routeUrl.join('/'),
          params: route.queryParams,
        };
        breadcrumbs.push(breadcrumb);
      }

      if (route.firstChild)
        // Add another element for the next route part
        this.addBreadcrumb(
          route.firstChild,
          routeUrl,
          breadcrumbs,
        );
    }
  }

  private getLabel(data: Data) {
    // The breadcrumb can be defined as a static string or as a function to construct the breadcrumb element out of the route data
    return typeof data['breadcrumb'] === 'function'
      ? data['breadcrumb'](data)
      : data['breadcrumb'];
  }
}
