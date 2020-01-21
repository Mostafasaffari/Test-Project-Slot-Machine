import { MyAPI } from "../helpers/apiHelper";

import { IUserRegister, IUserSignIn } from "../entities/user";

import { localStore } from "../helpers/localStorage";
import handleError from "../helpers/handleError";

const api = new MyAPI();

const registerApi = async (input: IUserRegister) => {
  const response = await api.post(`/user/register`, {
    ...input
  });
  return response.data.data;
};

const signInApi = async (input: IUserSignIn) => {
  const response = await api.post(`/user/signIn`, {
    ...input
  });
  return response.data.data;
};

const getUserInfoApi = async () => {
  const apiWithAuth = new MyAPI({
    headers: {
      Authorization: localStore.get("token")
    }
  });
  try {
    const response = await apiWithAuth.post(`/user/getUserInfo`);
    return response.data.data;
  } catch (err) {
    return handleError(err);
  }
};
export { registerApi, signInApi, getUserInfoApi };
