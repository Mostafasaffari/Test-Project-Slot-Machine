import axios from "../helpers/apiHelper";

const slotSpinApi = async () => {
  try {
    const response = await axios.post(`/slot/spin`);
    if (response && response.data && response.data.data) {
      return response.data.data;
    }
    throw new Error(
      "Oops! Somting went wrong! Please contact to our support team!"
    );
  } catch (err) {
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
  }
};

export { slotSpinApi };
