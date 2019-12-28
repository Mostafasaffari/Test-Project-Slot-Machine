import express, { Request, Response, NextFunction } from "express";

import { ResponseData } from "../helpers/responseStructure";
import { decryptJwt } from "../helpers/jwt";
import { findUserByEmail, IUser } from "../helpers/userMemory";

const router = express.Router();

router.post(
  "/spin/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      let user: IUser;
      if (!token) {
        return res.status(401).json(ResponseData(null, "Please signIn!!"));
      }
      try {
        const jwtObj = decryptJwt(token);
        user = findUserByEmail(jwtObj.email);
        if (!user) {
          return res
            .status(401)
            .json(ResponseData(null, "Please signIn to system!!"));
        } else {
          user.coins--;
        }
      } catch (e) {
        return res.status(400).json(ResponseData(null, "Bad Request!!!"));
      }

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

      const randomNumberReel1 =
        Math.floor(Math.random() * Reel1.length - 1) + 1;
      const randomNumberReel2 =
        Math.floor(Math.random() * Reel2.length - 1) + 1;
      const randomNumberReel3 =
        Math.floor(Math.random() * Reel3.length - 1) + 1;

      res.status(200).json(
        ResponseData({
          Reel1: Reel1[randomNumberReel1],
          Reel2: Reel2[randomNumberReel2],
          Reel3: Reel3[randomNumberReel3],
          coins: user.coins,
          email: user.email,
          name: user.name
        })
      );
    } catch (err) {
      next(err);
    }
  }
);

export type Reel = "cherry" | "lemon" | "apple" | "banana";

const calculateCoins = (reel1: Reel, reel2: Reel, reel3: Reel): number => {
  if (reel1 === "cherry" && reel2 === "cherry" && reel3 === "cherry") {
    return 50;
  }
};

export default router;
