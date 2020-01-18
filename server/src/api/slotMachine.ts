import express, { Request, Response, NextFunction } from "express";

import { IUser } from "../helpers/userMemory";
import { authenticateJwt } from "../helpers/jwt";
import { ResponseData } from "../helpers/responseStructure";

const router = express.Router();

type Reel = "cherry" | "lemon" | "apple" | "banana";

router.post(
  "/spin/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      const user: IUser = authenticateJwt(token);
      if (!user) {
        return res.status(401).json(ResponseData(null, "Please signIn!!"));
      }
      user.coins--;

      const Reel1: Reel[] = [
        "cherry",
        "lemon",
        "apple",
        "lemon",
        "banana",
        "banana",
        "lemon",
        "lemon"
      ];
      const Reel2: Reel[] = [
        "lemon",
        "apple",
        "lemon",
        "lemon",
        "cherry",
        "apple",
        "banana",
        "lemon"
      ];
      const Reel3: Reel[] = [
        "lemon",
        "apple",
        "lemon",
        "apple",
        "cherry",
        "lemon",
        "banana",
        "lemon"
      ];

      const randomNumberReel1 = Math.floor(Math.random() * Reel1.length);
      const randomNumberReel2 = Math.floor(Math.random() * Reel2.length);
      const randomNumberReel3 = Math.floor(Math.random() * Reel3.length);

      const winCoins = calculateCoins([
        Reel1[randomNumberReel1],
        Reel2[randomNumberReel2],
        Reel3[randomNumberReel3]
      ]);

      user.coins += winCoins;
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

const calculateCoins = (input: [Reel, Reel, Reel]): number => {
  const basket = input.reduce((reels: any, reel) => {
    reels[reel] = (reels[reel] || 0) + 1;
    return reels;
  }, {});

  if (basket.lemon === 3) return 3;
  if (basket.banana === 2) return 5;
  if (basket.banana === 3) return 15;
  if (basket.apple === 2) return 10;
  if (basket.apple === 3) return 20;
  if (basket.cherry === 2) return 40;
  if (basket.cherry === 3) return 50;

  return 0;
};

export default router;
