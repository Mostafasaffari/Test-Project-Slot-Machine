import { IUserActions, SIGNIN, SIGNOUT } from "./types";

const actions: IUserActions = {
  signIn: (token, username) => ({
    type: SIGNIN,
    token,
    username
  }),
  signOut: () => ({
    type: SIGNOUT
  })
};

export default actions;
