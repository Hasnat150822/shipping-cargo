import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionButtonsComponent } from './action-buttons.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ActionButtonsComponent
  ],
  imports:[
    NgbModule
  ],
  exports: [
    ActionButtonsComponent
  ]
})
export class ActionButtonsModule { }
