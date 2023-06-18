import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutedRoutes } from './routed-routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(appRoutedRoutes), SharedModule],
  exports: [],
})
export class RoutedModule {}
