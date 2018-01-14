/*
* Types describing different Shapes of Github entities
*/

import { Map, List } from "immutable";
import { Keys } from "./utils";

export interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  "type": string;
  site_admin: boolean;
}

export interface GithubUserMap extends Map<Keys<GithubUser>, GithubUser[Keys<GithubUser>]> {}

export interface GithubNode {
  users: List<GithubUserMap>;
}

export interface GithubNodeMap extends Map<Keys<GithubNode>, GithubNode[Keys<GithubNode>]> {}
