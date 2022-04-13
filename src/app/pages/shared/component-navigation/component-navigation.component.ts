import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-navigation',
  templateUrl: './component-navigation.component.html',
  styleUrls: ['./component-navigation.component.scss']
})
export class ComponentNavigationComponent implements OnInit, AfterViewInit {

  constructor(private el:ElementRef, private router:Router) { }
  @Input() navData:Array<any>;
  @Output() selectedTab = new EventEmitter<string>();
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let mainNav = this.el.nativeElement.querySelectorAll("#pilltab")
    let allA = mainNav[0].querySelectorAll("a")
    allA[0].classList.add('active', 'bg-purple', 'text-white', 'border-0')
  }

  changeActive(event:any, selectedTab:string){
    // let currentId = event.currentTarget.id;
    // let mainNav = this.el.nativeElement.querySelectorAll("#pilltab")
    // let allA = mainNav[0].querySelectorAll("a")
    // console.log(allA, 'all a is a')
    let mainNav = this.el.nativeElement.querySelectorAll("#pilltab")
    let allA = mainNav[0].querySelectorAll("a")
    allA.forEach((element:HTMLElement) => {
      if(element.className.includes('active')){
        element.classList.remove('active', 'bg-purple', 'border-0')
        element.classList.add('text-secondary', 'border')
      }
      if(element.className.includes('text-white')){
        element.classList.remove('text-white')
      }
    });
    event.currentTarget.classList.add('active', 'bg-purple', 'text-white', 'border-0')
    this.selectedTab.emit(selectedTab);
  }

}
