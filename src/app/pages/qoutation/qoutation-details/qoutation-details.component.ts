import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
@Component({
  selector: 'app-qoutation-details',
  templateUrl: './qoutation-details.component.html',
  styleUrls: ['./qoutation-details.component.scss']
})
export class QoutationDetailsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    feather.replace();
  }

}
