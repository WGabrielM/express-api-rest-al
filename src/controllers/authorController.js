import mongoose from "mongoose";
import { author } from "../models/Author.js";

class AuthorController {
  static listAuthors = async (req, res) => {
    try {
      const authorResult = await author.find();

      res.status(200).json(authorResult);
    } catch (erro) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

  static listAuthorById = async (req, res) => {
    try {
      const id = req.params.id;

      const authorResult = await autores.findById(id);

      if (authorResult !== null) {
        res.status(200).send(authorResult);
      } else {
        res.status(404).send({message: "Id Author not found."});
      }
    } catch (erro) {
      if (erro instanceof mongoose.Error.CastError) {
        res.status(400).send({message: "One or more datas incorrect."});
      } else {
        res.status(500).send({message: "Internal Server Error."});
      }
    }
  };

  static addAuthor = async (req, res) => {
    try {
      let author = new author(req.body);

      const authorResult = await author.save();

      res.status(201).send(authorResult.toJSON());
    } catch (erro) {
      res.status(500).send({message: `${erro.message} - Fail Add Author.`});
    }
  };

  static updateAuthor = async (req, res) => {
    try {
      const id = req.params.id;
  
      await author.findByIdAndUpdate(id, {$set: req.body});

      res.status(200).send({message: "Author successfully updated"});
    } catch (erro) {
      res.status(500).send({message: erro.message});
    }
  };

  static deleteAuthor = async (req, res) => {
    try {
      const id = req.params.id;

      await author.findByIdAndDelete(id);

      res.status(200).send({message: "Author Deleted Successfully"});
    } catch (erro) {
      res.status(500).send({message: erro.message});
    }
  };
};

export default AuthorController;