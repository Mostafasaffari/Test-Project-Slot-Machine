import express, { Request, Response, NextFunction } from "express";
import { ICountry } from "../models/country";

const router = express.Router();

router.get(
  "/name/:countryname",
  async (req: Request, res: Response, next: NextFunction) => {

    const response = {};
    res.status(200).json(response);
  }
);
export default router;
