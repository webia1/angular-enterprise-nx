import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutedRoutes } from './routed-routes';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(appRoutedRoutes)],
})
export class RoutedModule {}
