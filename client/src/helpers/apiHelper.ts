import axios from "axios";
import { localStore } from "./localStorage";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_BASEURL;
axios.defaults.headers.common["Authorization"] = localStore.get("token");

export default axios;
