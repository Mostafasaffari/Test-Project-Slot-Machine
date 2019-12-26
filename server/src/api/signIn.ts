import jwt from "jsonwebtoken";
import express, { Request, Response, NextFunction } from "express";

import { ResponseData } from "../helpers/responseStructure";
import { emailPattern, passwordPattern } from "../helpers/regexPatterns";

const jwtKey = "Slot-Machine-$$Money";
const jwtExpirySeconds = 30000;

const router = express.Router();

interface IUser {
  name: string;
  password: string;
  email: string;
  coins: Number;
}
let memoryUser: IUser[] = [];

router.post(
  "/signIn",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const currentUser = memoryUser.find(
        s => s.email === email && s.password === password
      );
      if (
        !email ||
        !password ||
        !currentUser ||
        !email.match(emailPattern) ||
        !password.match(passwordPattern)
      ) {
        return res
          .status(401)
          .json(ResponseData(null, "email or password is incorrect!!"))
          .end();
      }
      const token = jwt.sign({ email }, jwtKey, {
        algorithm: "HS256",
        expiresIn: jwtExpirySeconds
      });
      res
        .status(200)
        .json(ResponseData({ token, email, coins: currentUser.coins }));
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  "/register",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body;
      if (
        email &&
        password &&
        name &&
        email.match(emailPattern) &&
        password.match(passwordPattern)
      ) {
        const checkDoubleEmail = memoryUser.find(s => s.email === email);
        if (!checkDoubleEmail) {
          memoryUser.push({ name, email, password, coins: 20 });
          res.status(201).json(ResponseData({ email, coins: 20 }));
        } else {
          res
            .status(409)
            .json(ResponseData(null, "This email is already registered!!!"));
        }
      } else {
        res.status(400).json(ResponseData(null, "Please fill all fields!"));
      }
    } catch (err) {
      next(err);
    }
  }
);

router.get("/users", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json(memoryUser);
});
export default router;
