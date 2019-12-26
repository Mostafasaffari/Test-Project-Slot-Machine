import jwt from "jsonwebtoken";
import express, { Request, Response, NextFunction } from "express";

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
      if (
        !email ||
        !password ||
        !memoryUser.find(s => s.email === email && s.password === password)
      ) {
        return res
          .status(401)
          .json("email or password is incorrect!!")
          .end();
      }
      const token = jwt.sign({ email }, jwtKey, {
        algorithm: "HS256",
        expiresIn: jwtExpirySeconds
      });
      res.status(200).json({ token });
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
      const checkDoubleEmail = memoryUser.find(s => s.email === email);
      if (!checkDoubleEmail) {
        memoryUser.push({ name, email, password, coins: 20 });
        res.status(201).json(memoryUser);
      } else {
        res
          .status(409)
          .json({ messaeg: "This email is already registered!!!" });
      }
    } catch (err) {
      next(err);
    }
  }
);

export default router;
