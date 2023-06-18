import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaygroundComponent } from './components/playground/playground.component';

export const appRoutedRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'playground',
    component: PlaygroundComponent,
  },
];
