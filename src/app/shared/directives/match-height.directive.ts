import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMatchHeight]'
})
export class MatchHeightDirective implements AfterViewInit {
  @Input('appMatchHeight') elementId:string = '';
  @Input('matchHeight') isMatchHeight:string;
  @Input('equalChilds') equalChilds:string;
  constructor(private el:ElementRef) { }

  ngAfterViewInit() {
    let component = document.getElementById(this.elementId);
    let givenEl:any = this.el.nativeElement;
    if(this.isMatchHeight) {
      givenEl.style.height = `${component?.getBoundingClientRect().height}px`;
    }else{
      givenEl.style.height = `${component?.getBoundingClientRect().y}px`;
    }
    if(this.equalChilds){
      let allChilds = givenEl.querySelectorAll("."+this.elementId)
      // get maximum element height
      let justHeights:Array<any> = [];
      allChilds.forEach((element:HTMLElement) => {
        justHeights.push(element.clientHeight);
      });
      let maxHeight = Math.max(...justHeights);
      console.log(maxHeight,'max heihg')
      allChilds.forEach((child:HTMLElement) => {
        child.setAttribute('style', `height:${maxHeight.toString()}px`);
      });
    }
  }
}
