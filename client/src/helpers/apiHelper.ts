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

class MyAPI {
  constructor(private config: IApiConfig = {}) {
    this.config.baseURL =
      this.config.baseURL || process.env.REACT_APP_SERVER_BASEURL;
  }
}

export { MyAPI };
