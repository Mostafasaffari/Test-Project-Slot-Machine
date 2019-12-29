import axios from "../helpers/apiHelper";
import handleError from "../helpers/handleError";
import { localStore } from "../helpers/localStorage";

const spinApi = async () => {
  try {
    const response = await axios.post(`/slot/spin`, null, {
      headers: {
        Authorization: localStore.get("token")
      }
    });
    return response.data.data;
  } catch (err) {
    handleError(err);
  }
};

export { spinApi };
