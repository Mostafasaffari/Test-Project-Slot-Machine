import express, { Request, Response, NextFunction } from "express";

import { createJwt, decryptJwt } from "../helpers/jwt";
import { ResponseData } from "../helpers/responseStructure";
import { emailPattern, passwordPattern } from "../helpers/regexPatterns";
import {
  findUserByEmail,
  addUser,
  findUserByEmailAndPassword
} from "../helpers/userMemory";

const router = express.Router();

router.post(
  "/signIn",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const currentUser = findUserByEmailAndPassword(email, password);
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
      const token = createJwt(email);
      return res
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
        const checkDoubleEmail = findUserByEmail(email);
        if (!checkDoubleEmail) {
          addUser({ name, email, password, coins: 20 });
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

router.post(
  "/getUserInfo",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(401).json(ResponseData(null, "Please signIn!!"));
      }
      try {
        const jwtObj = decryptJwt(token);
        const user = findUserByEmail(jwtObj.email);
        if (user) {
          return res.status(200).json(
            ResponseData({
              email: user.email,
              name: user.name,
              coins: user.coins
            })
          );
        } else {
          return res
            .status(401)
            .json(ResponseData(null, "Please signIn to system!!"));
        }
      } catch (e) {
        return res.status(400).json(ResponseData(null, "Bad Request!!!"));
      }
    } catch (err) {
      next(err);
    }
  }
);

export default router;