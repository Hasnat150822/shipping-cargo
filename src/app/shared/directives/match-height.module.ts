import { NgModule } from "@angular/core";
import { MatchHeightDirective } from "./match-height.directive";

@NgModule({
    declarations: [
        MatchHeightDirective
    ],
    exports: [
        MatchHeightDirective
    ]
  })
  export class MatchHeightModule { }