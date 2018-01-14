/*
 * Reducer Utility functions
*/
import { compose } from "@ngrx/core";
import { combineReducers } from "@ngrx/store";
import { Reducers } from "../../types";

export const combinedReducers = <C>(r: Reducers<C>) =>
  compose(combineReducers)(r);
