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

  static listAuthorById = async (req, res, next) => {
    try {
      const id = req.params.id;

      const authorResult = await autores.findById(id);

      if (authorResult !== null) {
        res.status(200).send(authorResult);
      } else {
        res.status(404).send({message: "Id Author not found."});
      }
    } catch (error) {
     next(error)
    }
  };

  static addAuthor = async (req, res, next) => {
    try {
      let author = new author(req.body);

      const authorResult = await author.save();

      res.status(201).send(authorResult.toJSON());
    } catch (error) {
      next(error)
    }
  };

  static updateAuthor = async (req, res, next) => {
    try {
      const id = req.params.id;
  
      await author.findByIdAndUpdate(id, {$set: req.body});

      res.status(200).send({message: "Author successfully updated"});
    } catch (error) {
     next(error)
    }
  };

  static deleteAuthor = async (req, res, next) => {
    try {
      const id = req.params.id;

      await author.findByIdAndDelete(id);

      res.status(200).send({message: "Author Deleted Successfully"});
    } catch (error) {
     next(error)
    }
  };
};

export default AuthorController;