import { Request, Response, NextFunction } from "express";

import error from "./Models/errorHandle";

export default (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  error.create({ errorDetails: err });
  res
    .status(500)
    .json({ message: err.message ? err.message : "Something went wrong!" });
};
