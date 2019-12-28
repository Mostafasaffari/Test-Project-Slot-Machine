import { IUserState, UserActionTypes, SIGNIN, SIGNOUT } from "./types";
import { localStore } from "../../helpers/localStorage";

const initialState: IUserState = {
  token: localStore.get("token") || "",
  username: ""
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
        username: action.username
      };

    case SIGNOUT:
      localStore.clear("token");
      return {
        ...initialState,
        token: ""
      };
    default:
      return state;
  }
};

export default userReducer;
