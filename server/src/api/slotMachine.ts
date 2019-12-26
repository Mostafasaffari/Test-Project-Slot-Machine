import express, { Request, Response, NextFunction, response } from "express";
import axios from "axios";

import { ICountry } from "../models/country";

const router = express.Router();

router.get(
  "/slot/",
  async (req: Request, res: Response, next: NextFunction) => {
    const Reel1: string[] = [
      "cherry",
      "lemon",
      "apple",
      "lemon",
      "banana",
      "banana",
      "lemon",
      "lemon"
    ];
    const Reel2: string[] = [
      "lemon",
      "apple",
      "lemon",
      "lemon",
      "cherry",
      "apple",
      "banana",
      "lemon"
    ];
    const Reel3: string[] = [
      "lemon",
      "apple",
      "lemon",
      "apple",
      "cherry",
      "lemon",
      "banana",
      "lemon"
    ];
    
  }
);

export default router;
