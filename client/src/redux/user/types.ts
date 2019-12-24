export const SIGNIN = "SIGNIN";
export const SIGNOUT = "SIGNOUT";

export interface IUserState {
  token: string;
  username: string;
}

interface ISignInAction {
  type: typeof SIGNIN;
  token: IUserState["token"];
  username: IUserState["username"];
}

interface ISignOutAction {
  type: typeof SIGNOUT;
}

export interface IUserActions {
  signIn: (
    token: IUserState["token"],
    username: IUserState["username"]
  ) => ISignInAction;
  signOut: () => ISignOutAction;
}

export type UserActionTypes = ISignInAction | ISignOutAction;
