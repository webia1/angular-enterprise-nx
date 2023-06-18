import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutedRoutes } from './routed-routes';
import { SharedModule } from '../shared/shared.module';
import { PlaygroundComponent } from './components/playground/playground.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, PlaygroundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutedRoutes),
    SharedModule,
    ReactiveFormsModule,
    FormlyModule.forChild(),
    FormlyMaterialModule,
  ],
  exports: [],
})
export class RoutedModule {}
