import { IErrorHandle } from "../interfaces/errorHandle";

const handleError = (err: any) => {
  if (err && err.response && err.response.data) {
    if (
      err.response.status &&
      err.response.status === 404 &&
      !err.response.data.error
    ) {
      throw new Error(
        "Plase check network status!! May be your internet connection has been lost!!"
      );
    }
    throw new Error(err.response.data.error);
  }
  throw new Error(
    "Oops! Somting went wrong! Please contact to our support team!"
  );
};

export default handleError;
