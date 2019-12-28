import jwt from "jsonwebtoken";

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

export { createJwt, decryptJwt };
