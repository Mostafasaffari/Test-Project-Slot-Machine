import axios from "../helpers/apiHelper";

import { IUserRegister, IUserSignIn } from "../entities/user";

import { localStore } from "../helpers/localStorage";
import handleError from "../helpers/handleError";

const registerApi = async (input: IUserRegister) => {
  try {
    const response = await axios.post(`/user/register`, {
      ...input
    });
    return response.data.data;
  } catch (err) {
    return handleError(err);
  }
};

const signInApi = async (input: IUserSignIn) => {
  try {
    const response = await axios.post(`/user/signIn`, {
      ...input
    });
    return response.data.data;
  } catch (err) {
    return handleError(err);
  }
};

const getUserInfoApi = async () => {
  try {
    const response = await axios.post(`/user/getUserInfo`, null, {
      headers: {
        Authorization: localStore.get("token")
      }
    });
    return response.data.data;
  } catch (err) {
    return handleError(err);
  }
};
export { registerApi, signInApi, getUserInfoApi };
