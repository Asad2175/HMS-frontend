import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenteeRoutingModule } from './rentee-routing.module';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { LayoutComponent } from './layout/layout.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import {ReactiveFormsModule} from "@angular/forms";
import { RentDetailsComponent } from './rent-details/rent-details.component';


@NgModule({
  declarations: [
    BasicDetailsComponent,
    LayoutComponent,
    RoomDetailsComponent,
    RentDetailsComponent
  ],
    imports: [
        CommonModule,
        RenteeRoutingModule,
        ReactiveFormsModule,
    ]
})
export class RenteeModule { }
