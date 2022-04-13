import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { BreadcrumbService } from '../shared/services/breadcrumb.service';
import * as feather from 'feather-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit, AfterViewInit {

  constructor(private breadCrumb:BreadcrumbService, private el:ElementRef, private router:Router) { }

  ngOnInit(): void {
    this.breadCrumb.routeInfo.subscribe((res:any)=>{
      console.log(res, 'response')
    })
  }

  ngAfterViewInit(): void {
    feather.replace();
  }



}
