import { Component } from "@angular/core";
import { person, Person } from "./person-model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public person: Person;

  constructor() {
    this.person = person;
  }

  setFormInput(f: any) {
    console.log(f);
  }
}
