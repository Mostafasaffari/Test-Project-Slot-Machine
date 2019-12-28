import express, { Request, Response, NextFunction } from "express";
import { ResponseData } from "../helpers/responseStructure";

const router = express.Router();

router.post(
  "/spin/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
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
          Reel3: Reel3[randomNumberReel3]
        })
      );
    } catch (err) {
      next(err);
    }
  }
);

export default router;
