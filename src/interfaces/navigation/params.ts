export interface INavigationParams<T extends object, R extends keyof T> {
  initial?: boolean;
  screen: R;
  params: T[R];
}
