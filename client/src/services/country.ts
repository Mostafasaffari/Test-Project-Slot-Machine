import axios from "../helpers/apiHelper";

import { ICountry } from "../entities/country";
import handleError from "../helpers/handleError";

const getAllCountriesApi = async (): Promise<ICountry[]> => {
  try {
    const response = await axios.get<ICountry[]>(`/all`, {
      baseURL: "https://restcountries.eu/rest/v2"
    });
    return response.data;
  } catch (err) {
    return handleError(err);
  }
};

const getCountryByNameApi = async (name: string): Promise<ICountry> => {
  try {
    const response = await axios.get(`/country/fullname/${name}`);
    return response.data.data["0"];
  } catch (err) {
    return handleError(err);
  }
};

const getCountryByNamesApi = async (names: string[]): Promise<ICountry[]> => {
  try {
    const response = await axios.get(
      `/country/names/[${names.map(name => `"${name}"`)}]`
    );
    return response.data.data;
  } catch (err) {
    return handleError(err);
  }
};
export { getAllCountriesApi, getCountryByNameApi, getCountryByNamesApi };
