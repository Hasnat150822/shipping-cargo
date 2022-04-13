import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { BreadcrumbService } from './shared/services/breadcrumb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shipping-cargo';
  subscription:Subscription;
  constructor (private router:Router, private route:ActivatedRoute, private breadCrumb:BreadcrumbService) {}

  ngOnInit() {
    this.subscription = this.router.events
        .pipe(
            filter(event => event instanceof NavigationEnd)
        )
        .subscribe(() => {
          let _root = this.route.root.children[0].children[0];
          this.breadCrumb.sendRouteData(_root)
          return window.scrollTo(0, 0)
        });
  }
}
