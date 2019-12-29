import express, { Request, Response, NextFunction } from "express";

import { ResponseData } from "../helpers/responseStructure";
import { decryptJwt } from "../helpers/jwt";
import { findUserByEmail, IUser } from "../helpers/userMemory";

const router = express.Router();

type Reel = "cherry" | "lemon" | "apple" | "banana";

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

      const randomNumberReel1 =
        Math.floor(Math.random() * Reel1.length - 1) + 1;
      const randomNumberReel2 =
        Math.floor(Math.random() * Reel2.length - 1) + 1;
      const randomNumberReel3 =
        Math.floor(Math.random() * Reel3.length - 1) + 1;

      const winCoins = calculateCoins([
        Reel1[randomNumberReel1],
        Reel2[randomNumberReel2],
        Reel3[randomNumberReel3]
      ]);

      user.coins += winCoins;
      console.log(winCoins, "wincoin");
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
  const countOfCherry = input.filter(s => s === "cherry").length;
  const countOfLemon = input.filter(s => s === "lemon").length;
  const countOfBanana = input.filter(s => s === "banana").length;
  const countOfApple = input.filter(s => s === "apple").length;

  console.log(input, countOfCherry, countOfLemon, countOfBanana, countOfApple);
  if (countOfCherry === 3) return 50;
  else if (countOfCherry === 2) return 40;
  else if (countOfApple === 3) return 20;
  else if (countOfApple === 2) return 10;
  else if (countOfBanana === 3) return 15;
  else if (countOfBanana === 2) return 5;
  else if (countOfLemon === 3) return 3;
  else return 0;
};

export default router;
