import axios from "../helpers/apiHelper";

import { IUserRegister, IUserSignIn } from "../entities/user";

const registerApi = async (input: IUserRegister) => {
  try {
    const response = await axios.post(`/user/register`, {
      ...input
    });
    if (response && response.data && response.data.data) {
      return response.data.data;
    }
    throw "";
  } catch (err) {
    if (err && err.response && err.response.data) {
      throw err.response.data.error;
    }
    throw "Oops! Somting went wrong! Please contact to our support team!";
  }
};

const signInApi = async (input: IUserSignIn) => {
  try {
    const response = await axios.post(`/user/signIn`, {
      ...input
    });
    if (
      response &&
      response.data &&
      response.data.data &&
      response.data.data.token
    ) {
      return response.data.data.token;
    }
    return "";
  } catch (err) {
    if (err && err.response && err.response.data) {
      throw err.response.data.error;
    }
    throw "Oops! Somting went wrong! Please contact to our support team!";
  }
};

export { registerApi, signInApi };
