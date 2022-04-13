import { AfterViewInit, Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit, AfterViewInit {

  constructor(private el:ElementRef, private router:Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let currElem = this.router.url.split('/')[1];
    if(currElem){
      let currli:any = document.getElementById(currElem)
      currli.classList.add('active')
    }
  }

  changeActive(event:any){
    let allLi = this.el.nativeElement.querySelectorAll("li")
    allLi.forEach((element:HTMLElement) => {
      if(element.className.includes('active')){
        element.classList.remove('active')
      }
    });
    event.currentTarget.classList.add('active')
  }
}
