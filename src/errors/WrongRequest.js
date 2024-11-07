import InternalServerError from "./InternalServerError";

class WrongRequest extends InternalServerError {
  constructor(message = "One or more data provided is incorrects") {
    super(message, 400);
  }
}

export default WrongRequest;
