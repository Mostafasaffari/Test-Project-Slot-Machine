import jwt from "jsonwebtoken";

import { IErrorHandle } from "../interfaces/errorHandle";

import { IUser, findUserByEmail } from "./userMemory";

const jwtKey = "Slot-Machine-$$Money";
const jwtExpirySeconds = 30000;

const createJwt = (email: string): string => {
  const token = jwt.sign({ email }, jwtKey, {
    algorithm: "HS256",
    expiresIn: jwtExpirySeconds
  });
  return token;
};

const decryptJwt = (token: string) => {
  const jwtObj: any = jwt.verify(token, jwtKey);
  return jwtObj;
};

const authenticateJwt = (token: string) => {
  let user: IUser;
  if (!token) {
    return null;
  }
  try {
    const jwtObj = decryptJwt(token);
    user = findUserByEmail(jwtObj.email);
    if (!user) {
      return null;
    } else {
      return user;
    }
  } catch (e) {
    const error: IErrorHandle = { status: 400, message: "Bad Request!!!" };
    throw error;
  }
};

export { createJwt, decryptJwt, authenticateJwt };
