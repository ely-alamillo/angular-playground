import "rxjs/add/operator/switchMapTo";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { fromJS } from "immutable";
import { FETCH_GITHUB_USERS, SET_GITHUB_USERS, FETCH_GITHUB_USERS_ERROR } from "../action-creators";

@Injectable()
export class GithubEffects {
  private usersUrl = "https://api.github.com/users";

  constructor(
    private actions$: Actions,
    private http: Http
  ) {}

  @Effect() fetchGithubUsers = this.actions$
    .ofType(FETCH_GITHUB_USERS)
    .switchMapTo(this.http.get(this.usersUrl))
      .map((r: Response) => ({
        type: SET_GITHUB_USERS,
        payload: fromJS(r.json())
      }))
      .catch(e => Observable.of({
        type: FETCH_GITHUB_USERS_ERROR,
        payload: e.status
      }));
}
