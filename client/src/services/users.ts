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
    throw new Error(
      "Oops! Somting went wrong! Please contact to our support team!"
    );
  } catch (err) {
    if (err && err.response && err.response.data) {
      if (err.response.status && err.response.status === 404) {
        throw new Error(
          "Plase check network status!! May be your internet connection has been lost!!"
        );
      }
      throw new Error(err.response.data.error);
    }
    throw new Error(
      "Oops! Somting went wrong! Please contact to our support team!"
    );
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
    throw new Error(
      "Oops! Somting went wrong! Please contact to our support team!"
    );
  } catch (err) {
    if (err && err.response && err.response.data) {
      if (err.response.status && err.response.status === 404) {
        throw new Error(
          "Plase check network status!! May be your internet connection has been lost!!"
        );
      }
      throw new Error(
        err.response && err.response.data && err.response.data.error
      );
    }
    throw new Error(
      "Oops! Somting went wrong! Please contact to our support team!"
    );
  }
};

const getUserInfoApi = async () => {
  try {
    const response = await axios.post(`/user/getUserInfo`);
    if (
      response &&
      response.data &&
      response.data.data
    ) {
      return response.data.data;
    }
    throw new Error(
      "Oops! Somting went wrong! Please contact to our support team!"
    );
  } catch (err) {
    if (err && err.response && err.response.data) {
      if (err.response.status && err.response.status === 404) {
        throw new Error(
          "Plase check network status!! May be your internet connection has been lost!!"
        );
      }
      throw new Error(
        err.response && err.response.data && err.response.data.error
      );
    }
    throw new Error(
      "Oops! Somting went wrong! Please contact to our support team!"
    );
  }
};
export { registerApi, signInApi, getUserInfoApi };
