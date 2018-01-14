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
export class AppComponent implements OnInit {
  public githubUsers$: Observable<List<GithubUserMap>>;

  constructor(
    private effectsGithubService: EffectsGithubService,
    private stateGithubService: StateGithubService
  ) {}

  ngOnInit(): void {
    this.effectsGithubService.fetchGithubUser();

    this.githubUsers$ = this.stateGithubService.getUsers().do(console.log);
  }
}
