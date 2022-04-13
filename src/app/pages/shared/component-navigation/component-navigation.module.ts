import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentNavigationComponent } from './component-navigation.component';



@NgModule({
  declarations: [
    ComponentNavigationComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ComponentNavigationComponent
  ]
})
export class ComponentNavigationModule { }
