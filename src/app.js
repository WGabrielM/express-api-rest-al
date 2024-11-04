import express from "express";

const app = express();
app.use(express.json());

const books = [
  {
    id: 1,
    title: "Lord of Rings",
  },
  {
    id: 2,
    title: "The Hobbit",
  },
];

function searchBook(id) {
  return books.findIndex((book) => {
    return book.id === Number(id);
  });
}

app.get("/", (req, res) => {
  res.status(200).send("Node.js Tutorial");
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

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
    res.status(200).json(books)
})

export default app;
