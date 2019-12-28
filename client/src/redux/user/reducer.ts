import {
  IUserState,
  UserActionTypes,
  SIGNIN,
  SIGNOUT,
  SET_USER_INFO
} from "./types";
import { localStore } from "../../helpers/localStorage";

const initialState: IUserState = {
  token: localStore.get("token") || "",
  username: "",
  coins: 0
};

const userReducer = (
  state = initialState,
  action: UserActionTypes
): IUserState => {
  switch (action.type) {
    case SIGNIN:
      localStore.set("token", action.token);
      return {
        ...state,
        token: action.token,
        username: action.username,
        coins: action.coins
      };

    case SIGNOUT:
      localStore.clear("token");
      return {
        ...initialState,
        token: ""
      };
    case SET_USER_INFO:
      return {
        ...state,
        username: action.username,
        coins: action.coins
      };
    default:
      return state;
  }
};

export default userReducer;
