import { MyAPI } from "../helpers/apiHelper";

import { ICountry } from "../entities/country";

const api = new MyAPI();

const getAllCountriesApi = async (): Promise<ICountry[]> => {
  const apiWithBase = new MyAPI({
    baseURL: "https://restcountries.eu/rest/v2"
  });

  const response = await apiWithBase.get(`/all`);
  return response.data;
};

const getCountryByNameApi = async (name: string): Promise<ICountry> => {
  const response = await api.get(`/country/fullname/${name}`);
  return response.data.data["0"];
};

const getCountryByNamesApi = async (names: string[]): Promise<ICountry[]> => {
  const response = await api.get(
    `/country/names/[${names.map(name => `"${name}"`)}]`
  );
  return response.data.data;
};
export { getAllCountriesApi, getCountryByNameApi, getCountryByNamesApi };
