export const SIGNIN = "SIGNIN";
export const SIGNOUT = "SIGNOUT";
export const SET_USER_INFO = "SET_USER_INFO";

export interface IUserState {
  token: string;
  username: string;
  coins: number;
}

interface ISignInAction {
  type: typeof SIGNIN;
  token: IUserState["token"];
  username: IUserState["username"];
  coins: IUserState["coins"];
}

interface ISignOutAction {
  type: typeof SIGNOUT;
}

interface ISetUserInfo {
  type: typeof SET_USER_INFO;
  username: IUserState["username"];
  coins: IUserState["coins"];
}
export interface IUserActions {
  signIn: (
    token: IUserState["token"],
    username: IUserState["username"],
    coins: IUserState["coins"]
  ) => ISignInAction;
  signOut: () => ISignOutAction;
  setUserInfo: (
    username: IUserState["username"],
    coins: IUserState["coins"]
  ) => ISetUserInfo;
}

export type UserActionTypes = ISignInAction | ISignOutAction | ISetUserInfo;
