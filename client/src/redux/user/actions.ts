import { IUserActions, SIGNIN, SIGNOUT, SET_USER_INFO } from "./types";

const actions: IUserActions = {
  signIn: (token, username, coins) => ({
    type: SIGNIN,
    token,
    username,
    coins
  }),
  signOut: () => ({
    type: SIGNOUT
  }),
  setUserInfo: (username, coins) => ({
    type: SET_USER_INFO,
    username,
    coins
  })
};

export default actions;
