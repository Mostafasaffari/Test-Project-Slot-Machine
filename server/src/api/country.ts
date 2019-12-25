import express, { Request, Response, NextFunction, response } from "express";
import axios from "axios";

import { ICountry } from "../models/country";

const router = express.Router();

router.get(
  "/fullname/:countryname",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await axios.get<ICountry>(
        `https://restcountries.eu/rest/v2/name/${req.params.countryname}?fullText=true`
      );
      const response = data.data;
      res.status(200).json(response);
    } catch (err) {
      next({
        status: err.response.status,
        message:
          err.response.status === 404
            ? "Country not found!!!"
            : `Oops somting went wrong in ${req.url}`
      });
    }
  }
);

router.get(
  "/names/:countrynames",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reqCountryNames: string[] = JSON.parse(req.params.countrynames);
      const urls = reqCountryNames.map(countryname => {
        return axios.get<ICountry[]>(
          `https://restcountries.eu/rest/v2/name/${countryname}`
        );
      });

      let listOfData: ICountry[] = [];
      for (const url of urls) {
        try {
          const result = await url;
          if (result.data && result.data.length > 0) {
            result.data.forEach(i => {
              listOfData.push(i);
            });
          }
        } catch (err) {
          //This catch for ignore some urls that may have errors because if url has error, function
          //completly fire error. For example if in countrynames user search 'HHH' so api will return 404
          //and this error cuses break all url request
        }
      }
      res.status(200).json(listOfData);
    } catch (err) {
      next(err);
    }
  }
);
export default router;
