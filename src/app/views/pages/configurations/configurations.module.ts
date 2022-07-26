import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationsRoutingModule } from './configurations-routing.module';
import { FloorsComponent } from './floors/floors.component';


@NgModule({
  declarations: [
    FloorsComponent,
  ],
  imports: [
    CommonModule,
    ConfigurationsRoutingModule
  ]
})
export class ConfigurationsModule { }
