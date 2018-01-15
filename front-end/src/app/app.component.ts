import "rxjs/add/operator/do";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { List } from "immutable";
import { GithubUserMap } from "./types";
import { EffectsGithubService, StateGithubService } from "./services";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {}
