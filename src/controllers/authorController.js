import { author } from "../models/Author.js";

class AuthorController {
  static async listAuthors (req, res) {
    try {
      const listAuthors = await author.find({});
      res.status(200).json(listAuthors);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - Request Fail` });
    }
  };

  static async listAuthorById (req, res) {
    try {
      const id = req.params.id;
      const authorFinded = await author.findById(id);
      res.status(200).json(authorFinded);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - Request Author Fail` });
    }
  };

  static async addAuthor (req, res) {
    try {
      const newAuthor = await author.create(req.body);
      res.status(201).json({ message: "Success Create", livro: newAuthor });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - Fail Add Author` });
    }
  }

  static async updateAuthor (req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Author Updated" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - Fail Update Author` });
    }
  };

  static async deleteAuthor (req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndDelete(id);
      res.status(200).json({ message: "Success Delete Author" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - Fail Delete Author` });
    }
  };
};

export default AuthorController;