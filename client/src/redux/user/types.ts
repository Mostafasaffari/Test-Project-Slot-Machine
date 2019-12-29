export const SIGNIN = "SIGNIN";
export const SIGNOUT = "SIGNOUT";
export const SET_USER_INFO = "SET_USER_INFO";
export const SET_USER_COIN = "SET_USER_COIN";

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

interface ISetUserInfoAction {
  type: typeof SET_USER_INFO;
  username: IUserState["username"];
  coins: IUserState["coins"];
}

interface ISetUserCoinAction {
  type: typeof SET_USER_COIN;
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
  ) => ISetUserInfoAction;
  setUserCoin: (coins: IUserState["coins"]) => ISetUserCoinAction;
}

export type UserActionTypes =
  | ISignInAction
  | ISignOutAction
  | ISetUserInfoAction
  | ISetUserCoinAction;
