import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showDropdown(){
    let dropDown = document.getElementById('profDropDown');
    if(dropDown?.className.includes('show-on-click')){
      dropDown.classList.remove('show-on-click')
      dropDown.classList.add('d-none')
    }else{
      dropDown?.classList.remove('d-none')
      dropDown?.classList.add('show-on-click')
    }
  }
}
