import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./routed/routed.module').then((m) => m.RoutedModule),
  },
];
