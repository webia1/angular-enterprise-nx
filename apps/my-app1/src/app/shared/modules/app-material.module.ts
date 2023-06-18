import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, MatIconModule],
  exports: [CommonModule, MatCardModule, MatIconModule],
})
export class AppMaterialModule {}
