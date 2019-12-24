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
      const data = await axios.get<ICountry[]>(
        `https://restcountries.eu/rest/v2/name/ira`
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
export default router;
