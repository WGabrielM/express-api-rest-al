import mongoose from "mongoose";

export default function errorManipulator(erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    res.status(400).send({ message: "One or more datas incorrect." });
  } else {
    res.status(500).send({ message: "Internal Server Error." });
  }
}
