import express from "express";
import connectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectDatabase();

connection.on("error", (erro) => {
  console.error("Connection error ", erro);
});

connection.once("open", () => {
  console.log("Connection with database made successfully");
});

const app = express();
routes(app);

app.get("/books/:id", (req, res) => {
  const index = searchBook(req.params.id);
  res.status(200).json(books[index]);
});

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).send("Book Add Sucessfuly");
});

app.put("/books/:id", (req, res) => {
  const index = searchBook(req.params.id);
  books[index].title = req.body.title;
  res.status(200).json(books);
});

app.delete("/books/:id", (req, res) => {
  const index = searchBook(req.params.id);
  books.splice(index, 1);
  res.status(204).send("Book Removed");
});

export default app;
