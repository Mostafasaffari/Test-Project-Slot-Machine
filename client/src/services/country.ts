import axios from "../helpers/apiHelper";

import { ICountry } from "../entities/country";

axios.defaults.baseURL = "https://restcountries.eu/rest/v2";

const getAllCountriesApi = async (): Promise<ICountry[]> => {
  try {
    const response = await axios.get<ICountry[]>(`/all`);
    console.log(response);
    if (response && response.data && response.data) {
      return response.data;
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
    }
    throw new Error(
      "Oops! Somting went wrong! Please contact to our support team!"
    );
  }
};

export { getAllCountriesApi };
