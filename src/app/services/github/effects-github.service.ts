import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { FrontEndApp } from "../../types";
import { FETCH_GITHUB_USERS } from "../../action-creators";

@Injectable()
export class EffectsGithubService {
  constructor(
    private store: Store<FrontEndApp>
  ) {}

  fetchGithubUser(): void {
    this.store.dispatch({
      type: FETCH_GITHUB_USERS
    });
  }
}
