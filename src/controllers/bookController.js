import book from "../models/Book.js";
import { author } from "../models/Author.js";

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
      if (req.params.id === null) {
        res.status(500).json({ message: `${error.message} - Book Not Found` });
      } else {
        res
          .status(500)
          .json({ message: `${error.message} - Book Request Fail` });
      }
    }
  }

  static async addBook(req, res) {
    const newBook = req.body;
    try {
      const authorFinded = await author.findById(newBook.author);
      const completeBook = { ...newBook, author: { ...authorFinded._doc } };
      const bookCreated = await book.create(completeBook);
      res
        .status(201)
        .json({ message: "Created with Success!", book: bookCreated });
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
  
  static async listBookByPublisher(req, res) {
    const publisher = req.query.publisher;
    
    try {
      const booksByPublisher = await book.find({ publisher: publisher})
      res.status(200).json(booksByPublisher)
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Fail Find Book by Publisher` });
    }
  }
}

export default BookController;
