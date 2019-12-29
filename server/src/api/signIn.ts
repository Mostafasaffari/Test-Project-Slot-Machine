import express, { Request, Response, NextFunction } from "express";

import { IErrorHandle } from "../interfaces/errorHandle";

import { createJwt, authenticateJwt } from "../helpers/jwt";
import { ResponseData } from "../helpers/responseStructure";
import { emailPattern, passwordPattern } from "../helpers/regexPatterns";
import {
  findUserByEmail,
  addUser,
  findUserByEmailAndPassword,
  IUser
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
        const error: IErrorHandle = {
          status: 401,
          message: "email or password is incorrect!!"
        };
        throw error;
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
          return res.status(201).json(ResponseData({ email, coins: 20 }));
        } else {
          const error: IErrorHandle = {
            status: 409,
            message: "This email is already registered!!!"
          };
          throw error;
        }
      } else {
        const error: IErrorHandle = {
          status: 400,
          message: "Please fill all fields!"
        };
        throw error;
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
      const user: IUser = authenticateJwt(token);
      if (!user) {
        return res.status(401).json(ResponseData(null, "Please signIn!!"));
      }
      return res.status(200).json(
        ResponseData({
          email: user.email,
          name: user.name,
          coins: user.coins
        })
      );
    } catch (err) {
      next(err);
    }
  }
);

export default router;
