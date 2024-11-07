import mongoose from "mongoose";

import { authorSchema } from "./Author.js";

const bookSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: [true, "Title of the book is required"] },
    publisher: { type: String, required: [true, "Publisher's required"] },
    price: { type: Number },
    pages: { type: Number },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "authors",
      required: [true, "Author is required"],
    },
  },
  { versionKey: false }
);

const book = mongoose.model("books", bookSchema);

export default book;
