import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';
import { QoutationComponent } from './qoutation/qoutation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from '../shared/directives/match-height.module';
import { ActionButtonsModule } from './shared/action-buttons/action-buttons.module';
import { ComponentNavigationModule } from './shared/component-navigation/component-navigation.module';
import { QoutationDetailsComponent } from './qoutation/qoutation-details/qoutation-details.component';
import { QoutationContainerComponent } from './qoutation/qoutation-container/qoutation-container.component';
import { QoutationFooterComponent } from './qoutation/qoutation-footer/qoutation-footer.component';
import { ViewQoutationsComponent } from './qoutation/view-qoutations/view-qoutations.component';
import { QoutationStatusComponent } from './qoutation/qoutation-status/qoutation-status.component';
import { SingleQoutationComponent } from './qoutation/single-qoutation/single-qoutation.component';

const routes:Routes = [
  {
    path:'', component:PagesComponent, children:[
      {
        path:'', component:QoutationComponent, data:{
          title:'Qoutation',
          iconFileName:'total-qout-light'
        },
      },
      {
        path:'view-qout', component:ViewQoutationsComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    PagesComponent,
    QoutationComponent,
    QoutationContainerComponent,
    QoutationFooterComponent,
    ViewQoutationsComponent,
    QoutationStatusComponent,
    SingleQoutationComponent,
    QoutationDetailsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ActionButtonsModule,
    ComponentNavigationModule,
    MatchHeightModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
