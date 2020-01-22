import { MyAPI } from "../helpers/apiHelper";

import { ICountry } from "../entities/country";
import handleError from "../helpers/handleError";

const api = new MyAPI();

const getAllCountriesApi = async (): Promise<ICountry[]> => {
  const apiWithBase = new MyAPI({
    baseURL: "https://restcountries.eu/rest/v2"
  });
  try {
    const response = await apiWithBase.get(`/all`);
    return response.data;
  } catch (err) {
    return handleError(err);
  }
};

const getCountryByNameApi = async (name: string): Promise<ICountry> => {
  try {
    const response = await api.get(`/country/fullname/${name}`);
    return response.data.data["0"];
  } catch (err) {
    return handleError(err);
  }
};

const getCountryByNamesApi = async (names: string[]): Promise<ICountry[]> => {
  try {
    const response = await api.get(
      `/country/names/[${names.map(name => `"${name}"`)}]`
    );
    return response.data.data;
  } catch (err) {
    return handleError(err);
  }
};
export { getAllCountriesApi, getCountryByNameApi, getCountryByNamesApi };
