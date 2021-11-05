import { DashboardComponent } from './../dashboard/dashboard.component';
import { DefaultComponent } from './default.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DefaultComponent, DashboardComponent],
  imports: [CommonModule, RouterModule],
})
export class DefaultModule {}
