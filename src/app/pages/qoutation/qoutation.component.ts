import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
@Component({
  selector: 'app-qoutation',
  templateUrl: './qoutation.component.html',
  styleUrls: ['./qoutation.component.scss']
})
export class QoutationComponent implements OnInit, AfterViewInit {

  constructor(private el:ElementRef) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    feather.replace()
  }



}
