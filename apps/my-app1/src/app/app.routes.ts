import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./routed/jopi.module').then((m) => m.JopiModule),
  },
];
