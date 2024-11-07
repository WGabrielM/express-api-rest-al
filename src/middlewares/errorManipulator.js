import mongoose from "mongoose";

export default function errorManipulator(erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    res.status(400).send({ message: "One or more datas incorrect." });
  } else if (erro instanceof mongoose.Error.ValidationError) {
    const errorMensage = Object.values(erro.errors)
      .map((erro) => erro.message)
      .join("; ");
    res.status(500).send({ message: `These errors was find: ${errorMensage}` });
  } else {
    res.status(500).send({ message: "Internal Server Error." });
  }
}
