import { fromJS, List } from "immutable";
import { SET_GITHUB_USERS } from "../../action-creators";
import { Action, GithubUserMap, Keys } from "../../types";

interface State {
  users: List<GithubUserMap>;
}

interface StateMap extends Map<Keys<State>, State[Keys<State>]> {}

const initialGithubUser = {
  login: undefined,
  id: undefined,
  avatar_url: undefined,
  gravatar_id: undefined,
  url: undefined,
  html_url: undefined,
  followers_url: undefined,
  following_url: undefined,
  gists_url: undefined,
  starred_url: undefined,
  subscriptions_url: undefined,
  organizations_url: undefined,
  repos_url: undefined,
  events_url: undefined,
  received_events_url: undefined,
  "type": undefined,
  site_admin: undefined
};

const initialState: StateMap = fromJS({
  users: [initialGithubUser]
});

const setUsers = (state: StateMap, action: Action<List<GithubUserMap>>) =>
  state.set("users", action.payload);

export const github = (state: StateMap = initialState, action: Action<any>) => {
  switch (action.type) {
    case SET_GITHUB_USERS:
      return setUsers(state, action);

    default:
      return state;
  }
};
