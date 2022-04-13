import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  routeInfo = new BehaviorSubject<any>([]);
  constructor() { 
   }
   sendRouteData(root:any){
    if(root && root.children.length>=0){
      if(root.component){
        this.routeInfo.next(root.snapshot);
      }
      this.sendRouteData(root.children[0]);
    }
   }
}
