import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_BASEURL;

export default axios;
