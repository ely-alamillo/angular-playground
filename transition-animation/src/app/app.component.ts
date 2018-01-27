import { Component } from "@angular/core";
import { routerAnimation } from "./transition.animation";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [routerAnimation],
})
export class AppComponent {
  getRouteAnimation(outlet): any {
    return outlet.activatedRouteData.animation;
  }
}
