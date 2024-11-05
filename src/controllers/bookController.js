import book from "../models/Book.js";

class BookController {
  static async listBooks(req, res) {
    try {
      const listBooks = await book.find({});
      res.status(200).json(listBooks);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Request Fail` });
    }
  }

  static async listBookById(req, res) {
    try {
      const id = req.params.id;
      const bookFinded = await book.findById(id);
      res.status(200).json(bookFinded);
    } catch (error) {
      if(req.params.id === null){
        res.status(500).json({ message: `${error.message} - Book Not Found` });
      } else {
        res.status(500).json({ message: `${error.message} - Book Request Fail` });
      }
    }
  }

  static async addBook(req, res) {
    try {
      const newBook = await book.create(req.body);
      res.status(201).json({ message: "Created with Success!", book: newBook });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Faill create new book` });
    }
  }

  static async updateBook(req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Book Updated" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Faill update book` });
    }
  }

  static async deleteBook(req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndDelete(id);
      res.status(200).json({ message: "Book Deleted" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Faill delete book` });
    }
  }
}

export default BookController;
