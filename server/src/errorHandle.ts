import { Request, Response, NextFunction } from "express";
import { IErrorHandle } from "./interfaces/errorHandle";
import { ResponseData } from "./helpers/responseStructure";

export default (
  err: IErrorHandle,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error: IErrorHandle = {
    status: err.status ? err.status : 500,
    message: err.message ? err.message : "Something went wrong!"
  };
  res.status(error.status).json(ResponseData(null, error.message));
};
