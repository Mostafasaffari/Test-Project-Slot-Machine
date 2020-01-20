import axios from "axios";
import handleError from "./handleError";

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

  public async get(url: string): Promise<IResponseData> {
    try {
      const response = await axios.get(url, this.config);
      return response.data as IResponseData;
    } catch (err) {
      throw err;
    }
  }
  public async post(url: string, data: any = {}): Promise<IResponseData> {
    try {
      const response = await axios.post(url, data, this.config);
      return response.data as IResponseData;
    } catch (err) {
      return handleError(err);
    }
  }
  public async put(url: string, data: any = {}): Promise<IResponseData> {
    try {
      const response = await axios.put(url, data, this.config);
      return response.data as IResponseData;
    } catch (err) {
      return handleError(err);
    }
  }
}

export { MyAPI };
