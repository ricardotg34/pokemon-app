export interface Action<S, T> {
  type: T;
  payload: S
}
