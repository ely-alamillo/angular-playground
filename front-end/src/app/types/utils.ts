/*
* Utility types
*/
export type Keys<K> = keyof K;

export interface Action<A> {
  type: string;
  payload?: A;
}

export type Reducer = <State, A>(s: State, a: Action<A>) => State;

export type Reducers<R> = { [P in keyof R]: Reducer };
