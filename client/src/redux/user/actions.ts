import {
  IUserActions,
  SIGNIN,
  SIGNOUT,
  SET_USER_INFO,
  SET_USER_COIN
} from "./types";

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
  }),
  setUserCoin: coins => ({
    type: SET_USER_COIN,
    coins: coins
  })
};

export default actions;
