import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { List } from "immutable";
import { FrontEndApp, GithubUserMap } from "../../types";

@Injectable()
export class StateGithubService {
  constructor(
    private store: Store<FrontEndApp>
  ) {}

  getUsers(): Store<List<GithubUserMap>> {
    return this.store.select(state => state.frontEndApp.github.get("users"));
  }
}
