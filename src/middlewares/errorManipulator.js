import mongoose from "mongoose";

import InternalServerError from "../errors/InternalServerError";
import WrongRequest from "../errors/WrongRequest";
import ValidationError from "../errors/ValidationError";

export default function errorManipulator(erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    new WrongRequest().sendResponse(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ValidationError(erro).sendResponse(res);
  } else {
    new InternalServerError.sendResponse(res);
  }
}
