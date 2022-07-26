import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FloorsComponent} from "./floors/floors.component";

const routes: Routes = [
  {path: 'floors', component: FloorsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationsRoutingModule { }
