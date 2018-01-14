/*
* Types that describe the shapes of the State of the Application
*/
import { List } from "immutable";
import { GithubUserMap, GithubNodeMap } from "./github";

export interface FrontEndApp {
  frontEndApp: {
    github: GithubNodeMap
  };
}
