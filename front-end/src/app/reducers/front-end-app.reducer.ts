import { combinedReducers } from "../shared";
import { github } from "./github";

export function frontEndApp(state = {}, action): any {
  return combinedReducers({
    github
  })(state, action);
}
