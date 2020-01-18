import axios from "axios";

interface IApiConfig {
  baseURL?: string;
  headers?: {
    Authorization?: string | null;
  };
}

interface IResponseData {
  // it depends on your response api data
  data: any;
  error: any;
  pagination: any;
}

export default axios;
