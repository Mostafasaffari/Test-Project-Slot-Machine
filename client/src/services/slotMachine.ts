import { MyAPI } from "../helpers/apiHelper";
import { localStore } from "../helpers/localStorage";

const spinApi = async () => {
  const apiWithAuth = new MyAPI({
    headers: {
      Authorization: localStore.get("token")
    }
  });

  const response = await apiWithAuth.post(`/slot/spin`);
  return response.data;
};

export { spinApi };
