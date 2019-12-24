import { IUserState, UserActionTypes, SIGNIN, SIGNOUT } from "./types";
import { cookieStore } from "../../helpers/localStorage";

const initialState: IUserState = {
  token: cookieStore.get("token") || "",
  username: ""
};

const userReducer = (
  state = initialState,
  action: UserActionTypes
): IUserState => {
  switch (action.type) {
    case SIGNIN:
      cookieStore.set("token", action.token);
      return {
        ...state,
        token: action.token,
        username: action.username
      };

    case SIGNOUT:
      cookieStore.clear("token");
      return {
        ...initialState,
        token: ""
      };
    default:
      return state;
  }
};

export default userReducer;
