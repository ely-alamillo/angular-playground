import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/map";
import "rxjs/add/operator/startWith";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { person, Person } from "./person-model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public person: Person;
  public isShow: Observable<boolean>;

  constructor() {
    this.person = person;

    const widthPred = (width: number) => width < 800 ? false : true;

    this.isShow = Observable.fromEvent(window, "resize")
      .map((w: Event) => (w.target as Window).innerWidth)
      .map(widthPred)
      .startWith(widthPred(window.innerWidth));
  }

  setFormInput(f: any): void {
    console.log(f);
  }
}
