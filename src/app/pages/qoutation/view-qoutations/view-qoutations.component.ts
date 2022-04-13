import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
@Component({
  selector: 'app-view-qoutations',
  templateUrl: './view-qoutations.component.html',
  styleUrls: ['./view-qoutations.component.scss']
})
export class ViewQoutationsComponent implements OnInit, AfterViewInit {

  navData:Array<any> = ["Qoutation", "Qoutation Detail", "Qoutation Container"]
  tabName:string = 'Qoutation';
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void {
    feather.replace();
  }

  getCurrentTab(tabName:string) {
    this.tabName = tabName;
  }

}
